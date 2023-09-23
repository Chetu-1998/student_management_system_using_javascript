var selectedRow = null

function onFormSubmit(){ 
    var formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData);
    }    
        resetForm();
}  



function readFormData(){
    var formData = {}; 
    formData["fullName"] =  document.getElementById("fullName").value;
    formData["rollNo"] =  document.getElementById("rollNo").value;
    let selectedCheckbox = [];
    let streamData = document.getElementsByName("Stream");
    for(let i = 0; i < streamData.length; i++){
        if(streamData[i].checked){
            selectedCheckbox.push(streamData[i].value)
        }
    } 
    formData["Stream"] =  selectedCheckbox;
    formData["subject"] =  document.getElementById("subject").value;
    let selectedRadio = [];
    let yearData = document.getElementsByName("year");
    for (let i = 0; i < yearData.length; i++){
        if(yearData[i].checked){
            selectedRadio.push(yearData[i].value);
        }
    }
    formData["year"] =  selectedRadio;
    formData["contact"] =  document.getElementById("contact").value;
    formData["Age"] =  document.getElementById("Age").value;
    formData["email"] =  document.getElementById("email").value;

    let genderChecked = [];
    let selectedGender = document.getElementsByName("gender");
    for (let i = 0; i < selectedGender.length ;i++){
        if(selectedGender[i].checked){
            genderChecked.push(selectedGender[i].value);
        }
    }
    formData["gender"] =  genderChecked;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Stream;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.subject;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.year;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.contact;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Age;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.email;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.gender;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a onClick="onEdit(this)">Edit</a> <a onClick="onDelete(this)">Delete</a>`;

}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollNo").value = selectedRow.cells[1].innerHTML;
    document.getElementsByName("Stream").value = selectedRow.cells[2].innerHTML;
    document.getElementById("subject").value = selectedRow.cells[3].innerHTML;
    document.getElementsByName("year").value = selectedRow.cells[4].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[5].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[6].innerHTML;
    document.getElementById("email").value = selectedRow.cells[7].innerHTML;
    document.getElementsByName("gender").value = selectedRow.cells[8].innerHTML;
    
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.rollNo;
    selectedRow.cells[2].innerHTML = formData.Stream;
    selectedRow.cells[3].innerHTML = formData.subject;
    selectedRow.cells[4].innerHTML = formData.year;
    selectedRow.cells[5].innerHTML = formData.contact;
    selectedRow.cells[6].innerHTML = formData.Age;
    selectedRow.cells[7].innerHTML = formData.email;
    selectedRow.cells[8].innerHTML = formData.gender;
}



function onDelete(td){
    if(confirm("Are you sure u want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementsByName("Stream").value = "";
    document.getElementById("subject").value = "";
    document.getElementsByName("year").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("email").value = "";
    document.getElementsByName("gender").value = "";
}

