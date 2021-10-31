// generate Manager cards
const createManager = function(manager) {
    return `
    <div class="col-4">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h3 class="card-title">${manager.name}</h3>
            <h4 class="card-text">Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto: ${manager.email}"></a></p>
            <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    </div>
    `
}
// generate Engineer cards
const createEngineer = function(engineer) {
    return `
    <div class="col-4">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h3 class="card-title">${engineer.name}</h3>
            <h4 class="card-text">Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto: ${engineer.email}"></a></p>
            <p class="officeNumber">Office Number: ${engineer.github}</p>
        </div>
    </div>
    </div>
    `
}

// generate Intern cards
const createIntern = function(intern) {
    return `
    <div class="col-4">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h3 class="card-title">${intern.name}</h3>
            <h4 class="card-text">Intern</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto: ${intern.email}"></a></p>
            <p class="officeNumber">Office Number: ${intern.school}</p>
        </div>
    </div>
    </div>
    `
}

// import createHtml push to page
const createHtml = (array) => {
    pageArr = [];

    for (let i = 0; i < array.length; i++) {
        const employee = array[i];
        const role = employee.getRole();


        // call manager function
        if (role === 'Manager') {
            const managerCard = createManager(employee);
            pageArr.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);
            pageArr.push(engineerCard);
        }

        // call intern function
        if (role === 'Intern') {
            const internCard = createIntern(employee);
            pageArr.push(internCard);
        }
    }

    // join all strings
    const employeeCards = pageArr.join('')

    const createTeam = createTeamHtml(employeeCards);
    return createTeam;

}

// render team html page
const createTeamHtml = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"                      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = createHtml;
