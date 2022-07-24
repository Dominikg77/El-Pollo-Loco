let allTasks = [];
let assignedEmployees = [];
let date = new Date();
let currentHours = date.getHours();
let currenMinutes = date.getMinutes();
currentHours = ("0" + currentHours).slice(-2);
let today = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' || ' + currentHours + ':' + date.getMinutes();
let EmployeesArray = [{
        'bild-src': 'img/dominik.png',
        'e-mail': 'dominik.graf2001@gmail.com',
        'name': 'Dominik Graf',
        'position': 'Software Developer'
    },
    {
        'bild-src': 'img/armin.jpg',
        'e-mail': 'zachotzki86@gmail.com',
        'name': 'Armin Zachotzki',
        'position': 'Software Developer'
    },
];

/**
 * This function references to the inputfields elements and assings the values to an Json object and stores the Json object in an array. The array is stored in the in the Backend.
 * 
 */
async function createTask() {
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let catergory = document.getElementById('catergory');
    let text = document.getElementById('text');
    let urgency = document.getElementById('urgency');
    let task = {
        'title': title.value,
        'date': date.value,
        'catergory': catergory.value,
        'text': text.value.replace(/\n\r?/g, "<br/>"),
        'urgency': urgency.value,
        'UnixStamp': new Date().getTime(),
        'createdAt': today,
        'assignEmployee': assignedEmployees,
        'inArray': 'toDo'
    }
    if (assignedEmployees.length == 0) {
        alert('Please add employee!')
    } else if (text.value == '') {
        alert('Please enter a description!')
    } else if (title.value == '') {
        alert('Please enter a title!')
    } else if (catergory.value == '') {
        alert('Please enter a catergory!')
    } else if (urgency.value == '') {
        alert('Please enter a state of urgency!')
    } else if (date.value == '') {
        alert('Please enter a Date!')
    } else {
        allTasks.push(task);
        await backend.setItem('allTasks', JSON.stringify(allTasks));
        title.value = ''
        date.value = '';
        catergory.value = '';
        text.value = '';
        urgency.value = '';
        assignEmployee = '';
        location.reload();
    }
}

/**
 * This function accesesses the available Employees and renders each profile in its own HTML element.
 * 
 */
function Employees() {
    let modal_body = document.getElementById('modal-body');
    modal_body.innerHTML = '';
    for (let i = 0; i < EmployeesArray.length; i++) {
        const element = EmployeesArray[i];
        modal_body.innerHTML += `
            <div class="modal-profile" onclick="assigningEmployees(${i}); this.onclick = null;" id="employee_${i}">
                <div class=modal-profile-column1>
                    <img src="${element['bild-src']}" alt="" class="modal-profile-image">
                    <span class="email" href="#">${element['e-mail']}</span>
                </div>
                <div class=modal-profile-column2>
                    <span>${element['name']}</span>
                    <span class="job-position">${element['position']}</span>
                </div>
            </div>`;
    }
}


// When the user clicks on Id popup(number), it opens the popup
function popup(i) {
    let popup = document.getElementById("myPopup" + i);
    popup.classList.toggle("show");
}

// When the user clicks on Id popup(number), it closes the popup
function close_popup(i) {
    let popup = document.getElementById("myPopup" + i);
    popup.classList.remove("show");
}

/**
 * 
 * @param {number} i //This paramter gives each employee its own number so that the funtion scope is only for the seleted employee 
 * The function creates a HTML element for the selected Employee and pushes is value in an array so that in can be accsessed from the backend. 
 */
//  let staff_member = document.getElementById(`employee_${i}`);
function assigningEmployees(i) {
    let profile_pictures = document.getElementById('profile_pictures');
    profile_pictures.innerHTML += `
     <div class="popup" onclick="popup(${i})">
        <img src="${EmployeesArray[i]['bild-src']}" class="profile-picture">
        <div class="popuptext" id="myPopup${i}">
            ${EmployeesArray[i]['name']}<br>
            ${EmployeesArray[i]['position']}<br>
            ${EmployeesArray[i]['e-mail']}
        </div>
     </div>
    `;
    assignedEmployees.push(EmployeesArray[i]);
}

/**
 * This function opens a Modal overlay
 * 
 */
function openModal() {
    let modal = document.getElementById('modal');
    let overlay = document.getElementById('overlay');
    modal.classList.remove('d-none')
    overlay.classList.remove('d-none')
    Employees();
}

/**
 * This function closes the Modal overlay
 * 
 */
function closeModal() {
    let modal = document.getElementById('modal');
    let overlay = document.getElementById('overlay');
    modal.classList.add('d-none')
    overlay.classList.add('d-none')
}


/**
 * This function deletes all the values of all inputfields and also of the array with the assigned employees
 */
function clearTask() {
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('catergory').value = '';
    document.getElementById('text').value = '';
    document.getElementById('urgency').value = '';
    profile_pictures.innerHTML = '';

}