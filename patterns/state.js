class State {
    constructor(data) {
        this.state = data;
    }

    setState(data) {
        this.state = { ...data, ...this.state };
    }

    getState() {
        return this.state;
    }
}