const { PrismaClient } = require ("@prisma/client");
const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name : "Computer Science" },
                { name: "Music" },
                { name: "Photography" },
                { name: "Filming" },
                { name: "Marketing" },
                { name: "Accounting" }
            ]           
        })
        console.log("success");
    } catch (error) {
        console.log("Error seeding category table", error);
    } finally {
        await database.$disconnect();
    }
}

main();