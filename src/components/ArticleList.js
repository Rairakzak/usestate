import React, { useState } from "react";
import "../style/ArticleList.css";
import ArticleCard from "./ArticleCard";
export default function ArticleList() {
  const initial_list = [
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ];
  const [articles, setarticles] = useState(initial_list);

  return (
    <div className="ArticleList">
      <h1>ArticleList </h1>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button onClick={() => setarticles([])}>Clear All</button>
      {articles.map((article) => {
        return (
          <ArticleCard
            key={article.id}
            content={article.body}
            title={article.title}
          />
        );
      })}
    </div>
  );
}
