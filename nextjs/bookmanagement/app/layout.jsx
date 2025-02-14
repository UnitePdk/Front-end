import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
  title: "도서 관리자",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main>
          <BreadCrumbs />
          {children}
        </main>
      </body>
    </html>
  );
}
