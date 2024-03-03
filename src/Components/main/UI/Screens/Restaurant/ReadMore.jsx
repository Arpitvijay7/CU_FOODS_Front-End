import React, { useState } from "react";

const ReadMore = ({ content }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mb-4 text-gray-500">
      {clicked ? content : `${content.substring(0, 30)}`}
      {content.length > 30 && (
        <span
          className="text-black ml-1 font-medium"
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? "Show Less" : "...Read More"}
        </span>
      )}
    </div>
  );
};

export default ReadMore;
