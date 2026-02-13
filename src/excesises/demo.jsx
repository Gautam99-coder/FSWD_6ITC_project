import React, { useState } from "react";

export default function UserRecords() {
    const [records, setRecords] = useState([]);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        mobile: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitRecord = () => {
        if (!form.firstName || !form.lastName || !form.mobile) return;

        setRecords([
            ...records,
            { ...form, showDetails: false }
        ]);

        setForm({ firstName: "", lastName: "", mobile: "" });
    };

    const toggleView = (index) => {
        setRecords(
            records.map((item, i) =>
                i === index ? { ...item, showDetails: !item.showDetails } : item
            )
        );
    };

    const deleteRecord = (index) => {
        setRecords(records.filter((_, i) => i !== index));
    };

    return (
        <>
            <h1>User Records</h1>

            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
            />

            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
            />

            <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
            />

            <br /><br />
            <button onClick={submitRecord}>Submit</button>

            <hr />

            <ul>
                {records.map((item, index) => (
                    <li key={index}>
                        <strong>{item.firstName}</strong>

                        <button onClick={() => toggleView(index)}>
                            {item.showDetails ? "Hide" : "View"}
                        </button>

                        <button onClick={() => deleteRecord(index)}>
                            Delete
                        </button>

                        {item.showDetails && (
                            <div>
                                <p>Last Name: {item.lastName}</p>
                                <p>Mobile: {item.mobile}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
