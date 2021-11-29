import { getConnection, sql, queries } from "../database/index";

export const getProducts = async (req, res) => {
  try {
    let pool = await getConnection();
    const result = await pool.request().query(queries.getProducts);
    res.json(result.recordset)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const saveProducts = async (req, res) => {
  try {
    let { name, description, quantity } = req.body;
    if (name == null || description == null) {
      return res.status(422).json({ msg: 'Bad request. Please fill all fields' })
    }
    quantity = quantity ? quantity : 0;

    let pool = await getConnection();
    await pool
      .request()
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.SmallInt, quantity)
      .query(queries.saveProduct);
    res.status(202).json({ name, description, quantity })

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}


export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let pool = await getConnection();
    const result = await pool
      .request()
      .input('id', id)
      .query(queries.getProduct);
    res.json(result.recordset[0] || {})
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let pool = await getConnection();
    const result = await pool
      .request()
      .input('id', id)
      .query(queries.deleteProduct);
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {name, description, quantity} = req.body

    if (name == null || description == null || quantity == null) {
      return res.status(422).json({msg: 'Error validator fields. Please send all fields.'})
    }

    let pool = await getConnection();
    await pool
      .request()
      .input('id', id)
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.SmallInt, quantity)
      .query(queries.updateProduct);
    res.json({name, description, quantity})
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const countProducts = async (req, res) => {
  try {
    let pool = await getConnection();
    let response = await pool
      .request()
      .query(queries.countProduct);
    res.json(response.recordset[0][''])
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}