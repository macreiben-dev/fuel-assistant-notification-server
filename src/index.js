import { Express } from "express";
import http from "http"
import socketIO from socketIO

const PORT = process.env.PORT || 8080

const app = Express()

app.use(Express.static('public'))

const http = http.Server(app)

const socket = socketIO(http)

