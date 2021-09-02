import ICart from "../models/cart";

export const Cart: ICart = 
    {
        value: 1250, 
        totalizers: [
            { "id": "Items", "name": "Total dos Itens", "value": 729 },
            { "id": "Discounts", "name": "Total dos Descontos", "value": -72 }
        ],
        items: [
            {
                "id": "16701615",
                "name": "Trufa BENDITO CACAU 55% CACAU 30 G",
                "quantity": 1,
                "price": 650,
                "sellingPrice": 500,
                "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000",
            },
            {
                "id": "16701612",
                "name": "TRUFA MORANGO",
                "quantity": 1,
                "price": 756,
                "sellingPrice": 450,
                "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000",
            },
            {
                "id": "16701610",
                "name": "TRUFA TRADICIONAL 30 G",
                "quantity": 1,
                "price": 400,
                "sellingPrice": 300,
                "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159942-800-1029/trufa-tradicional.png?v=636916452526400000",
            },
        ]
    };