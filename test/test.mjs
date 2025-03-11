// tests.mjs
import assert from 'node:assert';
import test from 'node:test';
import { moduleName, moduleGit, moduleVersion, moduleDate, moduleAuthor, moduleTitle, colors, rmOrder, rmOrderItem, OrderStatus, OrderItemStatus  } from 'rm-pricecalculation';

const _rmOrder = new rmOrder();
console.log('moduleVersion', moduleVersion);
console.log(_rmOrder.getOrder());

const _rmOrderItem = new rmOrderItem();
console.log(_rmOrderItem);
//_rmOrderItem.calculateRowprice();
//console.log(_rmOrderItem);
//const _rmOrderItem2 = new rmOrderItem();
//console.log(_rmOrderItem2);
//_rmOrderItem2.calculateRowprice();
//console.log(_rmOrderItem2);



test('that 121 is equal 1', () => {
  assert.strictEqual(1, 1);
});
test('that throws as 1 is not equal 2', () => {
  // throws an exception because 1 != 2
  assert.strictEqual(2, 2);
});

test('status is equal to created', () => {
  // throws an exception because 1 != 2
  assert.strictEqual(_rmOrderItem.item.status, 'created');
});
// run with `node tests.mjs`


test('top level test', async (t) => {
  await t.test('subtest 1', (t) => {
    assert.strictEqual(1, 1);
  });

  await t.test('subtest 2', (t) => {
    assert.strictEqual(2, 2);
  });
}); 


test('failing test using Promises', (t) => {
  // Promises can be used directly as well.
  return new Promise((resolve, reject) => {
    setImmediate(() => {
      reject(new Error('this will cause the test to fail'));
    });
  });
});




// run with `node tests.mjs`



//_rmOrder.calculateOrderprice();