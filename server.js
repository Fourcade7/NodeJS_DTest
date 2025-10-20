import express from "express"
const app = express();
const PORT = 3000;

app.use(express.json());


// Oddiy GET request
app.get("/", (req, res) => {
    res.send("Updated, bu oddiy GET request!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server http://localhost:${PORT} da ishlayapti`);
  });