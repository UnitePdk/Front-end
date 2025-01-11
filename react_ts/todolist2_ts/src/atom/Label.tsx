type LabelProps = {
  label: string;
  line: boolean;
};

const Label = ({ label, line }: LabelProps) => {
  return <label className={line ? "line-through" : ""}>{label}</label>;
};

export default Label;
