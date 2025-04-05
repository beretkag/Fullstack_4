
let developers = [];

function getDevelopers(){
    developers = localStorage.getItem("developers") != undefined ? JSON.parse(localStorage.getItem("developers")) : [
        {
            "id": "b8878c6c-eda2-35ee-f621-91f9b7af14dc",
            "name": "Kiss Lajos",
            "email": "KissLajos@webler.hu",
            "job": "Frontend Developer",
            "age": 35,
            "salary": 350000,
            "image": "https://randomuser.me/api/portraits/men/1.jpg",
            "skills": [
                "User Research",
                "Wireframing",
                "Prototyping",
                "Figma",
                "Sketch",
                "Interaction Design",
                "Visual Design"
            ]
        },
        {
            "id": "a49335ca-d76a-02d1-2a6c-fdab1a3f8c0a",
            "name": "Tony Stark",
            "email": "mrstark@starkindustries.com",
            "job": "Frontend Developer",
            "age": 23,
            "salary": 2500000,
            "image": "https://randomuser.me/api/portraits/men/2.jpg",
            "skills": [
                "JavaScript",
                "React",
                "CSS",
                "HTML",
                "Redux"
            ]
        },
        {
            "id": "d255b2e3-9fde-c833-1cda-fa9ee62e851c",
            "name": "John Doe",
            "email": "JohnDoe@greenwave.hu",
            "job": "Frontend Developer",
            "age": 35,
            "salary": 1556000,
            "image": "https://randomuser.me/api/portraits/men/3.jpg",
            "skills": [
                "HTML",
                "Vue.js",
                "CSS",
                "JavaScript"
            ]
        },
        {
            "id": "20ef4e13-94db-8a96-ca02-4f65a2a545d2",
            "name": "Robert Smith",
            "email": "RobertSmith@greenwave.hu",
            "job": "Fullstack Developer",
            "age": 40,
            "salary": 999000,
            "image": "https://randomuser.me/api/portraits/men/4.jpg",
            "skills": [
                "Node.js",
                "Express",
                "MongoDB",
                "React",
                "RESTful APIs"
            ]
        },
        {
            "id": "e31bc524-918f-a7dc-6b36-0be9c7181a11",
            "name": "James Alexander Mitchell",
            "email": "jam@alphatech.com",
            "job": "Backend Developer",
            "age": 30,
            "salary": 406000,
            "image": "https://randomuser.me/api/portraits/men/5.jpg",
            "skills": [
                "Python",
                "Django",
                "Flask",
                "RESTful APIs"
            ]
        },
        {
            "id": "fbdc476a-eedf-de7e-bac6-2563dd40b0ab",
            "name": "Rose Parker",
            "email": "RoseParker@alphatech.com",
            "job": "Frontend Developer",
            "age": 40,
            "salary": 250000,
            "image": "https://randomuser.me/api/portraits/women/6.jpg",
            "skills": [
                "JavaScript",
                "Angular",
                "HTML",
                "CSS"
            ]
        },
        {
            "id": "575bc89b-907f-3410-0fd2-cc119004b7ed",
            "name": "Sophia Grace",
            "email": "SophiaGrace@alphatech.com",
            "job": "Backend Developer",
            "age": 60,
            "salary": 345000,
            "image": "https://randomuser.me/api/portraits/women/7.jpg",
            "skills": [
                "Java",
                "Spring Boot",
                "SQL"
            ]
        },
        {
            "id": "b83254e1-8893-666a-1185-17cfab8d9a5c",
            "name": "Kovács András",
            "email": "KovacsAndras@alphatech.com",
            "job": "Architect",
            "age": 34,
            "salary": 1500000,
            "image": "https://randomuser.me/api/portraits/men/8.jpg",
            "skills": [
                "Angular",
                "TypeScript"
            ]
        },
        {
            "id": "c9878a6c-7ba3-45ee-f619-91f9a7ef23dc",
            "name": "Egres Kata",
            "email": "EgresKata@starsolutions.net",
            "job": "Data Scientist",
            "age": 28,
            "salary": 520000,
            "image": "https://randomuser.me/api/portraits/women/9.jpg",
            "skills": [
                "Python"
            ]
        },
        {
            "id": "d49337ca-d78a-12e1-3a5d-fdab2b3f9d2a",
            "name": "Nagy Péter",
            "email": "NagyPeter@starsolutions.net",
            "job": "DevOps Engineer",
            "age": 42,
            "salary": 620000,
            "image": "https://randomuser.me/api/portraits/men/10.jpg",
            "skills": [
                "Docker",
                "Kubernetes",
                "CI/CD"
            ]
        },
        {
            "id": "e255a2b3-9fde-d833-1dfa-fa9fe62e85fc",
            "name": "Linda Parker",
            "email": "LindaParker@starsolutions.net",
            "job": "Project Manager",
            "age": 37,
            "salary": 460000,
            "image": "https://randomuser.me/api/portraits/women/11.jpg",
            "skills": [
                "Agile Methodologies",
                "Scrum",
                "JIRA"
            ]
        },
        {
            "id": "f0ef5e14-93db-7c96-da32-4e65b2a655d2",
            "name": "Thomas Evans",
            "email": "ThomasEvans@starsolutions.net",
            "job": "Machine Learning Engineer",
            "age": 31,
            "salary": 730000,
            "image": "https://randomuser.me/api/portraits/men/12.jpg",
            "skills": [
                "Python"
            ]
        },
        {
            "id": "g41bc623-818f-b8dc-5b26-0af8c5184a12",
            "name": "Anna Scott",
            "email": "AnnaScott@starsolutions.net",
            "job": "Security Analyst",
            "age": 29,
            "salary": 395000,
            "image": "https://randomuser.me/api/portraits/women/13.jpg",
            "skills": [
                "Network Security"
            ]
        },
        {
            "id": "h3dc376b-f8df-ce7e-ba76-2574dd30b0ab",
            "name": "Emily White",
            "email": "EmilyWhite@starsolutions.net",
            "job": "Software Tester",
            "age": 34,
            "salary": 410000,
            "image": "https://randomuser.me/api/portraits/women/14.jpg",
            "skills": [
                "Automated Testing",
                "Selenium",
                "Manual Testing"
            ]
        },
        {
            "id": "i28bc12d-5c93-1b56-3d91-754fe2d8a2b1",
            "name": "Márton István",
            "email": "MartonIstvan@techsphere.net",
            "job": "Cloud Solutions Architect",
            "age": 45,
            "salary": 750000,
            "image": "https://randomuser.me/api/portraits/men/15.jpg",
            "skills": [
                "AWS",
                "Azure",
                "GCP"
            ]
        },
        {
            "id": "j7f32f1b-4d7a-8b94-8e41-dc93e76b4c71",
            "name": "Balázs Zoltán",
            "email": "BalazsZoltan@techsphere.net",
            "job": "Data Scientist",
            "age": 39,
            "salary": 680000,
            "image": "https://randomuser.me/api/portraits/men/16.jpg",
            "skills": [
                "SQL",
                "Database Optimization"
            ]
        },
        {
            "id": "k8fc3d2a-6e39-4d9f-9b11-579fbb64b701",
            "name": "Bartos Gábor",
            "email": "BartosGabor@techsphere.net",
            "job": "Security Analyst",
            "age": 33,
            "salary": 400000,
            "image": "https://randomuser.me/api/portraits/men/17.jpg",
            "skills": [
                "Business Analysis",
                "Data Analysis"
            ]
        }
    ]
    localStorage.setItem("developers", JSON.stringify(developers))
    Questions();
    GenerateTable();
}

function GenerateTable(){
    document.querySelector('#table-target').innerHTML = 
    `<table class="table table-striped w-75 border">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Job</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            ${GenerateTbody()}
        </tbody>
    </table>`

    for (let i = 0; i < developers.length; i++) {
        document.getElementById(`editBtn-${i}`).addEventListener("click", function(){
            LoadPersonToModal(developers[i])

            let modBtn = document.getElementById("modifyBtn");
            if (currentModifyHandler) {
                modBtn.removeEventListener("click", currentModifyHandler);
            }
            currentModifyHandler = function () {
                SaveModifiedPerson(i);
            };
            modBtn.addEventListener("click", currentModifyHandler);

            document.getElementById("createBtn").classList.add("d-none");
            document.getElementById("modifyBtn").classList.remove("d-none");
        })
        
        document.getElementById(`deleteBtn-${i}`).addEventListener("click", function(){
            let delbtn = document.getElementById("deleteBtn");
            if (currentDeletionHandler) {
                delbtn.removeEventListener("click", currentDeletionHandler);
            }
            currentDeletionHandler = function () {
                developers.splice(i, 1)
                localStorage.setItem("developers", JSON.stringify(developers))
                Questions();
                GenerateTable();
            };
            delbtn.addEventListener("click", currentDeletionHandler);
        })
    }
}
let currentModifyHandler = null;
let currentDeletionHandler = null;


function GenerateTbody(){
    tbody = ""
    for (let i = 0; i < developers.length; i++) {
        item = developers[i]
        tbody +=
        `<tr>
            <td><img src=${item.image} alt="Profile"></td>
            <td>${item.name}</td>
            <td><a href="mailto:${item.email}">${item.email}</a></td>
            <td>${item.job}</td>
            <td>${item.age}</td>
            <td>
                <span class="badge ${item.salary < 400000 ? 'bg-danger' : item.salary < 700000 ? 'bg-warning' : 'bg-success'}">
                    ${item.salary.toLocaleString("hu-HU")} HUF
                </span>
            </td>
            <td>
                <button type="button" id="editBtn-${i}"class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#personModal"><i class="bi bi-pencil"></i></button>
                <button type="button" id="deleteBtn-${i}" class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="bi bi-trash"></i></button>
            </td>
        </tr>`


    }
    return tbody
}

function Q1() {
    sum = 0;
    developers.forEach(item => { sum += item.age });
    avg = sum / developers.length;
    document.querySelector('#Q1').innerHTML = Math.round(avg)
}

function Q2(){
    filtered = developers.filter(x => x.job == "Frontend Developer")
    sum = 0;
    filtered.forEach(item => { sum += item.salary });
    avg = sum / filtered.length;
    document.querySelector('#Q2').innerHTML = avg + " HUF"
}

function Q3(){
    best = developers[0];
    developers.forEach(item => {
        if (item.skills.length > best.skills.length) best = item       
    });
    document.querySelector('#Q3').innerHTML = best.name;
}

function Q4() {
    companyCount = {};
    developers.forEach(item => {
        company = item.email.split('@')[1].split('.')[0];
        companyCount[company] = (companyCount[company] || 0) + 1;
    });

    maxCompany = Object.keys(companyCount)[0];
    Object.keys(companyCount).forEach(key => {
        if (companyCount[key] > companyCount[maxCompany]) maxCompany = key;
    });

    document.querySelector('#Q4').innerHTML = maxCompany + ": " + companyCount[maxCompany];
}

function Q5() {
    youngest = developers[0];
    
    developers.forEach(item => {
        if (item.age < youngest.age) youngest = item;
    });

    document.querySelector('#Q5').innerHTML = youngest.name + " " + youngest.salary + " HUF";
}

function Q6() {
    youngest = developers[0];
    oldest = developers[0];
    
    developers.forEach(item => {
        if (item.age < youngest.age) youngest = item;
        if (item.age > oldest.age) oldest = item;
    });
    diff = Math.abs(youngest.salary - oldest.salary)

    document.querySelector('#Q6').innerHTML = diff + " HUF"
}

function Q7() {
    jobSum = {};
    developers.forEach(item => {
        jobSum[item.job] = jobSum[item.job] || [0,0];
        jobSum[item.job][0] += 1;
        jobSum[item.job][1] += item.salary;
    });
    document.querySelector('#Q7').innerHTML = "";
    Object.keys(jobSum).forEach(key => {
        document.querySelector('#Q7').innerHTML += `<br>${key}: ${jobSum[key][1] / jobSum[key][0]} HUF`
    });
}

function Questions(){
    Q1();
    Q2();
    Q3();
    Q4();
    Q5();
    Q6();
    Q7();
}

//4. Workshop -----------------------------------------------------------------------------------------------------------------------------------------------

let skills = [];
document.getElementById("addSkillBtn").addEventListener("click", function() {
    var input = document.getElementById("inputSkill")
    if (input.value.replaceAll(' ', '').length > 0) {
        skills.push(input.value);
        showSkills();
    }
    input.value = ""
});

function showSkills(){
    skillDiv = document.getElementById("skills");
    skillDiv.innerHTML = "";

    for (let i = 0; i < skills.length; i++) {
        var skill = skills[i];
        skillDiv.innerHTML += `
        <button type="button" id="skill-${i}" class="btn badge text-bg-primary badge-toggle mb-1">
            <h6>${skill}</h6>
            <h6 class="icon"><i class="bi bi-trash3-fill"></i></h6>
            <h6>${skill}</h6>
        </button>
        `;
    }
    for (let i = 0; i < skills.length; i++) {
        document.getElementById(`skill-${i}`).addEventListener("click", () => {
            deleteSkill(i);
        });
    }

}

function deleteSkill(i){
    skills.splice(i, 1);
    showSkills();
}

document.getElementById("createBtn").addEventListener("click", function() {
    let person = {
        "id": GenerateId(),
        "name": document.getElementById("inputName").value,
        "email": document.getElementById("inputEmail").value,
        "age": GetAge(),
        "job": document.getElementById("inputJob").value,
        "salary": document.getElementById("inputSalary").value,
        "image": document.getElementById("inputImagesource").value,
        "skills": skills
    }
    developers.push(person);
    localStorage.setItem("developers", JSON.stringify(developers))
    clearInputs();
    GenerateTable();



})


function GenerateId(){
    id = [GeneratePartId(8), GeneratePartId(4), GeneratePartId(4), GeneratePartId(4), GeneratePartId(12)].join('-');
    let i = 0;
    while (i < developers.length && developers[i].id != id) i++
    if (i < developers.length) id = GenerateId();
    return id;
}

function GeneratePartId(j){
    part = "";
    possibilities = "qwertzuiopasdfghjklyxcvbnm0123456789"
    for (let i = 0; i < j; i++) {
        part += possibilities[Math.floor(Math.random()*possibilities.length)]
    }
    return part;
}

function GetAge(){
    birthDate = new Date(`${document.getElementById("inputYear").value}-${document.getElementById("inputMonth").value}-${document.getElementById("inputDay").value.padStart(2, '0')}`);
    age = new Date().getFullYear() - birthDate.getFullYear();
    if (new Date().getMonth() < birthDate.getMonth() || 
        (new Date().getMonth() === birthDate.getMonth() && new Date().getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function clearInputs(){
    document.getElementById("inputName").value = ""
    document.getElementById("inputEmail").value = ""
    document.getElementById("inputJob").value = ""
    document.getElementById("inputSalary").value = ""
    document.getElementById("inputImagesource").value = ""
    document.getElementById("inputYear").value = ""
    document.getElementById("inputMonth").value = "00"
    document.getElementById("inputDay").value = ""
    skills = [];
    showSkills();
}


function LoadPersonToModal(person){
    document.getElementById("inputName").value = person.name;
    document.getElementById("inputEmail").value = person.email;
    document.getElementById("inputJob").value = person.job;
    document.getElementById("inputSalary").value = person.salary;
    document.getElementById("inputImagesource").value = person.image;
    document.getElementById("inputYear").value = new Date().getFullYear() - person.age;
    document.getElementById("inputMonth").value = (new Date().getMonth() + 1).toString().padStart(2, '0');
    document.getElementById("inputDay").value = new Date().getDate();
    skills = [];
    person.skills.forEach(skill => {
        skills.push(skill)
    });
    showSkills();
}

document.querySelectorAll('.cancelBtn').forEach(button => button.addEventListener("click", function(){
    document.getElementById("createBtn").classList.remove("d-none");
    document.getElementById("modifyBtn").classList.add("d-none");
    clearInputs();
}))

function SaveModifiedPerson(i){
    developers[i] = {
        "id": developers[i].id,
        "name": document.getElementById("inputName").value,
        "email": document.getElementById("inputEmail").value,
        "age": GetAge(),
        "job": document.getElementById("inputJob").value,
        "salary": document.getElementById("inputSalary").value,
        "image": document.getElementById("inputImagesource").value,
        "skills": skills
    }
    localStorage.setItem("developers", JSON.stringify(developers))
    clearInputs();
    GenerateTable();
}


