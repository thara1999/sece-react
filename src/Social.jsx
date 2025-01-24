import React, { useState, useEffect } from "react";

function Social() {
  // State to store posts
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  // useEffect to handle mounting
  useEffect(() => {
    // This runs when the component mounts
    const fetchPosts = async () => {
      // Simulating an API call to fetch initial posts
      const fakeData = [
        { id: 1, content: "Hello, world!" },
        { id: 2, content: "React is awesome!" },
      ];
      setPosts(fakeData); // Set the fetched posts into state
    };

    fetchPosts(); // Call the function to fetch posts
  }, []); // The empty dependency array ensures this runs only on mount

  // Function to handle adding a new post
  const addPost = () => {
    if (newPost.trim()) {
      const post = { id: posts.length + 1, content: newPost };
      setPosts([post, ...posts]); // Add the new post to the top of the feed
      setNewPost(""); // Clear the input
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h1>📰 Social Media Feed</h1>

      {/* Input for new post */}
      <div>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={addPost}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Post
        </button>
      </div>

      {/* Display posts */}
      <div style={{ textAlign: "left", marginTop: "20px" }}>
        {posts.length === 0 ? (
          <p>No posts yet. Be the first to post!</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Social;