import React, { Component } from "react";

class ContactNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      phone: "",
      contacts: [],
      message: "",           // popup message
      showContactId: null    // track which contact is visible
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addContact = () => {
    const { name, lastname, phone } = this.state;

    if (name.trim() === "" || lastname.trim() === "" || phone.trim() === "") {
      return {message};
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
      message: "✅ Contact added successfully!"
    }));

    // hide message after 2 seconds
    setTimeout(() => {
      this.setState({ message: "" });
    }, 2000);
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
      showContactId: null
    }));
  };

  toggleView = (id) => {
    this.setState((prevState) => ({
      showContactId: prevState.showContactId === id ? null : id
    }));
  };

  render() {
    const { name, lastname, phone, contacts, message, showContactId } = this.state;

    return (
      <div style={{ width: "400px", margin: "auto" }}>
        <h2>📒 Contact Book</h2>

        {message && (
          <p style={{ color: "green", fontWeight: "bold" }}>
            {message}
          </p>
        )}

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
          name="lastname"
          placeholder="Last Name"
          value={lastname}
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

        <button onClick={this.addContact}>Add Contact</button>

        <hr />

        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>{contact.name}</strong><br />

              <button onClick={() => this.toggleView(contact.id)}>
                {showContactId === contact.id ? "Hide" : "View"}
              </button>

              {showContactId === contact.id && (
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

export default ContactNote;
