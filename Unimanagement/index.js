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

class Employee {
    constructor(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }
}
