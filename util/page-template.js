// generate Manager cards
const createManager = function(manager) {
    return `
            <div class="col-4 mt-4">
                <div class="card h-100 w-auto">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title">${manager.name}</h3>
                        <span class="float-left"><i class="fas fa-mug-hot"></i></span><h4 class="card-text">Manager</h4>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${manager.id}</p>
                        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
    `
}

// generate Engineer cards
const createEngineer = function(engineer) {
    return `
            <div class="col-4 mt-4">
                <div class="card h-100 w-auto">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title">${engineer.name}</h3>
                        <span class="float-left"><i class="fas fa-glasses"></i></span><h4 class="card-text">Engineer</h4>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${engineer.id}</p>
                        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p class="github">GitHub Username: ${engineer.github}</p>
                    </div>
                </div>
            </div>
    `
}

// generate Intern cards
const createIntern = function(intern) {
    return `
            <div class="col-4 mt-4">
                <div class="card h-100 w-auto">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title">${intern.name}</h3>
                        <span class="float-left"><i class="fas fa-user-graduate"></i></span><h4 class="card-text">Intern</h4>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${intern.id}</p>
                        <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p class="school">School Attending: ${intern.school}</p>
                    </div>
                </div>
            </div>
    `
}

// import createHtml push to page
createHtml = (array) => {
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
    const employeeCards = pageArr.join('');

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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar">
                <span class="text-center w-100 py-4 display-3 bg-danger text-white">My Team</span>
            </nav>
        </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                ${employeeCards}
            </div>
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/fd0edf2baf.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = createHtml;
