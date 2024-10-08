import React, { useState } from "react";



import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     if (!name || !email || !subject || !message) {
    //         return toast.error("Please complete the form above");
    //     }

        // setLoading(true);

        // const data = {
        //     name,
        //     email,
        //     subject,
        //     message,
        // };

    //     emailjs
    //         .send(
    //             process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //             process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //             data,
    //             process.env.REACT_APP_EMAILJS_PUBLIC_API
    //         )
    //         .then(
    //             (result) => {
    //                 setLoading(false);
    //                 toast.success(`Successfully sent email.`);
    //             },
    //             (error) => {
    //                 setLoading(false);
    //                 console.log(error);
    //                 toast.error(error.text);
    //             }
    //         );
    // };

    return (
        <section className="contact container section" id="contact">
            <h2 className="h2 section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="h3 contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">
                        Don't like forms? Send me an email. 👋
                    </p>
                </div>

                <form  action="https://formspree.io/f/xgejkveg"
  method="POST"  className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Insert your name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            name="subject"
                            className="contact__form-input"
                            placeholder="Insert your subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name="message"
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">
                        {/* {loading ? "Sending..." : "Send Message"} */}
                        Send Message
                    </button>
                </form>
                {/* <ToastContainer position="bottom-right" theme={props.theme} /> */}
            </div>
        </section>
    );
};

export default Contact;
