import path from "path";
import express from "express";
import bodyParser from "body-parser";

import { ConnectDatabase } from "./Databases/Connect";
import categoriesRoutes from "./routes/categoriesRoutes";
import ordersRoutes from "./routes/ordersRoutes";
import productsRoutes from "./routes/productsRoutes";
import shopRoutes from "./routes/shopRoutes";
import usersRoutes from "./routes/usersRoutes";
import homeRoutes from "./routes/homeRoutes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.set("views", path.join(__dirname, "../client/build"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

ConnectDatabase();

const port = process.env.PORT || 5000;

app.use("/api/categories", categoriesRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/users", usersRoutes);

app.use("/*", homeRoutes);

app.listen(port, () => console.log(`server is listening on port ${port}`));
