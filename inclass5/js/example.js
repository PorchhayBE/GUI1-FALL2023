const list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST
const newItemLast = document.createElement('li');
const newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// ADD NEW ITEM START OF LIST
const newItemFirst = document.createElement('li');
const newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
const listitem = document.getElementsByTagName('li');
for (let i = 0; i < listitem.length; i++) {
    listitem[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
const heading = document.querySelector('h2');
const headingText = heading.firstChild.nodeValue;
const totalItems = listitem.length;
const newHeading = `${headingText}<span>${totalItems}</span>`;
heading.innerHTML = newHeading;