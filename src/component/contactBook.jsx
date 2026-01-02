import React, { Component } from "react";

class ContactBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      contacts: []
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addContact = () => {
    const { name, phone, email } = this.state;

    if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
      alert("All fields are required");
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      phone,
      email
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      phone: "",
      email: ""
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== id
      )
    }));
  };

  render() {
    const { name, phone, email, contacts } = this.state;

    return (
      <div style={{ width: "400px", margin: "auto" }}>
        <h2>📒 Contact Book</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={this.handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <br /><br />

        <button onClick={this.addContact}>Add Contact</button>

        <hr />

        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>{contact.name}</strong><br />
              📞 {contact.phone}<br />
              ✉️ {contact.email}<br />
              <button onClick={() => this.deleteContact(contact.id)}>
                Delete
              </button>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactBook;
