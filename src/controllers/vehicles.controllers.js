import { getConnetion } from '../database/connection'


export const getVehicles = async (req, res) => {
    const pool = await getConnetion();
    const result = await pool.request().query('SELECT * FROM vehicles_')
    res.json(result.recordset);
};

export const createNewVehicles = ( req, res) => {
    const { tipo_vehiculo, placa, tarifa} = req.body
    console.log(tipo_vehiculo, placa, tarifa)
    res.json('New Vehicle!!!')
}