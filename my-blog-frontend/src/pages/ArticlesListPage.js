import React from "react";
import articles from "./article-content";
import ArticlesList from "../components/ArticleList";
function ArticlesListPage() {
  return (
    <div>
      <h1>Articles</h1>
      <ArticlesList articles={articles}/>
    </div>
  );
}

export default ArticlesListPage;
