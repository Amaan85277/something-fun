import BackgroundVideo from "@/common/BackgroundVideo";
import Header from "./Header";
import "./globals.css";
import { VT323 } from "next/font/google";

const inter = VT323({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <BackgroundVideo />

      <div className={inter.className}>
        <Header />
      </div>

      <div className={inter.className}>{children}</div>
    </div>
  );
}
