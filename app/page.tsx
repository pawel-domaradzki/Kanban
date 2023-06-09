import Button from "@/components/ui/Button";
import Header from "../components/Header";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

export default function Home() {
  return (
    <main>
      Kanban
      <Header>Header </Header>
      <ThemeSwitch />
      <Button variant="secondary">Test</Button>
    </main>
  );
}
