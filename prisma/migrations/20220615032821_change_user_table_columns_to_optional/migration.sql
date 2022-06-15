-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_imageId_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_profileId_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "imageId" DROP NOT NULL,
ALTER COLUMN "profileId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
