import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getSum/:a/:b", async (req, res) => {
  const { a, b } = req.params;

  res.json({
    ans: sum(parseInt(a) + parseInt(b))
  });
})