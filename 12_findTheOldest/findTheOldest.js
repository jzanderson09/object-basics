const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson);
        const currentAge = getAge(currentPerson);
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    });
};

function getAge(person) {
    if (!person.yearOfDeath) {
        let deathYear = new Date().getFullYear();
        return deathYear - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
