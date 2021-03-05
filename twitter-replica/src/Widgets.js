import React from 'react';
import './Widgets.css';
import SearchIcon from "@material-ui/icons/Search";
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1367903995214323716"} />
                
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="elonmusk"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                url={"https://reactjs.org/"}
                options={{ text: "#reactjs is quite awesome, isnt it?", via: "aznnick3115" }}
                />

            </div>
        </div>
    );
}

export default Widgets;
