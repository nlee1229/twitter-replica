import React from 'react';
import './TweetBox.css'; 
import {Avatar, Button, Input} from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
               <div className="tweetBox_input">
                <Avatar src="https://images-na.ssl-images-amazon.com/images/I/51C045KkMjL.jpg"></Avatar>
                <input placeholder="What's happening?" type="text" />
               </div>
               <input className="tweetBox_imgInput" placeholder="Optional: Enter image URL" type="text" />
               <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
