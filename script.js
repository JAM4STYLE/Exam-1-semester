let nav = document.querySelector("nav");
let menu = document.querySelector("nav h1");
let main = document.querySelector("main");
let body = document.querySelector("body");
let open = false;
let hover = false;

menu.addEventListener("click", function () {
    open = !open ? true : false;
    nav.classList.toggle("menu-active")
    main.classList.toggle("menu-active")
    nav.classList.remove("menu-hover")
    main.classList.remove("menu-hover")
    console.log(open);
});

menu.addEventListener("mouseover", function () {
    if (!open) {
        nav.classList.add("menu-hover")
        main.classList.add("menu-hover")
    }

})
menu.addEventListener("mouseout", function () {
    nav.classList.remove("menu-hover")
    main.classList.remove("menu-hover")
})

