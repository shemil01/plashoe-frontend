import { useEffect } from "react";

function UseTitle(title) {
  useEffect(() => {
    document.title = `${title} - Recycled Shoe Store`;
  }, [title]);
}

export default UseTitle;