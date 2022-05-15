const express = require("express");
var http = require("http");
const app = express();
const port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server);

//middlewre
app.use(express.json());
var clients = {};

io.on("connection", (socket) => {
  console.log(socket.id, "has joined");
 
  socket.on("listPosts", (data) => {

    var response = [

      {
        "name" :"Real Madrid",
        "logo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png",
        "is_verified" :true,
        "username" :"@ReadlMadrid",
        "image_url":"https://www.tarafdari.com/sites/default/files/contents/user7163/news/getpaidstock.com-627da1cbd21b1.jpg",
        "count_comment" : 1235,
        "count_like":854,
        "is_like":true,
        "is_favorite": true,

      },
      {
        "name" :"Barcelona",
        "logo":"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/180px-FC_Barcelona_%28crest%29.svg.png",
        "is_verified" :true,
        "username" :"@Barcelona",
        "image_url":"https://www.tarafdari.com/sites/default/files/contents/user648700/news/fsntj-awaaaohfj.jpeg",
        "count_comment" : 1235,
        "count_like":854,
        "is_like":true,
        "is_favorite": false,

      },
      {
        "name" :"Liverpool",
        "logo":"https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/180px-Liverpool_FC.svg.png",
        "is_verified" :true,
        "username" :"@Liverpool",
        "image_url":"https://www.tarafdari.com/sites/default/files/contents/user251782/news/20220514-212916-7-3294x2196ma-scaled.jpg",
        "count_comment" : 1235,
        "count_like":854,
        "is_like":true,
        "is_favorite": true,

      },
      {
        "name" :"Mancherster United",
        "logo":"https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/180px-Manchester_United_FC_crest.svg.png",
        "is_verified" :true,
        "username" :"@ManchersterUnited",
        "image_url":"https://www.tarafdari.com/sites/default/files/contents/user714049/news/ezgif-1-4de4612377.jpg",
        "count_comment" : 1235,
        "count_like":854,
        "is_like":true,
        "is_favorite": false,

      },
      {
        "name" :"Ac Milan",
        "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/124px-Logo_of_AC_Milan.svg.png",
        "is_verified" :true,
        "username" :"@AcMilan",
        "image_url":"https://www.tarafdari.com/sites/default/files/contents/user367985/news/sansiro-stadio-553.jpg",
        "count_comment" : 1235,
        "count_like":854,
        "is_like":true,
        "is_favorite": true,

      },
      {
        "name" :"Bayern Munich",
        "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/180px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        "is_verified" :true,
        "username" :"@BayernMunich",
        "image_url":"https://www.tarafdari.com/sites/default/files/contents/user642728/news/img_20220514_210320.jpg",
        "count_comment" : 1235,
        "count_like":854,
        "is_like":true,
        "is_favorite": false,

      },
      {
        "name" :"Mancherster City",
        "logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/180px-Manchester_City_FC_badge.svg.png",
        "is_verified" :true,
        "username" :"@ManchersterCity",
        "image_url":"https://www.tarafdari.com/sites/default/files/contents/user642728/news/getpaidstock.com-627c1b41d6b0a.jpg",
        "count_comment" : 1235,
        "count_like":854,
        "is_like":true,
        "is_favorite": true,

      }

    ];

    socket.emit("listPosts" , JSON.stringify(response));
 
  
  });
  
  
});

server.listen(port, "0.0.0.0", () => {
  console.log("server started");
});
