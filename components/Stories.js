import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
export default function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);
  return (
    <div className="">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={`https://i.pravatar.cc/150?img=${profile.id}`}
          user={profile.username}
        />
      ))}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
}
