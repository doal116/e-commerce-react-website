import bananaCake from './productPic/bananaCake.jpg';
import chocolateCoconutCake from './productPic/chocolateCoconutCake.jpg';
import lemonYoghurtCake from './productPic/lemonYoghurtCake.jpg';
import orangeAlmondCake from './productPic/orangeAlmondCake.jpg';
import vanillaCupcakes from './productPic/vanillaCupcakes.jpg';
import dragonFruitCake from './productPic/dragonFruitCake.jpg';
import painAuChocolat from './productPic/painAuChocolat.jpg';
import croissantAmande from './productPic/croissantsamande.jpg';
import painAuxRaisin from './productPic/painAuxRaisin.jpg';
import croissantOrdinaire from './productPic/croissantOrdinaire.jpg'
import focaccia from './productPic/Focaccia.jpg';
import brioche from './productPic/brioche.jpg';
import baguette from './productPic/baguette.jpg';
import sourdough from './productPic/sourdough.jpeg';

const products = [
    {
        id: 0,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '12/12/2021'
    },
    {
        id: 1,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '12/11/2022'
    },
    {
        id: 2,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '01/10/2020'
    },
    {
        id: 3,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '02/10/2020'
    },
    {
        id: 4,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '01/01/2020'
    }
    ,
    {
        id: 5,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '10/09/2020'
    },
    {
        id: 6,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '10/09/2020'
    },
    {
        id: 7,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '10/09/2020'
    }
    ,
    {
        id: 8,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '10/09/2020'
    }
    ,
    {
        id: 9,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '10/09/2020'
    }
    ,
    {
        id: 10,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '10/09/2020'
    }
    ,
    {
        id: 11,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '10/09/2020'
    }
    ,
    {
        id: 12,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '10/09/2020'
    }
    ,
    {
        id: 13,
        category:'bakery',
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
                'stock'
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
        arrivalDate: '10/09/2020'
    }
];
export default products