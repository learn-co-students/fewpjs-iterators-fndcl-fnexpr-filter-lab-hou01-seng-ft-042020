// // Code your solution here
// const drivers = ["yaya", "hibous", "yoan", "adebogo", "yeezy", "yaya", "YAYA"];

// const fuzzyMatch = drivers.filter(name => name[0] === "yaya"[0])
// console.log(fuzzyMatch);

// const findMatching = drivers.filter(name => name.toLowerCase() === "yaya".toLowerCase());
// console.log(findMatching);

// const matchName = drivers.filter(name => name === "yaya");
// console.log(matchName);

//function fuzzyMatch (array, str){
  // console.log(array.filter (name => name[0] === str[0] ))
//}
//fuzzyMatch(["yaya", "yoan", "eric", "tata"], "yaya")

function findMatching(source, sought) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }