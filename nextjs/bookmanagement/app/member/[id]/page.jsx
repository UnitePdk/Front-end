import { memberRows } from "@/sample/member";
import { Chip, Typography } from "@mui/material";

const page = ({ params }) => {
  const { id } = params;
  console.log(id);

  const member = memberRows.find((v) => v.id == id);
  console.log(member);

  return (
    <div>
      <div>멤버 상세 페이지 : {id}</div>
      <Typography>{}</Typography>
      <Chip label={1} />
      <Typography>{}</Typography>
    </div>
  );
};

export default page;
