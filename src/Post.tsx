import React, { useContext } from 'react'
import UserContext from './user_context'

const Post = (props) => {
  const user = useContext(UserContext)

  return (
    <p>
      <img
        src="cat-img.jpg"
        alt=""
        height="auto"
        width="20%"
        className="img-fluid float-left mr-2"
      />
      <strong>@{user.socialHandle} </strong>
      <em>
        I'm a Post, in fact, I'm Post number {props.num}
      </em>
      <strong> #catsofsocial #famouscats</strong>
      <br />
      <em>
        {user.firstName} {user.lastName} posted 10 seconds
        ago
      </em>
    </p>
  )
}

export default Post
