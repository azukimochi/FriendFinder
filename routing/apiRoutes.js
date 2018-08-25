// Where the data is stored as an array of objects 
var friends = require("../data/friends");

// Exporting the routes to be used by server.js 
module.exports = function (app) {

  // GETS the JSON from friends to show all "Friends"
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // Creates new object and pushes it into the friends array. Also calculates which other Friend in the array has the best compatability (based on lowest total difference on all answers)
  app.post("/api/friends", function (req, res) {

    var newData = req.body;
    var allTotalDif = [];
    var allNames = [];
    var allPhotos = [];

    for (i = 0; i < friends.length; i++) {
      var differenceArr = [];
      var score = friends[i].scores;
      var newScore = newData.scores;
      allNames.push(friends[i].name);
      allPhotos.push(friends[i].photo);

      for (j = 0; j < score.length; j++) {
        var difference = 0;
        var totalDif = parseInt(newScore[j]) - parseInt(score[j]);
        var totalDif = difference + Math.abs(totalDif);
        differenceArr.push(totalDif);
      }

      var totalDifference = differenceArr.reduce((a, b) => a + b, 0);
      console.log("Sum of differences: " + totalDifference);
      allTotalDif.push(totalDifference);
    }

    var bestMatchDif = Math.min(...allTotalDif);
    var index = allTotalDif.indexOf(bestMatchDif);
    var bestMatchName = allNames[index];
    var bestMatchPhoto = allPhotos[index];
    var bestMatchObj = {
      name: bestMatchName,
      difference: bestMatchDif,
      photo: bestMatchPhoto
    }

    res.json(bestMatchObj);
    friends.push(newData);
  });
};
