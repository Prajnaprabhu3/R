import React, { useState, useEffect } from 'react'
import './Feed.css';
import Post from './Post';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import { db } from './Firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { PlaceRounded } from '@material-ui/icons';

function Feed() {
    const [input, setInput] = useState("");

    // to add posts 
    const [post, setPost] = useState([])


    useEffect(() => {
        // earlier we ssaw the posts being randomly PlaceRounded, so we add the orderBy function and we want the post to arrange according to timestamo and in desc - descending orfer 
        db.collection("posts").orderBy('timestamp', "desc").onSnapshot((snapshot) =>
            setPost(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })
            )))
    }, []);

    const sendPost = e => {
        //e prevent the deafult behavior that isprevent reloading when pressed enter in this case
        e.preventDefault();

        db.collection('posts').add({
            name: 'Prajna',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        });

        // After submit, the input should be empty 
        setInput('')
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        {/* we are doint value={input} because we want the value to be saved thats why  */}
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button type='submit' onClick={sendPost}>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>

            {/* Post  */}
            {post.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            {/* <Post name='Prajna' description='This a react blog' message='Hello whatsup' /> */}
        </div>
    )
}

export default Feed