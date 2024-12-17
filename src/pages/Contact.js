import React, { useState } from 'react';
import '../styles/Contact.css';
import Swal from 'sweetalert2';

function Contact() {
    // State to manage input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formElement = event.target;
        const formDataToSend = new FormData(formElement);

        formDataToSend.append("access_key", "2129c793-b5bb-4fbb-8985-5852e140a6df");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend,
            });

            const res = await response.json();

            if (res.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed || result.isDismissed) {
                        setFormData({ name: '', email: '', message: '' });
                        formElement.reset(); // Resetting the form element directly
                    }
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send message: " + (res.message || "Unknown error"),
                    icon: "error"
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire({
                title: "Error!",
                text: "An error occurred while submitting the form.",
                icon: "error"
            });
        }
    };

    return (
        <section className="contact">
            <div className='hours-and-methods-container'>
                <div className="store-hours-container">
                    <h3>Store Hours</h3>
                    <p>Monday - Friday: 8am - 5pm</p>
                    <p>Saturday: 8am - 4pm</p>
                    <p>Sunday: Closed</p>
                </div>
                <div className = "contact-methods-container">
                    <h3>How To Reach Us Directly</h3>
                    <p> +1 (909) 627-7569 </p>
                    <p>CountryFSweb@gmail.com</p>
                    <p>6160 Riverside Dr Chino, CA 91710</p>
                </div>
            </div>
            <iframe className='map-container'
                width="600" 
                height="450" 
                style={{border: '3px solid #795548',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)'
                }}
                loading="lazy" 
                allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJk-2A2j4zw4ARseAciVlFfMI&key=AIzaSyATusCVocxg3brXcJVNX_Dvcjbs_sQzdFo">
            </iframe>
            <form className='contact-form' onSubmit={onSubmit}>
                <h2>Connect With Us Today!</h2>
                <div className="inputBox">
                    <label> Name </label>
                    <input type="text" className="field" placeholder='Enter your name' name='name' value={formData.name} onChange={handleChange} required/>
                </div>

                <div className="inputBox">
                    <label> Email Address </label>
                    <input type="email" className="field" placeholder='Enter your email' name='email' value={formData.email} onChange={handleChange} required/>
                </div>

                <div className="inputBox">
                    <label> Your Message </label>
                    <textarea name="message" className='field mess' placeholder='Enter your message' value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <button type="submit"> Send Message </button>
            </form>
        </section>
    )
}

export default Contact;
