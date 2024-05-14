import { validateEmail } from '../../utils/helpers';
import { useState } from 'react';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const inputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setErrorMessage('Name is required');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        if (!message) {
            setErrorMessage('Message is required');
            return;
        }


        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage(`Thank you ${name}! I will be in touch soon at ${email} to discuss more about your message.`);
    };

    return (
        <div className='container'>
            <h2 className='emphasis mt-5'> Contact Me</h2>
            <p className='common mx-3'>I would love to hear from you! Use the form below to send me a message. </p>


            <form className='contact-form' onSubmit={formSubmit}>

                <div className='form-group'>
                    <label for='name' className='emphasis form-title mb-1 mt-4'>Name:</label>
                    <input
                        value={name}
                        name='name'
                        onChange={inputChange}
                        type='text'
                        className='form-control mx-3 mt-2'
                        placeholder='Tell me your name' />
                </div>

                <div className='form-group'>
                    <label for='email' className='emphasis form-title mb-1 mt-4'>Email:</label>
                    <input
                        value={email}
                        name='email'
                        onChange={inputChange}
                        type='text'
                        className='form-control mx-3 mt-2'
                        placeholder='How can I contact you?' />
                </div>

                <div className='form-group'>
                    <label for='message' className='emphasis form-title mb-1 mt-4' >Message:</label>
                    <textarea
                        value={message}
                        name='message'
                        onChange={inputChange}
                        type='text'
                        className='form-control  mx-3 mt-2'
                        placeholder='What would you like to say?' 
                        rows='5'/>
                </div>

                <button type='submit' className='btn btn-submit my-5 mx-3'>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </div>
    )
}