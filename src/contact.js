export default function createContact(){
    const contactDiv = document.createElement('div');
    const headLine = document.createElement('h1');
    const description = document.createElement('p');

    headLine.innerText = 'Contact Us';
    description.innerText = 'Feel free to reach out!';

    contactDiv.appendChild(headLine);
    contactDiv.appendChild(description);

    return contactDiv;
}