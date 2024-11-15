export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}