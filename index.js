// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(d => 
         d.toLowerCase() === name.toLowerCase()
    )
}


function fuzzyMatch(drivers, string) {
    return drivers.filter(d => 
        d.toLowerCase().indexOf(string.toLowerCase()) === 0
        )
}


function matchName(drivers, string) {
    return drivers.filter(d => 
        d.name.toLowerCase() === string.toLowerCase()
        )
} 