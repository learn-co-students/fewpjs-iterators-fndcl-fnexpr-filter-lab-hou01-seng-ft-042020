// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() == string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => driver.substring(0, 3).includes(string))
}

function checkName(driver, string) {
    if (driver.name == string) {
        return true
    } else {
        return false
    }
}

function matchName(drivers, string) {
    return drivers.filter(driver => checkName(driver, string))
}