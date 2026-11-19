import stripe from "@/src/service/stripe";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return Response.json({ error: "Assinatura ausente" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET não configurada");

    return Response.json(
      { error: "Configuração interna inválida" },
      { status: 500 },
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error("Falha na validação Stripe:", error);

    return Response.json({ error: "Assinatura inválida" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;

        console.log("Pagamento aprovado:", paymentIntent.id);

        // TODO: Atualizar pagamento no banco de dados.

        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object;

        console.log("Pagamento falhou:", paymentIntent.id);

        // TODO: Atualizar status do pagamento.

        break;
      }

      case "checkout.session.completed": {
        const session = event.data.object;

        console.log("Checkout concluído:", session.id);

        // TODO: Liberar produto ou serviço após validações.

        break;
      }

      default:
        console.log("Evento ignorado:", event.type);
    }

    return Response.json({ received: true });
  } catch (error) {
    console.error("Erro ao processar webhook:", error);

    return Response.json(
      { error: "Erro ao processar evento" },
      { status: 500 },
    );
  }
}
