var siteWidth = 1280;
var scale = screen.width / siteWidth
console.log(screen.width);
console.log(scale);
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');