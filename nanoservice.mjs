// * * *     *       *   *       *   *   *   * *** *
// *    *       *     *      *   *       *   *     *
// *   NanoService : rm-sales.js      * * 
// *   Location : /modules/build/rm-sales  * 
// *   Modified L.B.   *                 *         *
// *   Date:    12 mar 2025             *          *
// *   Version: v0.1.4.            *        *      *
// ** *     *       *   *       *   *   *   *     **
// * *  *       *     *      *   *       *  *  * * *




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
//import { getOrders, createOrder, updateOrderStatus } from 'rm-pricecalculation';
import { moduleName, moduleGit, moduleVersion, moduleDate, moduleAuthor, moduleTitle, colors, Order, OrderLine, orderStatus, orderLineStatus, applyDiscount }  from 'rm-sales';
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;