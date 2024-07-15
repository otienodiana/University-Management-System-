// Base class for Residences
class Residence {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.isOccupied = false;
    }

    occupy() {
        this.isOccupied = true;
    }

    vacate() {
        this.isOccupied = false;
    }
}

// DormRoom class extending Residence
class DormRoom extends Residence {
    constructor(name, address, size, monthlyRent) {
        super(name, address);
        this.size = size;
        this.monthlyRent = monthlyRent;
    }
}

// Apartment class extending Residence
class Apartment extends Residence {
    constructor(name, address, numberOfBedrooms, monthlyRent) {
        super(name, address);
        this.numberOfBedrooms = numberOfBedrooms;
        this.monthlyRent = monthlyRent;
    }
}

// Student class
class Student {
    constructor(name, studentId, gender) {
        this.name = name;
        this.studentId = studentId;
        this.gender = gender;
        this.assignedResidence = null;
    }

    assignResidence(residence) {
        this.assignedResidence = residence;
        residence.occupy();
    }
}

// MaintenanceRequest class
class MaintenanceRequest {
    constructor(description, submittedBy) {
        this.description = description;
        this.status = 'submitted';
        this.submittedBy = submittedBy;
        this.assignedEmployee = null;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }

    assignEmployee(employee) {
        this.assignedEmployee = employee;
    }
}

// Employee class
class Employee {
    constructor(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }
}

// Initialize sample data
const dorm1 = new DormRoom('Dorm A', '123 Dorm St', 200, 500);
const apartment1 = new Apartment('Apt A', '456 Apartment Rd', 3, 1200);

const student1 = new Student('John Doe', 'S001', 'Male');
const student2 = new Student('Jane Smith', 'S002', 'Female');

// Collect data
const universityData = {
    residences: [dorm1, apartment1],
    students: [student1, student2],
    maintenanceRequests: [],
};

const students = {
    'S001': student1,
    'S002': student2,
};

const residences = {
    'Dorm A': dorm1,
    'Apt A': apartment1,
};

document.getElementById('assignResidenceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('student').value;
    const residenceName = document.getElementById('residence').value;
    const student = students[studentId];
    const residence = residences[residenceName];
    student.assignResidence(residence);
    displayUniversityDetails();
});

document.getElementById('submitRequestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('requestStudent').value;
    const description = document.getElementById('description').value;
    const student = students[studentId];
    const request = new MaintenanceRequest(description, student);
    universityData.maintenanceRequests.push(request);
    displayUniversityDetails();
});

function displayUniversityDetails() {
    const universityDiv = document.getElementById('university-details');
    universityDiv.innerHTML = '';

    // Display Residences
    universityData.residences.forEach(residence => {
        const residenceDiv = document.createElement('div');
        residenceDiv.classList.add('residence');
        residenceDiv.innerHTML = `<h2>${residence.name}</h2>
                                  <p>Address: ${residence.address}</p>
                                  <p>Occupied: ${residence.isOccupied}</p>`;
        universityDiv.appendChild(residenceDiv);
    });

    // Display Students
    const studentDiv = document.createElement('div');
    studentDiv.classList.add('student');
    studentDiv.innerHTML = '<h3>Students</h3>';
    universityData.students.forEach(student => {
        studentDiv.innerHTML += `<p>${student.name} (ID: ${student.studentId}, Gender: ${student.gender}) - Assigned to: ${student.assignedResidence ? student.assignedResidence.name : 'None'}</p>`;
    });
    universityDiv.appendChild(studentDiv);

    // Display Maintenance Requests
    const maintenanceDiv = document.createElement('div');
    maintenanceDiv.classList.add('maintenance');
    maintenanceDiv.innerHTML = '<h3>Maintenance Requests</h3>';
    universityData.maintenanceRequests.forEach(request => {
        maintenanceDiv.innerHTML += `<p>Description: ${request.description}, Status: ${request.status}, Submitted by: ${request.submittedBy.name}</p>`;
    });
    universityDiv.appendChild(maintenanceDiv);
}

// Initial display of university details
displayUniversityDetails();
