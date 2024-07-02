// dev dependency means production mate j use karvu 6 so we can install like this
// npm i -D nodemon 

// npm i -D prettier
// create file .prettierrc and write down rules

// {
//     "singleQuote": false,
//     "bracketSpacing": true,
//     "tabWidth": 2,
//     "trailingComma": "es5",
//     "semi": false
// }

// create file .prettierignore and write (kai file ma prettier use nathi karu)
// *.env
// /node_modules
// /.vscode
// ./dist

// DATA BASE WRAP IN TRY CATCH


import connectDB from "./db/connectDB.js";
import app from "./app.js";

import dotenv from "dotenv";
dotenv.config({                         // -r dotenv/config --experimental-json-modules (WRITE IN package.json)
  Path:"./env"
});                        


connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`SERVER RUNNING ON ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => console.log("MONGODB CONNECTION FAILED", err));