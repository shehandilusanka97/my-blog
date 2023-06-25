import express from "express";

let articlesInfo = [
  {
    name: "react",
    upvotes: 0,
    comments: [],
  },
  {
    name: "node",
    upvotes: 0,
    comments: [],
  },
  {
    name: "mongodb",
    upvotes: 0,
    comments: [],
  },
];

const app = express();
app.use(express.json());

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const articles = articlesInfo.find((a) => a.name === name);
  if (articles) {
    articles.upvotes += 1;
    res.send(`The ${name} article now has upvotes ${articles.upvotes}`);
  } else {
    res.send("That article has no upvotes");
  }
});

// adding comments
app.post("/api/articles/:name/comments", (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const articles = articlesInfo.find((a) => a.name === name);
  if (articles) {
    articles.comments.push({ postedBy, text });
    res.send(articles.comments);
  } else {
    res.send("That article has no comments");
  }
});

app.listen(8000, () => {
  console.log("Server is listening on http://localhost:8000");
});
