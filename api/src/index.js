import app from "./app.js";
import {sequelize} from "./database/db.js"


const PORT = process.env.PORT || 8000

async function main() {
    try {
         await sequelize.sync({force: false });
         console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
}

main();



