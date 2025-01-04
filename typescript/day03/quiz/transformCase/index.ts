type Option = "upper" | "lower";
const transformCase = (str: string, option: Option) => {
  switch (option) {
    case "upper":
      return str.toUpperCase();
    case "lower":
      return str.toLowerCase();
    default:
      return "에러";
  }
};
