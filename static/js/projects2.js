// To add more images just add the class "hidden-image" to classList and the id to imageList
var classList = ['far-left-image', 'left-image', 'main-image', 'right-image', 'far-right-image'];
var imageList = ['img-1', 'img-2', 'img-3', 'img-4', 'img-5'];
var length = imageList.length;
function rotateLeft() {
    // remove class
    for(i in imageList) {
        document.getElementById(imageList[i]).classList.remove(classList[i]);
    }
    // rotate imageList
    var last = imageList[length - 1]; //store last image beacuse it will be overwritten
    for(var i = length - 1; i >= 0; i --) {   
        if(i == 0) {
            imageList[0] = last;
            continue;
        }
        imageList[i] = imageList[i - 1];
    }
    // add new class
    for(i in imageList) {
        document.getElementById(imageList[i]).classList.add(classList[i]);
    }

}

function rotateRight() {
    // remove class
    for(i in imageList) {
        document.getElementById(imageList[i]).classList.remove(classList[i]);
    }
    // rotate imageList
    var first = imageList[0]; //store first image beacuse it will be overwritten
    for(var i = 0; i <= length - 1; i ++) {   
        if(i == length - 1) {
            imageList[length - 1] = first;
            continue;
        }
        imageList[i] = imageList[i + 1];
    }
    // add new class
    for(i in imageList) {
        document.getElementById(imageList[i]).classList.add(classList[i]);
    }
}

$('.slideshow-img').click(function(event) {
    console.log(this.classList[1]);
    if((this.classList[1] == "left-image")) {
        rotateLeft();
    }
    if((this.classList[1] == "right-image")) {
        rotateRight();
    }
});
