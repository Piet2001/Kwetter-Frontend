import React from 'react'

function UserFollowingCard(props) {
    return (
        <div className="userStatsCard">
            Following:<br />
            {props.user.following}
        </div>
    )
}

export default UserFollowingCard