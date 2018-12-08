(() => {
    let someLib = null;

    function initLib() {
        if(someLib)
            return someLib;

        return someLib = {
            date: + new Date()
        }
    }

    const test1 = initLib()
    console.log(test1.date)

    const test2 = initLib()
    console.log(test2.date)

    setTimeout(() => {
        const test3 = initLib()
        console.log(test3.date)
    }, 1000);
})()