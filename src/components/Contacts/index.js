import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Sinan DENİZ",
      phone_number: "05642546815",
    },
    {
      fullname: "Ali DEĞİRMEN",
      phone_number: "05498561254",
    },
    {
      fullname: "Nazlı DAĞ",
      phone_number: "05388451545",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1 className="title">MY CONTACTS</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
