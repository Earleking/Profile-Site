var siteWidth = 1280;
var scale = screen.width / siteWidth
console.log(screen.width);
console.log(scale);
// document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
$('#load-overlay').css('visibility', 'hidden');
$(function() {
    $(".nav-item > a").click(function(e) {
        e.preventDefault(); //so the browser doesn't follow the link
        window.history.pushState("", 'test', this.href);
        window.scrollTo(0, 0);
        $('#load-overlay').css('visibility', 'visible');
        $("#main").load(this.href, function() {
            //execute here after load completed
            $('#load-overlay').css('visibility', 'hidden');
        });
    });
});