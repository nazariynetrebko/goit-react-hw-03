import styles from "./contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.item}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
