const Banner = ({ imageSrc, title, subtitle }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${imageSrc}),`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-screen h-fit py-16 text-center flex flex-col gap-10 text-white font-bold"
    >
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
    </section>
  );
};

export default Banner;
