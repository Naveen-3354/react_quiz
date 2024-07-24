import React from 'react'
import "../css/profile.scss"
const Profile = ({ children }) => {
    return (
        <div id='profile'>
            <div className="nav">
                {children}
            </div>
            <div className="content">
                <h4>About Emma:</h4>
                <p>Emma has completed 45 quizzes and is currently ranked 12th on the leaderboard. With a particular interest in History, Science, and Literature, Emma has mastered these categories and earned achievements like "History Buff," "Science Whiz," and "Literary Genius." Always eager for the next challenge, Emma is on a mission to climb even higher and prove her quiz prowess.</p>
            </div>
            <div className="details">
                <div className="imgs">
                    <div className="image"></div>
                    <p>Emma</p>
                </div>
                <div className="info">
                    <p>emma@Gmail.com</p>
                    <p>312237123729</p>
                </div>
            </div>
        </div>
    )
}

export default Profile