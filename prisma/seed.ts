import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const products = await prisma.products.createMany({
        where: { name: '1.3 HP DC Motor Replacment Proline 7qt/Commercial 8 qt' },
        update: {},
        create: {
            id: 0,
            name: '1.3 HP DC Motor Replacment Proline 7qt/Commercial 8 qt',
            description: 'This motor is a factory replacement for the proline 7 qt and commercial 8 qt kitchenaid mixers with the DC style motor. Over time the motors can fail or gears can strip resulting in needing to replace the entire motor and transmission due to the fact that individual gears/motor are not manufactured for resale. This results in having to do an entire motor swap. If your 7qt/8qt machine is not functioning properly, making a clicking noise then not powering on, or powering on for a few moments then shutting down, a motor swap will rectify the issue. ',
            price: 175,
            image_url: 'https://cdn.shopify.com/s/files/1/0013/7332/9959/products/IMG_20210310_141751_2_1024x1024.jpg?v=1615424270',
            created_at: new Date(),
            updated_at: new Date(),
        },
    })
    const products2 = await prisma.products.createMany({
        update: {},
        create: {
            id: '1',
            name: 'A Big "Whisk" Taker Decal',
            description: 'Are you a Whisk taker? This decal is perfect for you! Black Vinyl measuring 7 inch x 1 inch. Spruce up your mixer, laptop, water bottle, or any other decorative application with this awesome decal brought to you by the lovely Mrs. Mixer!',
            price: 12,
            image_url: 'https://cdn.shopify.com/s/files/1/0013/7332/9959/products/IMG_20210310_141751_2_1024x1024.jpg?v=1615424270',
            created_at: new Date(),
            updated_at: new Date(),
        },
    })
    // continue creating earch product with the given data
    const products3 = await prisma.products.createMany({
        where: { name: 'Anti Slide Cutting Board Mat' },
        update: {},
        create: {
            id: '2',
            name: 'Anti Slide Cutting Board Mat',
            description: 'This product was designed to go under cutting boards to prevent slippage! The Anti Slide Mat goes a long ways in protecting your digits and help prevent a costly trip to the emergency room! The mat does a great job of gripping your cutting board and the counter to prevent any movement while cutting! This was designed after an eventful day in the kitchen in which two people in our household cut their fingers whilst dicing some veggies!Low profile prevents a need for much space for storage!Dimensions 16in x 11.5in',
            price: 30,
            image_url: 'https://cdn.shopify.com/s/files/1/0013/7332/9959/products/IMG_20210310_141751_2_1024x1024.jpg?v=1615424270',
            created_at: new Date(),
            updated_at: new Date(),
        },
    })
    const products4 = await prisma.products.createMany({
        where: { name: 'Artisan Tilt-Head Stand Mixer (KSM150PSER) 5 qt' },
        update: {},
        create: {
            id: '3',
            name: 'Artisan Tilt-Head Stand Mixer (KSM150PSER) 5 qt',
            description: 'The KitchenAid Artisan Series 5 Quart Tilt-Head Stand Mixer features a spacious 5-quart stainless steel bowl capacity that can whip up to 9 dozen cookies, 4 loaves of bread, or 7 pounds of mashed potatoes in a single batch! The Artisan Series comes in a variety of colors to match any kitchen and personality. The tilt-head design allows for easy access to the bowl and beater, adding ingredients and scraping the sides of the bowl. The 10-speed slide control ranges from a very fast whip to a very slow stir. The flat beater, dough hook, and the professional wire whip add to the versatility of the mixer. The flat beater is the ideal accessory for mixing normal to heavy batters. From cake mixes to firm cookie dough, the flat beater mixes quickly and thoroughly. The dough hook mixes and kneads yeast dough, saving both time and the effort of hand-kneading. The wire whip incorporates the maximum amount of air in whipped mixtures for fluffier whipped cream and angel food cakes. The tilt-head mixer also includes a pouring shield for guiding ingredients to their proper destination, and the bowl itself locks tight to the base. The mixer measures 14 inches high by 8-2/3 inches wide by 14 inches deep and carries a one-year hassle-free replacement warranty.',
            price: 380,
            image_url: 'https://cdn.shopify.com/s/files/1/0013/7332/9959/products/IMG_20210310_141751_2_1024x1024.jpg?v=1615424270',
            created_at: new Date(),
            updated_at: new Date(),
        },
    })



// {
//     "name":"1.3 HP DC Motor Replacment Proline 7qt/Commercial 8 qt",
//     "Description":"This motor is a factory replacement for the proline 7 qt and commercial 8 qt kitchenaid mixers with the DC style motor. Over time the motors can fail or gears can strip resulting in needing to replace the entire motor and transmission due to the fact that individual gears/motor are not manufactured for resale. This results in having to do an entire motor swap. If your 7qt/8qt machine is not functioning properly, making a clicking noise then not powering on, or powering on for a few moments then shutting down, a motor swap will rectify the issue. ",
//     "Price":"175"},

// {
//     "name":"A Big \"Whisk\" Taker Decal",
//     "Description":"Are you a Whisk taker? This decal is perfect for you! Black Vinyl measuring 7 inch x 1 inch. Spruce up your mixer, laptop, water bottle, or any other decorative application with this awesome decal brought to you by the lovely Mrs. Mixer!",
//     "Price":"12"},

// {
//     "name":"Anti Slide Cutting Board Mat",
//     "Description":"This product was designed to go under cutting boards to prevent slippage! The Anti Slide Mat goes a long ways in protecting your digits and help prevent a costly trip to the emergency room! The mat does a great job of gripping your cutting board and the counter to prevent any movement while cutting! This was designed after an eventful day in the kitchen in which two people in our household cut their fingers whilst dicing some veggies!Low profile prevents a need for much space for storage!Dimensions 16in x 11.5in",
//     "Price":"30"},

// {
//     "name":"Artisan Tilt-Head Stand Mixer (KSM150PSER) 5 qt",
//     "Description":"The Artisan is a wonderful machine and sits on the top shelf of the tilt-head units. These Artisans are Kitchenaid Refurbish with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, upgraded body screws, bearing bracket lock-nuts) to the machine to guarantee that it will hold up and handle the toughest tasks. </em>Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.</em>Shipping is free within the Continental US!</em>Color - Empire Red</em>Damage - None</em>",
//     "Price":"409.99"},

// {
//     "name":"Artisan Tilt-Head Stand Mixer (RRK150BM) 5 qt",
//     "Description":"The Artisan is a wonderful machine and sits on the top shelf of the tilthead units. These Artisans are Kitchenaid Refurbish with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, upgraded body screws, bearing bracket lock-nuts) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!Color - Matte Black with Chrome Knobs Damage - None",
//     "Price":"399.99"},

// {
//     "name":"Artisan Tilt-Head Stand Mixer (RRK150ER) 5qt",
//     "Description":"The Artisan is a wonderful machine and sits on the top shelf of the tilthead units. These Artisans are Kitchenaid Refurbish with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, upgraded body screws, bearing bracket lock-nuts) to the machine to guarantee that it will hold up and handle the toughest tasks. Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!Color - Empire RedDamage - None",
//     "Price":"399.99"},

// {
//     "name":"Artisan Tilt-Head Stand Mixer (RRK150WH) 5 qt",
//     "Description":"The Artisan sets the standard for kitchen aid mixers. This Kitchenaid Refurbish unit comes with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, everdime, bearing bracket lock nut washers, and upgraded body screws) to the machine to guarantee that it will hold up and handle the toughest tasks.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!Color - White BlancDamage - Scratch from lock lever, pictured below",
//     "Price":"399.99"},

// {
//     "name":"Attachment Bundle Tilt Head Models",
//     "Description":"Attachment set includes the nylon-coated flat beater, dough hook, and wire whisk . These attachments will cover several jobs youll run into in the kitchen from mashing potatoes to whipping up some cookie dough. Works with Classic, Classic Plus, Ultra Power, and Artisan models.",
//     "Price":"65"},

// {
//     "name":"Attachment Hub Thumb Screw",
//     "Description":"This hub thumb screw will work for all models of the kitchenaid mixer! It is designed to hold both the Kitchenaid Badge as well as the external attachments in place! They can crack, get lost or even break completely. Easily replace by simply screwing the new one into place!",
//     "Price":"15"},

// {
//     "name":"Back-Cap Screw for Tilt-Head Models (Fits K5A/K5SS)",
//     "Description":"The back-cap screw secures the back cap to the upper/lower housing of the tilt-head models and K5A/K5SS models.  ",
//     "Price":"8"},

// {
//     "name":"Bearing Bracket",
//     "Description":"The bearing bracket is used on all tilt head mixers as well as all bowl raise mixers with a removable back cap, such as the K5SS!",
//     "Price":"25"},

// {
//     "name":"Bearing Bracket Lock Nuts For Tilt-Head Models (Fits K5A-K5SS)",
//     "Description":"One of the main failures that we have come to learn while servicing these machines stems from the bearing bracket nuts.  When these nuts become loose, the bearing bracket (which supports the motor shaft) can shift, causing strain on the motor (usually resulting in a low, rumbling noise).  Get yourself some lock nuts to prevent this issue! ",
//     "Price":"7"},

// {
//     "name":"Beater Blade 5L-M (Fits K5SS/K5A/KSM5/Pro HD 5 qt Mixers)",
//     "Description":"The Beater Blade is the original flex edge/ silicone edge beater. When it comes to quality this is the attachment you seek! The beater blade is top of the line when it comes to making sure all of your ingredients are incorporated during the mixing process. It helps scrape the side/bottom of the bowl to insure a proper mix every time!The 5LM fits the K5SS/K5A/KSM50 and all variations of the bowl raise mixer that has the removable back cap. It also fits the professional HD 5 qt mixers that start with the model number KG25! This will not fit tilt heads or the professional 5 plus/Professional 600, you can find those models in separate listings!",
//     "Price":"50"},

// {
//     "name":"Beater Blade 6L-M (Fits Professional 600/7Qt/8Qt Mixers)",
//     "Description":"The best Silicone edge beater on the market! Welcome to the beater blade experience. The Beater Blade was the original silicone edge beater. It provides top quality when it comes to mixing your ingredients. The silicone edge is designed to scrape the sides of the bowl as it mixes, preventing ingredients from riding up the sides of the bowl! Put down the utensil you use to scrape the bowl as your mixer runs and make the job a breeze!The 6L-M is designed to fit both the Pro 600 as well as the 7qt proline and 8qt commercial!If you own a tilt head/K5SS/Pro 5 Plus style mixer check the corresponding beater blade for your model!",
//     "Price":"55"},

// {
//     "name":"Beater Blade TH-M (Fits Tilt Head Models Mixers (Artisan/Classic/UltraPower))",
//     "Description":"Make mixing a breeze with the beater blade. The beater blade is top notch when it comes to making sure the sides of your bowl get scraped while mixing, insuring all of your ingredients get incorporated properly. The Beater Blade TH-M Fits all tilt head models including but not limited to Artisan/Classic/Ultrapower/ClassicPlus. If your mixer has a tilt head, this will fit your model! This does not fit any bowl raise mixers, if youre looking for a variation for a bowl raise mixer, check our other listings!",
//     "Price":"45"},

// {
//     "name":"Beater Blade XL-M (Fits Professional 5 Plus Mixers)",
//     "Description":"The best Silicone edge beater on the market! Welcome to the beater blade experience. The Beater Blade was the original silicone edge beater. It provides top quality when it comes to mixing your ingredients. The silicone edge is designed to scrape the sides of the bowl as it mixes, preventing ingredients from riding up the sides of the bowl! Put down the utensil you use to scrape the bowl as your mixer runs and make the job a breeze!The XL-M is designed to fit the Professional 5 Plus KitchenAid Mixer.If you own a tilt head/K5SS style mixers check the corresponding beater blade for your model!",
//     "Price":"55"},

// {
//     "name":"Body Screw Upgrade for Tilt-Head Models",
//     "Description":"A 4 Pack of Screw and Lock Washer designed to keep your machine housing tight as intended! The phillips head is a much safer tool to use as opposed to the flat blade screw. Its really easy to scratch your machine when putting the flat head screws back in! This phillips head upgrade not only protects your aesthetically but they cove with 4 lock washer that are the perfect fit to make sure your body screws never rattle loose!",
//     "Price":"12"},

// {
//     "name":"Bowl Arm Assist For K5A/K5SS Models",
//     "Description":"This is the bowl arm assist for the K5A/K5SS style bowl raise mixers (all bowl raise models with the removeable back caps) These are designed to help lift the bowl and lock it into place when you twist the raise arm to raise the bowl into the upward position! On occasion, the arm assist can become frail and break/strip to render the raise function useless. This part will rectify and issue with the bowl not raising into position! Check out Mr. Mixers Youtube tutorials for a how to install!",
//     "Price":"15"},

// {
//     "name":"Bowl Arm Raise For Pro 600/Pro 5 Plus",
//     "Description":"This is the bowl arm raise that helps to lift the arms of your bowl raise mixer! This part is used in the pro 600/pro5 plus style bowl raise machines! If the arms of your machine will no longer raise, this will fix your issue!",
//     "Price":"15"},

// {
//     "name":"Bowl Arm Raise For Proline 7qt and commercial 8 qt",
//     "Description":"This is the bowl arm raise that helps to lift the arms of your bowl raise mixer! This part is used in the proline 7qt and commercial 8qt style bowl raise machines! If the arms of your machine will no longer raise, this will fix your issue!",
//     "Price":"15"},

// {
//     "name":"Bullet Proof Washers for Professional Models",
//     "Description":"Help bullet proof your Professional Mixer by installing a set of 6 lock washers to both the lower housing mounting bolts and the pedestal base mounting bolts. Through vibration these bolts can work themselves loose allowing the head to bounce/wobble. When this happens excess pressure is placed on the bolt mounting holes causing the housing to bend or even break! This requires complete replacement of the lower housing/base. Protect it by simply installing these 6 lock washers!How to install located on our Youtube!",
//     "Price":"10"},

// {
//     "name":"Carbon Motor Brush Caps for Tilt-Head Models (Fits K5A/K5SS)",
//     "Description":"Carbon motor brush caps are the caps that are inserted on both sides of the head of the tilt head and K5SS style of machines. They are designed to hold the carbon motor brushes in place. These are a perfect replacement for your current set!",
//     "Price":"15"},

// {
//     "name":"Carbon Motor Brush Holder For Tilt-Head Models (fits K5A/K5SS)",
//     "Description":"The carbon motor brush holder supports the carbon motor brush insert and the carbon motor brush.  If this is damaged, consider replacing! ",
//     "Price":"12"},

// {
//     "name":"Carbon Motor Brush Insert for Tilt-Head (fits K5A/K5SS)",
//     "Description":"The carbon motor brush insert contains the nodule that the carbon motor brush must fit around in order for your mixer to run.  If these are damaged, consider replacing!",
//     "Price":"12"},

// {
//     "name":"Carbon Motor Brushes For Tilt-Head (Fits K5A/K5SSA)",
//     "Description":"Carbon motor brushes for the tilt head model kitchenaid mixer, as well as the bowl raise models with removeable back caps such as the K5SS model. ",
//     "Price":"15"},

// {
//     "name":"Center Gear for Tilt-Head, K5A/K5SS Models",
//     "Description":"This is the center gear and main drive gear for the tilt head and K5SS style bowl raise machines with the removeable back cap. This gear will fit the following styles (Artisan/Classic/Classic Plus/Ultra Power/K5SS).",
//     "Price":"45"},

// {
//     "name":"Classic Tilt-Head Stand Mixer (K45SSWH) 4.5qt",
//     "Description":"The Kitchenaid Classic is a wonderful machine. This unit is brand new.  We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, body screw upgrade with locking washer, bearing bracket lock nuts, and everdime) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!Color - WhiteDamage - None",
//     "Price":"339.99"},

// {
//     "name":"Combo Spring, Washer & EverDime For Tilt-Head Models",
//     "Description":"Every new machine should have these two products installed to protect and extend the life of the mixer! The spring and washer to help keep the beaters in place tight and the EverDime to protect the machine from bouncing while mixing also prevents attachments from chipping as well as dampens the head if it drops from the raised position! You will need a 1/8inch punch and snap ring pliers for the install which we offer in a kit with the spring and washer or as individual items in the store! Installation videos featured on our YouTube! We recommend a Regrease as your machine will be partially disassembled for install. We offer Re-Grease Kits in our store. If you would like the upgrade, but arent the DIY type, send your mixer in for a full Re-Grease, Tune and Clean and we can add the upgrades for you!",
//     "Price":"25"},

// {
//     "name":"Comfy Grip",
//     "Description":"The comfy grip is a great way to upgrade your machine! Gone are the days of a bland handle. Make your machine the center of attention with the new comfy grip. The best part is that it is dishwasher safe so ifit gets dirty simply pop it in the wash! ",
//     "Price":"20"},

// {
//     "name":"Complete Gear Set Pro 600/Pro 5 Plus",
//     "Description":"This is a complete replacement gear set for the professional 600/Pro 5 plus style kitchen aid mixer! Save money by bundling the entire set! Insure that all of your gears are in perfect condition by doing a full replacement during your re-grease/repair. Included in the set are the worm gear and worm follower gear as well as the hub and bevel gear.This is not compatible with the k5ss/K5A style bowl raise mixers nor the Epicurean models!",
//     "Price":"100"},

// {
//     "name":"Complete Rear End Replacment Tilt Head/K5SS",
//     "Description":"This is a complete rear end replacement for the Kitchenaid Mixer. This set comes with the phase board, speed plate, governor and bearing bracket. This contains all of the components in the rear end of the mixer. Make your mixer run like new by replacing all of the parts that wear over time!This kit works for all tilt head models (artisan/classic/ultrapower/classicplus). It is also compatible with the bowl raise machines with the removable back caps (K5SS/KSM50) Style machines. It is not compatible with the K5A.",
//     "Price":"90"},

// {
//     "name":"Complete Repair Tool Kit",
//     "Description":"This tool kit contains everything you need to work on your machine! Whether you dont have tools, or only have indoor tools that you dont want covered in grease, we have you covered. Never look for the tools you need for the job again, as they will all be in a centralized location in the box provided! If you dont need the complete set, but need the snap ring pliers, punches or rubber mallets, we offer them as standalone products!",
//     "Price":"60"},

// {
//     "name":"Cookie Coven Decal",
//     "Description":"Welcome to the Cookie Coven! If you consider yourself part of the occult then this decal is specifically for you! Welcome to the Cookie Coven!Decal is approximately 1 inch wide and 7 inches long! ",
//     "Price":"12"},

// {
//     "name":"Cord Organizer",
//     "Description":"Cord organizers are a great way to help keep your space tidy. Keeping your cord wrapped not only helps keep organized but its a great way to protect your cord from unwanted wear and damage from counter encounters! They are also a great way to make sure your mixer/appliance doesnt get ripped off the counter by accident!These work with all style of Kitchenaid Mixers. In fact, they are universal for nearly all kitchen appliances so feel free to pick one up for your toaster/blender/can opener as well!Available in Black/White/Grey! If you need multiple organizers, check out the bundle package!",
//     "Price":"10"},

// {
//     "name":"Cord Organizer 2 pack",
//     "Description":"Cord organizers are a great way to help keep your space tidy. Keeping your cord wrapped not only helps keep organized but its a great way to protect your cord from unwanted wear and damage from counter encounters! They are also a great way to make sure your mixer/appliance doesnt get ripped off the counter by accident!These work with all style of Kitchenaid Mixers. In fact, they are universal for nearly all kitchen appliances so feel free to pick one up for your toaster/blender/can opener as well!Available in Black/White/Grey! If you need more than two check out our 3 organizer bundle!",
//     "Price":"15"},

// {
//     "name":"Cord Organizer 3 Pack",
//     "Description":"Cord organizers are a great way to help keep your space tidy. Keeping your cord wrapped not only helps keep organized but its a great way to protect your cord from unwanted wear and damage from counter encounters! They are also a great way to make sure your mixer/appliance doesnt get ripped off the counter by accident! These work with all style of Kitchenaid Mixers. In fact, they are universal for nearly all kitchen appliances so feel free to pick one up for your toaster/blender/can opener as well!Available in multiple colors! If you need multiple organizers, check out the bundle package!",
//     "Price":"20"},

// {
//     "name":"Cow Print Decal",
//     "Description":"This is a cow print decal! It comes with 12 total pieces (11 spots and a cow head). Spruce up your mixer by turning it into a majestic Bovine!",
//     "Price":"15"},

// {
//     "name":"Deluxe Tilt-Head Stand Mixer (KSM97MI) 4.5qt",
//     "Description":"The Kitchenaid Deluxe is a wonderful machine. This unit is brand new. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, body screw upgrade with locking washer, bearing bracket lock nuts, and everdime) to the machine to guarantee that it will hold up and handle the toughest tasks. Color - Matte IceDamage - None (New condition)",
//     "Price":"379.99"},

// {
//     "name":"Deluxe Tilt-Head Stand Mixer (KSM97SL) 4.5 qt",
//     "Description":"The Kitchenaid Deluxe is a wonderful machine. This unit is brand new. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, body screw upgrade with locking washer, bearing bracket lock nuts) to the machine to guarantee that it will hold up and handle the toughest tasks. Color - SilverDamage - None (new condition)",
//     "Price":"379.99"},

// {
//     "name":"Dowel Pin (Fits Tilt-Heads, K5A/K5SS, Professional 600/5+ Models)",
//     "Description":"The dowel pin sits on the planetary shaft inside the transmission of all of the models of the Kitchenaid Mixer. It helps to secure the gears into place. These dowel pins can shear or become bent/damaged. This is a factory replacement and will work with every model of the KitchenAid Mixer",
//     "Price":"12"},

// {
//     "name":"Drip Ring",
//     "Description":"This is the Drip Ring for the Kitchenaid Mixer. The drip ring is compatible with all forms of the tilt head mixer (classic/ultra power/artisan) as well well as the K5SS styles of machines. These are standard so if your machine has a drip ring or is supposed to have one, this part will work!",
//     "Price":"20"},

// //
// {
//     "name":"EverDime",
//     "Description":"Mr. Mixer certified invention to improve the mixing experience! Dont leave your machine, bowl and attachments susceptible to damage due to a loose bouncing head! Mix right every time with this set it and forget it one of a kind products to keep your machine running efficiently and safely.Works with all Tilt-Head style machines except the Kitchenaid Mini Series!",
//     "Price":"15"},

// {
//     "name":"Everdime/Pedestal Mat Combination",
//     "Description":"Combine two crowd favorites to save a few dollars! This combination features the Everdime, which is designed to eliminate the head bounce on tilt head mixers as well as help prevent your machine and paddles from damage. The pedestal mat is designed to fit all machines, Its an anti vibration/anti slide mat to protect your machine from harmful vibration as well as help prevent it from walking off the counter! The mat is available in 4 colors (red/black/white/grey). Bundle and Save!",
//     "Price":"40"},

// {
//     "name":"Factory Replacement Worm Gear for Artisan/Tilt-head Models (Fits K5A/K5SS)",
//     "Description":"Plastic gear that fits all tilt head versions and bowl raise mixers with removeable back caps!",
//     "Price":"25"},

// {
//     "name":"F-Bomb Decal",
//     "Description":"We understand, sometimes you just gotta drop it. Not everything always goes your way in life¦or the kitchen. Or maybe it does, and you wanna drop it in celebration. Whatever the reason, weve got you covered with our F-Bomb decal! Size: 6 in x 2 in",
//     "Price":"12"},

// {
//     "name":"Frankenstein #1 Kitchenaid Artisan Mixer 5 qt",
//     "Description":"The Frankenstein machines are now here! As you all know, we here at Mr Mixer try to be as environmentally friendly as possible. So, we had the idea of putting together Frankenstein machines from our spare parts. Some of these units will be built from 2-10 different machines (sometimes more!) and take us anywhere between a few hours to a few days to clean, assemble, tune, etc. Cool, right? Dont worry, these units will run just like any other refurbished unit. We replace all electronics/gears with new if needed. Thank you for helping the place that we all call home. Enjoy!This unit has upgraded body locking screws, bearing bracket lock nuts, everdime, and spring/washer installment.Color - top is aqua sky. base is cement grey.Damage - some scuff/scrapes in the cement grey base.",
//     "Price":"499.99"},

// {
//     "name":"Frankenstein #2 Kitchenaid Artisan Mixer 5qt",
//     "Description":"The Frankenstein machines are now here! As you all know, we here at Mr Mixer try to be as environmentally friendly as possible. So, we had the idea of putting together Frankenstein machines from our spare parts. Some of these units will be built from 2-10 different machines and take us anywhere from a few hours to a few days to clean, assemble, tune, etc. Cool, right? Dont worry, these units will run just like any other refurbished unit. We replace all electronics/gears with new if needed. Thank you for helping make this world a better place! Enjoy!Color: White, black, and greyDamage - Scuffs in clear coat, small dent in pedestal ",
//     "Price":"499.99"},

// {
//     "name":"Frankenstein #3 Kitchenaid Artisan Mixer 5 qt",
//     "Description":"The Frankenstein machines are now here! As you all know, Mr Mixer strives to be as environmentally friendly as possible. So, we had the idea of putting together Frankenstein machines from our spare mixer parts that have accumulated over time. Some of the units that we have built come from 2-10 different machines and take us anywhere between a few hours to a few days to assemble. Cool, right? Dont worry, these units will run just like any other refurbished unit. We replace all electronics/gears with new if needed.  And yes, these mixers come with all the upgrades!  Thank you for helping make this world a better place! Enjoy!Color - Pink, green, grey, white.  Damage - Slight bend in posterior upper housing, few paint chips and scratches in clear coat/paint. ",
//     "Price":"499.99"},

// {
//     "name":"Frankenstein #4 Kitchenaid Tilt-Head",
//     "Description":"The Frankenstein machines are now here! As you all know, we here at Mr Mixer try to be as environmentally friendly as possible. So, we had the idea of putting together Frankenstein machines from our spare parts. Some of these units will be built from 2-10 different machines (sometimes more!) and take us anywhere between a few hours to a few days to clean, assemble, tune, etc. Cool, right? Dont worry, these units will run just like any other refurbished unit. We replace all electronics/gears with new if needed. Thank you for helping the place that we all call home! Enjoy!Color - Red, White, BlueDamage - multiple scratches in clear coat.  Some paint chips on planetary.  All pictured below.  ",
//     "Price":"499.99"},

// {
//     "name":"Frankenstein #5 Kitchenaid Tilt-Head",
//     "Description":"The Frankenstein machines are now here! As you all know, we here at Mr Mixer try to be as environmentally friendly as possible. So, we had the idea of putting together Frankenstein machines from our spare parts. Some of these units will be built from 2-10 different machines (sometimes more!) and take us anywhere between a few hours to a few days to clean, assemble, tune, etc. Cool, right? Dont worry, these units will run just like any other refurbished unit. We replace all electronics/gears with new if needed. Thank you for helping the place that we all call home! Enjoy!Color - Red, White, BlueDamage - Scuff in upper housing, pictured below ",
//     "Price":"499.99"},

// {
//     "name":"Frankenstein #6 Kitchenaid Tilt-Head",
//     "Description":"The Frankenstein machines are now here! As you all know, we here at Mr Mixer try to be as environmentally friendly as possible. So, we had the idea of putting together Frankenstein machines from our spare parts. Some of these units will be built from 2-10 different machines (sometimes more!) and take us anywhere between a few hours to a few days to clean, assemble, tune, etc. Cool, right? Dont worry, these units will run just like any other refurbished unit. We replace all electronics/gears with new if needed. Thank you for helping the place that we all call home! Enjoy!Color - Red, White, BlueDamage - Scratches in clear coat.  Pictured below.  ",
//     "Price":"499.99"},

// {
//     "name":"Frankenstein #7 KitchenAid Tilt-Head",
//     "Description":"The Frankenstein machines are now here! As you all know, Mr Mixer strives to be as environmentally friendly as possible. So, we had the idea of putting together Frankenstein machines from our spare mixer parts that have accumulated over time. Some of the units that we have built come from 2-10 different machines and take us anywhere between a few hours to a few days to assemble. Cool, right? Dont worry, these units will run just like any other refurbished unit. We replace all electronics/gears with new if needed. And yes, these mixers come with all the upgrades! Thank you for helping make this world a better place! Enjoy!Color - Black, Red, WhiteDamage - Small dent in upper housing, chips in paint, scratches. All damage showed below.",
//     "Price":"499.99"},

// {
//     "name":"Frankenstein #8 Kitchenaid Tilt-Head",
//     "Description":"The Frankenstein machines are now here! As you all know, we here at Mr Mixer try to be as environmentally friendly as possible. So, we had the idea of putting together Frankenstein machines from our spare parts. Some of these units will be built from 2-10 different machines (sometimes more!) and take us anywhere between a few hours to a few days to clean, assemble, tune, etc. Cool, right? Dont worry, these units will run just like any other refurbished unit. We replace all electronics/gears with new if needed. Thank you for helping the place that we all call home! Enjoy!Color - Black, cement grey, dark grey Damage - extensive scratching in clear coat on black upper housing (pictured below)",
//     "Price":"499.99"},

// {
//     "name":"Front and Rear Bearing Bushing Pro 600/Pro 5 Plus Bowl Raise Models",
//     "Description":"These are the front and rear bearing bushings for the Pro 600/Pro 5 Plus style of bowl raise mixer. These bearings sit on the front and rear of the Floating Worm Gear on the aforementioned models! These can become weak and crack or break with heavy use. The Worm gear as well as the Thruster bearings that sit behind the front bearing bushing can be found on a separate listing on Mr Mixers Store!",
//     "Price":"15"},

// {
//     "name":"Gear Set for Tilt-Head, K5A/K5SS Models",
//     "Description":"This is a complete replacement for all of the gears on the tilt head mixers (classic/classicplus/artisan/ultrapower) as well as the K5SS style mixers! With this gear replacement you get all the gears necessary to replace the entire gear box!",
//     "Price":"100"},

// {
//     "name":"Governor",
//     "Description":"The governor helps to maintain speeds under a load by adding counter balance, if your machine has a vibration sound from the back end its beneficial to replace this part! The governor fits all tilt head versions and bowl raise mixers with removeable back caps!",
//     "Price":"25"},

// {
//     "name":"Governor Pin",
//     "Description":"This is the tiny pin that drops into the back of the motor shaft that helps the governor secure into place! Its the smallest part of the machine and easy to misplace! ",
//     "Price":"10"},

// {
//     "name":"Governor Stud Drive for Tilt-Head Models (K5A/K5SS)",
//     "Description":"The governor stud drive is a small part that is installed into the rear of the drive shaft which the governor fits around.  If this little guy gets lost, the governor will not sit on the drive shaft properly.  Replace if lost!!",
//     "Price":"12"},

// {
//     "name":"Grease & Gasket: Artisan/Tilt-Head Models (Fits K5A/K5SS/KSM5)",
//     "Description":"Comes with an order of our NSF H1 NLGI 2 Food Safe Grease and a replacement gasket for the Artisan tilt head model. Anytime youre re-greasing your machine is a good time to get the gasket replaced as well!  (4.6 ounces)Gasket fits all tilt head models as well as K5A/K5SS style bowl raise models.",
//     "Price":"30"},

// {
//     "name":"Grease & Gasket: Professional 5/6 qt Bowl Raise Models",
//     "Description":"Comes with an order of our NSF H1 NLGI 2 Food Safe Grease and a replacement gasket for the Pro series bowl raise models. Anytime youre re-greasing your machine is a good time to get the gasket replaced as well!  (3.6-3.8 ounces of grease)See the full list of compatible machines below.",
//     "Price":"30"},

// {
//     "name":"Hall Effect Sensor",
//     "Description":"This is a hall effect sensor for the Professional 600/Pro 5 Plus Kitchenaid Mixers. The new boards come with the sensor soldered in place, however the older style had a three prong clip! If your machine powers on and immediately goes to full speed, this is the replacement part needed to fix the issue!These are used sensors,however they are in good working condition. Due to the way they come on the newer boards, these are out of production but will save you in the long run over having to replace the whole board due to a faulty sensor!",
//     "Price":"30"},

// {
//     "name":"Hobart K45SS Stand Mixer (K45SS)",
//     "Description":"This solid-running refurbished unit comes with upgraded body screws, spring/washer, bearing bracket lock nuts, everdime, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair (if needed), regrease, and reassembly. By the way, this is one of the best running K45SSs that we have worked on.  Whoever ends up with this unit is quite fortunate.  Enjoy!Color - WhiteDamage - exterior paint chips, scratches and fading noted.  ",
//     "Price":"249.99"},

// {
//     "name":"Hub & Bevel Gear For Pro 600 / Pro 5 Plus Models",
//     "Description":"The hub and bevel gear pair together to create rotation to the attachment hub port. They come as a pair. The hub and bevel gears fits all Professional 600, Pro 5 plus and any other bowl raise machine with a fully enclosed case, without a removable back cap. Any time gears are replaced, the old grease should be removed, the transmission cleaned and new grease and gasket applied!",
//     "Price":"45"},

// {
//     "name":"Hub Gear for Tilt-Head, K5A/K5SS Models",
//     "Description":"This is the Hub Gear that drives the external attachments. It fits all tilt head (classic/artisan/ultrapower/classic plus) and K5A/K5SS bowl raise models of the KitchenAid Mixer. ",
//     "Price":"25"},

// {
//     "name":"Hub Gear Professional 600/Pro 5 Plus",
//     "Description":"This is the Hub Gear that drives the external attachments. This gear fits all professional 600/Pro 5 Plus style kitchenaid mixers. Model include Professional 600, Pro 5 Plus, Epicurean, Professional HD style machines!",
//     "Price":"25"},

// {
//     "name":"K5A/K5SS Rubber Feet",
//     "Description":"These are replacement feet for the K5A/K5SS style mixer. They have a screw that runs through them to mount them to the base. ",
//     "Price":"35"},

// {
//     "name":"K5A/K5SS/KG25 Dough Hook",
//     "Description":"*Will not fit the tilt head machines* Tilt Head Hooks available on another listing. This is a coated Dough Hook for the K5A/K5SS style bowl raise machine.  This will fit K5A/K5SS style machines with removeable back caps as well as the KG25 models of the newer professional series bowl raise machines that have the singular upper housings.",
//     "Price":"25"},

// {
//     "name":"K5A/K5SS/KG25 Enamel Coated Beater",
//     "Description":"*Will not fit the tilt head machines* Tilt Head beaters available on another listing. This is a coated beater for the K5A/K5SS style bowl raise machine. The noted difference between this and the tilt head style is the longer shaft where it attaches to the planetary. This will fit K5A/K5SS style machines with removeable back caps as well as the KG25 models of the newer professional series bowl raise machines that have the singular upper housings. ",
//     "Price":"25"},

// {
//     "name":"K5SS/K5A/KG25 Wire Whip",
//     "Description":"This Whip fits the K5A/K5SS style Kitchenaid Mixer and all bowl raise machines with the removeable back cap! It also fits the Pro HD 5 qt mixer that starts with the model number KG25!",
//     "Price":"25"},

// {
//     "name":"Kitchenaid Artisan Mixer (KSM150PSWM) 5 qt",
//     "Description":"The Artisan is a wonderful machine. . We go through these machines to ensure that they are perfect for the end user.  We add our upgrades (spring and washer, everdime, upgraded body screws, bearing bracket lock nuts) to the machine to guarantee that it will hold up and handle the toughest tasks.  This mixer comes with a Whip if real good decal.  If you dont like it, simply peel it off and clean with rubbing alcohol (we use 70% isopropyl alcohol).  Enjoy!Color - WatermelonDamage - mild scratches on beauty band (pictured below) ",
//     "Price":"409.99"},

// {
//     "name":"Kitchenaid Classic Refurbished Mixer (K45SSWH) 4.5 qt",
//     "Description":"This mixer was brought back to life from your very own! This refurbished unit comes with upgraded body screws, spring/washer, bearing bracket lock nuts, everdime, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, regrease, and reassembly to bring this machine back to life! Damaged parts are replaced with new. Enjoy!",
//     "Price":"339.99"},

// {
//     "name":"KitchenAid Deluxe Tilt-Head Mixer (KSM97SL) 4.5 qt",
//     "Description":"To be honest, we dont remember how we acquired this unit. Haha.  We have for sale a brand new deluxe mixer that has been bullet proofed by your very own (everdime, upgraded body screws, bearing bracket lock washers, spring and washer).  This mixer comes with. 4.5 qt bowl, paddle, dough hook and wire whisk.  Color - SilverDamage - minor scuff marks in paint (all pictured below).  ",
//     "Price":"339.99"},

// //
// {
//     "name":"Kitchenaid Heavy Duty Mixer (K5SSWH) 4.5 qt",
//     "Description":"This mixer was brought back to life from your very own! This refurbished unit comes with upgraded spring/washer, bearing bracket lock nuts, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, regrease, and reassembly to bring this machine back to life! Damaged parts are replaced with new. Enjoy!Color - WhiteDamage - come cosmetic chips and scuffs (all pictured below) ",
//     "Price":"389.99"},

// {
//     "name":"Kitchenaid Heavy Duty Mixer (K5SSWW) 4.5-5 qt",
//     "Description":"This mixer was brought back to life from your very own! The pinnacle of all kitchenaid/hobart units, this machine is our favorite and will likely last another 30-50 years.  This refurbished unit comes with upgraded spring/washer, bearing bracket lock nuts, comfy grip, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, regrease, and reassembly to bring this machine back to life! Damaged parts are replaced with new. Enjoy!Color - WhiteDamage - scuffs/scrapes in pain/clear coat ",
//     "Price":"399.99"},

// {
//     "name":"Kitchenaid Hub Attachment Cover",
//     "Description":"Original replacement hub cover for the Kitchenaid Mixer. These come standard on all tilt head models and the older K5SS bowl raise style of machines! They will also work for Pro 600/Pro 5 Plus style of machines when the flip hub cover has become dislodged!",
//     "Price":"20"},

// {
//     "name":"Kitchenaid K45SS Bowl Raise Mixer (K45SSWH) 4.5",
//     "Description":"This refurbished unit comes with upgraded body screws, spring/washer, bearing bracket lock nuts, attachments, comfy grip, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, regrease, and reassembly to bring this machine back to life! Damaged parts are replaced with new. Enjoy!Color - WhiteDamage - Small paint chip (picture below)",
//     "Price":"389.99"},

// {
//     "name":"KitchenAid K45SS Hobart Solid State Mixer (K45SS) 4.5 qt",
//     "Description":"This mixer was brought back to life from your very own! This refurbished unit comes with upgraded body screws, spring/washer, bearing bracket lock nuts, everdime, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, regrease, and reassembly to bring this machine back to life! Damaged parts are replaced with new. Enjoy!Color - AlmondDamage - chips in paint on posterior pedestal, previous customer repainted superior upper housing (all pictured below) ",
//     "Price":"289.99"},

// {
//     "name":"Kitchenaid Pro 500 Series Mixer (KSM500PSOB) 4.7 qt",
//     "Description":"This Pro 500 Series Mixer is one of the nicest machines that has rolled through out shop.  We think the K5A/K5SS style machines are the best units that kitchenaid/hobart every manufactured.  We acquired this unit from an independent seller who was looking to give this mixer a new home.  We went through this machine to ensure that it is perfect for the end user. We add our upgrades (spring and washer, bullet proof lock washers, comfy grip and bearing bracket lock nuts) to the machine to guarantee that it will hold up and handle the toughest tasks. Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Color - Onyx BlackDamage - small ding on upper housing (pictured below) ",
//     "Price":"469.99"},

// {
//     "name":"Kitchenaid Pro 600 Design Series Mixer (KF26M2CCA) 6qt",
//     "Description":"The Professional 600 is a wonderful and powerful machine. This Pro 600  was refurbished by Mr. Mixer. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Shipping is free within the Continental US!Color - Candy Apple RedDamage - Minor scratching in clear coat",
//     "Price":"449.99"},

// {
//     "name":"Kitchenaid Pro HD Mixer (KG25HOXMC) 5 qt.",
//     "Description":"This refurbished unit comes with upgraded with bullet proof washers, spring/washer, metal transmission housing, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, regrease, and reassembly to bring this machine back to life! Damaged parts are replaced with new. Enjoy!Color - GreyDamage - Some scratching in clear coat, minor chip in paint.  Some scratches. ",
//     "Price":"389.99"},

// {
//     "name":"Kitchenaid Pro Line Series Mixer (KSM7586PFP) 7qt",
//     "Description":"The Professional 700 is a wonderful and powerful machine. This professional mixer came from a customer who wanted to downsize their home unit. We went through this machine to ensure that it is perfect for the end user. We add our upgrades (spring and washer and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.  Color - Frosted PearlDamage - Scuff on posterior housing and paint chip near speed control lever.  All damage pictured below.  ",
//     "Price":"549.99"},

// {
//     "name":"Kitchenaid Professional 5 Plus (KV25G0XIC) 5 qt",
//     "Description":"This refurbished unit comes with upgraded body screws, spring/washer, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, regrease, and reassembly to bring this machine back to life! Damaged parts are replaced with new. This mixer is brand new but is listed as refurbished since it isnt off the shelf new.  Enjoy.Color - IceDamage - None.  Small chip on coated beater.  ",
//     "Price":"389.99"},

// {
//     "name":"Kitchenaid Professional 5 Plus Mixer (KV25G0XIC) 5 qt",
//     "Description":"This refurbished unit comes with upgraded lock washers, spring/washer, metal transmission housing, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, regrease, and reassembly to bring this machine back to life! Damaged parts are replaced with new. Enjoy!Color - ICEThis unit has a silver planetary, pictured above.  Note - the bowl and beauty band are silver in color, not copper.Damage - Minor scratches in clear-coat",
//     "Price":"349.99"},

// {
//     "name":"Kitchenaid Professional 6 Mixer (KP2671xGN) 6qt",
//     "Description":"The Professional 600 is a wonderful and powerful machine. This Pro 600 has been refurbished by Mr. Mixer.  We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Color - Emerald Green.  Black Planetary.Damage - Some minor scratches/scuffs in clearcoat.Shipping is free within the Continental US!",
//     "Price":"399.99"},

// {
//     "name":"KitchenAid Professional 600 Mixer (KP26M9PCER) 6 qt",
//     "Description":"The Professional 600 is a wonderful and powerful machine. This Pro 600 comes with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Color - Empire RedDamage - none (possible light scratching in clear coat)",
//     "Price":"399.99"},

// {
//     "name":"Kitchenaid Solid State Heavy Duty (K5SSAS) 5 qt",
//     "Description":"This refurbished unit comes with spring/washer, comfy grip, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, regrease, and reassembly to bring this machine back to life! Damaged parts are replaced with new as needed. Enjoy!This unit has some chips and scuffs within the paint job (pictures below). ",
//     "Price":"374.99"},

// {
//     "name":"Kitchenaid Tilt-Head Mixer Bowl 5qt (fits 4.5/5qt models)",
//     "Description":"A perfect addition to your mixer! These bowls are made from 304 stainless steel. They are perfect for adding a second bowl to your collection to make sure switching between recipes is an ease without the need to wash between changes. They are also a great overall replacement if yours is missing/damaged.",
//     "Price":"74.99"},

// {
//     "name":"Kitchenaid Tilt-Head Mixing Bowl (4.5-5qt)",
//     "Description":"A perfect addition to your mixer! These bowls are made from 304 stainless steel. They are perfect for adding a second bowl to your collection to make sure switching between recipes is an ease without the need to wash between changes. They are also a great overall replacement if yours is missing/damaged.",
//     "Price":"74.99"},

// {
//     "name":"Kitchenaid Ultra Power Solid State Mixer (KSM90PSWH) 4.5 qt",
//     "Description":"This mixer was brought back to life from your very own! This refurbished unit comes with upgraded body screws, spring/washer, bearing bracket lock nuts, everdime, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, regrease, and reassembly to bring this machine back to life! Damaged parts are replaced with new. Enjoy!Color - WhiteDamage - Small chip in paint, pictured below",
//     "Price":"339.99"},

// {
//     "name":"KneadAce Bowl Lift Mixer Dough Shield (K5SS/Pro 600/5plus/7qt/8qt)",
//     "Description":"The Dough Shield was designed to prevent dough from walking up the neck/head of the attachment. Its easy to use, clean, and store! Compatible with most spiral dough hooks for KitchenAid 5/6/7/8 Qt Bowl Lift Mixers. including professional 600 Series, Pro Line 7 series and commercial series 8 Qt .",
//     "Price":"21.99"},

// {
//     "name":"KneadAce Tilt Head Mixer Dough Shield",
//     "Description":"The Dough Shield was designed to prevent dough from walking up the neck/head of the attachment. Its easy to use, clean, and store! Compatible with all 4.5qt &amp; 5qt tilt head KitchenAid tilt head stand mixers.",
//     "Price":"21.99"},

// {
//     "name":"Lock Lever For Tilt-Head Models (Fits K5A/K5SS)",
//     "Description":"Has the plastic knob on the lock lever of your tilt head machine broke off? If so its a perfect time to replace while doing a re-grease and service to your machine as you will have the transmission exposed! So make sure to add grease and a gasket to your cart with this purchase!",
//     "Price":"15"},

// {
//     "name":"Lord of the Drip Ring Decal",
//     "Description":"One drip ring to rule them all, one drip ring to bind them¦you know the rest. If youre looking for something to flex those nerd muscles look no further than the Lord of the Drip Ring Decal. ",
//     "Price":"9"},

// {
//     "name":"Metal Arm Lift (K5SS/K5A Style Mixers)",
//     "Description":"This metal upgrade to the arm lift assembly is a good way to really bullet proof your mixer! The original plastic arm lift has a tendency to strip/break causing the bowl raise mechanism to no longer work. Replacing it with metal will prevent it from ever happening again! The original plastic replacements can be found under a different listing!",
//     "Price":"35"},

// {
//     "name":"Metal Attachment Hangers (3 pack)",
//     "Description":"Mr Mixer is now offering stainless steel attachment holders for your Kitchenaid beaters/attachments.  The holders are compatible with the dough hooks, wire whips, flex edge beater, and paddle.   Holders come with screws.  Enjoy!",
//     "Price":"21.99"},

// {
//     "name":"Metal Gear Housing For Pro 600/Pro 5 Plus Bowl Raise Models",
//     "Description":"Often the plastic housings that come on some of the professional 600/pro 5 plus style KitchenAids will crack leaving your machine vulnerable to damage. This metal upgrade will help protect your machine and ensure that the gears stay in place! Recommend upgrading to metal whether the old housing is broken, or even if it isnt to bring peace of mind!",
//     "Price":"50"},

// {
//     "name":"Metal Grease Pick",
//     "Description":"Metal pick thats perfect for scraping that hard to reach grease and gunk thats built up in your mixer. With a double sided design, rounded on one end and pointed on the other. To top it off the metal is soft enough to not scratch away that beautiful paint job.",
//     "Price":"10"},

// {
//     "name":"Mixer Cookie Cutter",
//     "Description":"Really Mix things up with this mixer cookie cutter! Design your own mixer cookies in a breeze!",
//     "Price":"12"},

// {
//     "name":"Mr. Mixer Sticker 3x3 Round",
//     "Description":"Get your Mr. Mixer sticker today! These round 3x3 stickers are a great way to show off how proud you are that youve fixed your own mixer! It is also a great way to help support our social media channels! ",
//     "Price":"2.99"},

// {
//     "name":"New Mr Mixer KitchenAid Classic Tilt-Head Mixer (K45SSOB) 4.5qt",
//     "Description":"The Kitchenaid classic is a wonderful machine. This unit is brand new.  We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, body screw upgrade with locking washer, bearing bracket lock nuts, and everdime) to the machine to guarantee that it will hold up and handle the toughest tasks.Color - Onyx BlackDamage - This unit has 1 scratch on the upper housing, pictured below.",
//     "Price":"329.99"},

// {
//     "name":"NSF H1 NLGI 2 Food Safe Grease",
//     "Description":"We offer the best grease available, the cheaper greases you find on other webpages dont specify their NLGI rating, they are all NLGI 1 which measures the viscosity of the grease. NLGI 1 is thin compared to NLGI2 so it immediately gets thrown from the gears and leaves your machine susceptible to damage! You should always replace your gasket when re-greasing your machine, if you need one we have them available!Orders come with 4.6 ounces for grease for artisan/tilt-head machines and 3.6 ounces of grease for the professional, plenty to regrease any KitchenAid mixer!",
//     "Price":"20"},

// {
//     "name":"Pedestal Mixer Mats",
//     "Description":"Welcome to the new line of anti vibration mats to help customize and protect your machine! As you mix, your machine emits vibration which throws all of the tuned systems inside the mixer out of adjustment effecting power output and causes housing screws/set screws to rattle loose! These stylish low profile mats go a long ways to protect and accent your mixer! Designed to be one size fits all so no matter which machine you have, the Pedestal Mats will do the job! You love your machine, put it on the pedestal it deserves!Pedestal Mixing Mat Dimensions - 16in x 11in",
//     "Price":"40"},

// {
//     "name":"Phase Board Screw",
//     "Description":"This miniature screw is the screw that secures the phase board to the bearing bracket. It is small and easy to lose so we have added it to our website as a courtesy!",
//     "Price":"8"},

// {
//     "name":"Phase Control Board",
//     "Description":"The phase control board fits all solide state (post 1978) tilt head machines as well as bowl raise machines with a removable back cap such as the K5SS.",
//     "Price":"25"},

// {
//     "name":"Pin Punches",
//     "Description":"The perfect sized pin punches to drive all necessary pins from the machine, to remove the planetary pin as well as the pin that holds the plastic worm gear in place. These punches are essential to the mixer repair process!",
//     "Price":"15"},

// {
//     "name":"Pinion Shaft Gear for Tilt-Heads, K5A/K5SS",
//     "Description":"The pinion shaft gear runs through the worm gear and worm gear tower and is secured in place by a pin. This gear is a factory replacement for all tilt head models as well as bowl raise models from the K5A/K5SS body style. Consider replacing the washers that sit above and below the worm gear that this pinion gear slides through, they are under a different listing! We also have the pin that secures the pinion shaft gear to the worm gear available in a secondary listing as well!",
//     "Price":"20"},

// {
//     "name":"Planetary (Grey) Professsional 600/Pro 5 Plus",
//     "Description":"This planetary is a factory replacement. Over time the planetaries can lose their pressing and dislodge from the planetary shaft or the Shaft can get bent. When this happens it requires replacement of the planetary.Currently these planetaries are hard to get and are only available in a few colors (grey/black/silver) Best option is to pick a color that compliments your machine!This planetary fits all style of Mixer that resemble the Pro 600/Pro5 Plus such as the professional HD and the Epicurean. (bowl raise without removeable back cap)",
//     "Price":"75"},

// {
//     "name":"Planetary for Tilt-Head/K5A/K5SS Mixers",
//     "Description":"The planetary is the part of the mixer that holds the agitator shaft which supports the attachments.  ",
//     "Price":"35"},

// //
// {
//     "name":"Planetary Groove Pin for Pro 7/8 qt Mixers",
//     "Description":"<span style=\"color: rgb(255, 255, 255)\">This planetary groove punches into the planetary to hold it onto the planetary shaft. Recommend replacement if your pin is damaged/bent and or mushroomed out on the ends! Fits pro 7/8 qt mixers.  </span>",
//     "Price":"12"},

// {
//     "name":"Planetary Groove Pin For Tilt-Head Models (Fits K5A/K5SS)",
//     "Description":"This planetary groove punches into the planetary to hold it onto the planetary shaft. Recommend replacement if your pin is damaged/bent and or mushroomed out on the ends! This pin will fit all tilt head styles of the Kitchenaid Mixer (artisan/classic/ultra power as well as the K5A/K5SS  bowl raise body styles!",
//     "Price":"12"},

// {
//     "name":"Plastic Attachment Hanger (3 pack)",
//     "Description":"These lightweight attachment hangers comes with 3M adhesive tape and a screw for extra security. The coated beater, wire whisk, dough hood and flex edge attachments will fit these hangers to allow you to seamlessly mount them under your cabinet to add some real flair to your baking station!",
//     "Price":"14.99"},

// {
//     "name":"Potions Master Decal",
//     "Description":"Do you consider yourself a Witch or Wizard of sorts? This Potions Master Decal has your name written all over it! Spruce up your mixer and show of your concoctions with the Potions Master decal!Decal is approximately 1.5 iches wide x 7.5 inches long",
//     "Price":"12"},

// {
//     "name":"Pouring Chute (Glass Bowl)",
//     "Description":"The Pouring Chute by New Metro Designs secures to the side of the mixing bowl to assist in adding ingredients to your mixing bowl! It easily clips onto the side of the bowl and is an upgrade to the plastic version. Make adding ingredients a breeze and add this to your collection today!This pour chute is for glass bowls, see (Pouring Chute Metal Bowl) to acquire the correct one for your metal bowl!***Does not fit 6 or 7 quart glass bowls***Bowl Not Included***",
//     "Price":"25"},

// {
//     "name":"Pouring Chute (Metal Bowl)",
//     "Description":"The Pouring Chute by New Metro Designs secures to the side of the mixing bowl to assist in adding ingredients to your mixing bowl! It easily clips onto the side of the bowl and is an upgrade to the plastic version. Make adding ingredients a breeze and add this to your collection today!This pour chute is for metal bowls, see (Pouring Chute Glass Bowl) to aquire the correct one for your glass bowl!Bowl Not Included***",
//     "Price":"25"},

// {
//     "name":"Power Cord",
//     "Description":"Power Cord for all solid state (post 1978) tilt head style mixer, as well as bowl raise models with a removable back cap, similar to the K5SS. This cord can be retrofitted to replace vintage machines with proper instruction!",
//     "Price":"25"},

// {
//     "name":"Power Cord (Professional 6000HD,Proline 7qt, Commercial 8qt)",
//     "Description":"This power cord is a factory replacement cord for the Proline 7qt, Commercial 8 qt and the Professional 6000 HD. This cord fits all mixers with the DC Motor. This cord does not fit any variations of the tilt head mixers or the professional 600/pro 5 plus units with AC powered motors.",
//     "Price":"30"},

// {
//     "name":"Pro 600 Kitchenaid Mixer Bowl (6qt)",
//     "Description":"This bowl is a perfect replacement or addition to your current collection! Made with a beautiful stainless steel, this bowl is designed to turn heads. A second bowl is a great addition as it prevents having to stop and wash your current bowl in order to move to a second recipe/icing etc after your initial batch! This bowl will fit all 6qt KitchenAid Mixers as well as the pro 5 plus!",
//     "Price":"84.99"},

// {
//     "name":"Pro 600 Kitchenaid Mixer Bowl (6qt) fits pro 5 plus!",
//     "Description":"This bowl is a perfect replacement or addition to your current collection! Made with a beautiful stainless steel, this bowl is designed to turn heads. A second bowl is a great addition as it prevents having to stop and wash your current bowl in order to move to a second recipe/icing etc after your initial batch! This bowl will fit all 6qt KitchenAid Mixers as well as the pro 5 plus!",
//     "Price":"84.99"},

// {
//     "name":"Pro 600/5 Plus Bevel Gear",
//     "Description":"This is the bevel gear for the Pro 600/Pro 5 plus style bowl raise machines. It is compatible with the Pro 600/5plus/Epicurean/Pro Hd style bowl raise mixers without the removeable back cap.",
//     "Price":"25"},

// {
//     "name":"Pro 600/5 Plus Worm gear",
//     "Description":"This is the worm gear that is present in all professional series bowl raise models of the Kitchenaid Mixer. This will not fit the older styles (Epicurean) as they switched the tooth count between the models!",
//     "Price":"50"},

// {
//     "name":"Pro 600/Pro 5 Plus Flex Edge Beater",
//     "Description":"This will not fit the K5SS/K5A body style of mixer!This is a flex edge style beater designed to help keep the sides and bottom of the Pro 600/Pro 5 Plus style bowl lift mixers free of unincorporated ingredients. This item will fit the 5-6 quart bowls of the Professional Series mixers. This will not fit the tilt heads or the K5SS style (4.5-5 quart) lift machines with removeable back cap. The tilt head flex edge can be found under a separate listing.If you have a large gap between the bottom of the bowl and the paddle after it is in the raised position and after turning the adjustment screw on the neck all the way to the left (this brings the bowl closer) (careful it only goes half a turn in each direction dont over crank)! Then this product is for you, this is kitchenaid fix for having excess beater clearance!",
//     "Price":"30"},

// {
//     "name":"Pro 600/Pro 5 Plus Worm Follower Gear",
//     "Description":"This anodized brass worm follower gear is a factory replacement! If your machine turn on and spins but then the planetary gets stuck and starts clicking or it wont mix under a load the worm follower gear will need replaced. Every time this gear is replaced the gearbox should be thoroughly cleaned and regreased!",
//     "Price":"25"},

// {
//     "name":"Professional 5 Plus Bowl Raise Stand Mixer (RKV25G0XOB) 5 qt.",
//     "Description":"These Professional 5 Plus mixers are Kitchenaid Refurbished units with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, comfy grip, and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!",
//     "Price":"399.99"},

// {
//     "name":"Professional 600 & Pro 5 Plus Rubber Feet",
//     "Description":"If youre missing a rubber foot make, sure to replace the set as this can cause your machine to get off balance and fall off the counter! The rubber feet should be replaced every 5 years to ensure they dont harden, flatten and allow excess vibrations into the system",
//     "Price":"24.99"},

// {
//     "name":"Professional 600 Bowl Lift Stand Mixer (RKP26M1XAQ) 6 qt",
//     "Description":"The Professional 600 is a wonderful and powerful machine. These Pro 600s are Kitchenaid Refurbish with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, comfy grip, and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!Color - Aqua Sky.  The bowl and beauty band are silver, not copper in color.  Damage - None ",
//     "Price":"424.99"},

// {
//     "name":"Professional 600 Bowl Lift Stand Mixer (RKP26M1XBM) 6 qt",
//     "Description":"The Professional 600 is a wonderful and powerful machine. These Pro 600s are Kitchenaid Refurbish with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring/washer, comfy grip, and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Color - Matte BlackDamage - None Shipping is free within the Continental US!",
//     "Price":"429.99"},

// {
//     "name":"Professional 600 Bowl Lift Stand Mixer (RKP26M1XCU) 6 qt",
//     "Description":"The Professional 600 is a wonderful and powerful machine. These Pro 600s are Kitchenaid Refurbish with a Mr Mixer twist. We go through these machines to insure that they are perfect for the end user. We add our upgrades (spring and washer, comfy grip, and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!Color - Contour Silver ",
//     "Price":"399.99"},

// //
// {
//     "name":"Professional 600 Bowl Lift Stand Mixer (RKP26M1XER) 6 qt",
//     "Description":"The Professional 600 is a wonderful and powerful machine. These Pro 600s are Kitchenaid Refurbish with a Mr Mixer twist. We go through these machines to insure that they are perfect for the end user. We add our upgrades (spring and washer, comfy grip, and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!Color - Empire Red",
//     "Price":"399.99"},

// {
//     "name":"Professional 600 Bowl Lift Stand Mixer (RKP26M1XIC) 6 qt",
//     "Description":"The Professional 600 is a wonderful and powerful machine. These Pro 600s are Kitchenaid Refurbish with a Mr Mixer twist. We go through these machines to insure that they are perfect for the end user. We add our upgrades (spring and washer, comfy grip, and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Color - ICE (Bowl and beauty band are silver)Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!",
//     "Price":"424.99"},

// {
//     "name":"Professional 600 Bowl Lift Stand Mixer (RKP26M1XSP) 6 qt",
//     "Description":"The Professional 600 is a wonderful and powerful machine. These Pro 600s are Kitchenaid Refurbish with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer, comfy grip, and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!Color - Silk PinkDamage - None",
//     "Price":"479.99"},

// {
//     "name":"Professional 600/Pro 5 Plus Enamel Coated Beater",
//     "Description":"This beater is a perfect replacement for your lost or damaged beater! It fits the professional 600 and pro 5 plus style of mixers as well as the 7 &amp; 8 qt machines as well! Factory replacement enamel coated beater",
//     "Price":"30"},

// {
//     "name":"Professional 600/Pro 5 Plus Power Cord",
//     "Description":"This is a factory replacement power cord for the professional 600/pro 5 plus style mixers. Its compatible with the epicurean and professional 6 as well. This will not work for any models that have a DC motor.",
//     "Price":"40"},

// {
//     "name":"Professional 7/8 qt Planetary (2 Colors Available)",
//     "Description":"This planetary is a factory replacement and perfect to replace your damaged planetary. Over time you planetary can become damaged. When this happens it requires replacement of the planetary.This planetary fits the professional 7/8 qt units.If you need a replacement planetary pin we have them available in a separate listing!",
//     "Price":"75"},

// {
//     "name":"Professional 700 Bowl Lift Stand Mixer (RKSM7581FP) 7qt",
//     "Description":"The Professional 7  is a wonderful and powerful machine that comes with a DC motor. These Pro 7s are Kitchenaid Refurbish with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!Color - Frosted PearlDamage - None",
//     "Price":"649.99"},

// {
//     "name":"Professional 700 Bowl Lift Stand Mixer (RKSM7581MS) 7 qt",
//     "Description":"The Professional 700 is a beast of a machine. These Pro 700s are Kitchenaid Refurbish with a Mr. Mixer twist. We go through these machines to ensure that they are perfect for the end user. We add our upgrades (spring and washer and bullet proof lock washers) to the machine to guarantee that it will hold up and handle the toughest tasks. Metal gear/transmission housing included.Mixer comes with refurbished kitchenaid box and styrofoam inserts as well as a bowl, paddle, hook and whisk.Shipping is free within the Continental US!Color - Medallion SilverDamage - None",
//     "Price":"649.99"},

// {
//     "name":"Professsional 600/Pro 5 Plus Planetary (4 colors available)",
//     "Description":"This planetary is a factory replacement. Over time the planetaries can lose their pressing and dislodge from the planetary shaft or the Shaft can get bent. When this happens it requires replacement of the planetary. This planetary fits all style of Mixer that resemble the Pro 600/Pro5 Plus such as the professional HD and the Epicurean. (bowl raise without removeable back cap)",
//     "Price":"75"},

// {
//     "name":"Proline 7qt and Commercial 8 qt Replacement Feet",
//     "Description":"If youre missing a rubber foot make, sure to replace the set as this can cause your machine to get off balance and fall off the counter! The rubber feet should be replaced every 5 years to ensure they dont harden, flatten and allow excess vibrations into the system",
//     "Price":"24.99"},

// {
//     "name":"Rear Gasket",
//     "Description":"This is a replacement gasket for Tilt Head models of the Kitchenaid mixer as well as the K5A/K5SS style of bowl raise machines. Often the gasket gets ripped or coated in baking debris, This is a new clean replacement to keep your machine protected from baking debris from entering the motor and electronics!",
//     "Price":"10"},

// {
//     "name":"Refurbished Kitchenaid Classic Tilt-Head Mixer (K45SSOB) 4.5 qt",
//     "Description":"This mixer was brought back to life from your very own! This refurbished unit comes with upgraded body screws, spring/washer, bearing bracket lock nuts, everdime, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair, re-grease, and reassembly to bring this machine back to life! Damaged parts are replaced with new. Enjoy!Color - Onyx BlackDamage - None.",
//     "Price":"339.99"},

// {
//     "name":"Re-greasing Kit: Artisan/Tilt-Head Models (Fits K5A/K5SS/KSM5)",
//     "Description":"Everything you need to get your machine re-greased and ready to mix! This kit includes an order of our NSF H1 NLGI 2 Food Safe Grease, replacement gasket, metal grease pick, grease scrapper, rubber mallet, 2 pairs of gloves, and a Mr. Mixer sticker!Grease = 4.6-4.8 ounces.Over $75 individually for the price of $50. Besides any replacement gears you might need, this is everything youll need wrapped up into one kit!Gasket fits all tilt head models as well as K5A/K5SS style bowl raise models.",
//     "Price":"50"},

// {
//     "name":"Re-greasing Kit: Professional 5/6qt Bowl Raise Models",
//     "Description":"Everything you need to get your machine re-greased and ready to mix! This kit includes an order of our NSF H1 NLGI 2 Food Safe Grease, replacement gasket, metal grease pick, grease scrapper, rubber mallet, and 2 pairs of gloves.Grease = 3.6-3.8 ounces.Over $75 individually for the price of $50. Besides any replacement gears you might need, this is everything youll need wrapped up into one kit!Gasket fits all Professional series bowl raise models. See below for a full list of compatible mixers.",
//     "Price":"50"},

// {
//     "name":"Replacement Back Cap/End Cover",
//     "Description":"This is a factory replacement back cap/end cover for all of the Kitchenaid tilt head models excluding the mini. It also replaced the back cap on the K5SS/K5A style mixers. This is a great replacement if yours is bent/dented or damaged!",
//     "Price":"35"},

// {
//     "name":"Replacement Base Plate Tilt Head (Artisan,Ultra Power, Classic, Classic Plus)",
//     "Description":"This is a replacement for the base of the mixer and designed to lock the bowl into place! It is compatible with all tilt head models such as the Artisan, Ultra Power, Classic, Classic Plus, Deluxe.",
//     "Price":"20"},

// {
//     "name":"Replacement Gasket for Artisan/Tilt-Head Models (Fits K5A/K5SS)",
//     "Description":"Brand new replacement gasket that fits all tilt head models as well as K5A/K5SS style bowl raise models.",
//     "Price":"10"},

// {
//     "name":"Replacement Gasket for Professional 5/6qt Bowl Raise Models",
//     "Description":"Brand new replacement gasket that fits all of the Professional 5qt and 6qt bowl raise models. See below for a full list of compatible mixers.",
//     "Price":"10"},

// {
//     "name":"Replacement O-Ring For Planetary Shaft",
//     "Description":"This O-Ring replaces the O-ring on the planetary shaft of all kitchenaid mixers. It is designed to keep oil from leaking down the planetary shaft. If your looking to replace all of the washers/O-ring check our combined set under a separate listing!",
//     "Price":"8"},

// {
//     "name":"Replacement Washer and O-Ring Kit",
//     "Description":"Replacement washers and O-Ring for all tilt head models as well as K5SS style bowl raise machines. Two different sizes of washers for above the planetary and below the center gear as well as replacement washers for the worm gear assembly. O-ring for the planetary shaft helps to prevent oil from leaking down the shaft!",
//     "Price":"12"},

// {
//     "name":"Replacement Washer Set For Artisan/Tilt-Head Models (Fits K5A/K5SS)",
//     "Description":"This item consists of 2 small and 3 large cardboard washers. The 2 small washers install above and below the worm gear. The 3 large washers install above and below each side of the lower housing beneath the center gear and above the planetary.Note: Older machines may use all 3 of the larger washers. Newer machines only require 2 of the larger washers. Replace as you find on your machine.These washer sets fit all styles of the tilt head mixers as well as the K5A/K5SS style of bowl raise machines!",
//     "Price":"7"},

// {
//     "name":"Rubber Mallet",
//     "Description":"12 oz rubber mallet, perfect for helping to remove pins and planetary shafts. Your machine may require a claw hammer do drive out more stubborn pins, however the rubber mallet usually suffices and is needed to gently tap out the planetary shaft from the gears!",
//     "Price":"10"},

// {
//     "name":"S1 Square Bit W/ 1/4 In. Driver",
//     "Description":"S1 square head bit and 1/4 inch driver to remove housing screws on newer style mixers!",
//     "Price":"15"},

// //
// {
//     "name":"Shipping Label!",
//     "Description":"Weve noticed that shipping costs can be quite expensive ranging from $50-125. We are offering labels at a flat rate to help attempt to save you money! You are welcome to shop around for labels but it will be hard to beat our price!Labels are rated for up to 30 lbs. with box dimension being 18x18x18 or smaller! (Boxes exceeding these dimensions and weights can be subject to additional fees per UPS policy, the additional cost will be the customers responsibility).(We recommend 16x14x18 for bowl raise machines) and (16x12x16 for tilt head machines)Make sure that all of your information is correct as we will use the info you input in checkout to create your label and email it to you to be printed off! (This is not an automated process, generally label is sent in 24 hours or less)The shipping companies do not go out of their way to care for your package so make sure to pack and over pack to protect your machine! Check our shipping video on youtube/shipping tab of squarespace for proper packing instructions!Unfortunately due to the cost of shipping Alaska and Hawaii do not qualify for this label!As always, we cover return shipping as a courtesy!",
//     "Price":"50"},

// {
//     "name":"Snap Ring Pliers",
//     "Description":"Snap ring pliers are essential for the removal of the gears and planetary on the Professional 600 and Professional 5 Plus model, as well as any bowl raise mixer without a removeable back cap!",
//     "Price":"20"},

// {
//     "name":"Speed Assembly Push Rod For Tilt-Head Models (K5A/K5SS)",
//     "Description":"This speed assembly push rod is a replacement for Tilt head mixers as well as K5SS style machines! They are no longer manufactured in metal so this is the best we can currently offer. We hope to manufacture them in metal one day if there is enough demand!",
//     "Price":"20"},

// {
//     "name":"Speed Assembly Spring For Tilt-Head Models(K5A/K5SS)",
//     "Description":"This is the spring that attaches to the speed control lever and extends back to the speed control plate on tilt head and K5SS/K5A style machines! If you feel like your spring has stretched and lost tension or if it gets lost or broken, this is the perfect replacement!",
//     "Price":"15"},

// {
//     "name":"Speed Control Board",
//     "Description":"The speed control board fits all professional 600, and Pro 5 Plus models, as well as any bowl raise mixer with a fully enclosed case that doesnt include a back cap! If your mixer wont power on, after trying a different outlet and resetting the gfci function on the outlet then youll need a new control board and or power cord. If your mixer is slow to start or you have to wiggle the switch to get your machine to engage , its time for a new control board!",
//     "Price":"85"},

// {
//     "name":"Speed Control Board (7qt/8qt mixers)",
//     "Description":"This speed control board is a factory replacement board for the proline 7qt and the commercial 8 qt machines. Over time boards can become caked with flour and baking debris or components of the board can fail. This requires replacement of the board!",
//     "Price":"125"},

// {
//     "name":"Speed Control Lever For Tilt-Head Models (Fits K5A/K5SS)",
//     "Description":"Has the plastic broke off of your speed control lever? If so this is the perfect replacement part to restore your mixer back to its former glory. Make sure to order some grease with this purchase as the transmission will be exposed for this fix and your machine is likely in need of a re-grease!",
//     "Price":"15"},

// {
//     "name":"Speed Control Plate",
//     "Description":"The speed control plate is designed to help set and regulate speeds, this part fits all solid state tilt head models and bowl raise models with removable back caps (post 1978)",
//     "Price":"25"},

// {
//     "name":"Spring & Washer for Professional Models",
//     "Description":"This spring and washer set is an addition to the professional 600/pro 5 Plus and the Proline 7qt and commercial 8 qt style of the kitchenaid mixer that has never came with a spring and washer on the agitator shaft. This will help keep your attachments firmly placed onto the shaft to help prevent damage and wear!It is recommended that if your machine is more than a few years old, that you also re-grease your machine, as you will have the grease exposed during installation of the spring and washer!",
//     "Price":"20"},

// {
//     "name":"Spring & Washer for Professional Models w/ Snap Ring Pliers",
//     "Description":"This spring and washer set is an addition to the professional 600/pro 5 Plus, (and all pro models) styles of the kitchenaid mixer that has never came with a spring and washer on the agitator shaft. This will help keep your attachments firmly placed onto the shaft to help prevent damage and wear! This package comes with a pair of snap ring pliers to help complete the job!It is recommended that if your machine is more than a few years old, that you also re-grease your machine, as you will have the grease exposed during installation of the spring and washer!",
//     "Price":"40"},

// {
//     "name":"Spring & Washer For Tilt-Head Models",
//     "Description":"Is your new machine lacking the spring and washer? We have manufactured them to help protect your machine and attachments from excess wear! Install videos featured on our YouTube channel! It is recommended that you Re-Grease your machine in combination as you will be partially disassembled! If the install isnt for you, send in your machine for a full regrease tune and clean and we can add the upgrades for you! You will need a 1/8 inch punch and snap ring pliers for the disassembly which we also offer as a kit with the spring and washer or as individuals in our store!",
//     "Price":"15"},

// {
//     "name":"Spring & Washer Install Kit For Proline 7qt/Commercial 8 qt",
//     "Description":"This kit comes with all the tools necessary to upgrade your mixer with a spring and washer to help keep the mixer and beaters safe! Install videos are featured on our Youtube channel! If the install isnt for you, send in your machine for a full regrease tune and clean and we can add the upgrades for you! If you dont need the full kit, we offer the tools/parts individually as well!",
//     "Price":"50"},

// {
//     "name":"Spring & Washer Install Kit For Tilt-Head Models",
//     "Description":"This kit comes with all the tools necessary to upgrade your mixer with a spring and washer to help keep the mixer and beaters safe! Install videos are featured on our Youtube channel! It is recommended that you Re-Grease your machine in combination as you will be partially disassembled! Grease and Regrease kits offered in our store! If the install isnt for you, send in your machine for a full regrease tune and clean and we can add the upgrades for you! If you dont need the full kit, we offer the tools individually as well!",
//     "Price":"50"},

// {
//     "name":"Spring & Washer Install Kit For Tilt-Head Models w/ EverDime",
//     "Description":"This kit comes with all the tools necessary to upgrade your mixer with a spring and washer to help keep the mixer and beaters safe! The EverDime is also included in this kit for Artisan and other tilt head models. Install videos are featured on our Youtube channel! It is recommended that you Re-Grease your machine in combination as you will be partially disassembled! Grease and Regrease kits offered in our store! If the install isnt for you, send in your machine for a full regrease tune and clean and we can add the upgrades for you! If you dont need the full kit, we offer the tools individually as well!",
//     "Price":"55"},

// {
//     "name":"Test Product",
//     "Description":"<span style=\"color: rgb(232, 230, 227)\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan mauris erat, nec egestas purus dictum ac. Donec quis gravida nisi. Duis fermentum ornare rhoncus. Duis sed sollicitudin odio. Nulla a justo vel sapien tempus vehicula in at lorem. Aenean sed ex volutpat, lobortis lorem sit amet, molestie tortor.</span>",
//     "Price":"0"},

// {
//     "name":"Thruster Bearings For Pro 600/Pro 5 Plus KitchenAid Mixer",
//     "Description":"Included in this listing: Two Channeled Washers and BearingThe Thruster bearings sit just behind the front bearing bushing on the Worm Gear and help to reduce friction while the machine is running! The Bearings can become damaged/seized and cause excess noise and vibration in the system. They sit on the gear as pictured.  Always replace the grease and gasket when opening the transmission to do repairs as one little ball bearing misplaced from the thruster bearing can hide in the grease and get caught between gear teeth and cause excess damage!The worm gear is not included in this listing, but can be found in a separate listing on MrMixer.store.Always inspect the front and rear bushing that sit on the worm gear shaft for cracks/wear/damage. The front and rear bushings can be purchased via another listing on Mr.Mixer.store",
//     "Price":"15"},

// {
//     "name":"Tilt Head (Artisan/Classic/Ultra/Bowl Raise With Back Cap) Black Power Cord",
//     "Description":"This power cord fits all tilt head models and the post 1978 K5SS solid state style bowl raise machines with the removeable back cap. ",
//     "Price":"25"},

// {
//     "name":"Tilt Pin (All Tilt Head Mixers)",
//     "Description":"The Tilt Pin is the long pin that secures the housings to the base of the mixer. It is the axis on which the tilt head machines tilt. This is a replacement for lost or damaged pins!",
//     "Price":"15"},

// {
//     "name":"Tilt-Head Beater Adjustment Screw",
//     "Description":"This screw is designed to sit in the neck of the machine when the head is lifted. Adjusting the screw helps dictate beater/bowl clearance while mixing! On occasion the screws can become damaged when attempting the adjust the beater clearance. Make sure to check out MrMixers EVERDIME. It sits behind this screw and helps to keep the screw in proper adjustment as well as limits head bounce while mixing and prevents paddles from chipping from rubbing the bowl!",
//     "Price":"15"},

// {
//     "name":"Tilt-Head Dough Hook",
//     "Description":"This dough hook fits all tilt head models of the Kitchenaid Mixer, including the Artisan/Classic/UltraPower/ClassicPlus/Deluxe. It comes in a white enamel coating that allows the hook to be dishwasher safe.",
//     "Price":"25"},

// {
//     "name":"Tilt-Head Enamel Coated Beater",
//     "Description":"Nylon-Coated Flat Beater for the Artisan, Classic, Ultra Power and Classic Plus models.  Great for everything from mashed potatoes to cake batters and much more! Top-rack dishwasher safe as well!",
//     "Price":"25"},

// {
//     "name":"Tilt-Head Flex Edge Beater",
//     "Description":"This Beater fits the Artisan, Classic, Ultra Power and Classic Plus.  It is designed to help scrape the bowl as it mixes to help insure they youre incorporating all of the ingredients. This attachment fits the 4.5-5 quart bowls. It gets its most value when used for things like icings and creams. It should be avoided when using dry mixes as the silicone will rub the bowl with no buffer and can cause squeeks and or cause the silicone to sweat.",
//     "Price":"25"},

// {
//     "name":"Tilt-Head Replacement Rubber Feet (Button Style)",
//     "Description":"These replacement rubber feet fit the Classic and Artisan style of the KitchenAid Mixer. Comes in a set of 5 for a full replacement of the feet. The artisan tilt head comes with a flat style of foot from factory but can be replaced with the button style. We also have the flat style available under another listing on the site! There is no advantage to one or the other!",
//     "Price":"20"},

// {
//     "name":"Tilt-Head Replacement Rubber Feet (Flat Style)",
//     "Description":"These flat style rubber feet are replacement feet for the tilt head Artisan KitchenAid Mixer. These come original with the Artisan, however they can be used for the Classic as well! For the button style foot, refer to the button style replacement on our website!*** These feet fit tilt head styles only***",
//     "Price":"25"},

// {
//     "name":"Tilt-Head Whisk",
//     "Description":"This whisk fits all tilt head models (Artisan/Classic/Ultrapower/Classicplus) except the Kitchenaid Mini. If youre looking for a replacement whisk, this is the one for you!",
//     "Price":"25"},

// {
//     "name":"Ultra Power Plus Tilt-Head (KSM96CU) 4.5 qt",
//     "Description":"This like-new refurbished unit comes with upgraded body screws, spring/washer, bearing bracket lock nuts, everdime, attachments, and bowl. Mr. Mixer has performed an inspection, disassembly, repair (if needed), regrease, and reassembly. Enjoy!Color - Contour SilverDamage - 1 thin scratch on pedestal (not pictured).  ",
//     "Price":"274.99"},

// {
//     "name":"Worm Gear Assembly For Tilt-head, K5A/K5SS Models",
//     "Description":"The worm gear assembly is comprised of the following (tower,pinion shaft gear, worm gear, shim washers and worm gear pin).This is a completed replacement for the tower and gear system, It makes swapping the gear a breeze by just replacing the entire tower. on occasion the pins securing the worm gear can become seized and hard to remove, this is a bypass for removal of the pin.",
//     "Price":"50"},

// {
//     "name":"Worm Gear Groove Pin For Tilt Head Models (Fits K5A/K5SS)",
//     "Description":"This groove pin is the smallest of the 3 Pin present in all tilt head styles and the K5A/K5SS body styles of Kitchenaid Mixers. It holds the worm gear to the pinion shaft gear on the worm gear tower. If your pin is bent or damaged this is a factory replacement!",
//     "Price":"12"}
