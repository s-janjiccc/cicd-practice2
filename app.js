const http = require("http");

const handler = (req, res) => {
    res.end("Hello from DevOps practice!");
};

const server = http.createServer(handler);

if (require.main == module) {
    server.listen(3000, () => {
        console.log("Server running on https://localhost:3000");
    });
}

module.exports = handler;