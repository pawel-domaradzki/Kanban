import Board from "@/components/Board/Board";
import Header from "@/components/Header";
import SubtaskCheckbox from "@/components/ui/SubtaskCheckbox";

export default function Home() {
  return (
    <main className="AppContainer">
      <Header />

      <div className="Board">
        <Board />
      </div>
    </main>
  );
}
