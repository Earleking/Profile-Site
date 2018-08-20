var sideListInNormal = ['front', 'left', 'back', 'right']
var currentClass = 'front'
function rotateRight() {
    // window.history.pushState('hello world', 'TitleTest', '/');
    var cube = document.getElementById('cube');
    var direction = '';
    var lastclass = cube.classList[cube.classList.length - 1];
    var newClass = 'cube-show-';
    // console.log(cube.style.transform.length)
    try {
        direction = lastclass.split('-')[2];
    } catch (error) {
        
    }
    for(i in sideListInNormal){
        if(sideListInNormal[i] == direction){
            cube.classList.remove(lastclass);
            // remove z-index class from face
            // This is needed because rendering works in a weird order sometimes
            var face = document.getElementById('work-' + sideListInNormal[i] + "-face");
            try {
                face.classList.remove('to-front')
            } catch (error) {
                
            }
            if(i == 0){
                i = sideListInNormal.length;
            }
            nextIndex = (i - 1) % (sideListInNormal.length + 1);
            // readd z-index class to new face
            face = document.getElementById('work-' + sideListInNormal[nextIndex] + "-face");
            face.classList.add('to-front');

            newClass = newClass + sideListInNormal[nextIndex];
            cube.classList.add(newClass);
            return;
        }
    }
}
function rotateLeft() {
    var cube = document.getElementById('cube');
    var direction = '';
    var lastclass = cube.classList[cube.classList.length - 1];
    var newClass = 'cube-show-';
    // console.log(cube.style.transform.length)
    try {
        direction = lastclass.split('-')[2];
    } catch (error) {
        
    }
    for(i in sideListInNormal){
        if(sideListInNormal[i] == direction){
            cube.classList.remove(lastclass);
            // Remove z-index class from current face
            
            var face = document.getElementById('work-' + sideListInNormal[i] + "-face");
            try {
                face.classList.remove('to-front')
            } catch (error) {
                
            }

            if(i == sideListInNormal.length - 1){
                i = -1;
            }
            nextIndex = (+i + +1) % (sideListInNormal.length + 1);

            // Re-add z-index class
            face = document.getElementById('work-' + sideListInNormal[nextIndex] + "-face");
            face.classList.add('to-front');

            newClass = newClass + sideListInNormal[nextIndex];
            cube.classList.add(newClass);
            return;
        }
    }
}

function toWork() {
    var cube = document.getElementById('cube');
    var newClass = 'cube-show-right';
    var lastclass = cube.classList[cube.classList.length - 1];

    cube.classList.remove(lastclass);
    // Remove z-index class from current face
    var face = document.getElementById('work-' + currentClass + "-face");
    try {
        face.classList.remove('to-front')
    } catch (error) {
        
    }
    // Re-add z-index class
    face = document.getElementById('work-right-face');
    face.classList.add('to-front');
    cube.classList.add(newClass);
    currentClass = 'right';
}

function toUni() {
    var cube = document.getElementById('cube');
    var newClass = 'cube-show-front';
    var lastclass = cube.classList[cube.classList.length - 1];
    cube.classList.remove(lastclass);
    // Remove z-index class from current face
    var face = document.getElementById('work-' + currentClass + "-face");
    try {
        face.classList.remove('to-front')
    } catch (error) {
        
    }
    // Re-add z-index class
    face = document.getElementById('work-front-face');
    face.classList.add('to-front');
    cube.classList.add(newClass);
    currentClass = 'front';
}

function toHS() {
    var cube = document.getElementById('cube');
    var newClass = 'cube-show-left';
    var lastclass = cube.classList[cube.classList.length - 1];
    cube.classList.remove(lastclass);
    // Remove z-index class from current face
    var face = document.getElementById('work-' + currentClass + "-face");
    try {
        face.classList.remove('to-front')
    } catch (error) {
        
    }
    // Re-add z-index class
    face = document.getElementById('work-left-face');
    face.classList.add('to-front');
    cube.classList.add(newClass);
    currentClass = 'left';
}

function toSkills() {
    var cube = document.getElementById('cube');
    var newClass = 'cube-show-back';
    var lastclass = cube.classList[cube.classList.length - 1];
    cube.classList.remove(lastclass);
    // Remove z-index class from current face
    var face = document.getElementById('work-' + currentClass + "-face");
    try {
        face.classList.remove('to-front')
    } catch (error) {
        
    }
    // Re-add z-index class
    face = document.getElementById('work-back-face');
    face.classList.add('to-front');
    cube.classList.add(newClass);
    currentClass = 'back';
}

//drag mobile implentation
var lastEvent;
$('.cube-face').on('touchstart', function(event) {
    if(this.classList[3] == 'to-front') {
        clickDownLoc = event.originalEvent.touches[0].pageX;
    }
    else {
        clickDownLoc = -1;
    }
    lastEvent = event;
});

$('.cube-face').on('touchmove', function(event) {
    lastEvent = event;
});

$('.cube-face').on('touchend', function(event) {
    // console.log(lastEvent);
    if(clickDownLoc == -1) {
        return;
    }
    var delta = lastEvent.originalEvent.touches[0].pageX - clickDownLoc;
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
