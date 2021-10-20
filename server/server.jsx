import express from "express";
import * as path from "path";
import * as fs from "fs";
import React from "react";
import {App} from "../src/App";

import ReactDOMServer from "react-dom/server";

const PORT = process.env.PORT || 9000;

const app = express();

console.log(__dirname);


app.get("/", (req, res) => {
    const indexPath = path.resolve(__dirname, "../app/index.html");

    fs.readFile(indexPath, "utf8", (err, data) => {
        if (err) {
            console.error("Cannot read file: " + indexPath, err);
            return res.status(500).send("Internal Server Error");
        }

        const app = ReactDOMServer.renderToString(<App />);

        res.send(
            data.replace(`<div id="root"></div>`, `<div id="root">${app}</div>`)
        );
    });

});

app.use(express.static(path.resolve(__dirname, "../app")));

app.listen(PORT, () => {
    console.log("Listening on localhost:" + PORT);
});
