export type ImageProps = {
  link?: string;
};

const Image = ({ link = "nodata.png" }: ImageProps) => {
  return (
    <figure className="p-5" style={{ width: "200px" }}>
      <img src={link} alt="" />
    </figure>
  );
};

export default Image;
