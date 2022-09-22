import {Router} from 'express';
import {Shop} from '../models/shops';

const routes = Router();

const shops: Shop[] = [
    { id: 111, name: "Pepper's Pizza", rating: 4.5 },
    { id: 222, name: "Clive's Chives", rating: 3.4 },
    { id: 333, name: "Betty's Brews", rating: 4.3 },
    { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
    { id: 555, name: "Teddy's Tunes", rating: 4.7 }
];

//Get shops
routes.get('/shop', (req, res) => {
    const minRating = Number.parseFloat(req.query.minRating as string);

    let tempArray = shops;

    if(minRating){
        tempArray = tempArray.filter((shop) =>
            shop.rating >= minRating );
    }

    res.status(200);
    res.json(tempArray);
});

//Get Shops By ID
routes.get('/shop/:id', (req, res) => {
    const id = Number.parseInt(req.params.id);

    const shop = shops.find(shop => {
        return shop.id === id;
    });

    if(shop){
        res.status(200);
        res.json(shop);
    } else {
        res.status(404);
        res.json({"error": `Shop not found: ${id}`});
        // res.render('404', { id });
    }
});


export default routes;
