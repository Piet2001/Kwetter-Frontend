import React from 'react'

function UserStatsCard(props) {
    return (
        <div className="userStatsCard">
            Stats:<br />
            <p>
                {props.user.following.length} following &nbsp; &nbsp; {props.user.followers.length} followers <br />
                kweets &nbsp;&nbsp; {props.user.kweets}
            </p>
        </div>
    )
}

export default UserStatsCard