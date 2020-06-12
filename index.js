// Code your solution here

function findMatching(dirvers, name){
  return dirvers.filter(element => element.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(dirvers, letter){
  return dirvers.filter(element => element.toLowerCase()[0] === letter.toLowerCase()[0])
}

function matchName(dirvers, findName){
  return dirvers.filter(element => element.name === findName)
}
