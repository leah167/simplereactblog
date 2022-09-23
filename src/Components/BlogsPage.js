import React, { useState } from "react";
import Post from "./Post";

const BlogsPage = ({ user }) => {
  const [displayPosts, setDisplayPosts] = useState([]);
  const [makePost, setMakePost] = useState();

  const newPost = () => {
    const postsArr = [...displayPosts];
    postsArr.sort((a, b) => b.id - a.id);
    const id = postsArr.length > 0 ? postsArr[0].id + 1 : 1;

    const post = { content: makePost, id };
    setMakePost("");
    setDisplayPosts([...displayPosts, post]);
    console.log("postsArr: ", { postsArr });
  };

  const deletePost = (id) => {
    const postsArr = [...displayPosts];
    const index = postsArr.findIndex((post) => post.id === id);
    postsArr.splice(index, 1);
    setDisplayPosts(postsArr);
  };

  return (
    <div className="blogsPage">
      <h2>Welcome to {user.userName}'s blog!</h2>
      <div>
        <textarea
          placeholder="Type up your new blog post here!"
          value={makePost}
          onChange={(e) => setMakePost(e.target.value)}
          autoFocus={true}
        />
        <button onClick={newPost}>Submit</button>
      </div>
      <div>
        {displayPosts.map((post) => {
          return (
            <Post
              user={user}
              post={post}
              deletePost={deletePost}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
