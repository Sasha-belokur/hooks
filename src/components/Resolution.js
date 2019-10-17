import React, { useEffect, useState } from "react";
import TooSmall from "./TooSmall";
import TooLarge from "./TooLarge";
import Super from "./Super";

function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
}

export default function Resolution() {
  const tooSmall = useMedia("(max-width: 500px)");
  const tooLarge = useMedia("(min-width: 600px)");

  return (
    <div>
      {tooSmall && <TooSmall />}
      {tooLarge && <TooLarge />}
      {!tooSmall && !tooLarge && <Super />}
    </div>
  );
}
