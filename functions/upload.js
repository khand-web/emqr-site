export async function onRequest({ request }) {
  const method = request.method;

  if (method !== "POST") {
    return new Response("API READY (POST required)");
  }

  const form = await request.formData();

  const name = form.get("name");
  const slug = form.get("slug");

  return new Response(
    JSON.stringify({
      ok: true,
      message: "UPLOAD WORKS",
      name,
      slug
    }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
