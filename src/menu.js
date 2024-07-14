export default function createMenu(){
    const menuDiv = document.createElement('div');
    const headLine = document.createElement('h1');
    const description = document.createElement('p');

    headLine.innerText = 'Our Menu';
    description.innerText = 'Here are our delicious dishes';

    menuDiv.appendChild(headLine);
    menuDiv.appendChild(description);

    return menuDiv;
}