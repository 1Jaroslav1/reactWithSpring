import React from 'react';
import { useRef } from 'react';
import axios from 'axios'

function AddContact(props) {
    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);

    const submitContact = (e) => {
        e.preventDefault();

        let contact = {
            "firstName": firstName.current.value,
            "lastName": lastName.current.value,
            "email": email.current.value
        }
        // console.log(JSON.stringify(contact));
        // let bd = JSON.parse(JSON.stringify(contact));
        // console.log(bd);
        // console.log(contact);
        // fetch("http://localhost:8080/contacts", {
        //     method: "POST",
        //     headers:{
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(contact),
        // })
        // .then(res => res.json())
        axios.post("http://localhost:8080/contacts", contact);
        // window.location.reload();
    }
    return (
        <div className="row">
            <form className="col s12" onSubmit={submitContact}>
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="Placeholder" ref={firstName} type="text" className="validate"/>
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field col s6">
                    <input ref={lastName} type="text" className="validate"/>
                    <label htmlFor="lastName">Last Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input ref={email} type="email" className="validate"/>
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
            </div>
            </form>
        </div>
    );
}

export default AddContact;