import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from "./Post";
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    // piece of code that runs based on a given condition
    // everything below gives us access to the database. We loop/map through the docs and doc.data will get you access to an entire object.
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            <TweetBox />

            <FlipMove>
                {posts.map(post => (
                    <Post 
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text} 
                    avatar={post.avatar}
                    image={post.image}
                    />
                ))}
            </FlipMove>
            </div>
    );
}

export default Feed;
