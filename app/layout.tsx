import "./globals.css";
import NavBar from "@/app/components/NavBar";
import MyProfilePic from "@/app/components/MyProfilePix";
export const metadata = {
  title: "SinhuDev Blog",
  description: "Creado por Horus Sinhue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
