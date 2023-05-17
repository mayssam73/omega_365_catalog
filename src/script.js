window.onload = function() {
    let parsedData = JSON.parse(localStorage.getItem("data"));

    if (parsedData === null) {
        localStorage.setItem("data", JSON.stringify(data));
        localStorage.setItem("creativeArts", JSON.stringify(creativeArts));
        localStorage.setItem("naturalSciences", JSON.stringify(naturalSciences));
        localStorage.setItem("naturalSciencesLabs", JSON.stringify(naturalSciencesLabs));
        localStorage.setItem("philosophyCulture", JSON.stringify(philosophyCulture));
        localStorage.setItem("writingDisciplines", JSON.stringify(writingDisciplines));
        localStorage.setItem("socialBehavioral", JSON.stringify(socialBehavioral));
        localStorage.setItem("freeElectives3", JSON.stringify(freeElectives3));
        localStorage.setItem("freeElectives1", JSON.stringify(freeElectives1));
        localStorage.setItem("coscElectives", JSON.stringify(coscElectives));
    }

    parsedData = JSON.parse(localStorage.getItem("data"));
    let parsedCreativeArts = JSON.parse(localStorage.getItem("creativeArts"));
    let parsedNaturalSciences = JSON.parse(localStorage.getItem("naturalSciences"));
    let parsedNaturalSciencesLabs = JSON.parse(localStorage.getItem("naturalSciencesLabs"));
    let parsedPhilosophyCulture = JSON.parse(localStorage.getItem("philosophyCulture"));
    let parsedWritingDisciplines = JSON.parse(localStorage.getItem("writingDisciplines"));
    let parsedSocialBehavioral = JSON.parse(localStorage.getItem("socialBehavioral"));
    let parsedFreeElectives3 = JSON.parse(localStorage.getItem("freeElectives3"));
    let parsedFreeElectives1 = JSON.parse(localStorage.getItem("freeElectives1"));
    let parsedCoscElectives = JSON.parse(localStorage.getItem("coscElectives"));

    function showTable(parsedData, tableNum, courseStart, courseNum) {
        var totalHoursFall = 0;
        var totalHoursSpring = 0;
        
        let table =
            `<tr>
                <th class="year" rowspan="9">Year ${tableNum}</th>
                <th class="header semester" colspan="3">Semester 1 Fall</th>
                <th class="header semester" colspan="3">Semester 2 Spring</th>
                <th class="header">Total</th>
            </tr>`;

        for (i = courseStart; i < courseNum; i+=2) {
            var clickable1 = parsedData[i - 1].classType === "None" ? "clickable" : "notClickable";
            var clickable2 = parsedData[i].classType === "None" ? "clickable" : "notClickable";

            table += `<tr>
                <td class="${clickable1}" id="i${i-1}">${parsedData[i - 1].num}</td>
                <td class="${parsedData[i - 1].year} ${parsedData[i - 1].semester}" id="i${i-1}">${parsedData[i - 1].name}</td>
                <td id="i${i-1}">${parsedData[i - 1].creditHours}</td>
                <td class="${clickable2}" id="i${i}">${parsedData[i].num}</td>
                <td class="${parsedData[i].year} ${parsedData[i].semester}" id="i${i}">${parsedData[i].name}</td>
                <td id="i${i}">${parsedData[i].creditHours}</td>
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

        if (parsedData[id].year === 1) {
            currDescription = document.getElementById("description1");
        }
        else if (parsedData[id].year === 2) {
            currDescription = document.getElementById("description2");
        }
        else if (parsedData[id].year === 3) {
            currDescription = document.getElementById("description3");
        }
        else if (parsedData[id].year === 4){
            currDescription = document.getElementById("description4");
        }

        var prevDescription = document.getElementsByClassName("show");
        if (prevDescription[0] !== undefined) {
            prevDescription[0].classList.replace("show", "hide");
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

            if (parsedData[parentId].year === 1) {
                currDescription = document.getElementById("description1");
            }
            else if (parsedData[parentId].year === 2) {
                currDescription = document.getElementById("description2");
            }
            else if (parsedData[parentId].year === 3) {
                currDescription = document.getElementById("description3");
            }
            else if (parsedData[parentId].year === 4){
                currDescription = document.getElementById("description4");
            }

            var prevDescription = document.getElementsByClassName("show");
            if (prevDescription[0] !== undefined) {
                prevDescription[0].classList.replace("show", "hide");
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
            else if (parsedData[i].classType === "Philosophy Culture") {
                addSpecifiedCourseSelector("philosophyCulture", parsedPhilosophyCulture);
            }
            else if (parsedData[i].classType === "Writing Disciplines") {
                addSpecifiedCourseSelector("writingDisciplines", parsedWritingDisciplines);
            }
            else if (parsedData[i].classType === "Social Behavioral") {
                addSpecifiedCourseSelector("socialBehavioral", parsedSocialBehavioral);
            }
            else if (parsedData[i].classType === "Free Electives 3") {
                addSpecifiedCourseSelector("freeElectives3", parsedFreeElectives3);
            }
            else if (parsedData[i].classType === "Free Electives 1") {
                addSpecifiedCourseSelector("freeElectives1", parsedFreeElectives1);
            }
            else if (parsedData[i].classType === "COSC Electives") {
                addSpecifiedCourseSelector("coscElectives", parsedCoscElectives);
            }
        }

        addClickToDropdown("creativeArts", parsedCreativeArts);
        addClickToDropdown("naturalSciences", parsedNaturalSciences);
        addClickToDropdown("naturalSciencesLabs", parsedNaturalSciencesLabs);
        addClickToDropdown("philosophyCulture", parsedPhilosophyCulture);
        addClickToDropdown("writingDisciplines", parsedWritingDisciplines);
        addClickToDropdown("socialBehavioral", parsedSocialBehavioral);
        addClickToDropdown("freeElectives3", parsedFreeElectives3);
        addClickToDropdown("freeElectives1", parsedFreeElectives1);
        addClickToDropdown("coscElectives", parsedCoscElectives);
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

    function addEditButton() {
        for (i = 0; i < parsedData.length; i++) {
            var tableData = document.querySelectorAll("#i" + i)[1];
            let editButton = `<button class="edit" id="e${i}">Edit</button>`;
            tableData.innerHTML += editButton;
        }

        addClickToEdit();
    }

    function addClickToEdit() {
        let allEditBtns = document.getElementsByClassName("edit");
        for (var i = 0; i < allEditBtns.length; i++) {
            var tableData = document.getElementById("i" + i);
            var selectChild = tableData.getElementsByTagName("select")[0];

            if (selectChild === undefined) {
                allEditBtns[i].addEventListener("click", showDescription);
            }
            else{
                var data;

                if (selectChild.className === "creativeArts") {  
                    data = parsedCreativeArts;
                }
                else if (selectChild.className === "naturalSciences") {
                    data = parsedNaturalSciences;
                }
                else if (selectChild.className === "naturalSciencesLabs") {
                    data = parsedNaturalSciencesLabs;
                }
                else if (selectChild.className === "philosophyCulture") {
                    data = parsedPhilosophyCulture;
                }
                else if (selectChild.className === "writingDisciplines") {
                    data = parsedWritingDisciplines;
                }
                else if (selectChild.className === "socialBehavioral") {
                    data = parsedSocialBehavioral;
                }
                else if (selectChild.className === "freeElectives3") {
                    data = parsedFreeElectives3;
                }
                else if (selectChild.className === "freeElectives1") {
                    data = parsedFreeElectives1;
                }
                else if (selectChild.className === "coscElectives") {
                    data = parsedCoscElectives;
                }

                selectChild.addEventListener("click", function() {
                    showDropdownDescription(selectChild.options[selectChild.selectedIndex], data)
                });
            }
            
            allEditBtns[i].addEventListener("click", enableEditDescription);
        }
    }

    function enableEditDescription() {
        var id = this.id.slice(1);
        var shownDescription = document.getElementsByClassName("show")[0];
        
        if (shownDescription !== undefined) {
            let submitButton = `<br><br><button class="submit">Submit</button>`;
            var submitBtnExists = document.getElementsByClassName("submit")[0];
            if (submitBtnExists !== undefined) {    
                submitBtnExists.previousSibling.remove();
                submitBtnExists.previousSibling.remove();   
                submitBtnExists.remove();
            }

            shownDescription.innerHTML += submitButton;

            addClickToSubmit(id, shownDescription);
    
            var editable = [0, 2, 5, 8, 11];
            var descChildren = shownDescription.children;
    
            for (i = 0; i < editable.length; i++) {  
                descChildren[editable[i]].setAttribute("contenteditable", true);
            }
        }
    }

    function addClickToSubmit(id, description) {
        let submitBtn = document.getElementsByClassName("submit")[0];
        submitBtn.addEventListener("click", function () {
            saveEditedChanges(id, description)
        });
    }

    function saveEditedChanges(id, description) {
        var splitNumName = description.children[0].innerHTML.trim().split("-");
        
        parsedData[id].num = splitNumName[0];
        parsedData[id].name = splitNumName[1];
        parsedData[id].creditHours = description.children[2].innerHTML;
        parsedData[id].prereq = description.children[5].innerHTML;
        parsedData[id].description = description.children[8].innerHTML;
        parsedData[id].repeatability = description.children[11].innerHTML;

        var displayedClassInfo = document.querySelectorAll("#i" + id);
        if (parsedData[id].classType === "None") {
            displayedClassInfo[0].innerHTML = splitNumName[0];
        }
        else {
            splitTextDropdown(displayedClassInfo, splitNumName[0], 0);
        }
        splitTextDropdown(displayedClassInfo, splitNumName[1], 1);
        splitTextDropdown(displayedClassInfo, parsedData[id].creditHours, 2);

        localStorage.setItem("data", JSON.stringify(parsedData));
    }

    function splitTextDropdown(displayedClassInfo, splitNumName, index) {
        var split = displayedClassInfo[index].innerHTML.trim().split("<");
        if (split[0] !== "") {
            displayedClassInfo[index].removeChild(displayedClassInfo[index].firstChild);
        }
        
        displayedClassInfo[index].insertAdjacentHTML("afterbegin", splitNumName);
    }

    function addDeleteButton() {
        for (i = 0; i < parsedData.length; i++) {
            var tableData = document.querySelectorAll("#i" + i)[2];
            let deleteButton = `<button class="delete" id="d${i}">🗑️</button>`;
            tableData.innerHTML += deleteButton;
        }

        addClickToDelete();
    }

    function addClickToDelete() {
        let allDeleteBtns = document.getElementsByClassName("delete");
        for (var i = 0; i < allDeleteBtns.length; i++) {
            allDeleteBtns[i].addEventListener("click", deleteRow);
        }
    }

    function deleteRow() {
        var id = parseInt(this.id.slice(1));
        var currCell = document.querySelectorAll("#i" + id);
        var semester = currCell[1].className[2];
        
        if (semester == 1 && parsedData[id + 1].num === "" && parsedData[id + 1].name === "" && parsedData[id + 1].creditHours === "") {
            currCell[0].parentElement.remove();
        }
        else if (semester == 2 && parsedData[id - 1].num === "" && parsedData[id - 1].name === "" && parsedData[id - 1].creditHours === "") {
            currCell[0].parentElement.remove();
        }
        else {
            if (parsedData[id].classType === "None") {
                currCell[0].innerHTML = "";
            }
            else {
                splitTextDropdown(currCell, "", 0);
                splitTextDropdown(currCell, "", 1);
                splitTextDropdown(currCell, "", 2);
            }
        }
    }

    showTable(parsedData, 1, 1, 10);
    addCourseSelectors(1, 10);

    showTable(parsedData, 2, 11, 24);
    addCourseSelectors(11, 24);

    showTable(parsedData, 3, 25, 36);
    addCourseSelectors(25, 36);
    
    showTable(parsedData, 4, 37, 46);
    addCourseSelectors(37, 46);

    addEditButton();
    addDeleteButton();
}