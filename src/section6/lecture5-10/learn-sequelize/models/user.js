const Sequelize = require("sequelize")

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                name: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                    unique: true,
                },
                age: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    allowNull: false,
                },
                married: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                },
                comment: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
            },
            {
                sequelize,
                timestamps: false, // true 시 createAt, updatedAt 생성
                underscored: false,
                // paranoid : true // deletedAt : true 생성
                modelName: "User", // 모델명
                tableName: "users", // 테이블명 (모델명)s
                paranoid: false,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        )
    }

    static associate(db) {
        // user는 코멘트에 일대다
        db.User.hasMany(db.Comment, {
            foreignKey: "commenter",
            sourceKey: "id",
        })
    }
}
