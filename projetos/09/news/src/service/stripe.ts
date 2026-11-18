import Stripe from "stripe";
import { version } from "../../package.json";

const secreteKey = process.env.STRIPE_API_KEY;

if (!secreteKey) {
  throw new Error("STRIPE_API_KEY não foi definida adicione ao .env.local");
}

const stripe = new Stripe(secreteKey, {
  apiVersion: "2026-10-28.endive",
  appInfo: {
    name: "news",
    version,
  },
});

export default stripe;
