const candymachine = {
    status: {
        name: 'node',
        count: 5,
    },
     getCandy() {
        this.status.count--;
        return this.status.count;
    },
};

const {getCandy, status:{count}} = candymachine;

console.log(count);