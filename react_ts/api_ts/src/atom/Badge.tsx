// export type BadgeProps = {
//   text?: string;
//   bgc?: "red" | "blue" | "green" | "grey";
// };

// const Badge = ({ text = "no data", bgc = "grey" }: BadgeProps) => {
//   return (
//     <span
//       className={`bg-${bgc}-200 p-1 rounded-sm`}
//       style={{ fontSize: "10px" }}
//     >
//       {text}
//     </span>
//   );
// };

// export default Badge;

export type BadgeProps = {
  text?: string;
};

const Badge = ({ text = "no data" }: BadgeProps) => {
  return (
    <span className={`bg-blue-200 p-1 rounded-sm`} style={{ fontSize: "10px" }}>
      {text}
    </span>
  );
};

export default Badge;
