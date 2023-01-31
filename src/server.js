const express = require(`express`);

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`public`));


const productsRouter = require(`../routes/productsRouter`);
const cartRouter = require(`../routes/cartRouter`);


app.use(`/api/products`, productsRouter);
app.use(`/api/cart`, cartRouter);

app.use(express.static(`public`));



const server = app.listen(PORT, () => console.log(`------------- SERVER READY LISTENING IN PORT: ${PORT} -------------`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));