const express = require("express");
const productRoute = express.Router();

productRoute.get("/", (req,res)=>{
    res.send("상품 정보 조회");
})
.post("/insert", )

