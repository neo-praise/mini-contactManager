import Styles from "../css-module/form.module.css";

export default function Form({
  contact,
  setContact,
  setContacts,
  contacts,
  editID,
  setEditID,
}) {
  function handleClick(e) {
    e.preventDefault();
    setContact({ name: "", email: "", phone: "", contactType: "" });
    setEditID(null);
  }

  function submitForm(e) {
    e.preventDefault();
    if (
      !contact.name.trim() ||
      !isNaN(contact.name) ||
      !contact.email.trim() ||
      !contact.phone.trim() ||
      !contact.contactType ||
      isNaN(contact.phone)
    ) {
      alert("Fill in all fields correctly!");
      return;
    }
    if (editID === null) {
      const newContact = { ...contact, id: Date.now() };
      setContacts([...contacts, newContact]);
    } else {
      const updatedList = contacts.map((eachContact) =>
        eachContact.id === editID ? contact : eachContact
      );
      setContacts(updatedList);
    }
    setContact({ name: "", email: "", phone: "", contactType: "" });
    setEditID(null);
  }

  return (
    <div className={Styles.formDiv}>
      <div className={Styles.text}>
        <div className={Styles.inner}>Edit Contact</div>
      </div>
      <form>
        <input
          type="text"
          placeholder="Enter Name..."
          className={Styles.inputBox}
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter Email..."
          className={Styles.inputBox}
          value={contact.email}
          onChange={(e) =>
            setContact({ ...contact, email: e.target.value.toLowerCase() })
          }
        />
        <input
          type="text"
          placeholder="Enter Phone..."
          className={Styles.inputBox}
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <div className={Styles.contactType}>Contact Type</div>
        <div className={Styles.radioBtns}>
          <input
            type="radio"
            name="contactType"
            value="Personal"
            checked={contact.contactType === "Personal"}
            onChange={(e) =>
              setContact({ ...contact, contactType: e.target.value })
            }
          />
          <label>Personal</label>
          <input
            type="radio"
            name="contactType"
            value="Professional"
            checked={contact.contactType === "Professional"}
            onChange={(e) =>
              setContact({ ...contact, contactType: e.target.value })
            }
          />
          <label>Professional</label>
        </div>
        <button
          type="submit"
          className={Styles.submit}
          onClick={(e) => submitForm(e)}
        >
          {editID === null ? `Add Contact` : `Update Contact`}
        </button>
        <button className={Styles.clear} onClick={(e) => handleClick(e)}>
          Clear
        </button>
      </form>
    </div>
  );
}
