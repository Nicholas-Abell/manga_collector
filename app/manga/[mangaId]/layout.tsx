import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // let user = false;

  // if (!user) {
  //   redirect("/sign-in");
  // }

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
