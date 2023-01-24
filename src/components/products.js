import bananaCake from './productPic/bananaCake.jpg';
import chocolateCoconutCake from './productPic/chocolateCoconutCake.jpg';
import lemonYoghurtCake from './productPic/lemonYoghurtCake.jpg';
import orangeAlmondCake from './productPic/orangeAlmondCake.jpg';
import vanillaCupcakes from './productPic/vanillaCupcakes.jpg';
import dragonFruitCake from './productPic/dragonFruitCake.jpeg';

const products = [
    {
        name: "Banana cake with cream cheese",
        description: "Use up over-ripe bananas to create a crowd-pleasing afternoon-tea cake.",
        brand: 'Air Heads',
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
        rating: 5
    },
    {
        name: "Chocolate coconut cake",
        description: "A hint of coconut takes this moist chocolate cake to a whole new level.",
        brand: 'Betty Crocker',
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
        rating: 3
    },
    {
        name: "Lemon yoghurt cake with syrup",
        description: "The use of yoghurt in this recipe makes for a fluffier baked cake.",
        brand: 'Black Forest',
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
        rating: 5
    }, {
        name: "Flourless orange cake",
        description: "I make this cake for morning teas at work. It’s really easy and because it’s gluten free, everyone can enjoy it.",
        brand: 'Dare',
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
        rating: 2
    }, {
        name: "Vanilla cupcakes",
        description: "These festive cakes are gluten, dairy, egg and nut free, and are great for kids’ parties or a special treat.",
        brand: 'Dare',
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
        rating: 5
    }
    , {
        name: "Dragon Fruit cake",
        description: "Dragon fruit won't win any awards for what it looks like on the outside, but the inside is a beauty.",
        brand: 'Dare',
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
        rating: 3
    }
];
export default products