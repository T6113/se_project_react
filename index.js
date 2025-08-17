import express from "express";
// listen to port 3000
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});





