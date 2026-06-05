export async function onRequestPost({ request }) {
  const form = await request.formData();

  const name = form.get("name");
  const slug = form.get("slug");
  const file = form.get("file");

  return new Response(
    JSON.stringify({
      ok: true,
      name,
      slug,
      fileName: file?.name || null,
      size: file?.size || null
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
