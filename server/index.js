import expres from "express";
import cors from "cors";

const app = expres();

app.use(expres.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "http://173.0.110.153:5173",
      // add production url ip or domain
    ], // need to add origin, google client id
    credentials: true, // cookies accept, auth headers accept
    //   methods: ["GET", "POST", "PUT", "DELETE"],
    //   allowedHeaders:["Content-Type", "Authorization"]
  }),
);

// API route

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from hasim deply server" });
});

const PORT = 4000;

// Application dockarize need to binding of your default locahost port

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
