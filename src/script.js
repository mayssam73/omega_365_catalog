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
        localStorage.setItem("addedClasses", JSON.stringify(addedClasses));
        localStorage.setItem("allNewDegreePlans", JSON.stringify(allNewDegreePlans));
    }

    parsedData = JSON.parse(localStorage.getItem("data")).ddefault;
    let parsedCreativeArts = JSON.parse(localStorage.getItem("creativeArts"));
    let parsedNaturalSciences = JSON.parse(localStorage.getItem("naturalSciences"));
    let parsedNaturalSciencesLabs = JSON.parse(localStorage.getItem("naturalSciencesLabs"));
    let parsedPhilosophyCulture = JSON.parse(localStorage.getItem("philosophyCulture"));
    let parsedWritingDisciplines = JSON.parse(localStorage.getItem("writingDisciplines"));
    let parsedSocialBehavioral = JSON.parse(localStorage.getItem("socialBehavioral"));
    let parsedFreeElectives3 = JSON.parse(localStorage.getItem("freeElectives3"));
    let parsedFreeElectives1 = JSON.parse(localStorage.getItem("freeElectives1"));
    let parsedCoscElectives = JSON.parse(localStorage.getItem("coscElectives"));
    let parsedAddedClasses = JSON.parse(localStorage.getItem("addedClasses"));
    let parsedAllNewDegreePlans = JSON.parse(localStorage.getItem("allNewDegreePlans"));

    function showTable(parsedData, tableNum, year, firstSemId, secondSemId) {
        var totalHoursFall = 0;
        var totalHoursSpring = 0;
        
        let table =
            `<tr>
                <th class="year" rowspan="9">Year ${tableNum}</th>
                <th class="header semester" colspan="3">Semester 1 Fall</th>
                <th class="header semester" colspan="3">Semester 2 Spring</th>
                <th class="header">Total</th>
            </tr>`;

        for (i = 1; i < parsedData.length; i+=2) {
            if (parsedData[i - 1].year === year) {
                var clickable1 = parsedData[i - 1].classType === "None" ? "clickable" : "notClickable";
                var clickable2 = parsedData[i].classType === "None" ? "clickable" : "notClickable";
    
                table += `<tr>
                    <td class="${clickable1} cell" id="i${i-1}">${parsedData[i - 1].num}</td>
                    <td class="${parsedData[i - 1].year} ${parsedData[i - 1].semester} cell" id="i${i-1}">${parsedData[i - 1].name}</td>
                    <td class="cell" id="i${i - 1}">${parsedData[i - 1].creditHours}</td>
                    <td class="${clickable2} cell" id="i${i}">${parsedData[i].num}</td>
                    <td class="${parsedData[i].year} ${parsedData[i].semester} cell" id="i${i}">${parsedData[i].name}</td>
                    <td class="cell" id="i${i}">${parsedData[i].creditHours}</td>
                    <td></td>
                </tr>`;
                
                if (parsedData[i - 1].creditHours !== "" && parsedData[i].creditHours != "") {
                    totalHoursFall += parsedData[i - 1].creditHours;
                    totalHoursSpring += parsedData[i].creditHours;
                }
            }
        }
        
        table += 
            `<tr class="hours">
                <td id="s${firstSemId}" colspan="2">Semester Hours</td>
                <td>${totalHoursFall}</td>
                <td id="s${secondSemId}" colspan="2">Semester Hours</td>
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

        var currDescription = document.getElementById("description" + parsedData[id].year);

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

            var parent = object.parentNode.parentNode;
            var parentId = parent.id.slice(1);
            var currDescription = document.getElementById("description" + parsedData[parentId].year);

            var prevDescription = document.getElementsByClassName("show");
            if (prevDescription[0] !== undefined) {
                prevDescription[0].classList.replace("show", "hide");
            }    

            currDescription.innerHTML = description;
            currDescription.classList.add("show");
        }
    }

    function addCourseSelectors() {
        for (i = 0; i < parsedData.length; i++) {
            if (parsedData[i].classType === "Creative Arts") {  
                addSpecifiedCourseSelector("creativeArts", parsedCreativeArts, i);
            }
            else if (parsedData[i].classType === "Natural Sciences") {
                addSpecifiedCourseSelector("naturalSciences", parsedNaturalSciences, i);
            }
            else if (parsedData[i].classType === "Natural Sciences Lab") {
                addSpecifiedCourseSelector("naturalSciencesLabs", parsedNaturalSciencesLabs, i);
            }
            else if (parsedData[i].classType === "Philosophy Culture") {
                addSpecifiedCourseSelector("philosophyCulture", parsedPhilosophyCulture, i);
            }
            else if (parsedData[i].classType === "Writing Disciplines") {
                addSpecifiedCourseSelector("writingDisciplines", parsedWritingDisciplines, i);
            }
            else if (parsedData[i].classType === "Social Behavioral") {
                addSpecifiedCourseSelector("socialBehavioral", parsedSocialBehavioral, i);
            }
            else if (parsedData[i].classType === "Free Electives 3") {
                addSpecifiedCourseSelector("freeElectives3", parsedFreeElectives3, i);
            }
            else if (parsedData[i].classType === "Free Electives 1") {
                addSpecifiedCourseSelector("freeElectives1", parsedFreeElectives1, i);
            }
            else if (parsedData[i].classType === "COSC Electives") {
                addSpecifiedCourseSelector("coscElectives", parsedCoscElectives, i);
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

    function addSpecifiedCourseSelector(className, data, id) {
        dropdown = 
        `<select class=${className}>
            <option value="default" selected>Select Course</option>`;

        for (y = 0; y < data.length; y++) {
            var myOption = `<option value=${y}>${data[y].num}</option>`;
            dropdown += myOption;
        }

        dropdown += `</select>`
        
        document.querySelectorAll('#i' + id)[0].innerHTML += dropdown;
    }

    function addClickToDropdown(className, data) {
        var dropdown = document.getElementsByClassName(className);
        for (var i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {
                showDropdownDescription(this.options[this.selectedIndex], data)
            });
        }
    }

    function addEditButtons() {
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

    function addDeleteButtons() {
        for (i = 0; i < parsedData.length; i++) {
            var tableData = document.querySelectorAll("#i" + i)[2];
            let deleteButton = `<button class="delete" id="d${i}">🗑️</button>`;
            tableData.innerHTML += deleteButton;
            
            addClickToDelete(i);
        }
    }

    function addClickToDelete() {
        let allDeleteBtns = document.getElementsByClassName("delete");
        for (let i = 0; i < allDeleteBtns.length; i++) {
            allDeleteBtns[i].addEventListener("click", e => {
                if (e.target.matches(".delete")) {
                    deleteRow(i);
                }
            });
        }
    }

    function deleteRow(id) {
        console.log(id);
        var currCell = document.querySelectorAll("#i" + id);
        var semester = currCell[1].className[2];
        
        if (semester == 1 && parsedData[id + 1].num === "" && parsedData[id + 1].name === "" && parsedData[id + 1].creditHours === "") {
            currCell[0].parentElement.remove();
            parsedData.splice(id, 2);
            resetIds();
        }
        else if (semester == 2 && parsedData[id - 1].num === "" && parsedData[id - 1].name === "" && parsedData[id - 1].creditHours === "") {
            currCell[0].parentElement.remove();
            parsedData.splice(id - 1, 2);
            console.log(parsedData)
            resetIds();
        }
        else {
            if (parsedData[id].classType === "None") {
                currCell[0].innerHTML = "";
            }
            else {
                splitTextDropdown(currCell, "", 0);
            }
            splitTextDropdown(currCell, "", 1);
            splitTextDropdown(currCell, "", 2);
            
            parsedData[id].num = "";
            parsedData[id].name = "";
            parsedData[id].creditHours = "";
            parsedData[id].prereq = "";
            parsedData[id].description = "";
        }

        localStorage.setItem("data", JSON.stringify(parsedData));
    }

    function resetIds() {
        var allTableCells = document.getElementsByClassName("cell");
        var allEditBtns = document.getElementsByClassName("edit");
        var allDeleteBtns = document.getElementsByClassName("delete");
        var x = 0;

        for (i = 0; i < allTableCells.length; i+=3) {
            allTableCells[i].id = "i" + x;
            allTableCells[i + 1].id = "i" + x;
            allTableCells[i + 2].id = "i" + x;

            x++;
        }

        for (i = 0; i < allEditBtns.length; i++) {
            allEditBtns[i].id = "e" + i;
            allDeleteBtns[i].id = "d" + i;
        }
    }

    function addAddButtons() {
        var semesterHeaders = document.getElementsByClassName("semester");
        for (i = 0; i < semesterHeaders.length; i++) {
            var addButton = `<button class="add" id="a${i}">Add</button>`
            semesterHeaders[i].innerHTML += addButton;
        }

        addClickToAdd();
    }

    function addClickToAdd() {
        let allAddBtns = document.getElementsByClassName("add");
        for (var i = 0; i < allAddBtns.length; i++) {
            allAddBtns[i].addEventListener("click", openAddModal);
        }
    }

    var modalWrap = null;

    function openAddModal() {
        var id = this.id.slice(1);

        if (modalWrap !== null) {
            modalWrap.remove();
        }

        modalWrap = document.createElement("div");
        let modalHTML = `
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel">Add New Course</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <select class="addSelect">
                        <option value="default" selected>Select Course</option>`;

        for (i = 0; i < parsedAddedClasses.length; i++) {
            var myOption = `<option value=av${i}>${parsedAddedClasses[i].num}</option>`
            modalHTML += myOption;
        }

        modalHTML += `
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary saveAdd">Add New Course</button>
                </div>
                </div>
            </div>
            </div>`
        
        modalWrap.innerHTML = modalHTML;
        document.body.append(modalWrap);

        var modal = new bootstrap.Modal(document.getElementById("addModal"));
        modal.show();

        addClickToSaveAdd(modal, id);
    }

    function addClickToSaveAdd(modal, id) {
        let saveBtn = document.getElementsByClassName("saveAdd")[0];
        saveBtn.addEventListener("click", function() {
            onSaveAdd(modal, id)
        });
    }

    function onSaveAdd(modal, id) {
        var select = document.getElementsByClassName("addSelect")[0];
        var selectedCourseId = select.options[select.selectedIndex].value.slice(2);
        var currSemester = document.getElementById("s" + id);
        var prevCourse = currSemester.parentElement.previousElementSibling.children;
        var newRow;
        var yearId = Math.floor(id/2) + 1;

        if (id % 2 == 0) {
            var courseName = prevCourse[1].innerHTML.trim().split("<");
            var creditHours = prevCourse[2].innerHTML.trim().split("<");
            if (prevCourse[0].innerHTML === "" || courseName[0] === "" || creditHours[0] === "") {
                prevCourse[0].innerHTML = parsedAddedClasses[selectedCourseId].num;
                splitTextDropdown(prevCourse, parsedAddedClasses[selectedCourseId].name, 1);
                splitTextDropdown(prevCourse, parsedAddedClasses[selectedCourseId].creditHours, 2);
            }
            else {
                newRow = document.createElement("tr");
                newRow.innerHTML += `
                    <td class="clickable cell">${parsedAddedClasses[selectedCourseId].num}</td>
                    <td class="${yearId} ${1} cell">${parsedAddedClasses[selectedCourseId].name}<button class="edit" id="e${i}">Edit</button></td>
                    <td class="cell">${parsedAddedClasses[selectedCourseId].creditHours}<button class="delete" id="d${i}">🗑️</button></td>
                    <td class="clickable cell"></td>
                    <td class="${yearId} ${2} cell"><button class="edit" id="e${i}">Edit</button></td>
                    <td class="cell"><button class="delete" id="d${i}">🗑️</button></td>
                    <td></td>`

                    currSemester.parentNode.parentNode.insertBefore(newRow, currSemester.previousSibling.parentNode);

                    var year = document.getElementsByClassName("year");
                    for (i = 0; i < year.length; i++) {
                        year[i].setAttribute("rowspan", parseInt(year[i].getAttribute("rowspan")) + 1);
                    }
            }
        }
        else {
            var courseName = prevCourse[4].innerHTML.trim().split("<");
            var creditHours = prevCourse[5].innerHTML.trim().split("<");
            if (prevCourse[3].innerHTML === "" || courseName[0] === "" || creditHours[0] === "") {
                prevCourse[3].innerHTML = parsedAddedClasses[selectedCourseId].num;
                splitTextDropdown(prevCourse, parsedAddedClasses[selectedCourseId].name, 4);
                splitTextDropdown(prevCourse, parsedAddedClasses[selectedCourseId].creditHours, 5);
            }
            else {
                newRow = document.createElement("tr");
                newRow.innerHTML += `
                    <td class="clickable cell"></td>
                    <td class="${yearId} ${1} cell"><button class="edit" id="e${i}">Edit</button></td>
                    <td class="cell"><button class="delete">🗑️</button></td>
                    <td class="clickable cell">${parsedAddedClasses[selectedCourseId].num}</td>
                    <td class="${yearId} ${2} cell">${parsedAddedClasses[selectedCourseId].name}<button class="edit" id="e${i}">Edit</button></td>
                    <td class="cell">${parsedAddedClasses[selectedCourseId].creditHours}<button class="delete" id="d${i}">🗑️</button></td>
                    <td></td>`

                    currSemester.parentNode.parentNode.insertBefore(newRow, currSemester.previousSibling.parentNode);

                    var year = document.getElementsByClassName("year");
                    for (i = 0; i < year.length; i++) {
                        year[i].setAttribute("rowspan", parseInt(year[i].getAttribute("rowspan")) + 1);
                    }
            }
        }

        resetIds();

        modal.hide();
    }

    function addClickToNew() {
        var newButton = document.getElementsByClassName("new")[0];
        newButton.addEventListener("click", openNewModal);
    }

    function openNewModal() {
        if (modalWrap !== null) {
            modalWrap.remove();
        }

        modalWrap = document.createElement("div");
        let modalHTML = `
        <div class="modal fade" id="newModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel">Create New Course</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <label for="course-num" class="col-form-label">Course Number:</label>
                        <input required type="text" class="form-control" id="course-num">
                        <label for="course-name" class="col-form-label">Course Name:</label>
                        <input required type="text" class="form-control" id="course-name">
                        <label for="course-credit-hours" class="col-form-label">Course Credit Hours:</label>
                        <input required type="number" class="form-control" id="course-credit-hours">
                        <label for="course-prereq" class="col-form-label">Course Prerequisites:</label>
                        <textarea class="form-control" id="course-prereq"></textarea>
                        <label for="course-description" class="col-form-label">Course Description:</label>
                        <textarea class="form-control" id="course-description"></textarea>
                        <label for="course-repeatability" class="col-form-label">Course Repeatability:</label>
                        <input type="text" class="form-control" id="course-repeatability">
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary saveNew">Create New Course</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>`
        
        modalWrap.innerHTML = modalHTML;
        document.body.append(modalWrap);

        var modal = new bootstrap.Modal(document.getElementById("newModal"));
        modal.show();

        addClickToSaveNew(modal);
    }

    function addClickToSaveNew(modal) {
        let saveBtn = document.getElementsByClassName("saveNew")[0];
        saveBtn.addEventListener("click", function () {
            onSaveNew(modal)
        });
    }

    function onSaveNew(modal) {
        var num = document.getElementById("course-num").value;
        var name = document.getElementById("course-name").value;
        var creditHours = document.getElementById("course-credit-hours").value;
        var prereq = document.getElementById("course-prereq").value;
        var description = document.getElementById("course-description").value;
        var repeatability = document.getElementById("course-repeatability").value;

        if (!(num === "" || name === "" || creditHours === "")) {
            parsedAddedClasses.push({num, name, creditHours, prereq, description, repeatability})
            localStorage.setItem("addedClasses", JSON.stringify(parsedAddedClasses));
            modal.hide();
        }
    }

    function addClickToUser() {
        var userButton = document.getElementsByClassName("user")[0];
        userButton.addEventListener("click", displayUserTable);
    }

    function addClickToAdmin() {
        var adminButton = document.getElementsByClassName("admin")[0];
        adminButton.addEventListener("click", displayAdminTable);
    }

    function displayUserTable() {
        var welcome = document.getElementsByClassName("showWelcome")[0];
        if (welcome !== undefined) {
            welcome.classList.replace("showWelcome", "hideWelcome");
        }

        var addCourseDiv = document.getElementsByClassName("showAddCourseButton")[0];
        addCourseDiv.innerHTML = ``;

        var selectDegree = document.getElementsByClassName("selectDegree")[0];
        var currSelectedDegree = selectDegree.options[selectDegree.selectedIndex].value;
        var id = "d" + currSelectedDegree;

        if (currSelectedDegree !== "create") {
            parsedData = JSON.parse(localStorage.getItem("data"))[id];
        }

        showTable(parsedData, 1, 1, 0, 1);
        showTable(parsedData, 2, 2, 2, 3);
        showTable(parsedData, 3, 3, 4, 5);
        showTable(parsedData, 4, 4, 6, 7);
    }

    function displayAdminTable() {
        var welcome = document.getElementsByClassName("showWelcome")[0];
        if (welcome !== undefined) {
            welcome.classList.replace("showWelcome", "hideWelcome");
        }

        var addCourseDiv = document.getElementsByClassName("showAddCourseButton")[0];
        addCourseDiv.innerHTML = `<button class="new">Add New Course</button>`;

        var selectDegree = document.getElementsByClassName("selectDegree")[0];
        var currSelectedDegree = selectDegree.options[selectDegree.selectedIndex].value;
        var id = "d" + currSelectedDegree;

        if (currSelectedDegree !== "create") {
            parsedData = JSON.parse(localStorage.getItem("data"))[id];
        }

        showTable(parsedData, 1, 1, 0, 1);
        showTable(parsedData, 2, 2, 2, 3);
        showTable(parsedData, 3, 3, 4, 5);
        showTable(parsedData, 4, 4, 6, 7);

        addCourseSelectors();
    
        addEditButtons();
        addDeleteButtons();
        addAddButtons();
        addClickToNew();
    };

    function addAllDegreesToSelect() {
        var select = document.getElementsByClassName("selectDegree")[0];

        for (i = 0; i < parsedAllNewDegreePlans.length; i++) {
            var option = document.createElement("option");
            option.text = parsedAllNewDegreePlans[i].plan;
            option.value = parsedAllNewDegreePlans[i].value;
            select.add(option);
        }

        addClickToSelectDegree();
    }

    function addClickToSelectDegree() {
        var degreeSelect = document.getElementsByClassName("selectDegree")[0];
        degreeSelect.addEventListener("change", addNewDegreePlan);
    }

    function addNewDegreePlan() {
        var degreeSelect = document.getElementsByClassName("selectDegree")[0];
        if (degreeSelect.options[degreeSelect.selectedIndex].value  === "create") {  
            openNewDegreeModal();
        }
    }

    function openNewDegreeModal() {
        if (modalWrap !== null) {
            modalWrap.remove();
        }

        modalWrap = document.createElement("div");
        let modalHTML = `
        <div class="modal fade" id="newModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel">Create New Degree Plan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form>
                    <label for="new-degree" class="col-form-label">Degree Plan Name:</label>
                    <input required type="text" class="form-control" id="new-degree">
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary saveNewPlan">Create New Degree Plan</button>
                    </div>
                </form>
                </div>
                </div>
            </div>
            </div>`
        
        modalWrap.innerHTML = modalHTML;
        document.body.append(modalWrap);

        var modal = new bootstrap.Modal(document.getElementById("newModal"));
        modal.show();

        addClickToSaveNewPlan(modal);
    }

    function addClickToSaveNewPlan(modal) {
        let saveBtn = document.getElementsByClassName("saveNewPlan")[0];
        saveBtn.addEventListener("click", function () {
            onSaveNewPlan(modal)
        });
    }

    function onSaveNewPlan(modal) {
        var select = document.getElementsByClassName("selectDegree")[0];
        var degreePlan = document.getElementById("new-degree").value;
        if (degreePlan !== "") {
            var option = document.createElement("option");
            option.value = select.children.length - 1;
            option.text = degreePlan;
            select.add(option);

            parsedData = localStorage.getItem("data")

            var jsonName = "d" + option.value;
            parsedData = parsedData.slice(0, parsedData.length - 1);
            parsedData += ",\"" + jsonName + "\":[]}"

            parsedAllNewDegreePlans.push({});

            parsedAllNewDegreePlans[parsedAllNewDegreePlans.length - 1].plan = degreePlan;
            parsedAllNewDegreePlans[parsedAllNewDegreePlans.length - 1].value = option.value;
            
            localStorage.setItem("data", parsedData);
            localStorage.setItem("allNewDegreePlans", JSON.stringify(parsedAllNewDegreePlans));

            modal.hide();
        }
    }

    addClickToUser();
    addClickToAdmin();
    addAllDegreesToSelect();
}