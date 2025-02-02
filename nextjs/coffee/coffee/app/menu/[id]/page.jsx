const Page = async ({ params }) => {
  const [data] = await fetch(
    `https://fake-coffee-api.vercel.app/api/${params.id}`
  ).then((res) => res.json());

  return (
    <section className="bg-gray-300 w-screen h-screen">
      <article className="w-full max-w-screen-xl m-auto">
        <h2 className="font-semibold text-3xl border-b-2 border-gray-600 py-5">
          {data.name}
        </h2>
        <div className="flex items-center">
          <img className="w-full h-96 flex-1" src={data.image_url} alt="" />
          <p className="flex-2">{data.description}</p>
        </div>
      </article>
    </section>
  );
};

export default Page;
