import type { APIRoute } from "astro";

export async function GET() {
    return new Response(
        JSON.stringify({msg: "Ping successful"}),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
};

export const POST: APIRoute = async ({ params, request }) => {
    const body = await request.json();
    return new Response(
        JSON.stringify(body.gotYou),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
};