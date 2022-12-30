function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').classList = "fa-solid fa-bars";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').classList ="fa-solid fa-x";
    }
}