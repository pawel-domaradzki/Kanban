import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.scss";
import { Plus_Jakarta_Sans } from "next/font/google";

const Jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban",
  description: "Frontend mentor challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Jakarta.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
