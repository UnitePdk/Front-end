export type TitleProps = {
  title?: string;
};

const Title = ({ title = "No Data" }: TitleProps) => {
  return <strong className="p-4 text-lg">{title}</strong>;
};

export default Title;
