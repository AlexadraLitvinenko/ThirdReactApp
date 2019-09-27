const getUsers = (users, firstName) => {
    let usr = [];
    users.map( (item) => { if (item.firstName = firstName) { usr = [...usr, item ] }});
    return usr;
};

const getData = (data, count) => {
   return data.slice(0, count);
};

// TODO функция c двумя параметрами getUsers(data, firstName)

module.exports = {
    getData,
    getUsers
};
