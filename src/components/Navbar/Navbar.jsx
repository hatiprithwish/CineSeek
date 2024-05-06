import { useIsModalOpen } from "../../store/ModalProvider";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { showModal } = useIsModalOpen();

  console.log(showModal);
  return (
    <header
      className={`${styles.header} ${showModal ? styles.dark : styles.white}`}
    >
      <img src="/logo.png" className={styles.logo} />
      <SearchBar />
    </header>
  );
};

export default Navbar;
