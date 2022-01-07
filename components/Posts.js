import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "123",
      username: "codewithsahand",
      userImg:
        "https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048",
      img: "https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048",
      caption: "Thanks for watching",
    },
    {
      id: "124",
      username: "codewithsahand",
      userImg:
        "https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048",
      img: "https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048",
      caption: "Thanks for watching",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
