import React, { useState } from "react";
import "./Home.css"

const Home = (props) => {
    const [tweets] = useState([
        {
            "tweet": "Item 1"
        },
        {
            "tweet": "Item 2"
        },
        {
            "tweet": "Item 3"
        }
    ])

    const [trends] = useState([{
        "name": "Testing"
    },
    {
        "name": "Programming"
    },
    {
        "name": "work"
    }])

    const [user] = useState({
        "name": "kweeter",
        "Kweets": 87,
        "following": 23,
        "followers": 2
    })

    return (
        <div id="Container">
            <div class="searchbar">
                <input type={"text"} placeholder={"Search"} />
            </div>
            <div class="column left">
                <div class="happening">
                    <p>
                        Wat gebeurd er momenteel: <br />
                        <textarea id="happening" />
                    </p>
                </div>
                <div class="Feed">
                    Timeline:
                    <ul>
                        {(() => {
                            return (
                                tweets.map((tweet) => {
                                    return (
                                        <li>{tweet.tweet}</li>
                                    )
                                })
                            )
                        })()}
                    </ul>
                </div>

            </div>
            <div class="column right">
                <div class="user">
                    Your kweets: {user.Kweets}<br />
                    1 hour ago: I'm programming!<br />
                    <br />
                    <div class="column left">
                        Following {user.following}
                    </div>
                    <div class="column right">
                        Followers {user.followers}
                    </div>
                </div>
                <br />
                <div class="trends">
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
