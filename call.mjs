// Voorbeeld gebruik:
//import {rmPriceCalculation} from 'rm-pricecalculation';
import { moduleName, moduleGit, moduleVersion, moduleDate, moduleAuthor, moduleTitle, colors, Order, OrderLine, orderStatus, orderLineStatus, applyDiscount }  from 'rm-sales';

const _order = new Order();
console.log(_order);

async function f1() {
  return new Promise(resolve => {
    const check = async () => {
      try {
        // Getting list of open orders
          //await callModule();
          resolve();
      } catch (err) {
        console.log('errrrror.. rm-sales....',err); 
        process.exit(1);
      }
    }
    check();
  });
}

f1();