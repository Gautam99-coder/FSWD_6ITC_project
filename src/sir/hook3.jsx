import React, { useState } from "react";

export default function HookExample3() {
    const [collection, setCollection] = useState([]);
    const [ip1, setIp1] = useState("");
    const [ip2, setIp2] = useState("");

    const handleChange1 = (e) => {
        setIp1(e.target.value);
    };

    const handleChange2 = (e) => {
        setIp2(e.target.value);
    };

    const addItems = () => {
        if (ip1.trim() === "") return;
        setCollection([ip1, ...collection]);
        setIp1("");
    };

    const deleteItems = () => {
        setCollection(collection.filter(item => item !== ip2));
        setIp2("");
    };

    const updateItems = () => {
        setCollection(collection.map(item =>
            item === ip2 ? ip1 : item
        ));
        setIp1("");
        setIp2("");
    };

    return (
        <>
            <h1>Collection of Items</h1>

            <input
                type="text"
                placeholder="Enter new item"
                value={ip1}
                onChange={handleChange1}
            />

            <input
                type="text"
                placeholder="Item to delete/update"
                value={ip2}
                onChange={handleChange2}
            />

            <br /><br />

            <button onClick={addItems}>Add</button>
            <button onClick={deleteItems}>Delete</button>
            <button onClick={updateItems}>Update</button>

            <ul>
                {collection.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}
