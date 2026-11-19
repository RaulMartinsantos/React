import { fql } from "fauna";
import NextAuth from "next-auth";
import { fauna } from "@/src/lib/fauna";
import GithubProvider, { GithubEmail } from "next-auth/providers/github";

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

if (!clientId) {
  throw new Error("Erro com a secret GITHUB_CLIENT_ID verifique o .env");
}

if (!clientSecret) {
  throw new Error("Erro com a secret GITHUB_CLIENT_SECRET verifique o .env");
}

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: clientId,
      clientSecret: clientSecret,

      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "github" || !account.access_token) {
        return true;
      }

      try {
        const response = await fetch("https://api.github.com/user/emails", {
          headers: {
            Authorization: `Bearer ${account.access_token}`,
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const emails: GithubEmail[] = await response.json();

        const githubEmail =
          emails.find((item) => item.primary && item.verified) ??
          emails.find((item) => item.verified);

        if (!githubEmail) {
          console.log("Nenhum email verificado foi encontrado");
          return false;
        }

        const email = githubEmail.email.toLocaleLowerCase();

        const existingUser = await fauna.query(
          fql`User.firstWhere(.email == ${email})`,
        );

        if (!existingUser.data) {
          await fauna.query(fql`
              User.create({
              email: ${email} 
            })
          `);
          console.log("Usuário salvo no banco", email);
        } else {
          console.log("Usuário já cadastrado");
        }

        user.email = email;
        return true;
      } catch (err) {
        console.log(err);

        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
