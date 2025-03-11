// Voorbeeld gebruik:
//import {rmPriceCalculation} from 'rm-pricecalculation';
import { moduleName, moduleGit, moduleVersion, moduleDate, moduleAuthor, moduleTitle, colors, rmOrder, rmOrderItem, OrderStatus, OrderItemStatus  } from 'rm-pricecalculation';

const _rmOrder = new rmOrder();
console.log(_rmOrder);

async function f1() {
  return new Promise(resolve => {
    const check = async () => {
      try {
        // Getting list of open orders
          //await callModule();
          resolve();
      } catch (err) {
        console.log('errrrror.. pricecalculation....',err); 
        process.exit(1);
      }
    }
    check();
  });
}

f1();