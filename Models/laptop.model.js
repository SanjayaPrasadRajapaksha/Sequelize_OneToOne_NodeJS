export default (sequelize, DataTypes) => {
    const Laptop = sequelize.define("Laptop", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        studentID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Student',
                key: 'id',
            }
        },

    },
        {
            tableName: 'Laptop', // Specify the exact table name to avoid pluralization
            timestamps: false,    // Optional: If you don't want Sequelize to add `createdAt` and `updatedAt` fields
        });
    return Laptop;
};
