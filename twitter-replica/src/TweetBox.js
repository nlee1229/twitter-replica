import React, {useState} from 'react';
import './TweetBox.css'; 
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
const [tweetMsg, setTweetMsg] = useState("");
const [tweetImg, setTweetImg] = useState("");

// Click Handler for submit button
const sendTweet = e => {
    e.preventDefault();
    // Mapping the objects 
    db.collection("posts").add({
        displayName: 'Nick',
        username: "NotNick",
        verified: true,
        text: tweetMsg,
        image: tweetImg,
        avatar: "https://images-na.ssl-images-amazon.com/images/I/51C045KkMjL.jpg"
    });
    // So that the input fields will reset and don't want to have previous contents stay there
    setTweetMsg("");
    setTweetImg("");
}

    return (
        <div className="tweetBox">
            <form>
               <div className="tweetBox_input">
                <Avatar src="https://images-na.ssl-images-amazon.com/images/I/51C045KkMjL.jpg"></Avatar>
                <input 
                // this code below allows you to type in the box to make a tweet. Without it, we won't be able to type
                onChange={(e) => setTweetMsg(e.target.value)}
                value={tweetMsg} 
                placeholder="What's happening?" 
                type="text" 
                />
               </div>
               <input 
               value={tweetImg}
               onChange={(e) => setTweetImg(e.target.value)}
               className="tweetBox_imgInput" 
               placeholder="Optional: Enter image URL" 
               type="text" 
               />
               <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
