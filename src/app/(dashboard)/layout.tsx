import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumon School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex h-screen p-3">
      {/*Left*/}
      <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link href="/" className=" flex items-center justify-center gap-2 lg:justify-start">
          <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
          <span className=" hidden lg:block font-bold">SchoolMng</span>
        </Link>
        <Menu />

      </div>

      <div className=" w-[86%]  md:w-[92%] lg:w-[94%] xl:w-[96%] ">
        <Navbar />
        {children}

      </div>
      {/*Right*/}

    </div>
  );
}
