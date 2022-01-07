import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "123",
      username: "codewithsahand",
      userImg:
        "https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048",
      img: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
      caption: "Thanks for watching",
    },
    {
      id: "124",
      username: "codewithsahand",
      userImg:
        "https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048",
      img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg",
      caption: "Thank you guys",
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
