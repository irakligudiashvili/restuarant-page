export default function createHome(){
    const homeDiv = document.createElement('div');
    const headLine = document.createElement('h1');
    const description = document.createElement('p');

    headLine.innerText = 'Welcome to Our Restaurant';
    description.innerText = 'Best place to enjoy delicious food!';

    homeDiv.appendChild(headLine);
    homeDiv.appendChild(description);

    return homeDiv;
}