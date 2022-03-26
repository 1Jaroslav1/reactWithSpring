import React from 'react';
import { useState, useEffect } from 'react';
import AddContact from './AddContact';
import SingleContact from './SingleContact';
import axios from 'axios';

// , {
//     method: "GET",
//     header:{},
//     mode: 'no-cors',
// }
function Contacts(props) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:8080/contacts/all')
        // .then(res => {
        //     console.log(res);
        //     return res.json();
        // })
        // .then(data => setContacts(data));
        axios.get('http://localhost:8080/contacts/all').then(res => setContacts(res.data));
    }, [])

    return (
        <div>
            <div className="row">
                <AddContact/>
            </div>
            <div className="row">
                {contacts.map((contact) => {
                    return(
                        <SingleContact key={contact.id} contact={contact}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Contacts;