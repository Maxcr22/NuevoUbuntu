const express = require('express')
const router = express.Router()
const pedidosController = require('../controllers/pedidosController')


router.route("/").get(pedidosController.getAllPedidos);
router.route("/").post(pedidosController.createNewPedidos);
router.delete("/:id_pedido", pedidosController.deletePedidos);
router.put("/:id_pedido", pedidosController.updatePedidos);


module.exports = router;
