const http = require("http");

const host = "localhost";
const PORT = 5000;

const server = http.createServer((req, res) => {
    console.log("\nName of file:", __filename);
    console.log("Arguments passed to the script:", process.argv.slice(2));
    console.log("IP address:", server.address());
    console.log("Name of host:", req.headers.host);
    console.log("Name protocol:", `${req.connection ? "https" : "http"}/${req.httpVersion}`);
    console.log("Query method:", req.method);
    console.log("User-Agent information:", req.headers["user-agent"]);
    console.log("IP address of the client:", req.connection.remoteAddress);
    console.log("List of parameters passed by URL:", req.url.split("?")[1] || "");
    const str = "Finish";
    res.end(str);

});

server.listen(PORT, host, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});