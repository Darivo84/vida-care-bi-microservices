import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class Note extends Model {}
Note.init(
  {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },
  {
    modelName: "notes",
    sequelize,
  }
);
