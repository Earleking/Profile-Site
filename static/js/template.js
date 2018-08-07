// var siteWidth = 1280;
// var scale = screen.width / siteWidth
// console.log(screen.width);
// console.log(scale);
// document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
// $('#load-overlay').css('visibility', 'hidden');
// $(function() {
//     $(".nav-item > .suppress").click(function(e) {
//         e.preventDefault(); //so the browser doesn't follow the link
//         window.history.pushState("", 'test', this.href);
//         window.scrollTo(0, 0);
//         $('#load-overlay').css('visibility', 'visible');
//         $("#main").load(this.href, {'test': 'hello'} , function() {
//             //execute here after load completed
//             $('#load-overlay').css('visibility', 'hidden');
//         });
//     });
// });
var navbarShown = false;
function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    var icon = document.getElementById('hamburger-button');
    if(navbarShown) {
        navbar.style.left = "-70px";
        icon.style.left = "0";
        navbarShown = false;
    }
    else {
        navbar.style.left = "0";
        icon.style.left = "70px";
        navbarShown = true;
    }
}
