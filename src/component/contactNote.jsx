import React, { Component } from "react";
class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [], firstname: "", lastname: "", contactno: "" };
  }
  addtocontact = () => {
    if (
      this.state.firstname.trim() == "" ||
      this.state.lastname.trim() == "" ||
      this.state.contactno.trim() == ""
    )
      return;
    const newentry = {
      id: Date.now(),
      fname: this.state.firstname,
      lname: this.state.lastname,
      contact: this.state.contactno,
      visible: false,
    };
    this.setState((prevState) => ({
      contacts: [newentry, ...prevState.contacts],
      firstname: "",
      lastname: "",
      contactno: "",
    }));
  };
  onfirstnamechange = (e) => {
    this.setState({ firstname: e.target.value });
  };
  onlastnamechange = (e) => {
    this.setState({ lastname: e.target.value });
  };
  oncontactnochange = (e) => {
    this.setState({ contactno: e.target.value });
  };

  deletecontact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((y) => y.id !== id),
    }));
  };
  updatecontact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.map((x) =>
        x.id === id ? { ...x, visible: !x.visible } : x
      ),
    }));
  };
  render() {
    const { contacts, firstname, lastname, contactno } = this.state;
    return (
      <>
        <input
          type="text"
          value={firstname}
          onChange={this.onfirstnamechange}
        />
        <input type="text" value={lastname} onChange={this.onlastnamechange} />
        <input
          type="text"
          value={contactno}
          onChange={this.oncontactnochange}
        />
        <br />
        <button onClick={this.addtocontact}>Add</button>
        <br />
        <ul>
          {contacts.map((x) => (
            <li key={x.id}>
              {x.fname}{" "}
              <button
                onClick={() => {
                  this.updatecontact(x.id);
                }}
              >
                View
              </button>{" "}
              <button onClick={() => this.deletecontact(x.id)}>Delete</button>
              <div style={{ display: x.visible ? "" : "none" }}>
                {x.lname} - {x.contact}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default ContactList;

// 1. Create `src/ContactList.js`
// 2. Import and use in `App.js`
// 3. Add contacts, edit contact details, delete contacts
// 4. Observe array state management with object updates
