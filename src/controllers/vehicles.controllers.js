import { getConnetion, sql } from '../database/connection'


export const getVehicles = async (req, res) => {
    const pool = await getConnetion();
    const result = await pool.request().query
    ('SELECT * FROM vehicles_')
    res.json(result.recordset);
};

export const createNewVehicles =  async ( req, res) => {
    const { tipo_vehiculo, placa, tarifa} = req.body
    let { quantity } = req.body;
    
    if (tipo_vehiculo == null || placa == null || tarifa == null){
        return res.status(404).json({msg:
             'Bad Request. Please Fill all fields'})
    }

    if (quantity == null) quantity = 0;

    const pool = await get.getConnetion();
    
    await pool.request().input("tipo_vehiculo", sql.VarChar, "VEHICLE TEST").
    query('INSERT INTO vehicles_ (tipo_vehiculo) VALUES (@tipo_vehiculo)');

    console.log(tipo_vehiculo, placa, tarifa, quantity)

    res.json('New Vehicle!!!')
}