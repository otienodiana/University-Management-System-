// University class
class University {
    constructor(name) {
        this.name = name;
        this.residences = [];
    }

    addResidence(residence) {
        this.residences.push(residence);
    }

    getResidenceByName(name) {
        return this.residences.find(residence => residence.name === name);
    }
}

// Residence class
class Residence {
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }

    addRoom(room) {
        this.rooms.push(room);
    }

    getRoomByNumber(number) {
        return this.rooms.find(room => room.number === number);
    }
}

// Student class
class Student {
    constructor(name, studentId) {
        this.name = name;
        this.studentId = studentId;
        this.room = null;
    }

    assignRoom(room) {
        this.room = room;
        room.assignStudent(this);
    }

    submitMaintenanceRequest(description) {
        const request = new MaintenanceRequest(description, this);
        this.room.addMaintenanceRequest(request);
    }
}

// Room class
class Room {
    constructor(number) {
        this.number = number;
        this.students = [];
        this.maintenanceRequests = [];
    }

    assignStudent(student) {
        this.students.push(student);
    }

    addMaintenanceRequest(request) {
        this.maintenanceRequests.push(request);
    }
}

// MaintenanceRequest class
class MaintenanceRequest {
    constructor(description, submittedBy) {
        this.description = description;
        this.status = 'pending';
        this.submittedBy = submittedBy;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
