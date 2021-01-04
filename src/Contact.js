import React, { useState } from 'react';
import './Contact.css';
import { TextField, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase'

function Contact() {
    const history = useHistory();
    const [{ user }] = useStateValue();

    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
      
        return <a target="_blank" rel="noopener noreferrer" href={`mailto:${email}${params}`}>{children}</a>;
    };

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');    

    const contactSubmit = (e) => {
        if (validEmailAddress == true) {
            e.preventDefault();
            db.collection('contact').add({
                email: email,
                subject: subject,
                message: message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            history.replace('/');
            setEmail('');
            setSubject('');
            setMessage('');
            alert('Email sent!');
        } else {
            alert('Invalid email address!')
        }
        
    };

    const validEmailAddress =  new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
    console.log(validEmailAddress);

    return (
        <Box style={{textAlign:"center"}} component="fieldset" mb={3} borderColor="transparent">
            <br />
            <form>
                <TextField 
                    value={email} 
                    onChange={
                        e => setEmail(e.target.value)
                    } 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                />
                
                <br />
                <br />

                <TextField 
                    value={subject} 
                    onChange={
                        e => setSubject(e.target.value)
                    } 
                    id="outlined-basic" 
                    label="Subject" 
                    variant="outlined" 
                />

                <br />
                <br />

                <TextField 
                    value={message} 
                    onChange={
                        e => setMessage(e.target.value)
                    } 
                    id="outlined-basic" 
                    label="Message" 
                    variant="outlined" 
                />
    
                <br />
                <br />

                <Button disabled={!validEmailAddress, !subject, !message} onClick={contactSubmit} variant="contained" color="primary" type="submit">Submit</Button>

            </form>
        
            <br />

            <label>Or you contact me from email:</label>
            
            <br />
            <br />

            <Mailto email="umang.u.shahi10@gmail.com" subject="Something related to LetsBuy 🛒" body="Add 🛒 in the subject so I can differentiate this email from spam!">
                Email me
            </Mailto>
        </Box>
    )
}

export default Contact