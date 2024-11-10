import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import ContactFormTile from "../contact/ContactFormTitle";
import ContactFormInputs from "./ContactFormInputs";

// I am using Email Js to send react email to my gmail
const ContactForm = () => {
    //validation
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let formErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            formErrors.name = "Name is required";
        }

        // Email validation
        if (!formData.email.trim()) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email address is invalid";
        }

        // Select1 validation
        if (!formData.select1) {
            formErrors.select1 = "Please select an option";
        }

        // Select2 validation
        if (!formData.select2) {
            formErrors.select2 = "Please select an option";
        }

        // Message validation
        if (!formData.message.trim()) {
            formErrors.message = "Message is required";
        }

        return formErrors;
    };

    const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID;
    const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };
    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full h-fit bg-white rounded-2xl shadow-sm lg:lg:w-2/3"
        >
            <div className="w-full flex flex-col justify-center items-start gap-7 p-4 sm:p-10">
                <ContactFormTile />
                <ContactFormInputs />
            </div>
        </form>
    );
};
export default ContactForm;
