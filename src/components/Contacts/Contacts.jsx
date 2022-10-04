import React from "react";
import './Contacts.css'

const Contacts = () => (
    <section id="contacts">
        <div className="Contacts-style">
            <div className="titles">
                <h1 className="contacts-h1">Let's get in touch!</h1>
                <h2>Complete the following form and we will reply as soon as possible.</h2>
            </div>
            <form>
                <div className="row">
                    <div className="form-input">
                        <label>First Name</label>
                        <input />
                    </div>
                    <div className="form-input">
                        <label>Last Name</label>
                        <input />
                    </div>
                    <div className="form-input">
                        <label>Email</label>
                        <input className="email" />
                    </div>
                    <div className="form-input">
                        <label>Comment</label>
                        <input className="comment" />
                    </div>
                </div>
                
            </form>
        </div>
    </section>
)

export default Contacts