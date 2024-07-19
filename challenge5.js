function countPeopleByCity(people) {
    return people.reduce((cityCount, person) => {
        cityCount[person.city] = (cityCount[person.city] || 0) + 1;
        return cityCount;
    }, {});
}
