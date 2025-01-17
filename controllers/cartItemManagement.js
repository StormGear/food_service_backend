const client = require('./userManagement');
const cartItemClient = client.client;

const getAllCartItems = (req, res) => {
    cartItemClient.query('SELECT * FROM public.cart_item;', async (err, results) => {
  try {
    if (err) throw err;
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  });
}

const getAllCartItemsByCartId = (req, res) => {
    const cart_id = req.params.cart_id;

    if (!cart_id) {
        res.status(400).json({message : "Cart id is required"});
    }
    const query = 'SELECT * FROM public.cart_item WHERE cart_id = $1'
    cartItemClient.query(query, [cart_id], (err, results) => {
        try {
            if (err) throw err;
            res.status(200).json(results.rows);
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    })
}

const createCartItem = (req, res) => {
    const { cart_id, menuitem_id, extra_toppings } = req.body;
    
    if (!menuitem_id || !cart_id) {
        return res.status(400).json({ message: "menuitem id or cart_id are required" });
    }

    const query = 'INSERT INTO "cart_item" (cart_id, menuitem_id, extra_toppings) \
                    VALUES ($1, $2, $3) \
                    ON CONFLICT (cart_id, menuitem_id) \
                    DO NOTHING RETURNING *;'
    const values = [cart_id, menuitem_id, extra_toppings]

    cartItemClient.query(query, values, (err, results) => {
        try {
            if (err) throw err;
            res.status(201).json(results.rows[0]);
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
    })
}

const removeCartItem = (req, res) => {
    const { cartitem_id, menuitem_id } = req.params;
    
    if (!menuitem_id || !cartitem_id) {
        return res.status(400).json({ message: "menuitem_id or cart_id are required" });
    }

    const query = 'DELETE FROM "cart_item" WHERE cartitem_id = $1 AND menuitem_id = $2 RETURNING *;'
    const values = [cartitem_id, menuitem_id]

    cartItemClient.query(query, values, (err, _) => {
        try {
            if (err) throw err;
            res.status(201).json({ message: "Cart item has been deleted" });
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
    })
}

const updateQuantityOfCartItem = (req, res) => {
    const { cartitem_id, quantity } = req.body;
    
    if (!cartitem_id || !quantity) {
        return res.status(400).json({ message: "cart item id or quantity are required" });
    }

    const query = 'UPDATE "cart_item" SET quantity = $2 WHERE cartitem_id = $1 RETURNING *;'
    const values = [cartitem_id, quantity]

    cartItemClient.query(query, values, (err, results) => {
        try {
            if (err) throw err;
            res.status(201).json({ quantity: results.rows[0].quantity });
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
    })
}

const getCartItemsAndTotalCostForEachItem = (req, res) => {
    const cart_id = req.params.cart_id;

    if (!cart_id) {
        res.status(400).json({message : "Cart id is required"});
    }
    const query = 'SELECT cart_item.cartitem_id, cart_item.cart_id, menuitem.menuitem_id, menuitem.name, menuitem.price, \
                    cart_item.quantity, cart_item.extra_toppings, (menuitem.price * cart_item.quantity) AS total_price \
                    FROM cart_item \
                    JOIN menuitem ON cart_item.menuitem_id = menuitem.menuitem_id \
                    WHERE cart_item.cart_id = $1;'
    cartItemClient.query(query, [cart_id], (err, results) => {
        try {
            if (err) throw err;
            let totalCost = 0;
            results.rows.forEach(item => {
                totalCost += parseInt(item.total_price);
            });
            res.status(200).json({items: results.rows, total_cost: totalCost});
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    })
}

const totalCostOfAllCartItems = (req, res) => {
    const cart_id = req.params.cart_id;

    if (!cart_id) {
        res.status(400).json({message : "Cart id is required"});
    }
    const query = 'SELECT SUM(menuitem.price * cart_item.quantity) AS total_cart_value \
                    FROM cart_item \
                    JOIN menuitem ON cart_item.menuitem_id = menuitem.menuitem_id \
                    WHERE cart_item.cart_id = $1;'
    cartItemClient.query(query, [cart_id], (err, results) => {
        try {
            if (err) throw err;
            res.status(200).json(results.rows[0]);
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    })
}

const clearCartItems = (req, res) => {
    const cart_id = req.params.cart_id;

    if (!cart_id) {
        res.status(400).json({message : "Cart id is required"});
    }
    const query = 'DELETE FROM cart_item WHERE cart_id = $1;'
    cartItemClient.query(query, [cart_id], (err, _) => {
        try {
            if (err) throw err;
            res.status(200).json({message: "Cart items have been cleared"});
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    })
}

module.exports = {
    getAllCartItems,
    getAllCartItemsByCartId,
    createCartItem,
    removeCartItem,
    updateQuantityOfCartItem,
    getCartItemsAndTotalCostForEachItem,
    totalCostOfAllCartItems,
    clearCartItems
}