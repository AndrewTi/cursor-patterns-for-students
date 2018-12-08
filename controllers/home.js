const homeCtrl = function() {
    console.log(this.state);
    setTimeout(() => {
        this.send({test: 'test'}, 'Profile');
    }, 1000)
}