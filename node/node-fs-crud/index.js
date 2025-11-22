const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {

    res.writeHead(200, { "content-type": "text/plain" })

    // CREATE 
    if (req.url === '/') {
        fs.writeFile("note.txt", "initial note", (err) => {
            if (err) return res.end("Error writing file");
            res.end("File created with initial data")
        })
    }

    // ---- READ ----
    if (req.url === "/read") {
        fs.readFile("note.txt", "utf-8", (err, data) => {
            if (err) return res.end("Error reading file");
            res.end(data)
        })
    }
    // ---- UPDATE ----
    if (req.url === "/update") {
        fs.appendFile("note.txt", `\nAppend Note`, (err, data) => {
            if (err) return res.end("Error appending note");
            res.end("updated/appended with note")
        })
    }



})

server.listen(4000, () => {
    console.log('server started');
})