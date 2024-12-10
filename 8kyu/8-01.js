// Escape the room

// You are creating an "Escape the room" game. The first step is to create a hash table ( dict in Python) called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each room being a hash table with at least 3 properties (e.g. name, description, completed).


class Room {
    constructor(n, d, c) {
        this.name = n;
        this.description = d;
        this.completed = c;
    }
}

const rooms = {}

rooms["room1"] = new Room("val1", "asd", true);
rooms["room2"] = new Room("val2", "asd", true);
rooms["room3"] = new Room("val3", "asd", true);