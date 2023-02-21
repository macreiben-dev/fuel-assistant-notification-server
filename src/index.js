import Express from "express"
import http from "http"
// import socketIO from "socketIO"

const PORT = process.env.PORT || 8080

const app = Express()

app.use(Express.static('public'))

const httpInstance = http.Server(app)

// const socket = socketIO(httpInstance)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
    console.log('App listening at ' + PORT);
});
  