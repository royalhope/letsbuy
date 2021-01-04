import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { Box, Button } from '@material-ui/core';
import { db } from './firebase';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import firebase from 'firebase'

function Feedback() {
    const [rating, setRating] = useState(2);
    const [comment, setComment] = useState('');
    const history = useHistory();

    const StyledRating = withStyles({
        iconFilled: {
          color: '#ff6d75',
        },
        iconHover: {
          color: '#ff3d47',
        },
    })(Rating);

    console.log(rating + ' stars');

    const feedbackSubmit = (e) => {
        e.preventDefault();
        db.collection('feedback').add({
            rating: rating,
            comment: comment,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        history.replace('/');
        setComment('');
        alert('Feedback successfully submitted!');
    };

    return (
        <div>
            <Box style={{textAlign:"center"}} component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Please rate your experience with us</Typography>
                <StyledRating
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(values) => `${values} Heart${values !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    onChange={e => setRating(e.target.value)}
                    value={rating}
                />

                <br />
                <br />

                <label>Your feedback would be completely anonymous</label>

                <br />
                <br />

                <form>
                    <TextField value={comment} onChange={e => setComment(e.target.value)} id="outlined-basic" label="Your comments?" variant="outlined" />
                    
                    <br />
                    <br />

                    <Button disabled={!comment} onClick={feedbackSubmit} variant="contained" color="primary" type="submit">Submit</Button>
                </form>
            </Box>
        </div>
    )
}

export default Feedback
