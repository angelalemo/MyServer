"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const cors_1 = __importDefault(require("cors"));
const path = require("path");
const app = Express();
const mongoURI = "mongodb+srv://marknarudon_db_user:GGwdst76!@cluster0.d5rbpq5.mongodb.net/?retryWrites=true&w=majority&appName=cluster0";
mongoose_1.default.connect(mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
app.use(Express.json());
app.use((0, cors_1.default)());
app.use(Express.static(path.join(__dirname, 'public')));
//routes
app.use("/api", UserRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
