const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// GET /menu
app.get('/menu', async (req, res) => {
  try {
    const [categories] = await pool.query('SELECT * FROM menu_categories ORDER BY position');
    const [items] = await pool.query('SELECT * FROM menu_items');

    const menu = categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      items: items.filter(it => it.category_id === cat.id),
    }));

    res.json(menu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching menu' });
  }
});

// POST /orders
app.post('/orders', async (req, res) => {
  const { tableId, items } = req.body;
  if (!tableId || !Array.isArray(items)) {
    return res.status(400).json({ error: 'Invalid payload' });
  }
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const [orderResult] = await connection.query(
      'INSERT INTO orders (table_id, status) VALUES (?, ?)',
      [tableId, 'new']
    );
    const orderId = orderResult.insertId;

    for (const item of items) {
      await connection.query(
        'INSERT INTO order_items (order_id, menu_item_id, quantity) VALUES (?, ?, ?)',
        [orderId, item.id, item.quantity]
      );
    }
    await connection.commit();
    res.status(201).json({ orderId });
  } catch (err) {
    await connection.rollback();
    console.error(err);
    res.status(500).json({ error: 'Error creating order' });
  } finally {
    connection.release();
  }
});

// GET /orders/:id
app.get('/orders/:id', async (req, res) => {
  const orderId = req.params.id;
  try {
    const [[order]] = await pool.query('SELECT * FROM orders WHERE id = ?', [orderId]);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    const [items] = await pool.query('SELECT * FROM order_items WHERE order_id = ?', [orderId]);
    res.json({ order, items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching order' });
  }
});

// POST /payments (mock)
app.post('/payments', async (req, res) => {
  const { orderId, amount } = req.body;
  if (!orderId || !amount) return res.status(400).json({ error: 'Invalid payload' });
  // simulate payment provider call
  setTimeout(async () => {
    try {
      await pool.query('INSERT INTO payments (order_id, amount, status) VALUES (?, ?, ?)', [orderId, amount, 'paid']);
    } catch (err) {
      console.error(err);
    }
  }, 1000);
  res.json({ message: 'Payment processing', redirectUrl: `/payment-status/${orderId}` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
