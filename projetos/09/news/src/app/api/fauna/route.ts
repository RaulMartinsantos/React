import { fql } from "fauna";
import { fauna } from "@/src/lib/fauna";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fauna.query(fql`1+1`);

    return NextResponse.json({
      success: true,
      message: "FaunaDB conectado",
      result: response.data,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        success: false,
        message: "Não foi possível conectar ao FaunaDB",
      },
      {
        status: 500,
      },
    );
  }
}
