const modal = {
    open() {
        document
        .querySelector('.header-menu-items')
        .classList
        .add('active')
    },
    close() {
        document
        .querySelector('.header-menu-items')
        .classList
        .remove('active')
    }
}