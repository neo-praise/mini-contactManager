import Styles from "../css-module/display.module.css";
import ContactLists from "./ContactLists";

export default function Display({
  contacts,
  setContacts,
  setContact,
  setEditID,
  setSearchItem,
  sortedContacts,
}) {
  return (
    <div className={Styles.displayDiv}>
      {contacts.length > 0 && (
        <input
          type="text"
          className={Styles.search}
          placeholder="Filter Contacts"
          onChange={(e) => setSearchItem(e.target.value)}
        />
      )}

      {sortedContacts.length === 0 && contacts.length > 0 ? (
        <div
          style={{
            width: "450px",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            color: "red",
            fontSize: "13px",
            padding: "10px",
          }}
        >
          Contact not found...
        </div>
      ) : contacts.length === 0 ? null : (
        <ContactLists
          contacts={contacts}
          setContacts={setContacts}
          setContact={setContact}
          setEditID={setEditID}
          sortedContacts={sortedContacts}
        />
      )}
    </div>
  );
}
