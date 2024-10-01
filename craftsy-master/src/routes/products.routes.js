const express = require ('express');
const router = express.router();
const productsController = require ('../controllers/productsController')

router.get ('/', productsController.list)
router.get ('/:product_id', productsController.list)

module.exports = router;