var curProject = 0;
function fadeIn(newProj) {
    var project;
    if (curProject != 0) {
        // set it to 0
        project = document.getElementById('project-' + curProject);
        project.classList.remove('show-overlay');
        project.classList.add('hide-overlay');
        curProject = 0;
        // return;
    }
    try {
        project.classList.remove('hide-overlay');
    } catch (error) {
        
    }
    project = document.getElementById('project-' + newProj);
    project.classList.add("show-overlay");
    curProject = newProj;
}

function fadeOut() {
    project = document.getElementById('project-' + curProject);
    project.classList.remove('show-overlay');
    project.classList.add("hide-overlay");
    curProject = newProj;
} 