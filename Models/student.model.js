export default (sequelize, DataTypes) => {
    const Student = sequelize.define("Student", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        grade: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            tableName: 'Student', // Specify the exact table name to avoid pluralization
            timestamps: false,    // Optional: If you don't want Sequelize to add `createdAt` and `updatedAt` fields
        });
    return Student;
};
