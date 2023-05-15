window.onload = function() {
    localStorage.setItem("data", JSON.stringify(data));
    let parsedData = JSON.parse(localStorage.getItem("data"));

    localStorage.setItem("creativeArts", JSON.stringify(creativeArts));
    let parsedCreativeArts = JSON.parse(localStorage.getItem("creativeArts"));

    localStorage.setItem("naturalSciences", JSON.stringify(naturalSciences));
    let parsedNaturalSciences = JSON.parse(localStorage.getItem("naturalSciences"));

    localStorage.setItem("naturalSciencesLabs", JSON.stringify(naturalSciencesLabs));
    let parsedNaturalSciencesLabs = JSON.parse(localStorage.getItem("naturalSciencesLabs"));

    function showTable(parsedData, tableNum, courseStart, courseNum) {
        var totalHoursFall = 0;
        var totalHoursSpring = 0;
        
        let table =
            `<tr>
                <th class="year" rowspan="9">Year ${tableNum}</th>
                <th class="header" colspan="3">Semester 1 Fall</th>
                <th class="header" colspan="3">Semester 2 Spring</th>
                <th class="header">Total</th>
            </tr>`;

        for (i = courseStart; i < courseNum; i+=2) {
            var clickable1 = parsedData[i - 1].classType === "None" ? "clickable" : "notClickable";
            var clickable2 = parsedData[i].classType === "None" ? "clickable" : "notClickable";

            table += `<tr>
                <td class="${clickable1}" id="i${i-1}">${parsedData[i - 1].num}</td>
                <td class="${clickable1}" id="i${i-1}">${parsedData[i - 1].name}</td>
                <td class="${clickable1}" id="i${i-1}">${parsedData[i - 1].creditHours}</td>
                <td class="${clickable2}" id="i${i}">${parsedData[i].num}</td>
                <td class="${clickable2}" id="i${i}">${parsedData[i].name}</td>
                <td class="${clickable2}" id="i${i}">${parsedData[i].creditHours}</td>
                <td></td>
            </tr>`;
            
            if (parsedData[i - 1].creditHours !== "" && parsedData[i].creditHours != "") {
                totalHoursFall += parsedData[i - 1].creditHours;
                totalHoursSpring += parsedData[i].creditHours;
            }
        }
        
        table += 
            `<tr class="hours">
                <td colspan="2">Semester Hours</td>
                <td>${totalHoursFall}</td>
                <td colspan="2">Semester Hours</td>
                <td>${totalHoursSpring}</td>
                <td style="text-align: center">${totalHoursFall + totalHoursSpring}</td>
            </tr>`

        document.getElementById("table" + tableNum).innerHTML = table;

        var classes = document.getElementsByClassName("clickable");
        for (var i = 0; i < classes.length; i++) {
            classes[i].addEventListener("click", showDescription);
        }
    }
    
    function showDescription() {
        var id = this.id.slice(1);

        let description = 
            `<h3>${parsedData[id].num} - ${parsedData[id].name}</h3>
            <h4>Credit Hours:</h4>
            <p>${parsedData[id].creditHours}</p>
            <hr></hr>
            <h4>Prerequisite:</h4>
            <p>${parsedData[id].prereq}</p><br />
            <h4>Description:</h4>
            <p>${parsedData[id].description}</p><br />
            <h4>Repeatability:</h4>
            <p>${parsedData[id].repeatability}</p>
            `

        var currDescription;

        if (id <= 9) {
            currDescription = document.getElementById("description1");
        }
        else if (id <= 24) {
            currDescription = document.getElementById("description2");
        }
        else if (id <= 32) {
            currDescription = document.getElementById("description3");
        }
        else {
            currDescription = document.getElementById("description4");
        }

        currDescription.innerHTML = description;
        currDescription.classList.add("show");
    }

    function showDropdownDescription(object, myData) {
        var value = object.value;

        if (value !== "default") {
            let description = 
                `<h3>${myData[value].num} - ${myData[value].name}</h3>
                <h4>Credit Hours:</h4>
                <p>${myData[value].creditHours}</p>
                <hr></hr>
                <h4>Prerequisite:</h4>
                <p>${myData[value].prereq}</p><br />
                <h4>Description:</h4>
                <p>${myData[value].description}</p><br />
                <h4>Repeatability:</h4>
                <p>${myData[value].repeatability}</p>
                `

            var currDescription;
            var parent = object.parentNode.parentNode;
            var parentId = parent.id.slice(1);

            if (parentId <= 9) {
                currDescription = document.getElementById("description1");
            }
            else if (parentId <= 24) {
                currDescription = document.getElementById("description2");
            }
            else if (parentId <= 32) {
                currDescription = document.getElementById("description3");
            }
            else {
                currDescription = document.getElementById("description4");
            }

            currDescription.innerHTML = description;
            currDescription.classList.add("show");
        }
    }

    function addCourseSelectors(courseStart, courseNum) {
        for (i = courseStart - 1; i < courseNum; i++) {
            if (parsedData[i].classType === "Creative Arts") {  
                addSpecifiedCourseSelector("creativeArts", parsedCreativeArts);
            }
            else if (parsedData[i].classType === "Natural Sciences") {
                addSpecifiedCourseSelector("naturalSciences", parsedNaturalSciences);
            }
            else if (parsedData[i].classType === "Natural Sciences Lab") {
                addSpecifiedCourseSelector("naturalSciencesLabs", parsedNaturalSciencesLabs);
            }
        }

        addClickToDropdown("creativeArts", parsedCreativeArts);
        addClickToDropdown("naturalSciences", parsedNaturalSciences);
        addClickToDropdown("naturalSciencesLabs", parsedNaturalSciencesLabs);
    }

    function addSpecifiedCourseSelector(className, data) {
        dropdown = 
        `<select class=${className}>
            <option value="default" selected>Select Course</option>`;

        for (y = 0; y < data.length; y++) {
            var myOption = `<option value=${y}>${data[y].num}</option>`;
            dropdown += myOption;
        }

        dropdown += `</select>`

        document.querySelectorAll('#i' + i)[0].innerHTML += dropdown;
    }

    function addClickToDropdown(className, data) {
        var dropdown = document.getElementsByClassName(className);
        for (var i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {
                showDropdownDescription(this.options[this.selectedIndex], data)
            });
        }
    }

    showTable(parsedData, 1, 1, 10);
    addCourseSelectors(1, 10);

    showTable(parsedData, 2, 11, 24);
    addCourseSelectors(11, 24);
    // showTable(parsedData, 3, 23, 10);
    // showTable(parsedData, 4, 34, 10);

    function addEditButton() {
        for (i = 0; i < parsedData.length; i++) {
            var tableData = document.querySelectorAll("#i" + i)[1];
            let editButton = `<button class="edit">Edit</button>`;
            tableData.innerHTML += editButton;
            
            let allEditBtns = document.querySelectorAll(".edit");
            let lastListItem = allEditBtns[allEditBtns.length - 1];

            lastListItem.addEventListener("click", enableEditDescription);
        }
    }

    function enableEditDescription() {
        var allShownDescriptions = document.getElementsByClassName("show");

        for (i = 0; i < allShownDescriptions.length; i++) {
            var descChildren = allShownDescriptions[i].children;
            //Fix this to make prettier; get elements by h3 or p instead
            descChildren[0].setAttribute("contenteditable", true);
            descChildren[2].setAttribute("contenteditable", true);
            descChildren[5].setAttribute("contenteditable", true);
            descChildren[8].setAttribute("contenteditable", true);
            descChildren[11].setAttribute("contenteditable", true);
        }
    }

    addEditButton();
}