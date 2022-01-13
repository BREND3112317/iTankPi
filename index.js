const express = require('express')
const app = express();
const port = process.env.port || 3000

app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/web/" + "main.html" );
})

app.use('/static', express.static( __dirname + "/static" ));
app.use('/node_modules', express.static( __dirname + "/" + "node_modules" ));

app.listen(port, () => {
    console.log('\x1b[32m%s\x1b[0m', `[SYSTEM] Listening at port: ${port}`)
})