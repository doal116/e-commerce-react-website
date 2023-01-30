import bananaCake from './productImages/bananacake.jpg';
import chocolateCoconutCake from './productImages/chocolateCoconutcake.jpg';
import lemonYoghurtCake from './productImages/lemonYoghurtcake.jpg';
import orangeAlmondCake from './productImages/orangeAlmondcake.jpg';
import vanillaCupcakes from './productImages/vanillaCupcake.jpg';
import dragonFruitCake from './productImages/dragonFruitCake.jpg';
import painAuChocolat from './productImages/painAuChocolat.jpg';
import croissantAmande from './productImages/croissantsamande.jpg';
import painAuxRaisin from './productImages/painAuxRaisin.jpg';
import croissantOrdinaire from './productImages/croissantOrdinaire.jpg'
import focaccia from './productImages/Focaccia.jpg';
import brioche from './productImages/brioche.jpg';
import baguette from './productImages/baguette.jpg';
import sourdough from './productImages/sourdough.jpeg';
import tomatoes from './productImages/tomatoes.jpg';
import onions from './productImages/onions.jpg';
import cucumber from './productImages/cucumber.jpg';
import carrots from './productImages/carrots.jpg';
import strawberries from './productImages/strawberries.jpg';
import watermelon from './productImages/watermelon.jpg';
import banana from './productImages/banana.jpg';
import apple from './productImages/apple.jpg';
import chicken from './productImages/chicken.jpg';
import pork  from './productImages/pork.jpg';
import beef  from './productImages/beef.png';
import fish from './productImages/fish.jpg';
const products = [
    {
        id: 0,
        category: 'Bakery',
        name: "Banana cake with cream cheese",
        description: "Use up over-ripe bananas to create a crowd-pleasing afternoon-tea cake.",
        brand: 'Air Heads',
        type: 'Cake',

        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 50,
            previousPrice: 48.56
        },
        image: bananaCake,
        rating: 5,
        arrivalDate: '12/12/2021',
        soldUnits: [
            { date: 'January', units: 13 },
            { date: 'February', units: 2 },
            { date: 'March', units: 40 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 13 },
            { date: 'July', units: 25 },
            { date: 'August', units: 1 },
            { date: 'September', units: 5 },
            { date: 'October', units: 24 },
            { date: 'November', units: 23 },
            { date: 'December', units: 2 }
        ],
        availableUnits: 11
    }
    ,
    {
        id: 1,
        category: 'Bakery',
        name: "Chocolate coconut cake",
        description: "A hint of coconut takes this moist chocolate cake to a whole new level.",
        brand: 'Betty Crocker',
        type: 'Cake',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 12.12,
            previousPrice: 48.56
        },
        image: chocolateCoconutCake,
        rating: 3,
        arrivalDate: '12/11/2022',
        soldUnits: [
            { date: 'January', units: 13 },
            { date: 'February', units: 63 },
            { date: 'March', units: 3 },
            { date: 'Mai', units: 8 },
            { date: 'Juin', units: 82 },
            { date: 'July', units: 2 },
            { date: 'August', units: 52 },
            { date: 'September', units: 31 },
            { date: 'October', units: 13 },
            { date: 'November', units: 17 },
            { date: 'December', units: 18 }
        ],
        availableUnits: 14
    }
    ,
    {
        id: 2,
        category: 'Bakery',
        name: "Lemon yoghurt cake with syrup",
        description: "The use of yoghurt in this recipe makes for a fluffier baked cake.",
        brand: 'Black Forest',
        type: 'Cake',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 52.3,
            previousPrice: 48.56
        },
        image: lemonYoghurtCake,
        rating: 5,
        arrivalDate: '01/10/2020',
        soldUnits: [
            { date: 'January', units: 2 },
            { date: 'February', units: 54 },
            { date: 'March', units: 20 },
            { date: 'Mai', units: 34 },
            { date: 'Juin', units: 38 },
            { date: 'July', units: 22 },
            { date: 'August', units: 32 },
            { date: 'September', units: 78 },
            { date: 'October', units: 52 },
            { date: 'November', units: 32 },
            { date: 'December', units: 4 }
        ],
        availableUnits: 21
    }
    ,
    {
        id: 3,
        category: 'Bakery',
        name: "Flourless orange cake",
        description: "I make this cake for morning teas at work. It’s really easy and because it’s gluten free, everyone can enjoy it.",
        brand: 'Dare',
        type: 'Cake',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 25.7,
            previousPrice: 48.56
        },
        image: orangeAlmondCake,
        rating: 2,
        arrivalDate: '02/10/2020',
        soldUnits: [
            { date: 'January', units: 1 },
            { date: 'February', units: 7 },
            { date: 'March', units: 4 },
            { date: 'Mai', units: 36 },
            { date: 'Juin', units: 34 },
            { date: 'July', units: 13 },
            { date: 'August', units: 12 },
            { date: 'September', units: 63 },
            { date: 'October', units: 42 },
            { date: 'November', units: 2 },
            { date: 'December', units: 9 }
        ],
        availableUnits: 34
    }
    ,
    {
        id: 4,
        category: 'Bakery',
        name: "Vanilla cupcakes",
        description: "These festive cakes are gluten, dairy, egg and nut free, and are great for kids’ parties or a special treat.",
        brand: 'Dare',
        type: 'Cake',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 43.2,
            previousPrice: 48.56
        },
        image: vanillaCupcakes,
        rating: 5,
        arrivalDate: '01/01/2020',
        soldUnits: [
            { date: 'January', units: 3 },
            { date: 'February', units: 7 },
            { date: 'March', units: 42 },
            { date: 'Mai', units: 2 },
            { date: 'Juin', units: 3 },
            { date: 'July', units: 72 },
            { date: 'August', units: 18 },
            { date: 'September', units: 27 },
            { date: 'October', units: 24 },
            { date: 'November', units: 23 },
            { date: 'December', units: 34 }
        ],
        availableUnits: 10

    }
    ,
    {
        id: 5,
        category: 'Bakery',
        name: "Dragon Fruit cake",
        description: "Dragon fruit won't win any awards for what it looks like on the outside, but the inside is a beauty.",
        brand: 'Dare',
        type: 'Cake',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 14.86,
            previousPrice: 48.56
        },
        image: dragonFruitCake,
        rating: 3,
        arrivalDate: '10/09/2020',
        soldUnits: [
            { date: 'January', units: 13 },
            { date: 'February', units: 23 },
            { date: 'March', units: 42 },
            { date: 'Mai', units: 26 },
            { date: 'Juin', units: 17 },
            { date: 'July', units: 23 },
            { date: 'August', units: 12 },
            { date: 'September', units: 11 },
            { date: 'October', units: 23 },
            { date: 'November', units: 42 },
            { date: 'December', units: 1 }
        ],
        availableUnits: 8
    }
    ,
    {
        id: 6,
        category: 'Bakery',
        name: "Pain Au Chocolat",
        description: "This type of croissant has the goodness of two tasty ingredients - butter and chocolate.",
        brand: 'Boua',
        type: 'Pastry',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 5.86,
            previousPrice: 48.56
        },
        image: painAuChocolat,
        rating: 3,
        arrivalDate: '10/09/2020',
        soldUnits: [
            { date: 'January', units: 42 },
            { date: 'February', units: 32 },
            { date: 'March', units: 25 },
            { date: 'Mai', units: 16 },
            { date: 'Juin', units: 32 },
            { date: 'July', units: 52 },
            { date: 'August', units: 13 },
            { date: 'September', units: 23 },
            { date: 'October', units: 14 },
            { date: 'November', units: 25 },
            { date: 'December', units: 16 }
        ],
        availableUnits: 1
    }
    ,
    {
        id: 7,
        category: 'Bakery',
        name: "Croissant Aux Amandes",
        description: "Also known as almond croissants, they are made with a filling of almond cream and garnished with sliced almonds.",
        brand: 'Boua',
        type: 'Pastry',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 7.01,
            previousPrice: 12.54
        },
        image: croissantAmande,
        rating: 3,
        arrivalDate: '10/09/2020',
        soldUnits: [
            { date: 'January', units: 16 },
            { date: 'February', units: 36 },
            { date: 'March', units: 24 },
            { date: 'Mai', units: 53 },
            { date: 'Juin', units: 43 },
            { date: 'July', units: 24 },
            { date: 'August', units: 14 },
            { date: 'September', units: 25 },
            { date: 'October', units: 36 },
            { date: 'November', units: 41 },
            { date: 'December', units: 21 }
        ],
        availableUnits: 3

    }
    ,
    {
        id: 8,
        category: 'Bakery',
        name: "Pain Aux Raisins",
        description: "This type of croissant comes with raisins or a filling of custard or almond cream. It is a sweet, flaky pastry that can be enjoyed as is, or with a warm beverage like tea or coffee.",
        brand: 'Boua',
        type: 'Pastry',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 4.01,
            previousPrice: 8.54
        },
        image: painAuxRaisin,
        rating: 3,
        arrivalDate: '10/09/2020',
        soldUnits: [
            { date: 'January', units: 11 },
            { date: 'February', units: 23 },
            { date: 'March', units: 32 },
            { date: 'Mai', units: 25 },
            { date: 'Juin', units: 14 },
            { date: 'July', units: 22 },
            { date: 'August', units: 57 },
            { date: 'September', units: 11 },
            { date: 'October', units: 9 },
            { date: 'November', units: 6 },
            { date: 'December', units: 21 }
        ],
        availableUnits: 6

    }
    ,
    {
        id: 9,
        category: 'Bakery',
        name: "Croissant Ordinaire",
        description: "This type of croissant comes with raisins or a filling of custard or almond cream. It is a sweet, flaky pastry that can be enjoyed as is, or with a warm beverage like tea or coffee.",
        brand: 'Boua',
        type: 'Pastry',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 1.01,
            previousPrice: 3.54
        },
        image: croissantOrdinaire,
        rating: 3,
        arrivalDate: '10/09/2020',
        soldUnits: [
            { date: 'January', units: 13 },
            { date: 'February', units: 23 },
            { date: 'March', units: 21 },
            { date: 'Mai', units: 17 },
            { date: 'Juin', units: 15 },
            { date: 'July', units: 16 },
            { date: 'August', units: 13 },
            { date: 'September', units: 13 },
            { date: 'October', units: 13 },
            { date: 'November', units: 11 },
            { date: 'December', units: 15 }
        ],
        availableUnits: 23

    }
    ,
    {
        id: 10,
        category: 'Bakery',
        name: "Sourdough",
        description: "Sourdough is one of the most popular alternatives to traditional white or brown bread for many meals.",
        brand: 'bongoss',
        type: 'Bread',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 2.01,
            previousPrice: 4.54
        },
        image: sourdough,
        rating: 3,
        arrivalDate: '10/09/2020',
        soldUnits: [
            { date: 'January', units: 1 },
            { date: 'February', units: 5 },
            { date: 'March', units: 21 },
            { date: 'Mai', units: 14 },
            { date: 'Juin', units: 32 },
            { date: 'July', units: 12 },
            { date: 'August', units: 31 },
            { date: 'September', units: 13 },
            { date: 'October', units: 21 },
            { date: 'November', units: 12 },
            { date: 'December', units: 31 }
        ],
        availableUnits: 15
    }
    ,
    {
        id: 11,
        category: 'Bakery',
        name: "Baguette",
        description: "Baguettes are long French bread with a hard outer crust while remaining soft and chewy inside.",
        brand: 'bongoss',
        type: 'Bread',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 1.5,
            previousPrice: 5.54
        },
        image: baguette,
        rating: 3,
        arrivalDate: '10/09/2020',
        soldUnits: [
            { date: 'January', units: 41 },
            { date: 'February', units: 13 },
            { date: 'March', units: 12 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 7 },
            { date: 'July', units: 8 },
            { date: 'August', units: 0 },
            { date: 'September', units: 26 },
            { date: 'October', units: 85 },
            { date: 'November', units: 23 },
            { date: 'December', units: 20 }
        ],
        availableUnits: 32
    }
    ,
    {
        id: 12,
        category: 'Bakery',
        name: "Brioche",
        description: "Although brioche is another French bread alternative, it does contain a high level of eggs and butter with enriched flour.",
        brand: 'bongoss',
        type: 'Bread',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 0.80,
            previousPrice: 2.12
        },
        image: brioche,
        rating: 3,
        arrivalDate: '10/09/2020',
        soldUnits: [
            { date: 'January', units: 32 },
            { date: 'February', units: 32 },
            { date: 'March', units: 2 },
            { date: 'Mai', units: 42 },
            { date: 'Juin', units: 53 },
            { date: 'July', units: 72 },
            { date: 'August', units: 24 },
            { date: 'September', units: 25 },
            { date: 'October', units: 23 },
            { date: 'November', units: 53 },
            { date: 'December', units: 24 }
        ],
        availableUnits: 10
    }
    ,
    {
        id: 13,
        category: 'Bakery',
        name: "focaccia",
        description: "focaccia is an Italian flat oven-baked leavened bread, similar to pizza dough. But, it contains more yeast, making it rise and produce a fluffy appearance.",
        brand: 'bongoss',
        type: 'Bread',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 1.80,
            previousPrice: 2.1
        },
        image: focaccia,
        rating: 3,
        arrivalDate: '10/09/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    },
    {
        id: 14,
        category: 'FruitsAndVegetables',
        name: "Tomatoes",
        description: "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America.",
        brand: 'farmos',
        type: 'fruit',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 1.80,
            previousPrice: 2.1
        },
        image: tomatoes,
        rating: 3,
        arrivalDate: '10/09/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    },
    {
        id: 15,
        category: 'FruitsAndVegetables',
        name: "Onions",
        description: "An onion also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium.",
        brand: 'tagos',
        type: 'vegetable',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 5.80,
            previousPrice: 2.1
        },
        image: onions,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    },
    {
        id: 16,
        category: 'FruitsAndVegetables',
        name: "StrawBerries",
        description: "The strawberry is a highly nutritious fruit, loaded with vitamin C and powerful antioxidants.",
        brand: 'jot',
        type: 'fruit',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 3.80,
            previousPrice: 10.1
        },
        image: strawberries,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    },
    {
        id: 17,
        category: 'FruitsAndVegetables',
        name: "Carrots",
        description: "he carrot (Daucus carota) is a root vegetable often claimed to be the perfect health food. It is crunchy, tasty, and highly nutritious.",
        brand: 'jot',
        type: 'root vegetable',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 1.00,
            previousPrice: 2.1
        },
        image: carrots,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    }
    ,
    {
        id: 18,
        category: 'FruitsAndVegetables',
        name: "Banana",
        description: "A banana is an elongated, edible fruit  botanically a berry  produced by several kinds of large herbaceous flowering plants in the genus Musa.",
        brand: 'aot',
        type: 'fruit',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 1.5,
            previousPrice: 3.56
        },
        image: banana,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    },
    {
        id: 19,
        category: 'FruitsAndVegetables',
        name: "Apple",
        description: "Apples are a rich source of dietary phytochemicals such as flavonoids. They also contain high levels of polyphenols and other phytochemicals.",
        brand: 'aot',
        type: 'fruit',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 2.5,
            previousPrice: 5.56
        },
        image: apple,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    }
    ,
    {
        id: 20,
        category: 'FruitsAndVegetables',
        name: "Watermelon",
        description: "Watermelon contains a variety of nutrients, including potassium, magnesium, and vitamins A and C.",
        brand: 'aot',
        type: 'fruit',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 7.5,
            previousPrice: 12.26
        },
        image: watermelon,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    },
    {
        id: 20,
        category: 'FruitsAndVegetables',
        name: "Cucumber",
        description: " Cucumbers are popular long, lean, and green garden vegetables.",
        brand: 'aot',
        type: 'fruit',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 3.2,
            previousPrice: 6.26
        },
        image: cucumber,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    },
    {
        id: 21,
        category: 'MeatAndFish',
        name: "chicken",
        description: " Cucumbers are popular long, lean, and green garden vegetables.",
        brand: 'walmart',
        type: 'meat',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 3.2,
            previousPrice: 6.26
        },
        image: chicken,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    },
    {
        id: 22,
        category: 'MeatAndFish',
        name: "pork",
        description: " Cucumbers are popular long, lean, and green garden vegetables.",
        brand: 'tasco',
        type: 'meat',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 3.2,
            previousPrice: 6.26
        },
        image: pork,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    },
    {
        id: 23,
        category: 'MeatAndFish',
        name: "beef",
        description: " Cucumbers are popular long, lean, and green garden vegetables.",
        brand: 'tasco',
        type: 'meat',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 3.2,
            previousPrice: 6.26
        },
        image: beef,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    },
    {
        id: 24,
        category: 'MeatAndFish',
        name: "fish",
        description: " Cucumbers are popular long, lean, and green garden vegetables.",
        brand: 'tasco',
        type: 'fish',
        extraInfo:
        {
            right: [
                'fresheness',
                'farm',
                'delivery',
                'In Stock'
            ],
            left: [
                "New(Extra fresh)",
                "Grocery Tarm Fields",
                "Europe",
                "320 pcs"
            ]
        }
        , shipping: {
            status: "free shipping",
            delay: "Delivery in 1 day"
        },
        price: {
            currentPrice: 3.2,
            previousPrice: 6.26
        },
        image: fish,
        rating: 3,
        arrivalDate: '10/06/2020',
        soldUnits: [
            { date: 'January', units: 24 },
            { date: 'February', units: 36 },
            { date: 'March', units: 47 },
            { date: 'Mai', units: 6 },
            { date: 'Juin', units: 28 },
            { date: 'July', units: 29 },
            { date: 'August', units: 19 },
            { date: 'September', units: 10 },
            { date: 'October', units: 15 },
            { date: 'November', units: 2 },
            { date: 'December', units: 7 }
        ],
        availableUnits: 9,
    }
];
export default products