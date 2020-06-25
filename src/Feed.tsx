import React from 'react'
import Post from './Post'
import UserContext from './user_context'

const socialAccount = {
  firstName: 'John',
  lastName: 'Anderson',
  socialHandle: 'coolcat'
}

const UserProvider = UserContext.Provider

function Feed() {
  return (
    <UserProvider value={socialAccount}>
      <div className="container">
        <div className="row">
          <div className="col-sm" />
          <div className="col-sm-6">
            <h3 className="display-4">ReactSocial</h3>
            <h4>Your Latest Posts</h4>
            {[1, 2, 3].map((item) => {
              return <Post num={item} />
            })}
          </div>
          <div className="col-sm" />
        </div>
      </div>
    </UserProvider>
  )
}

export default Feed
