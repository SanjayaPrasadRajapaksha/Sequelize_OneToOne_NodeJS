import studentService from "../Services/student,service.js";

export const createStudent = async (req, res) => {
    try {
        const { name, age, grade } = req.body;

        const result = await studentService.createStudent(name, age, grade);

        if (!result.status) {
            res.status(400).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
        } else {
            res.status(201).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding student controller creation",
        });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await studentService.getStudentById(studentId);
        if (!student) {
            res.status(404).json({
                status: student.status,
                message: student.message,
                data: student.data,
            });
        } else {
            res.status(200).json({
                status: student.status,
                message: student.message,
                data: student.data,
            })
        }
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding student controller getting student by id",
        });

    }
};

export const getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        if (!students.status) {
            res.status(404).json({
                status: students.status,
                message: students.message,
                data: students.data,
            });
        } else {
            res.status(200).json({
                status: students.status,
                message: students.message,
                data: students.data,
            })
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding student controller getting all students",
        });
    }
};

export const updateStudentById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const { name, age, grade } = req.body;

        const result = await studentService.updateStudentById(studentId, name, age, grade);
        if (!result.status) {
            res.status(404).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
        } else {
            res.status(200).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
        }
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding student controller updating student by id",
        });
    }
};

export const deleteStudentById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const result = await studentService.deleteStudentById(studentId);

        if (!result.status) {
            res.status(404).json({
                status: result.status,
                message: result.message,
                data: result.data,
            })
        } else {
            res.status(200).json({
                status: result.status,
                message: result.message,
                data: result.data,
            })
        }
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding student controller deleting student by id",
        });
    }
}

