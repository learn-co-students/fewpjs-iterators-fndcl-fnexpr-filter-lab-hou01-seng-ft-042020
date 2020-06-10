// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(driver => {return driver.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

function matchName(drivers, name){
    return drivers.filter(driver=>{return driver.name===name})
}