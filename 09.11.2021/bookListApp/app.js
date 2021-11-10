
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const booklist = document.querySelector('#book-list');


btn.addEventListener('click', function (e){
    e.preventDefault();

    if(title.value == '' && author.value == '' && year.value== '') {
        alert('Please input your information.');
    } else {

        const newRow = document.createElement('tr');
        newRow.addEventListener("click" ,deleteItem)

        //creating new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        //Creating Ne Author
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        //creating new Year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        //displaying in UI
        booklist.appendChild(newRow);

    }
});
function deleteItem(e) {
    e.stopPropagation();
}

