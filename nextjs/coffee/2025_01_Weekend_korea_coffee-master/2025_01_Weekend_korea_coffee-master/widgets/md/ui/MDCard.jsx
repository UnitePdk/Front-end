const MDCard = ({ imageSrc, title, price }) => {
  return (
    <article className="flex flex-col gap-4 ">
      <img className={`w-60 h-64 object-cover`} src={imageSrc} alt="" />
      <h6 className="overflow-hidden whitespace-nowrap text-ellipsis break-words">
        {title}
      </h6>
      <strong className="text-xs">{price}</strong>
    </article>
  );
};

export default MDCard;
