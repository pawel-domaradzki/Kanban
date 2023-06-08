import Image from "next/image";

import Header from "../components/Header";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main>
      Kanban
      <Header>Header</Header>
      <ThemeToggle />
    </main>
  );
}
