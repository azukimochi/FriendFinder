// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

// var tableArray = [
//   {
//     customerName: "Ahmed",
//     customerEmail: "ahmed@example.com",
//     customerID: "afhaque89",
//     phoneNumber: "000-000-0000"
//   }
// ];

var tableArr = [
  {
  "name":"Tony Stark",
  "photo":"https://i.imgur.com/vfh0Tl7.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }, 
  {
    "name":"Stan Lee",
    "photo":"https://pbs.twimg.com/profile_images/1018943227791982592/URnaMrya_400x400.jpg",
    "scores":[
        4,
        2,
        3,
        4,
        4,
        2,
        3,
        4,
        1,
        2
      ]
    }, 
    {
      "name":"Danai Gurira",
      "photo":"https://thenypost.files.wordpress.com/2016/02/danai10.jpg?quality=90&strip=all&strip=all",
      "scores":[
          1,
          4,
          2,
          2,
          4,
          2,
          3,
          2,
          4,
          1
        ]
      }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArr;
