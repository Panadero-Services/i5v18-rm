const express = require('express');
const app = express();
const port = 3000;

import { moduleName, moduleGit, moduleVersion, moduleDate, moduleAuthor, moduleTitle, colors, rmOrder, rmOrderItem, OrderStatus, OrderItemStatus  } from 'rm-pricecalculation';

// Middleware om JSON-data te kunnen ontvangen
app.use(express.json());

// Functie om de prijs te berekenen
function calculatePrice(basePrice, discount = 0, shippingCost = 0) {
  const discountAmount = (basePrice * discount) / 100;
  const finalPrice = basePrice - discountAmount + shippingCost;
  return finalPrice.toFixed(2); // Retourneert de prijs met twee decimalen
}
/*
// API endpoint voor het berekenen van de prijs
app.post('/api/calculate-price', (req, res) => {
  const { basePrice, discount, shippingCost } = req.body;

  if (typeof basePrice !== 'number' || basePrice < 0) {
    return res.status(400).json({ error: 'Basisprijs moet een positief getal zijn.' });
  }

  const finalPrice = calculatePrice(basePrice, discount || 0, shippingCost || 0);
  res.json({ finalPrice });
});

// Start de server
app.listen(port, () => {
  console.log(`Prijsberekening service draait op http://localhost:${port}`);
});
*/