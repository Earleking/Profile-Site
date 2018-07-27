var sideListInNormal = ['front', 'left', 'back', 'right']
function rotateLeft() {
    var cube = document.getElementById('cube');
    var direction = '';
    var lastclass = cube.classList[cube.classList.length - 1];
    var newClass = 'cube-show-';
    console.log(cube.style.transform.length)
    try {
        direction = lastclass.split('-')[2];
    } catch (error) {
        
    }
    for(i in sideListInNormal){
        if(sideListInNormal[i] == direction){
            cube.classList.remove(lastclass);
            if(i == 0){
                i = 4;
            }
            console.log((i - 1) % (sideListInNormal.length + 1));
            newClass = newClass + sideListInNormal[(i - 1) % (sideListInNormal.length + 1)];
            cube.classList.add(newClass);
            console.log(newClass);
            return;
        }
    }
}
function rotateRight() {
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
            if(i == 3){
                i = -1;
            }
            console.log(i);
            console.log((i + 1));
            newClass = newClass + sideListInNormal[(+i + +1) % (sideListInNormal.length + 1)];
            cube.classList.add(newClass);
            console.log(newClass);
            return;
        }
    }
}