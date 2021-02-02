import React from "react";
import NewsItem from "./news-item";

const NewsList = () => {
  const newItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      {newItems.map((n, i) => {
        return <NewsItem/>;
      })}
    </div>
  );
};

export default NewsList;
