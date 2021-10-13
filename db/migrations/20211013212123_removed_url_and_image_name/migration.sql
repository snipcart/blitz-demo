/*
  Warnings:

  - You are about to drop the column `url` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Product" ("createdAt", "description", "id", "image", "name", "price", "updatedAt") SELECT "createdAt", "description", "id", "image", "name", "price", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
