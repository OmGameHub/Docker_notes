const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json({
        statusCode: 200,
        message: "Hello World from a Dockerized App!",
        success: true,
    });
});

app.get("/health-check", (req, res) => {
    res.status(200).json({
        statusCode: 200,
        message: "Health check passed",
        success: true,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
