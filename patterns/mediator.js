const mediators = [];

class Mediator {
    constructor() {
        this.objects = [];
    }

    register(obj) {
        obj.mediator = this;

        this.objects.push(obj);
        mediators.push({name: obj.name, ctrl: obj});
    }

    send(text, from, to) {
        if(to)
            return to.recieve(text, from);

        this.objects.map(e => {
            if(from != e)
                e.recieve(text, from);
        })
    }
}

class Contoller extends State {
    constructor(name, state, func) {
        super(state);
        this.name = name;
        this.mediator = null;
        this.render = func.bind(this);
    }

    send(data, name) {
        const ctrl = mediators.find(obj => obj.name == name)

        if(ctrl)
            ctrl.ctrl.recieve(data, this);
    }

    recieve(data, from) {
        this.setState(data)
        this.render()
    }
}