import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function upsertProduct(productData) {
    await prisma.products.upsert({
        where: { name: productData.name },
        update: productData,
        create: productData
    });
}

async function main() {
    const products = [
        {
            id: '0',
            name: '1.3 HP DC Motor Replacment Proline 7qt/Commercial 8 qt',
            description: 'This motor is a factory replacement for the proline 7 qt and commercial 8 qt kitchenaid mixers with the DC style motor. Over time the motors can fail or gears can strip resulting in needing to replace the entire motor and transmission due to the fact that individual gears/motor are not manufactured for resale. This results in having to do an entire motor swap. If your 7qt/8qt machine is not functioning properly, making a clicking noise then not powering on, or powering on for a few moments then shutting down, a motor swap will rectify the issue.',
            price: 175,
            image_url: 'https://cdn.shopify.com/s/files/1/0013/7332/9959/products/IMG_20210310_141751_2_1024x1024.jpg?v=1615424270'
        },
        {
            id: '1',
            name: 'A Big "Whisk" Taker Decal',
            description: 'Are you a Whisk taker? This decal is perfect for you! Black Vinyl measuring 7 inch x 1 inch. Spruce up your mixer, laptop, water bottle, or any other decorative application with this awesome decal brought to you by the lovely Mrs. Mixer!',
            price: 12,
            image_url: 'https://cdn.shopify.com/s/files/1/0013/7332/9959/products/IMG_20210310_141751_2_1024x1024.jpg?v=1615424270'
        },
        // Keep filling in the products array with more products
        {
            id: '2',
            name: 'Anti Slide Cutting Board Mat',
            description: 'This product was designed to go under cutting boards to prevent slippage! The Anti Slide Mat goes a long ways in protecting your digits and help prevent a costly trip to the emergency room! The mat does a great job of gripping your cutting board and the counter to prevent any movement while cutting! This was designed after an eventful day in the kitchen in which two people in our household cut their fingers whilst dicing some veggies!Low profile prevents a need for much space for storage!Dimensions 16in x 11.5in',
            price: 30,
            image_url: 'https://cdn.shopify.com/s/files/1/0013/7332/9959/products/IMG_20210310_141751_2_1024x1024.jpg?v=1615424270'
        },
        {
            id: '3',
            name: 'Artisan Tilt-Head Stand Mixer (KSM150PSER) 5 qt',
            description: 'The KitchenAid Artisan Series 5 Quart Tilt-Head Stand Mixer features a spacious 5-quart stainless steel bowl capacity that can whip up to 9 dozen cookies, 4 loaves of bread, or 7 pounds of mashed potatoes in a single batch! The Artisan Series comes in a variety of colors to match any kitchen and personality. The tilt-head design allows for easy access to the bowl and beater, adding ingredients and scraping the sides of the bowl. The 10-speed slide control ranges from a very fast whip to a very slow stir. The flat beater, dough hook, and the professional wire whip add to the versatility of the mixer. The flat beater is the ideal accessory for mixing normal to heavy batters. From cake mixes to firm cookie dough, the flat beater mixes quickly and thoroughly. The dough hook mixes and kneads yeast dough, saving both time and the effort of hand-kneading. The wire whip incorporates the maximum amount of air in whipped mixtures for fluffier whipped cream and angel food cakes. The tilt-head mixer also includes a pouring shield for guiding ingredients to their proper destination, and the bowl itself locks tight to the base. The mixer measures 14 inches high by 8-2/3 inches wide by 14 inches deep and carries a one-year hassle-free replacement warranty.',
            price: 380,
            image_url: 'https://cdn.shopify.com/s/files/1/0013/7332/9959/products/IMG_20210310_141751_2_1024x1024.jpg?v=1615424270'
        }
    ];


    for (const product of products) {
        await upsertProduct(product);
    }
}

main().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
});


//     const products3 = await prisma.products.createMany({
//         where: { name: 'Anti Slide Cutting Board Mat' },
//         update: {},
//         create: {
//             id: '2',
//             name: 'Anti Slide Cutting Board Mat',
//             description: 'This product was designed to go under cutting boards to prevent slippage! The Anti Slide Mat goes a long ways in protecting your digits and help prevent a costly trip to the emergency room! The mat does a great job of gripping your cutting board and the counter to prevent any movement while cutting! This was designed after an eventful day in the kitchen in which two people in our household cut their fingers whilst dicing some veggies!Low profile prevents a need for much space for storage!Dimensions 16in x 11.5in',
//             price: 30,
//             image_url: 'https://cdn.shopify.com/s/files/1/0013/7332/9959/products/IMG_20210310_141751_2_1024x1024.jpg?v=1615424270',
//             created_at: new Date(),
//             updated_at: new Date(),
//         },
//     })
//     const products4 = await prisma.products.createMany({
//         where: { name: 'Artisan Tilt-Head Stand Mixer (KSM150PSER) 5 qt' },
//         update: {},
//         create: {
//             id: '3',
//             name: 'Artisan Tilt-Head Stand Mixer (KSM150PSER) 5 qt',
//             description: 'The KitchenAid Artisan Series 5 Quart Tilt-Head Stand Mixer features a spacious 5-quart stainless steel bowl capacity that can whip up to 9 dozen cookies, 4 loaves of bread, or 7 pounds of mashed potatoes in a single batch! The Artisan Series comes in a variety of colors to match any kitchen and personality. The tilt-head design allows for easy access to the bowl and beater, adding ingredients and scraping the sides of the bowl. The 10-speed slide control ranges from a very fast whip to a very slow stir. The flat beater, dough hook, and the professional wire whip add to the versatility of the mixer. The flat beater is the ideal accessory for mixing normal to heavy batters. From cake mixes to firm cookie dough, the flat beater mixes quickly and thoroughly. The dough hook mixes and kneads yeast dough, saving both time and the effort of hand-kneading. The wire whip incorporates the maximum amount of air in whipped mixtures for fluffier whipped cream and angel food cakes. The tilt-head mixer also includes a pouring shield for guiding ingredients to their proper destination, and the bowl itself locks tight to the base. The mixer measures 14 inches high by 8-2/3 inches wide by 14 inches deep and carries a one-year hassle-free replacement warranty.',
//             price: 380,
//             image_url: 'https://cdn.shopify.com/s/files/1/0013/7332/9959/products/IMG_20210310_141751_2_1024x1024.jpg?v=1615424270',
//             created_at: new Date(),
//             updated_at: new Date(),
//         },
//     })
// }