import React, { Component } from "react";

class ContactManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      phone: "",
      contacts: [],
      message: "",
      messageType: "",
      showContactId: null
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleView = (id) => {
  this.setState((prevState) => ({
    showContactId: prevState.showContactId === id ? null : id
  }));
};

  addContact = () => {
    const { name, lastname, phone } = this.state;

    if (!name || !lastname || !phone) {
      this.setState({
        message: "All fields are required",
        messageType: "error"
      });
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      lastname,
      phone
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      lastname: "",
      phone: "",
      message: "Contact added successfully",
      messageType: "success"
    }));
  };

  deleteContact = (id) => {
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter(c => c.id !== id),
    showContactId: null
  }));
};


  render() {
    const { name, lastname, phone, message, messageType } = this.state;

    return (
      <div style={{ width: 400, margin: "auto" }}>
        <h2>Smart Contact Manager</h2>

        {message && (
          <p style={{ color: messageType === "error" ? "red" : "green" }}>
            {message}
          </p>
        )}

        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        /><br /><br />

        <input
          name="lastname"
          placeholder="Last Name"
          value={lastname}
          onChange={this.handleChange}
        /><br /><br />

        <input
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={this.handleChange}
        /><br /><br />

        <button onClick={this.addContact}>Add Contact</button>
        <hr />

<ul>
  {this.state.contacts.map((contact) => (
    <li key={contact.id}>
      <strong>{contact.name}</strong>

      <br />

      <button onClick={() => this.toggleView(contact.id)}>
        {this.state.showContactId === contact.id ? "Hide" : "View"}
      </button>

      {this.state.showContactId === contact.id && (
        <div>
          <p>Last Name: {contact.lastname}</p>
          <p>📞 Phone: {contact.phone}</p>
        </div>
      )}

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

export default ContactManager;
