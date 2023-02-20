const pool = require("../db");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//@desc Get all 
const getAllPedidos = asyncHandler(async (req, res) => {
  try {
    const pedidos = await pool.query('SELECT * FROM pedidos');
    res.json(pedidos.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error getting pedidos",
      works: false,
    });
  }
});


const createNewPedidos = asyncHandler(async (req, res) => {
  try {  

    try {
      const { id_pedido, id_usuario, fecha_pedido,total_pedido } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const pedidos = await pool.query('SELECT * FROM pedidos WHERE id_pedido = $1', [
        id_pedido,
      ]);
      if (pedidos.rows.length > 0) {
        return res.status(200).json({
          message: "pedido already exists",
          works: false,
        });
      }
      
      const result = await pool.query(
        'INSERT INTO pedidos (id_pedido, id_usuario, fecha_pedido,total_pedido) VALUES ($1,$2,$3,$4) RETURNING *',
        [id_pedido, id_usuario, fecha_pedido,total_pedido]
      );
      res.status(200).json({ message: " created!" });
    } catch (error) {
      console.log(error);
    }



  } catch (error) {
    return res.status(500).json({
      message: "Error creating ",
      works: false,
    });
  }
});




const updatePedidos = asyncHandler(async (req, res) => {
  try {
    const  {id_pedido}  = req.params;
    const {id_usuario, fecha_pedido,total_pedido} = req.body;

    const result = await pool.query(`UPDATE pedidos SET fecha_pedido = $3, total_pedido = $4 WHERE id_pedido = $1`,
      [id_pedido,id_usuario, fecha_pedido,total_pedido]
    );

    if (result.rowCount === 0)
      return res.status(400).json({
        message: " not found",
      });

    res.status(200).json({ message: "Updated" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error updating ",
      
      works: false,
      
    });
    
  }
});


   
const deletePedidos= asyncHandler(async (req, res) => {
  const { id_pedido } = req.params;
  console.log(id_pedido)
  try {
    const result = await pool.query('DELETE FROM pedidos WHERE id_pedido = $1', [id_pedido]);
    

    if (result.rowCount === 0)
      return res.status(400).json({
        message: " not found",
      });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting ",
      works: false,
    });
  }
});

module.exports = {
  getAllPedidos,
  deletePedidos,
  createNewPedidos,
  updatePedidos,
  
};
