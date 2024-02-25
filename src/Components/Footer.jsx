import { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import ThemeContext from "../Context/ThemeContext";

const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${theme === "dark" ? "bg-gray-800" : "bg-black"} p-2.5 flex justify-center items-center`}>
      <BsGithub className="mx-2" />
      <p>GitTracker | © 2024 Giricharan</p>
    </footer>
  );
};

export default Footer;
