// To add more images just add the class "hidden-image" to classList and the id to imageList
var classList = ['far-left-image', 'left-image', 'main-image', 'right-image', 'far-right-image'];
var idList = ['1', '2', '3', '4', '5'];
var length = idList.length;
function rotateLeft() {
    // remove class
    for(i in idList) {
        document.getElementById("img-" + idList[i]).classList.remove(classList[i]);
    }
    // rotate imageList
    var last = idList[length - 1]; //store last image beacuse it will be overwritten
    for(var i = length - 1; i >= 0; i --) {   
        if(i == 0) {
            idList[0] = last;
            continue;
        }
        idList[i] = idList[i - 1];
    }
    // add new class
    for(i in idList) {
        document.getElementById("img-" + idList[i]).classList.add(classList[i]);
    }
    updateText(3);
}

function rotateRight() {
    // remove class
    for(i in idList) {
        document.getElementById("img-" + idList[i]).classList.remove(classList[i]);
    }
    // rotate imageList
    var first = idList[0]; //store first image beacuse it will be overwritten
    for(var i = 0; i <= length - 1; i ++) {   
        if(i == length - 1) {
            idList[length - 1] = first;
            continue;
        }
        idList[i] = idList[i + 1];
    }
    // add new class
    for(i in idList) {
        document.getElementById("img-" + idList[i]).classList.add(classList[i]);
    }
    updateText(1);
}

// Old center is 2 for shiftLeft and 4 for shiftRight
function updateText(oldCenter) {
    // Remove active from the old text
    document.getElementById("title-" + idList[oldCenter]).classList.remove('active-item');
    document.getElementById("tech-" + idList[oldCenter]).classList.remove('active-item');
    document.getElementById("text-" + idList[oldCenter]).classList.remove('active-item');
    // make new center image the new text
    // console.log("title-" + idList[3]);
    document.getElementById("title-" + idList[2]).classList.add('active-item');
    document.getElementById("tech-" + idList[2]).classList.add('active-item');
    document.getElementById("text-" + idList[2]).classList.add('active-item');
} 


$('.slideshow-img').click(function(event) {
    
});

// drag movement stuff
var clickDownLoc = -1; //x only. y does't matter
$('.slideshow-img').mousedown(function(event) {
    if(this.classList[1] == 'main-image') {
        // console.log(event.pageX);
        clickDownLoc = event.pageX;
    }
    else {
        clickDownLoc = -1;
    }

    if((this.classList[1] == "left-image")) {
        rotateLeft();
    }
    if((this.classList[1] == "right-image")) {
        rotateRight();
    }
})

$('.slideshow-section').mouseup(function(event) {
    if(clickDownLoc == -1) {
        return;
    }
    var delta = event.pageX - clickDownLoc;
    if(Math.abs(delta) > 70) {
        if(delta > 0) {
            rotateLeft();
            clickDownLoc = -1;
            return;
        }
        else {
            rotateRight();
            clickDownLoc = -1;
            return;
        }
    }
});
