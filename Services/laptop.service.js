import * as laptopRepository from "../Repositories/laptop.repo.js";

const createLaptop = async (brand, model, studentId) => {
    try {
        const dataToCreate = { brand, model, studentId };
        const laptop = await laptopRepository.createLaptop(dataToCreate);

        return {
            status: true,
            message: 'Laptop created successfully!',
            data: laptop,
        };
    }
    catch (error) {
        return {
            status: false,
            message: error,
            data: "Error regarding laptop creating",
        }
    }
};

const getLaptopById = async (laptopId) => {
    try {
        const laptop = await laptopRepository.getLaptopById(laptopId);

        return {
            status: true,
            message: "Laptop found successfully!",
            data: laptop,
        }
    }
    catch (error) {
        return {
            status: false,
            message: error,
            data: "Error regarding laptop fetching",
        }
    }
};

const getAllLaptops = async () => {
    try {
        const laptops = await laptopRepository.getAllLaptops();
        return {
            status: true,
            message: "Laptops fetched successfully!",
            data: laptops,
        }
    }
    catch (error) {
        return {
            status: false,
            message: error,
            data: "Error regarding laptops fetching",
        }
    }
};

const updateLaoptopById = async (laptopId, brand, model) => {
    try {
        const laptop = await laptopRepository.getLaptopById(laptopId);

        if (!laptop) {
            return {
                status: false,
                message: 'Laptops not found!',
            };
        }
        const dataToUpdate = { brand, model };
        const updatedLaptop = await laptopRepository.updateLaptopById(laptopId, dataToUpdate);
        return {
            status: true,
            message: "Laptop updated successfully!",
            data: updatedLaptop,
        };
    }
    catch (error) {
        return {
            status: false,
            message: error,
            data: "Error regarding laptop updating",
        };
    }
};

const deleteLaptopById = async (laptopId) => {
    try {
        const laptop = await laptopRepository.getLaptopById(laptopId);
        if (!laptop) {
            return {
                status: false,
                message: 'Laptop not found!',
            };
        }
        const result = await laptopRepository.deleteLaptopById(laptopId);

        return {
            status: true,
            message: 'Laptop deleted successfully!',
            data: result,
        }
    }
    catch (error) {
        return {
            status: false,
            message: error,
            data: 'Error regarding laptop deleting',
        };
    }
}

export default {
    createLaptop,
    getLaptopById,
    getAllLaptops,
    updateLaoptopById,
    deleteLaptopById,
};