import { where } from "sequelize";
import db from "../Models/index.js";
const { Student } = db;

export const createStudent = async (studentsData) => {
    try {

        const student = await Student.create({
            name: studentsData.name,
            age: studentsData.age,
            grade: studentsData.grade,
        });
        return student;

    } catch (error) {
        throw error;
    }
};

export const getStudentById = async (studentId) => {
    try {
        const student = await Student.findOne({ //findByPk(studentId)
            where: {
                id: studentId,
            },
        });
        return student;
    }
    catch (error) {
        throw error;
    }
};

export const getAllStudents = async () => {
    try {
        const students = await Student.findAll();
        return students;
    }
    catch (error) {
        throw error;
    }
};

export const updateStudentById = async (studentId, studentData) => {
    try {
        const student = await Student.update({
            name: studentData.name,
            age: studentData.age,
            grade: studentData.grade,
        }, {
            where: {
                id: studentId,
            }
        }
        );
    }
    catch (error) {
        throw error;
    }
};

export const deleteStudentById = async (studentId) => {
    try {
        const student = await Student.destroy({
            where: {
                id: studentId,
            }
        })
        return student;
    }
    catch (error) {
        throw error;
    }
}

