// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
   res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  function loopLetters(score, newScore) {
    for (j = 0; j<score.length; j++) {
      var difference = 0;
      var totalDif = parseInt(newScore[j]) - parseInt(score[j]);
      var totalDif = difference + Math.abs(totalDif);
      differenceArr.push(totalDif);
      }
  }
  app.post("/api/friends", function(req, res) {

    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
      var newData = req.body;
      var allTotalDif = [];
      var allNames = [];
      var allPhotos = [];
   
      for (i=0; i<friends.length; i++) {
        var differenceArr = [];
        var score = friends[i].scores;
        var newScore = newData.scores;
        allNames.push(friends[i].name);
        allPhotos.push(friends[i].photo);

        // for (j = 0; j<score.length; j++) {
        //   var difference = 0;
        //   var totalDif = parseInt(newScore[j]) - parseInt(score[j]);
        //   var totalDif = difference + Math.abs(totalDif);
        //   differenceArr.push(totalDif);
        //   }
        loopLetters(score, newScore);

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
  
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   tableData = [];
  //   waitListData = [];

  //   console.log(tableData);
  // });
};
