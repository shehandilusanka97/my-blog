import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
function ArticlePage() {
  const params = useParams();
  const articleId = params.articleId;
  const article = articles.find((article) => article.name === articleId);
  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  );
}

export default ArticlePage;
