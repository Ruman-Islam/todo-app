
const itemInput = document      // item input field
    .querySelector('.item__input');
let tableBody = document
    .querySelector('.table__body');


function addItem() {
    tableBody.innerHTML = `
    <tr>
        <th class="description">${itemInput.value}</th>
        <td>In Progress</td>
        <td>
            <button class="btn btn-success" onclick="doneDeleteItems(this, 'Done')">Done</button>
            <button class="btn btn-danger" onclick="doneDeleteItems(this, 'none')">Delete</button>
            <button class="btn btn-warning" onclick="editItem(this)">Edit</button>
            <input id="edit__input" class="d-none" placeholder="Edit here..">
        </td>
    </tr>
    ` + tableBody.innerHTML;
    itemInput.value = '';
    console.log('clicked');
}

function doneDeleteItems(thisBtn, cssProperty) {
    thisBtn.parentNode.parentNode.childNodes[3].innerText = cssProperty;
    thisBtn.parentNode.parentNode.style.display = cssProperty;
}

function editItem(thisBtn) {
    const editInput = thisBtn.parentNode.childNodes[7];
    const description = thisBtn.parentNode.parentNode.childNodes[1];
    if (thisBtn.innerText === 'Edit') {
        editInput.removeAttribute('class', 'd-none');
        editInput.value = description.innerText;
        thisBtn.innerText = 'Update';
    } else if (thisBtn.innerText === 'Update') {
        description.innerText = editInput.value;
        editInput.setAttribute('class', 'd-none');
        editInput.value = '';
        thisBtn.innerText = 'Edit';
    }
}