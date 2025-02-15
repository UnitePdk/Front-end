"use client";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Sidebar = () => {
  const pages = [
    { pageName: "메인 페이지", link: "/" },
    { pageName: "회원 페이지", link: "/member" },
    { pageName: "도서 페이지", link: "/book" },
    { pageName: "대출 페이지", link: "/rent" },
  ];
  return (
    <aside className="w-60 border-r-slate-300 border-r-2 bg-slate-100 pl-4">
      <List>
        {pages.map((v) => (
          <ListItem key={v.pageName} disablePadding>
            <ListItemButton href={v.link}>
              <ListItemText primary={v.pageName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </aside>
  );
};

export default Sidebar;
