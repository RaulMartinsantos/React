import { cacheLife } from "next/cache";
import stripe from "../service/stripe";

export default async function stripeFetchApi() {
  "use cache";
  cacheLife({
    stale: 500,
    revalidate: 60,
    expire: 3600,
  });

  const price = await stripe.prices.retrieve("price_1Ucx4N4hJNCd6jTtQwRxJImn", {
    expand: ["product"],
  });

  return {
    priceId: price.id,
    priceAmount: price.unit_amount! / 100,
  };
}
