// Code your solution here
// Function to find matching driver names
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose names start with the given letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to match driver objects by name
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Example usage
const drivers = ["Alice", "Bob", "Charlie", "alice", "David"];
const driverObjects = [
    { name: "Alice", hometown: "New York" },
    { name: "Bob", hometown: "Los Angeles" },
    { name: "Charlie", hometown: "Chicago" },
    { name: "David", hometown: "Miami" }
];

console.log(findMatching(drivers, "alice")); // Output: ["Alice", "alice"]
console.log(fuzzyMatch(drivers, "Al")); // Output: ["Alice", "alice"]
console.log(matchName(driverObjects, "Bob")); // Output: [{ name: "Bob", hometown: "Los Angeles" }]
