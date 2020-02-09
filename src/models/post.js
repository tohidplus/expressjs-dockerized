'use strict';
module.exports = (sequelize, DataTypes) => {
    var Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName:"posts"
    });
    Post.associate = function () {
        // Assosications can be defined here
    };
    return Post;
}