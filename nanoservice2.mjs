import express from 'express';
import cors from 'cors';
//import { getOrders, createOrder, updateOrderStatus } from 'rm-pricecalculation';
import { moduleName, moduleGit, moduleVersion, moduleDate, moduleAuthor, moduleTitle, colors, rmOrder, rmOrderItem, OrderStatus, OrderItemStatus, applyDiscountLine, applyDiscount } from 'rm-pricecalculation';
console.log(moduleName, moduleVersion);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/orders', async (req, res) => {
  const orders = await moduleName;
console.log('/orders called', orders)
  res.json(orders);
});

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

app.get('/order', async (req, res) => {
    const _rmOrder = new rmOrder();
    console.log(_rmOrder.getOrder());
    res.json(_rmOrder.getOrder());
});

app.get('/api/orderstatus', async (req, res) => {
    console.log('OrderStatus',OrderStatus);
    res.json(OrderStatus);
});

app.get('/api/orderitemstatus', async (req, res) => {
    console.log('OrderItemStatus',OrderItemStatus);
    res.json(OrderItemStatus);
});


/* const item = {
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


//myOrder.applyDiscount("percentage", 10); // 10% off
app.post('/api/order/apply-discount', (req, res) => {
    const { item, discount } = req.body;
    const _rmOrder = new rmOrder( item );
    console.log(_rmOrder);
    
    //console.log(item);
    //console.log(discount);
    applyDiscount(item, discount ); // 10% off
    console.log(item);
    res.json(item);
});

app.post('/api/order/apply-discount-line', (req, res) => {
    const { item, discount } = req.body;
    console.log(item);
    console.log(discount);
    applyDiscountLine(item, discount ); // 10% off
    console.log(item);
    res.json(item);
});

/*
app.patch('/orders/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedOrder = await updateOrderStatus(id, status);
  res.json(updatedOrder);
});
*/

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;