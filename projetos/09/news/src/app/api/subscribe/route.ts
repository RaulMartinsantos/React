import stripe from "@/src/service/stripe";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      allowed_payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [{ price: "price_1Ucx4N4hJNCd6jTtQwRxJImn", quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: `${process.env.STRIPE_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    return NextResponse.json({
      url: checkoutSession.url,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        error: "Erro ao criar sessão de checkout",
      },
      { status: 500 },
    );
  }
}
