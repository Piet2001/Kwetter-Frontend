import React from 'react'
import "./Cards.css"
import { timeAgo } from "../../Services/Time"

function KweetCard(props) {
    return (
        <div class="kweetCard">
            <p>
                {props.data.kweet}<br />
                <label title={new Date(props.data.timestamp).toLocaleString()}>
                    {timeAgo(props.data.timestamp)} ago
                </label>
            </p>
        </div>
    )
}

export default KweetCard