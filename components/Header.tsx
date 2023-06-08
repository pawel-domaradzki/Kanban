import { FC, ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
