// Code your solution here

function findMatching(dirvers, string){
  return dirvers.filter(dirver => dirver.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(dirvers, string){
  return dirvers.filter(dirver => dirver.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(dirvers, findName){
  return dirvers.filter(dirver => dirver.name === findName)
}
