const express = require("express")


const app = express()
//const apo = express()

app.use(express.static(__dirname + "/public/"), (_, res, next) => {
	//res.status(404)
  //res.sendFile(__dirname + "/404/")
  });
  
  app.listen(8080);