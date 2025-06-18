import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

const url='https://jobportal-e7b6.onrender.com';
const timer=30000;
const fetchwebsite=()=>{
    fetch(url)
    .then(res=>res.text())
    .then(data=>{
    })
    .catch(err=>{
    })
}
setInterval(fetchwebsite, timer);



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})