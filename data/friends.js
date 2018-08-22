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
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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

  }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArr;
