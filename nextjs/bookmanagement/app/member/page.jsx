"use client";

import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { memberRows } from "@/sample/member";

const page = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "이름",
      width: 150,
    },
    {
      field: "rentList",
      headerName: "대출 목록",
      width: 150,
    },
    {
      field: "rank",
      headerName: "등급",
      width: 110,
    },
    {
      field: "phone",
      headerName: "전화번호",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const router = useRouter();

  return (
    <div>
      <h2>회원 리스트</h2>
      <DataGrid
        rows={memberRows}
        columns={columns}
        onCellClick={(param) => {
          router.push(`/member/${param.row.id}`);
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default page;
