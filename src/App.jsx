import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";
import { useState, useEffect } from "react";
import { IoMdOpen } from "react-icons/io";

function App() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    contactType: "",
  });
  const [editID, setEditID] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [show, setShow] = useState(true);

  const term = searchItem.toLowerCase();
  const searchedItem = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(term) ||
      contact.phone.includes(term) ||
      contact.email.includes(term)
  );
  const sortedContacts = [...searchedItem].sort((a, b) => b.id - a.id);

  useEffect(() => {
    const savedContacts = localStorage.getItem("contactManager");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contactManager", JSON.stringify(contacts));
    }
  }, [contacts]);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div className="mainContent">
      <Header />
      <div className="fixed" onClick={handleClick}>
        <IoMdOpen />
      </div>
      <div className="bodyContent">
        {show === true ? (
          <Form
            contact={contact}
            setContact={setContact}
            setContacts={setContacts}
            contacts={contacts}
            editID={editID}
            setEditID={setEditID}
          />
        ) : (
          ""
        )}

        <Display
          contacts={contacts}
          sortedContacts={sortedContacts}
          setContacts={setContacts}
          setContact={setContact}
          setEditID={setEditID}
          setSearchItem={setSearchItem}
          searchedItem={searchedItem}
        />
      </div>
    </div>
  );
}

export default App;
