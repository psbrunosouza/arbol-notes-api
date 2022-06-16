"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
async function create() {
    const connection = await (0, typeorm_1.createConnection)();
    const profiles = [
        {
            name: 'Admin',
            description: 'Administrador',
        },
        {
            name: 'Moderator',
            description: 'Moderador',
        },
    ];
    try {
        for (const profile of profiles) {
            await connection.query(`INSERT INTO profiles (name, description) VALUES ($1, $2)`, [profile.name, profile.description]);
        }
    }
    catch (error) {
        console.error(`Error: ${error}`);
    }
    finally {
        await connection.close();
    }
}
// eslint-disable-next-line no-console
create().then(() => console.log('Profile created with successful!'));
