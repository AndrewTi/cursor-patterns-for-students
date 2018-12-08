function pathChange() {
    const hash = location.hash;

    let name = null;

    if(hash[0] === '#')
        name = hash.replace('#', '/')

    if(!name)
        name = '/';

    return name;
}

(() => {
    const router = new Chain();

    const mediator = new Mediator();

    const home = new Contoller('Home', {contentText: 'home'}, homeCtrl);
    const profile = new Contoller('Profile', { contentText: 'profile' }, profileCtrl);

    mediator.register(home)
    mediator.register(profile)

    router
        .add('/', home)
        .add('/profile', profile);

    const name = pathChange();

    router.listener(name);

    window.addEventListener('hashchange', () => {
        const name = pathChange();

        router.listener(name);
    })
})()