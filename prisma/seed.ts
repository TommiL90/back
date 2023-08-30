/* eslint-disable prettier/prettier */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
console.log("deu certo")
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });