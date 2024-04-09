import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    // Simple email validation
    const isValidEmail = email => /\S+@\S+\.\S+/.test(email);

    // Check if all form fields are filled and email is valid
    const isFormValid = () => {
        const { name, phone, email, subject, message } = formData;
        return name && phone && isValidEmail(email) && subject && message;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            // Form is valid, submit the form
            console.log('Form submitted', formData);
            setFormSubmitted(true);
            // Here you could actually submit the form data to your backend API
        } else {
            alert('Please fill all fields correctly.');
        }
    };

    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
            <form action="https://getform.io/f/pagxpydb" 
            method='POST' 
            encType='multipart/form-data'
            className='space-y-6'>
                <div className='group relative border-2 rounded-lg p-3 border-gray-300'>
                    <input className='peer border-none w-full focus:ring-0 focus:outline-none' type="text" name='name' placeholder=' ' />
                    <label className='absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-[#001b5e] peer-focus:text-sm'>Name</label>
                </div>
                <div className='group relative border-2 rounded-lg p-3 border-gray-300'>
                    <input className='peer border-none w-full focus:ring-0 focus:outline-none' type="text" name='phone' placeholder=' ' />
                    <label className='absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-[#001b5e] peer-focus:text-sm'>Phone</label>
                </div>
                <div className='group relative border-2 rounded-lg p-3 border-gray-300'>
                    <input className='peer border-none w-full focus:ring-0 focus:outline-none' type="email" name='email' placeholder=' ' />
                    <label className='absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-[#001b5e] peer-focus:text-sm'>Email</label>
                </div>
                <div className='group relative border-2 rounded-lg p-3 border-gray-300'>
                    <input className='peer border-none w-full focus:ring-0 focus:outline-none' type="text" name='subject' placeholder=' ' />
                    <label className='absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-[#001b5e] peer-focus:text-sm'>Subject</label>
                </div>
                <div className='group relative border-2 rounded-lg p-3 border-gray-300'>
                    <textarea className='peer border-none w-full focus:ring-0 focus:outline-none' rows='10' name='message' placeholder=' '></textarea>
                    <label className='absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-[#001b5e] peer-focus:text-sm'>Message</label>
                </div>
                <button className='relative w-full p-4 rounded-lg text-gray-100 bg-[#001b5e] overflow-hidden group'>
                    <span className='absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-y-full bg-[#001b5e] group-hover:translate-y-0'></span>
                    <span className='relative'>Send message</span>
                </button>
            </form>
        </div>
    )
}

export default Contact
