const Router= require("express");
const router = Router();
const generateImage=require("../controllers/openaiController");

router.post("/generateImage", generateImage);

module.exports=router;
