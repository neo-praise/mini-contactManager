import Styles from "../css-module/contactlists.module.css";

export default function ContactLists({
  contacts,
  setContacts,
  setContact,
  setEditID,
  sortedContacts,
}) {
  function handleClick(id) {
    if (confirm("Are you sure you want to delete this contact?")) {
      const updatedList = contacts.filter((contact) => contact.id !== id);
      setContacts(updatedList);
    }
  }

  function handleEdit(id) {
    const editedID = contacts.find((contact) => contact.id === id);
    setContact(editedID);
    setEditID(id);
  }
  return (
    <>
      {sortedContacts.map((contact) => (
        <div className={Styles.box} key={contact.id}>
          <div className={Styles.top}>
            <p className={Styles.name}>{contact.name}</p>
            {contact.contactType === "Professional" ? (
              <div className={Styles.professional}>Professional</div>
            ) : (
              <div className={Styles.personal}>Personal</div>
            )}
          </div>

          <div className={Styles.other}>
            <div className={Styles.details}>
              <p>{`your.email+${contact.email}`}</p>
              <p>{contact.phone}</p>
            </div>
            <div className={Styles.actionDiv}>
              <button
                className={Styles.edit}
                onClick={() => handleEdit(contact.id)}
              >
                Edit
              </button>
              <button
                className={Styles.delete}
                onClick={() => handleClick(contact.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
