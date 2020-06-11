const container = document.querySelector('#container');
const reset = document.querySelector('#reset-btn');

function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            const content = document.createElement('div');
            content.className = 'grid';
            content.setAttribute('style', `width: ${960/x}px; height: ${960/x}px`);
            container.appendChild(content);
    document.querySelectorAll('.grid').forEach(div => div.addEventListener('mouseenter', changeColour));
        }}};

reset.addEventListener('click', () => {
    container.innerHTML = '';
    let clearPopup = prompt("How many squares per side for new grid?")
    removeGrid();
    createGrid(clearPopup);
});

function removeGrid() {
    while (container.lastElementChild) {
        let gridRemove = container.removeChild(container.lastElementChild);
    };
};

function changeColour() {
    this.style.backgroundColor = 'black'
};

createGrid(16)