const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { runApp } = require('./app');
const initModules = require('./initModules');
const ejs = require('ejs');
const app = runApp();

// Config
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "src/config.env",
  });
}

const PORT = process.env.PORT || 3300;

const connectToDatabase = async () => {
  console.log("[database] Connecting to database..");

  mongoose.connect(process.env.DATABASE_URL, {
    dbName: process.env.DB_COLLECTION,
    autoIndex: true,
    socketTimeoutMS: 45000,
    serverSelectionTimeoutMS: 60000,
  }).then((response) => {
    console.log("[databse] Well done! Connected to database.");
  }).catch((error) => {
    console.log("[database] Failed to connect. Retrying...");
    setTimeout(() => {
      connectToDatabase();
    }, 10000)
  })
}

connectToDatabase();

// Init modules
initModules(app);

app.use("*", (req, res) => {
  const htmlResult = `
    We are working on this page.... <button onclick="window.history.back()">Go Back</button>
  `
  res.send(ejs.render(htmlResult))
})

app.listen(PORT, () => {
  if(process.env.NODE_ENV === 'production') {
    console.log(`[production] Server is running. Thank you...`);
  } else {
    console.log(`[development] Server is running on http://localhost:${PORT}`);
  }
})