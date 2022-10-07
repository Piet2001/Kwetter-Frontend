import React, { useState } from "react";
import { MockData_GeneralKweets, MockData_UserKweets } from "../../MockData/Kweets";
import { MockData_Trends } from "../../MockData/Trends";
import { MockData_User } from "../../MockData/User";
import { timeAgo } from "../../Services/Time";
import KweetCard from "../Cards/KweetCard";
import "./Home.css"

const Home = (props) => {
    const [kweets] = useState(MockData_GeneralKweets)
    const [trends] = useState(MockData_Trends)
    const [user] = useState(MockData_User)
    const [ownKweets] = useState(MockData_UserKweets)
    const lastKweet = ownKweets.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)[0]

    return (
        <div id="Container">
            <div className="searchbar">
                <input type={"text"} placeholder={"Search"} />
            </div>
            <div className="column left">
                <div className="happening">
                    <p>
                        Wat gebeurd er momenteel: <br />
                        <textarea id="happening" />
                    </p>
                </div>
                <div className="Feed">
                    Timeline:
                    {(() => {
                        return (
                            kweets.map((kweet) => {
                                return (
                                    <KweetCard data={kweet} />
                                )
                            })
                        )
                    })()}
                </div>

            </div>
            <div className="column right">
                <div className="user">
                    Your kweets: {user.kweets}<br />
                    {timeAgo(lastKweet.timestamp)} ago: {lastKweet.kweet}<br />
                    <br />
                    <div className="column left">
                        Following {user.following.length}
                    </div>
                    <div className="column right">
                        Followers {user.followers.length}
                    </div>
                </div>
                <br />
                <div className="trends">
                    Trends:<br />
                    <ul>
                        {(() => {
                            return (
                                trends.map((trend) => {
                                    return (
                                        <> #{trend.name}<br /></>
                                    )
                                })
                            )
                        })()}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Home
