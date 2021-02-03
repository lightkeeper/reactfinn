import React from "react";
import NewsItem from "./news-item";

//1. This component should receive an array of news items so we can iterate over them and display a max number of 5 news items
//2. If no news are found or if we receive an error when calling the news API then no news items should be displayed

const NewsList = () => {
  const newItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      {newItems.map((item, index) => {
        return <NewsItem key={index} item={item} />;
      })}
    </div>
  );
};

export default NewsList;
