import { createConnection } from 'typeorm';

interface IProfile {
  name: string;
  description: string;
}

async function create() {
  const connection = await createConnection();

  const profiles: IProfile[] = [
    {
      name: 'Admin',
      description: 'Adiministrador',
    },
    {
      name: 'Moderator',
      description: 'Moderador',
    },
  ];

  try {
    for (const profile of profiles) {
      await connection.query(
        'INSERT INTO profiles (name, description) VALUES ($1, $2)',
        [profile.name, profile.description],
      );
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  } finally {
    await connection.close();
  }
}

create().then(() => console.log('Profile created with successful!'));
