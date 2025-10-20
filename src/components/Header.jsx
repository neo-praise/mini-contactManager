import Styles from "../css-module/header.module.css";
import { BiSolidContact } from "react-icons/bi";

export default function Header() {
  return (
    <div className={Styles.headerDiv}>
      <BiSolidContact style={{ fontSize: "30px", color: "white" }} />
      <p>Contact Manager</p>
    </div>
  );
}
