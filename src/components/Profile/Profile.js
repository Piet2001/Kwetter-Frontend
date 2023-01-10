import React, { useState } from 'react'
import { MockData_UserKweets } from '../../MockData/Kweets'
import { MockData_User } from '../../MockData/User'
import KweetCard from '../Cards/KweetCard'
import UserFollowingCard from '../Cards/UserFollowingCard'
import UserInfoCard from '../Cards/UserInfoCard'
import UserStatsCard from '../Cards/UserStatsCard'
import "./Profile.css"

function Profile() {
    const [ownKweets] = useState(MockData_UserKweets)
    const [user] = useState(MockData_User)

    return (
        <div id='Container'>
            <div className="column left">
                <div className="UserAccount">
                    <img src='https://www.multisignaal.nl/wp-content/uploads/2021/08/blank-profile-picture-973460_1280.png' alt="profile" className="profileImage" />
                    <label className="UserName">{user.name}</label>
                </div>
                <br /><br /><br /><br />
                <div className="OwnKweets">
                    {(() => {
                        return (
                            ownKweets
                                //.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
                                .map((kweet) => {
                                    return (
                                        <KweetCard data={kweet} />
                                    )
                                })
                        )
                    })()}

                </div>
            </div>
            <div className="column right">
                <UserInfoCard user={user} />
                <UserStatsCard user={user} />
                <UserFollowingCard user={user} />
            </div>
        </div>
    )
}

export default Profile