var contacts = [];

function Person(firstName, lastName, phoneNumber, email) {
    "use strict";
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
}

window.onload = function () {
    "use strict";
    $("addperson").onclick = add;
    $("search").onclick = search;
    $("scanitem").onclick = scan;
    $("deleteitem").onclick = voidLastTransaction;
    $("discount").onclick = member;
    var i;
    for (i = 0; i < contacts.length; i++) {
        new TablePerson(contacts[i], i + 1);
    }
};

function search() {
    "use strict";
    var i;
    var search = $("search_box").value;
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].lastName === search) {
            $("output").textContent = "Person found: " + Object.values(contacts[i]);
        }
        else {
            $("output").textContent = "Person not found";
        }
    }
};

function add() {
    "use strict";
    var firstName = $("firstname_box").value;
    var lastName = $("lastname_box").value;
    var phoneNumber = $("phonenumber_box").value;
    var email = $("email_box").value;
    var newPerson = new Person(firstName, lastName, phoneNumber, email);
    contacts.push(newPerson);
    list();
    TablePerson(newPerson, contacts.length);
    $("firstname_box").value = "";
    $("lastname_box").value = "";
    $("phonenumber_box").value = "";
    $("email_box").value = "";
};

function TablePerson(element, pos) {
    "use strict";
    var table = document.getElementById("person_table");
    var row = table.insertRow(pos);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = element.firstName;
    cell2.innerHTML = element.lastName;
    cell3.innerHTML = element.phoneNumber;
    cell4.innerHTML = element.email;
}

function list() {
    "use strict";
    var i;
    for (i = 0; i <contacts.length; i++) {
        $("output").textContent = "New Person added: " + Object.values(contacts[i]);
    }
}

var total = 0;
var lastTransactionAmount = 0;

function StaffMember(name, discountPercent) {
    "use strict";
    this.name = name;
    this.discountPercent = discountPercent;
}

function member() {
    "use strict";
    var name = $("staffname").value;
    var discountPercent = $("staffdiscount").value;
    var member = new StaffMember(name, discountPercent);
    applyStaffDiscount(member);
}
    
function scan() {
    "use strict";
    var itemName = $("itemname_box").value;
    var quantity = $("quantity_box").value;
    $("outcash").textContent = "The total is: " + total.toFixed(2);
    switch (itemName) {
    case "egg":
        total += (0.98 * quantity);
        lastTransactionAmount = (0.98 * quantity);
        $("outcash").textContent = "The new total is: " + total.toFixed(2);
            break;
    case "milk":
        total += (1.23 * quantity);
        lastTransactionAmount = (1.23 * quantity);
        $("outcash").textContent = "The new total is: " + total.toFixed(2);
        break;
    case "magazine":
        total += (4.99 * quantity);
        lastTransactionAmount = (4.99 * quantity);
        $("outcash").textContent = "The new total is: " + total.toFixed(2);
        break;
    case "chocolate":
        total += (0.45 * quantity);
        lastTransactionAmount = (0.45 * quantity);
        $("outcash").textContent = "The new total is: " + total.toFixed(2);
        break;
    default:
        $("outcash").textContent = "This item is not in the list.";
    }
}

function voidLastTransaction() {
    "use strict";
    total -= lastTransactionAmount;
    lastTransactionAmount = 0;
    $("outcash").textContent = "The new total is: " + total.toFixed(2);
}
    
function applyStaffDiscount(member) {
    "use strict";
    total -= total * (member.discountPercent / 100);
    $("outcash").textContent = "The new discounted total is: " + total.toFixed(2);
}


