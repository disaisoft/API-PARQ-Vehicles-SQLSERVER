import sql from 'mssql'

const dbsettings = {
    user: 'dave',
    password: 'Hackdeivis',
    server: '192.168.1.5',
    database: 'vehicles',
    options:{
        encrypt: true, // for azure
        trustServerCertificate: true
    },
}

async function getConnetion() {
    const pool = await sql.connect(dbsettings);
    return pool;
}

getConnetion();