import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { ThemeProvider } from "next-themes";
import Header from "@/app/components/Header";
import Link from "next/link";
export default function FAPIAO() {
    return<> <ThemeProvider>
    <ThemeSwitcher />
    <Link href='/dashboard' className=" w-96 bg-myblue-button      ">dashboard</Link>
    <div className=" w-96 bg-myblue-active       "><Header/></div>
    </ThemeProvider>
    </>
  }