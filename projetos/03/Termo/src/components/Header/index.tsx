import logo from "../../assets/logo.png";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;
