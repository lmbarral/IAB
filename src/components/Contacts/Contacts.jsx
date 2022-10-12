import React from "react";
import './Contacts.css'

const Contacts = () => (
    <section id="contacts">
        <div className="Contacts-style">
            <div className="titles">
                <h1 className="contacts-h1">Let's get in touch!</h1>
                <h2>Complete the following form and we will reply as soon as possible.</h2>
            </div>
            <div class="form">
                <form action="">
                    <label for="fname">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.."/>

                    <label for="lname">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your last name.."/>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit"/>
                </form>
                </div>
        </div>
    </section>
)

export default Contacts