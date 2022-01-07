export default function Story({ img, user }) {
  return (
    <div>
      <img src={img} alt={user} />
      <p>{user}</p>
    </div>
  );
}
