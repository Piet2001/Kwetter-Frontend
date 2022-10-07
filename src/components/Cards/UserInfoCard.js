import React from 'react'

function UserInfoCard(props) {
    return (
        <div class="userInfoCard">
            Details:<br />
            <p>
                Name: {props.user.name} <br />
                Location: {props.user.location} <br />
                Web: <a href={props.user.web} target="_blank" rel="noopener noreferrer">{props.user.web}</a> <br />
                Bio: {props.user.bio} <br />
            </p>
        </div>
    )
}

export default UserInfoCard