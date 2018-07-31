var sideListInNormal = ['front', 'left', 'right']
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
            console.log(face);
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
            console.log('work-' + sideListInNormal[nextIndex] + "-face");

            newClass = newClass + sideListInNormal[nextIndex];
            cube.classList.add(newClass);
            return;
        }
    }
}