import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Contour");
});

app.get("/charAt", (req, res) => {
  const data = "Contour Network";
  const pos = Number.parseInt(req.query.pos as string);
  console.log(pos);
  res.send(data.charAt(pos));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
