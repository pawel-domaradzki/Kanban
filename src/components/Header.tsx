import { FC, ReactNode } from "react";
import Logo from "./Logo";
import ThemeSwitch from "./ui/ThemeSwitch";

interface HeaderProps {
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      {/*logo*/}
      <Logo />
      {/* currentBoard*/}
      {/*new ticket btn*/}
      {/*manage Board*/}
      {children}
      <ThemeSwitch></ThemeSwitch>
    </header>
  );
};

export default Header;
