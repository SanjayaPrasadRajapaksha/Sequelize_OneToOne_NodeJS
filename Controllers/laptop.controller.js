import laptopService from "../Services/laptop.service.js";

export const createLaptop = async (req, res) => {
    try {
        const { brand, model, studentID } = req.body;
        const laptop = await laptopService.createLaptop(brand, model, studentID);

        if (!laptop.status) {
            res.status(400).json({
                status: laptop.status,
                message: laptop.message,
                data: laptop.data
            })
        } else {
            res.status(201).json({
                status: laptop.status,
                message: laptop.message,
                data: laptop.data
            })
        }
    }
    catch (erroe) {
        res.status(400).json({
            status: false,
            message: error,
            data: "Error regarding laptop controller",
        });
    }
};

export const getLaptopById = async (req, res) => {
    try {
        const laptoptId = req.params.id;
        const laptop = await laptopService.getLaptopById(laptoptId);
        if (!laptop) {
            res.status(404).json({
                status: laptop.status,
                message: laptop.message,
                data: laptop.data,
            });
        } else {
            res.status(200).json({
                status: laptop.status,
                message: laptop.message,
                data: laptop.data,
            })
        }
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding laptop controller getting laptop by id",
        });

    }
};

export const getAllLaptops = async (req, res) => {
    try {
        const laptops = await laptopService.getAllLaptops();
        if (!laptops.status) {
            res.status(404).json({
                status: laptops.status,
                message: laptops.message,
                data: laptops.data,
            });
        } else {
            res.status(200).json({
                status: laptops.status,
                message: laptops.message,
                data: laptops.data,
            })
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding laptop controller getting all laptops",
        });
    }
};

export const updatelaptopById = async (req, res) => {
    try {
        const laptopId = req.params.id;
        const { brand, model} = req.body;

        const result = await laptopService.updateLaoptopById(laptopId, brand, model);
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
            data: "error regarding laptop controller updating laptop by id",
        });
    }
};

export const deleteLaptopById = async (req, res) => {
    try {
        const laptopId = req.params.id;
        const result = await laptopService.deleteLaptopById(laptopId);

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
            data: "error regarding laptop controller deleting laptop by id",
        });
    }
}

