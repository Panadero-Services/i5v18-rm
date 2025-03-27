// * * *     *       *   *       *   *   *   * *** *
// *    *       *     *      *   *       *   *     *
// *   NanoService : rm-sales.js      * * 
// *   Location : /modules/build/rm-sales  * 
// *   Modified L.B.   *                 *         *
// *   Date:    27 mar 2025             *          *
// *   Version: v0.1.5.            *        *      *
// ** *     *       *   *       *   *   *   *     **
// * *  *       *     *      *   *       *  *  * * *

/** *
* v0.1.0 Initial Commit
* RentMagic Class : NanoServer fro Price Calculation ProtoType
* 
* v0.1.1 - v0.1.3 Evaluating Test versions...  
* v0.1.4 Refactor PriceCalculation to rm-sales
* - replaces grossPrice with factor.z (fixed value)
* 
* v0.1.5 Specific change call before deployment;
* added .../api/price-calculator
* **/

/* const line = {
     id : 1,
     type : "rent",
     itemName: "drillMachine",
     pricePerUnit: 25,
     qty: 50, 
     status: "created", 
     grossPrice: 0, 
     nettPrice: 0, 
     vat : 0.19
}*/

import express from 'express';
import cors from 'cors';
import { moduleName, moduleGit, moduleVersion, moduleDate, moduleAuthor, moduleTitle, Order, OrderLine, orderStatus, orderLineStatus, applyDiscount, priceCalculator }  from 'rm-sales';
console.log(moduleName, moduleVersion);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/ping', async (req, res) => {
  //const orders = await moduleName;
    console.log('/ping');
    const _response = {'resolved':'pong', 'rejected':'', 'statusCode':100 };
    res.json(_response);
});

app.get('/version', async (req, res) => {
  //const orders = await moduleName;
    console.log('/version');
    const _response = {
        'moduleName':moduleName, 
        'moduleTitle':moduleTitle, 
        'moduleGit':moduleGit, 
        'moduleVersion':moduleVersion, 
        'moduleDate':moduleDate, 
        'moduleAuthor':moduleAuthor, 
        'rejected':'', 'statusCode':100 
      };
    res.json(_response);
});

app.get('/api/order', async (req, res) => {
    const _order = new Order();
    console.log(_order.getOrder());
    res.json(_order.getOrder());
});


app.get('/api/orderstatus', async (req, res) => {
    console.log('OrderStatus',OrderStatus);
    res.json(OrderStatus);
});

app.get('/api/orderlinestatus', async (req, res) => {
    console.log('OrderlineStatus',OrderlineStatus);
    res.json(OrderlineStatus);
});

//myOrder.applyDiscount("percentage", 10); // 10% off
app.post('/api/order/apply-discount', (req, res) => {
    const { line, discount } = req.body;
    const _order = new Order( line, discount );
    console.log(_order);
    applyDiscount(line, discount); 
    console.log(line);
    res.json(line);
});


// new 
app.post('/api/price-calculator', async (req, res) => {
    var OrderLoad = req.body;
    //const _order = new Order( line, discount );
//    console.log(OrderLoad);

    priceCalculator(OrderLoad); 
    console.log(OrderLoad);
    //applyDiscount(line, discount); 
    res.json(OrderLoad);
});


const _validateJson = (_json, _oDefault='') => {
    let o = oDefault;
    try {
        let oDb = JSON.parse(_json);
        for (const [key, value] of Object.entries(o)) {
            if (oDb.hasOwnProperty(key)){
                o[key] = oDb[key];
            }
        }
        return(o);
    } catch (err) {
        console.log(err);
        return(_oDefault);
    }
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;