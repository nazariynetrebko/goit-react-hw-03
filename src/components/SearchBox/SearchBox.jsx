import styles from "./SearchBox.module.css";

const searchBox = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="search"> Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}></input>
    </div>
  );
};

export default SearchBox;
