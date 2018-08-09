var currentElement = document.getElementById('acc-1');
function expandBar(id) {
    var bar = document.getElementById("acc-" + id);
    if(bar == currentElement) {
        return;
    }
    if(currentElement) {
        currentElement.classList.toggle('expand-style');
        console.log('test')
    }
    bar.classList.toggle('expand-style');
    currentElement = bar;
    console.log('test2');
}