import React from 'react'
import "./Cards.css"
//import { timeAgo } from "../../Services/Time"

function KweetCard(props) {
    return (
        <div className="kweetCard" key={props.data.id}>
            <h4>{props.data.username.toLocaleString()}</h4>
            <p>
                {props.data.message.toLocaleString()}<br />

            </p>
        </div>
    )
}

export default KweetCard


//    < label title = { new Date(props.data.timestamp).toLocaleString() } >
 //       { timeAgo(props.data.timestamp) } ago
  //              </label >