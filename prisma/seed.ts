import { prisma } from '@shared/infra/prisma';
import { hash } from 'bcrypt';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { User } from '@modules/users/infra/prisma/entities/User';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { Profile } from '@modules/profile/infra/prisma/entities/Profile';

async function seed(): Promise<void> {
  const profile = {
    name: 'ADMIN',
  } as IProfileDTO;

  const admin = Object.assign(new Profile(), profile);

  const user = {
    name: 'Admin',
    email: 'admin@admin.com',
    profileId: admin.id,
    password: await hash('123admin', 8),
  } as IUserDTO;

  const userWithData = Object.assign(new User(), user);

  await (async function createProfiles(): Promise<void> {
    await prisma.profile.createMany({
      data: [admin],
    });
  })();

  await (async function createAdminUser(): Promise<void> {
    await prisma.user.create({
      data: userWithData,
    });
  })();
}

seed()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('[DB]: seed generated');
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.log('[DB]: error trying generate seed');
  })
  .finally(() => {
    prisma.$disconnect();
  });
