import Badge, { BadgeProps } from "../atom/Badge";
import Description, { DescriptionProps } from "../atom/Description";
import Image, { ImageProps } from "../atom/Image";
import Title, { TitleProps } from "../atom/Title";

export type CoffeeProps = {
  link: ImageProps["link"];
  title: TitleProps["title"];
  description: DescriptionProps["description"];
  badges: BadgeProps[];
};

const Coffee = ({ link, title, description, badges }: CoffeeProps) => {
  return (
    <div
      className="flex flex-col items-center bg-slate-100"
      style={{ width: "250px", border: "solid 2px grey" }}
    >
      <Image link={link} />
      <Title title={title} />
      <Description description={description} />
      {badges.map((v) => (
        <Badge {...v} />
      ))}
    </div>
  );
};

export default Coffee;
