const Post = ({ user, post, deletePost }) => {
  return (
    <div className="postArea">
      <div className="userInfo">
        <img src={user.pic} alt="profile pic" height="50px" width="50px" />
        <div>{user.userName}</div>
      </div>
      <div className="postContent">
        {post.content}
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Post;
