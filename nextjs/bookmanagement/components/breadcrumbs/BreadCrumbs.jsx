"use client";

import { Breadcrumbs, Link, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
  const path = usePathname().split("/")[1];
  console.log(path);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Main
      </Link>
      <Typography>{path}</Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
