import React, { useEffect, useState } from "react";
import { MockData_GeneralKweets, MockData_UserKweets } from "../../MockData/Kweets";
import { MockData_Trends } from "../../MockData/Trends";
import { MockData_User } from "../../MockData/User";
import { timeAgo } from "../../Services/Time";
import KweetCard from "../Cards/KweetCard";
import "./Home.css"
import { GetAllMessages, PostMessage } from "../../Services/MessageService";
import { loginRequest } from "../../authConfig";
import { useMsal } from "@azure/msal-react";

function Home(props) {
    const { instance, accounts } = useMsal();
    const [kweets, setKweets] = useState(MockData_GeneralKweets)
    const [trends] = useState(MockData_Trends)
    const [user] = useState(MockData_User)
    const [ownKweets] = useState(MockData_UserKweets)
    const lastKweet = ownKweets.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)[0]
    const [happeningText, setHappeningTest] = useState("")

    const handleSubmit = async () => {
        if (happeningText === "" || happeningText === undefined) {
            alert(`Je moet eerst een bericht maken om te versturen`)
        }
        else {
            var accessToken = await getAccessToken();
            await PostMessage(accessToken, happeningText)
            var newMessageList = await GetAllMessages(accessToken)
            setKweets(newMessageList.reverse())
        }
    }

    async function getAccessToken() {

        const request = {
            ...loginRequest,
            account: accounts[0]
        };
        var token = ""
        await instance.acquireTokenSilent(request)
            .then((response) => {
                token = response.accessToken
            })
        return token
    }

    useEffect(() => {
        getMessages()

        async function getMessages() {
            var accessToken = await getAccessToken2();
            var response = await GetAllMessages(accessToken)
            setKweets(response.reverse())
        }


        async function getAccessToken2() {

            const request = {
                ...loginRequest,
                account: accounts[0]
            };
            var token = ""
            await instance.acquireTokenSilent(request)
                .then((response) => {
                    token = response.accessToken
                })
            return token
        }

    }, [instance, accounts]);

    return (
        <div id="Container">
            <div className="searchbar">
                <input type={"text"} placeholder={"Search"} />
            </div>
            <div className="column left">
                <div className="happening">
                    <p>
                        Wat gebeurd er momenteel: <br />
                        <textarea id="happening" onChange={e => setHappeningTest(e.target.value)} />
                    </p>
                    <button id="submit_happening" value={"submit"} onClick={handleSubmit}>Verstuur</button>
                    <br /><br />
                </div>
                <div className="Feed">
                    Timeline:
                    {(() => {
                        return (
                            kweets.map((kweet) => {
                                return (
                                    <KweetCard id={kweet.id} data={kweet} />
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
