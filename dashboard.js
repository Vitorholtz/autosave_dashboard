
let sidebar = document.querySelector('.side-bar')
let main = document.querySelector('.main')

function Opensidebar() {
	sidebar.classList.toggle('side-bar-expand')
	main.classList.toggle('main-expand')
}

function sidebarHover() {
   main.style.margin = "0px 0px 0px 260px";
}
function sidebarHoverOut() {
    main.style.margin = "0px 0px 0px 60px";

}

