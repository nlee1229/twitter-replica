import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


function Post({
    displayName, 
    username,
    verified, 
    timestamp, 
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="https://images-na.ssl-images-amazon.com/images/I/51C045KkMjL.jpg"></Avatar>   
            </div>    

            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            Nicholas Lee <span className="post_headerSpecial">
                                <VerifiedUserIcon className="post_badge" /> @aznnick1234
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>I challenge you to take this one.</p>
                    </div>
                </div>
                    <img src="https://post.healthline.com/wp-content/uploads/2019/02/bunch_of_two_large_and_one_small_bananas-1200x628-facebook.jpg" alt=""/>
                    <div className="post_footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
            </div>
        </div>
    );
}

export default Post;
