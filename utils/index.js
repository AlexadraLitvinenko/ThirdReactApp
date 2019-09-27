//Утилита для сортировки массива по фамилии
const getUsers = (users, firstName) => {
    let usr = [];
    users.map( (item) => { if (item.firstName.includes(firstName)) { usr.push(item) }});
    return usr;
};

module.exports = {
    getUsers
};
