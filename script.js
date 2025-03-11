class NavbarMobile {
    constructor (menuMobile, navList, navLinks){
        this menuMobile = document.querySelector(menuMobile);
        this navList = document.querySelector(navList);
        this navLinks = document.querySelectorAll(navLinks);
        this activeClass = "active";
    }
    addClickEvent() {
        this.menuMobile.addEventListner("click", () => console.log ("Hei"));
    }
    init() {
        if(this.menuMobile){
            this.addClickEvent();
        }
        return this
    }
}