const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '123',
            name: 'jen',
            room: 'Node Course'
        },
        {
            id: '1234',
            name: 'david',
            room: 'React Course'
        },
        {
            id: '12345',
            name: 'mike',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '1234',
            name: 'Alex',
            room: 'Friends'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users[0]).toEqual(user);
    });

    it('should remove a user', () => {
        var userId = '123';
        var newArray = users.removeUser(userId);
        expect(newArray[0].id).toBe(userId);
        expect(users.users.length).toBe(2);
        
    });

    it('should not remove a user', () => {
        var userId = '1';
        var newArray = users.removeUser(userId);
        expect(newArray[0]).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var user = users.getUser('123');
        expect(user[0].name).toEqual('jen');
        expect(user[0].room).toEqual('Node Course');
    });

    it('should not find user', () => {
        var user = users.getUser('1');
        expect(user[0]).toNotExist();
    });

    it('should return names for Node Course', () => {
        var usersList = users.getUserList('Node Course');
        expect(usersList).toEqual(['jen','mike']);
    });

    it('should return names for React Course', () => {
        var usersList = users.getUserList('React Course');
        expect(usersList).toEqual(['david']);
    });
});