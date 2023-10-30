
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-form");
    const table = document.getElementById("data-table");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const fname = document.getElementById("firstname").value;
        const lname = document.getElementById("lastname").value;
        const addr = document.getElementById("address").value;
        const pin = document.getElementById("pincode").value;
       //const gndr = document.getElementById("gender").value;
        const selectedOption = document.querySelector('input[name="gender"]:checked').value;
       // console.log(selectedOption);
        const food1 = document.getElementById("food").value;
        const stat = document.getElementById("state").value;
        const ctry = document.getElementById("country").value;
        
        if (fname && lname && addr && pin && selectedOption && stat && ctry) {
            const newRow = table.insertRow(1);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
            const cell6 = newRow.insertCell(5);
            const cell7 = newRow.insertCell(6);
            const cell8 = newRow.insertCell(7);


            cell1.innerHTML = fname;
            cell2.innerHTML = lname;
            cell3.innerHTML = addr;
            cell4.innerHTML = pin;
            cell5.innerHTML = selectedOption;
            cell6.innerHTML = food1;
            cell7.innerHTML = stat;
            cell8.innerHTML = ctry;
            

             //Clear form inputs
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("address").value = "";
            document.getElementById("pincode").value = "";
            //document.getElementById("male").value = "";
            document.querySelector('input[name="gender"]:checked').value= "";
            document.getElementById("food").value = "";
            document.getElementById("state").value = "";
            document.getElementById("country").value = "";
            

        }
    });
});
