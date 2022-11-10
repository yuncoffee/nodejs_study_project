var relationship1 = {
    name: 'duck',
    friends: ['jeong','jae','deck'],
    logFriends:function(){
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend){
            console.log(that.name, friend);
        });
    },
};

relationship1.logFriends();