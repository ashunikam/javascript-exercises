const findTheOldest = function (a) {
    return a.reduce((oldest, currentPerson) => {
      const oldestAge = calAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = calAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
  
  const calAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  module.exports = findTheOldest;
  