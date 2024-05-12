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
        <div>
            <p>I would love to hear from you! Use the form below to send me a message. </p>


            <form className='contact-form' onSubmit={formSubmit}>

                <div className='form-group'>
                    <label for='name'>Name:</label>
                    <input
                        value={name}
                        name='name'
                        onChange={inputChange}
                        type='text'
                        className='form-control'
                        placeholder='Tell me your name' />
                </div>

                <div className='form-group'>
                    <label for='email'>Email:</label>
                    <input
                        value={email}
                        name='email'
                        onChange={inputChange}
                        type='text'
                        className='form-control'
                        placeholder='How can I contact you?' />
                </div>

                <div className='form-group'>
                    <label for='message'>Message:</label>
                    <textarea
                        value={message}
                        name='message'
                        onChange={inputChange}
                        type='text'
                        className='form-control'
                        placeholder='What do you want to tell me?' />
                </div>

                <button type='submit' className='btn btn-primary my-1'>Submit</button>
            </form>
        {errorMessage && (
            <div>
                <p className='error-text'>{errorMessage}</p>
            </div>
        )}
        </div>
    )
}