import React from "react";
import "./Home.css"

const Home = (props) => {

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
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>

            </div>
            <div class="column right">
                <div class="user">
                    Your kweets: 87<br />
                    1 hour ago: I'm programming!<br />
                    <br />
                    <div class="column left">
                        Following 23
                    </div>
                    <div class="column right">
                        Followers 2
                    </div>
                </div>
                <br />
                <div class="trends">
                    Trends:<br />
                    <ul>
                        #testing<br />
                        #progremming<br />
                        #work<br />
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Home
