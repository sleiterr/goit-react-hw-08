import "react";
import { useSelector } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import styles from "./ContactList.module.css";

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          className={styles.listItem}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
