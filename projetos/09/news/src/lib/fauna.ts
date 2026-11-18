import "server-only";

import { Client } from "fauna";

const faunaSecret = process.env.FAUNA_SECRET;
const faunaEndPoint = process.env.FAUNA_ENDPOINT;

if (!faunaSecret) {
  throw new Error("FAUNA_SECRET não configurado confira o .env.local");
}

if (!faunaEndPoint) {
  throw new Error("FAUNA_ENDPOINT não configurado confira o .env.local");
}

export const fauna = new Client({
  secret: faunaSecret,
  endpoint: new URL(faunaEndPoint),
});
