const houseBlueprint = {
    address: '',
    date: new Date(),
    description: '',
    owner: '',
    size: 0,
    _averageBuildSpeed: 0.5,
    getDaysToBuild: function() {
        return this.size / this._averageBuildSpeed;
    }
}

function HouseBuilder(address, description, owner, size, roomCount) {
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    Object.setPrototypeOf(this, houseBlueprint);
}