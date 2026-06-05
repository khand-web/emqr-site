export async function onRequestPost({ request, env }) {
  const form = await request.formData();

  const file = form.get("file");
  const name = form.get("name");
  const slug = form.get("slug");

  if (!file || !slug) {
    return new Response("Missing data", { status: 400 });
  }

  // PDF-г R2-д хадгална
  await env.MED_BUCKET.put(
    em/${slug}.pdf,
    file.stream(),
    {
      httpMetadata: {
        contentType: "application/pdf"
      }
    }
  );

  return new Response(
    JSON.stringify({
      ok: true,
      url: `https://emqr.mn/em/${slug}.pdf`
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
