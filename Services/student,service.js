import * as studentReposity from "../Repositories/student.repo.js";

const createStudent = async (name, age, grade) => {
    try {
        const dataToCreate = { name, age, grade };
        const student = await studentReposity.createStudent(dataToCreate);

        return {
            status: true,
            message: 'Student created successfully!',
            data: student,
        };
    }
    catch (error) {
        return {
            status: false,
            message: error,
            data: "Error regarding student creating",
        }

    }
};

const getStudentById = async (sudentId) => {
    try {
        const student = await studentReposity.getStudentById(sudentId);

        return {
            status: true,
            message: "Student found successfully!",
            data: student,
        }
    }
    catch (error) {
        return {
            status: false,
            message: error,
            data: "Error regarding student fetching",
        }
    }
};

const getAllStudents = async () => {
    try {
        const students = await studentReposity.getAllStudents();
        return {
            status: true,
            message: "Students fetched successfully!",
            data: students,
        }
    }
    catch (error) {
        return {
            status: false,
            message: error,
            data: "Error regarding students fetching",
        }
    }
};

const updateStudentById = async (studentId, name, age, grade) => {
    try {
        // Fetch the student from the repository
        const student = await studentReposity.getStudentById(studentId);

        // Check if student exists
        if (!student) {
            return {
                status: false,
                message: 'Student not found!',
            };
        }

        // Prepare the data to update
        const dataToUpdate = { name, age, grade };

        // Update the student using the repository or ORM method
        const updatedStudent = await studentReposity.updateStudentById(studentId, dataToUpdate);

        // Return success response
        return {
            status: true,
            message: "Student updated successfully!",
            data: updatedStudent,
        };
    }
    catch (error) {
        // Catch any error and return the failure response
        return {
            status: false,
            message: error,
            data: "Error regarding student updating",
        };
    }
};

const deleteStudentById = async (studentId) => {
    try {
        const student = await studentReposity.getStudentById(studentId);
        if (!student) {
            return {
                status: false,
                message: 'Student not found!',
            };
        }
        const result = await studentReposity.deleteStudentById(studentId);

        return {
            status: true,
            message: 'Student deleted successfully!',
            data: result,
        }
    }
    catch (error) {
        return {
            status: false,
            message: error,
            data: 'Error regarding student deleting',
        };
    }
}

export default {
    createStudent,
    getStudentById,
    getAllStudents,
    updateStudentById,
    deleteStudentById
};