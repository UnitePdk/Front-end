type CheckBoxProps = {
  check: boolean;
  change: () => void;
};

const CheckBox = ({ check, change }: CheckBoxProps) => {
  return <input type="checkbox" checked={check} onChange={change} />;
};

export default CheckBox;
