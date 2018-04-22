class Users{
    constructor(){
        this.users = [];
    }

    addUser(id, name, room) {
        var user = {id,name,room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user = this.getUser(id);
        if(user){
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user[0];
    }

    getUser(id){
        return this.users.filter((user) => user.id === id);
    }

    getUserList(room){
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((users) => users.name);

        return namesArray;
    }
}

module.exports = {Users};