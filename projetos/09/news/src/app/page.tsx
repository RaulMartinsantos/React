import stripe from "../service/stripe";
import stripeFetchApi from "../service/stripeFetch";
import { Metadata, type GetServerSideProps } from "next";
import SubscribeButton from "../components/subscribeButton";

export const metadata: Metadata = {
  title: "Inicio | news",
};

export default async function Home() {
  const product = await stripeFetchApi();

  return (
    <main className="w-full max-w-[1120px] mx-auto px-8 h-[calc(100dvh_-_5rem)] flex items-center justify-between">
      <section className="max-w-[600px]">
        <span className="text-2xl font-bold">👏 Hey, welcome</span>
        <h1 className="text-[4.5rem] leading-[4.5rem] font-[900] mt-10">
          News about <br /> the <span className="text-cyan-400">React</span>{" "}
          world.
        </h1>
        <p className="text-2xl leading-[2.25rem] mt-6">
          Get access to all publications <br />
          <span className="text-cyan-400 font-bold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "usd",
            }).format(product.priceAmount)}
            month
          </span>
        </p>
        <SubscribeButton priceId={product.priceId} className="mt-6" />
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  );
}
