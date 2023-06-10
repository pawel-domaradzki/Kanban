import Button, { ButtonVariant } from "@/components/ui/Button";
import Header from "../components/Header";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import SubtaskCheckbox from "@/components/ui/SubtaskCheckbox";

export default function Home() {
  const { Primary, Secondary, Destructive } = ButtonVariant;
  return (
    <main>
      Kanban
      <Header>Header </Header>
      <ThemeSwitch />
      <Button variant={Primary}>Test</Button> {}
      <Button variant={Secondary}>Test</Button> {}
      <Button variant={Destructive}>Test</Button>
      <SubtaskCheckbox />
    </main>
  );
}
