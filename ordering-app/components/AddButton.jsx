import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.addButton} onClick={() => setClose(false)}>
      Add new Pizza
    </div>
  );
};

export default AddButton;
