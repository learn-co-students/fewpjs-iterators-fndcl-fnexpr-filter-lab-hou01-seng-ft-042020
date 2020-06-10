// Code your solution here

function findMatching(drivers, str) {
  return drivers.filter((match) => match.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(
    (match) => match.toLowerCase().indexOf(str.toLowerCase()) === 0
  );
}

function matchName(drivers, str) {
  return drivers.filter((record) => record.name === str);
}
