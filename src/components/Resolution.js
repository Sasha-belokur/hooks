import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import TooSmall from "./TooSmall";

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
      {tooLarge && <p> "You dont need so many, go narrower!"</p>}
      {!tooSmall && !tooLarge && <p>"Now it's super!"</p>}
    </div>
  );
}
