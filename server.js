const express = require("express");
const cors = require("cors");

const app = express();


// Dynamic PORT for Render
const PORT = process.env.PORT || 3000;

// Serve Static Files (e.g., HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

// Default Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the Serve

// Middleware
app.use(cors());
app.use(express.json());

// Dummy user data for validation
const users = [
  { username: "student1", password: "password1" },
  { username: "student2", password: "password2" },
];

// Login route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
