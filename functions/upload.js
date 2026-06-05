export async function onRequestPost({ request }) {
  const form = await request.formData();

  const name = form.get("name");
  const slug = form.get("slug");
  const file = form.get("file");

  if (!name || !slug || !file) {
    return new Response("Missing fields");
  }

  return new Response(
    JSON.stringify({
      ok: true,
      message: "UPLOAD SUCCESS",
      name,
      slug,
      fileName: file.name
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}

