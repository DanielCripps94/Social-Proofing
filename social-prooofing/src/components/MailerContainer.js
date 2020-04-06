import React, { useState } from 'react';
import axios from 'axios'

function MailerContainer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useEmail('')

    const handleClick = (e) => {
        e.preventDefault();
        if(e.target.id == name) {
            setName(e.target.value)
        } else {
            setEmail(e.target.value)
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault() 

        const dataToSubmit = {
            name,
            email
        }

        axios.post("api/sendMail", dataToSubmit)
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input id='name' placeholder='name' value={name} onChange={onClick}/>
                    <input id='email' placeholder='email' value={email} onChange={onClick} />
                    <button onClick={handleSubmit}> Send Email</button>
                </form>
            </div>

        )
    }
