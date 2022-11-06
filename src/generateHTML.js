
function gnerateHTML(employeeData){

let html =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        h1 {
            background-color: mediumvioletred;
            color: black;
            padding-top: 25px;
            padding-bottom: 25px;
            text-align: center;
            width: 100%;
        }
    
        .head{
            background-color: cadetblue;
            padding-left: 20px;
        }
        .employee {
            display: flex;
            flex-direction: column;
            width: 225px;
            border: 1px;
            border-color: gray;
            border-style: solid;
            margin-top: 30px;
        }
        .data{
            padding-left: 30px;
        }
        .container{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            width: 50%;
        }

        body{
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    </style>

    <h1>My Team</h1>
    
    <div class="container">
    `
    for(let i=0; i<employeeData.length; i++){
        if (employeeData[i].getRole()==="Manager"){
            const managerCard =  `<div class="employee">
            <div class="head">
            <h3>${employeeData[i].name}</h3>
            <h4>Manager</h4>
            </div>
            <div class="data">
            <p>id: <span>${employeeData[i].id}</span></p>
            <p>email: <span>${employeeData[i].email}</span></p>
            <p>office number: <span>${employeeData[i].office}</span></p>
            </div>
        </div>` 
            html= html + managerCard
        }else if(employeeData[i].getRole()==="Engineer"){
            const engineerCard =  `<div class="employee">
            <div class="head">
            <h3>${employeeData[i].name}</h3>
            <h4>Engineer</h4>
            </div>
            <div class="data">
            <p>id: <span>${employeeData[i].id}</span></p>
            <p>email: <span>${employeeData[i].email}</span></p>
            <p>github: <span>${employeeData[i].github}</span></p>
            </div>
        </div>` 
            html= html + engineerCard
        }else if(employeeData[i].getRole()==="Intern"){
            const internCard =  `<div class="employee">
            <div class="head">
            <h3>${employeeData[i].name}</h3>
            <h4>Engineer</h4>
            </div>
            <div class="data">
            <p>id: <span>${employeeData[i].id}</span></p>
            <p>email: <span>${employeeData[i].email}</span></p>
            <p>school: <span>${employeeData[i].school}</span></p>
            </div>
        </div>` 
            html= html + internCard
        }
    }
    const endString=`</div>
        </body>
        </html>`
    html= html + endString

    return html
}
