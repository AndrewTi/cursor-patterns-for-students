const service = (() => {
    const baseUrl = 'http://localhost:9191/api/v1';
    const users = baseUrl + '/users';
    const offers = baseUrl + '/offers';


    // Users
    const _createUser = (data) => fetch(users,  { method: 'post' }).then(e => e.json());
    const _getUsers = () => fetch(users).then(e => e.json());
    const _updateUser = (data) => fetch(users).then(e => e.json());
    const _removeUser = (data) => fetch(users).then(e => e.json());

    return {
        createUser: _createUser,
        getUsers: _getUsers,
        updateUser: _updateUser,
        removeUser: _removeUser
    }
})()