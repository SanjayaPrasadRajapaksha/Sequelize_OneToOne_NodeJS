import db from "../Models/index.js";

const { Laptop } = db;

export const createLaptop = async (laptopData) => {
    try {
        const laptop = await Laptop.create({
            brand: laptopData.brand,
            model: laptopData.model,
            studentID: laptopData.studentId,
        });
        return laptop;
    }
    catch (error) {
        throw error;
    }
};

export const getLaptopById = async (laptopId) => {
    try {
        const laptop = await Laptop.findOne({ //findByPk(studentId)
            where: {
                id: laptopId,
            },
        });
        return laptop;
    }
    catch (error) {
        throw error;
    }
};

export const getAllLaptops = async () => {
    try {
        const laptop = await Laptop.findAll();
        return laptop;
    }
    catch (error) {
        throw error;
    }
};

export const updateLaptopById = async (laptopId, laptopData) => {
    try {
        const laptop = await Laptop.update({
            brand: laptopData.brand,
            model: laptopData.model,
        }, {
            where: {
                id: laptopId,
            }
        }
        );
    }
    catch (error) {
        throw error;
    }
};

export const deleteLaptopById = async (laptopId) => {
    try {
        const laptop = await Laptop.destroy({
            where: {
                id: laptopId,
            }
        })
        return laptop;
    }
    catch (error) {
        throw error;
    }
}
