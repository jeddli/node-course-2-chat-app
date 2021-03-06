const expect = require('expect');

const {Users} = require('./users');

describe( 'Users', () => {
    var users;
    beforeEach( () => {
        users = new Users();
        users.users = [{
            id:'1',
            name: 'jed',
            room: 'Node course'
        },
        {
            id:'2',
            name: 'kim',
            room: 'React course'
        },
        {
            id:'3',
            name: 'lee',
            room: 'Node course'
        }
        ];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Jed',
            room: 'TestRoom'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove user', () => {
        var userId = '1';
        var removedUser = users.removeUser('1');
        expect(removedUser.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '1';
        var removedUser = users.removeUser('99');
        expect(removedUser).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node course');

        expect(userList).toEqual(['jed', 'lee']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React course');

        expect(userList).toEqual(['kim']);
    });
});