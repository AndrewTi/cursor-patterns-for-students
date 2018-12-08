class Chain {
    constructor() {
        this.objects = [];
    }

    // щоб зарегати обєкт
    add(path, ctrl) {
        const obj = {
            path,
            ctrl
        }
        this.objects.push(obj);

        return this;
    }


    // шукаємо обєкт який має це імя
    listener(path) {
        const obj = this.objects.find(e => e.path == path);

        // перевіряємо чи він існує
        if(obj)
            obj.ctrl.render(); // викликаємо
    }
}