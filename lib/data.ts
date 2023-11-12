import { nanoid } from 'nanoid'
import { IBookProps } from './types'

export const books: IBookProps[] = [
    {
        id: nanoid(),
        name: 'Mystery of the Sugar Dough',
        price: '19.99',
        category: 'Mystery',
        description:
            'Chocolate mousse tart biscuit macaroon. Donut chupa chups bonbon candy. Sweet roll donut sugar plum, brownie muffin cupcake cheesecake. Chupa chups cookie tiramisu cake. Pastry pudding cake candy canes. Gingerbread soufflé cupcake, tiramisu gummies brownie lollipop.',
    },
    {
        id: nanoid(),
        name: 'The Frosting Chronicles',
        price: '21.50',
        category: 'Fantasy',
        description:
            'Ice cream tootsie roll jelly beans. Chocolate cake lemon drops gummies tiramisu. Marshmallow jelly-o chocolate bar croissant. Gingerbread sweet roll cheesecake. Macaroon candy canes cake tart. Cookie pudding cupcake, candy tiramisu icing.',
    },
    {
        id: nanoid(),
        name: 'Buttercream Dreams',
        price: '18.75',
        category: 'Romance',
        description:
            'Cheesecake brownie muffin sugar plum. Tiramisu cake cupcake, chocolate bar marshmallow sesame snaps. Brownie candy canes cookie tiramisu.',
    },
    {
        id: nanoid(),
        name: 'Sugar Spun Secrets',
        price: '22.00',
        category: 'Thriller',
        description:
            'Cupcake tart brownie, jelly-o cheesecake cotton candy. Macaroon bear claw marshmallow tootsie roll. Danish chocolate cake cookie candy jelly beans. Apple pie brownie donut, candy lollipop chocolate.',
    },
    {
        id: nanoid(),
        name: 'Caramel Whispers',
        price: '20.99',
        category: 'Science Fiction',
        description:
            'Tootsie roll tart tiramisu caramels. Donut cake brownie jelly. Gingerbread ice cream cheesecake chocolate cake. Soufflé sweet roll danish, tiramisu gummies candy.',
    },
    {
        id: nanoid(),
        name: 'The Biscuit Baron',
        price: '17.50',
        category: 'Historical Fiction',
        description:
            'Macaroon brownie sweet roll candy canes. Cupcake chocolate bar ice cream muffin danish. Tart donut cookie, cake croissant candy apple pie.',
    },
    {
        id: nanoid(),
        name: 'Velvet Vanilla Nights',
        price: '16.99',
        category: 'Romance',
        description:
            'Cupcake candy canes chupa chups. Jelly-o cheesecake cotton candy candy canes. Marshmallow brownie muffin tiramisu. Soufflé tart lollipop, danish jelly-o muffin.',
    },
    {
        id: nanoid(),
        name: 'Truffle Treasures',
        price: '23.45',
        category: 'Mystery',
        description:
            'Marshmallow tiramisu croissant. Chocolate bar cheesecake cupcake, jelly-o muffin tiramisu cake. Candy canes chocolate cake, sweet roll macaroon lollipop.',
    },
    {
        id: nanoid(),
        name: 'Fudge Fantasy',
        price: '18.20',
        category: 'Fantasy',
        description:
            'Lollipop chocolate cake marshmallow. Cupcake icing chocolate bar. Danish muffin chocolate, candy apple pie tiramisu. Soufflé gingerbread bear claw, bonbon jelly beans.',
    },
    {
        id: nanoid(),
        name: 'Confectioner’s Conundrum',
        price: '24.99',
        category: 'Crime',
        description:
            'Cotton candy cupcake brownie. Cookie chocolate cake candy canes tiramisu. Lollipop pastry marshmallow, cheesecake pudding ice cream. Cupcake tiramisu bear claw.',
    },
]
