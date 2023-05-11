window.onload = function() {
    localStorage.setItem("data", JSON.stringify(data));
    let parsedData = JSON.parse(localStorage.getItem("data"));

    function showTable(parsedData) {
        var totalHoursFall = 0;
        var totalHoursSpring = 0;

        let table =
            `<tr>
                <th class="year" rowspan="7">Year 1</th>
                <th class="header" colspan="3">Semester 1 Fall</th>
                <th class="header" colspan="3">Semester 2 Spring</th>
            </tr>`;

        for (i = 1; i < parsedData.length; i++) {
            table += `<tr>
                <td class="clickable" id="${i-1}">${parsedData[i - 1].num}</td>
                <td class="clickable" id="${i-1}">${parsedData[i - 1].name}</td>
                <td class="clickable" id="${i-1}">${parsedData[i - 1].creditHours}</td>
                <td class="clickable" id="${i}">${parsedData[i].num}</td>
                <td class="clickable" id="${i}">${parsedData[i].name}</td>
                <td class="clickable" id="${i}">${parsedData[i].creditHours}</td>
            </tr>`;
            
            totalHoursFall += parsedData[i - 1].creditHours;
            totalHoursSpring += parsedData[i - 1].creditHours;
        }
        
        table += 
            `<td colspan="2">Semester Hours</td>
            <td>${totalHoursFall}</td>
            <td colspan="2">Semester Hours</td>
            <td>${totalHoursSpring}</td>`

        document.getElementById("table").innerHTML = table;
    }

    showTable(parsedData);

    var classes = document.getElementsByClassName("clickable");
    for (var i = 0; i < classes.length; i++) {
        classes[i].addEventListener("click", showDescription);
    }
    
    function showDescription() {
        let description = 
            `<h3>${parsedData[this.id].num} - ${parsedData[this.id].name}</h3>
            <h4>Credit Hours: ${parsedData[this.id].creditHours}</h4>
            <hr></hr>
            <h4>Prerequisite:</h4>
            <p> ${parsedData[this.id].prereq}</p><br />
            <h4>Description:</h4>
            <p> ${parsedData[this.id].description}</p><br />
            <h4>Repeatability:</h4>
            <p> ${parsedData[this.id].repeatability}</p>
            `

        document.getElementById("description").innerHTML = description;
        document.getElementById("description").classList.toggle("show");
    }
}
