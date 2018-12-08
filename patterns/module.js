// module
const module = (() => {
    let name = 'asdasd';

    const _changeName = (data) => {
        name = data;
    }

    const _showName = () => {
        console.log(name);
    }


    return {
        changeName: _changeName,
        showName: _showName
    }

})()