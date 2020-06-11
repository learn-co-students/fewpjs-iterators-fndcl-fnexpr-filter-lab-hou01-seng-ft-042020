// Code your solution here

function findMatching(array, input){
  return array.filter(element => element.toLowerCase() === input.toLowerCase())
}

function fuzzyMatch(array, input){
  return array.filter(element => element.charAt(0) === input.charAt(0))
}

function matchName(array, input){
  return array.filter(obj => obj.name == input)
}
