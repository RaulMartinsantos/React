import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

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
});

export { handler as GET, handler as POST };
