var curProject = 0;
function fadeIn(newProj) {
    var project  = document.getElementById('project-' + newProj);
    if (curProject != 0) {
        fadeOut();
    }
    try {
        project.classList.remove('hide-overlay');
    } catch (error) {
    }
    project.classList.add("show-overlay");
    curProject = newProj;
}

function fadeOut() {
    project = document.getElementById('project-' + curProject);
    project.classList.remove('show-overlay');
    project.classList.add("hide-overlay");
    curProject = 0;
} 