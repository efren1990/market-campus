/** ===============================================
* @Name: CONFIGS
================================================= */
const config = {
  host: process.env.HOST ?? 'localhost',
  username: process.env.USERDB ?? 'root',
  password: process.env.PASSDB ?? '',
  database: process.env.DATABASE ?? 'market',
  dialect: process.env.DIALECT ?? 'mysql',
  timezone: '-05:00',
  dialectOptions: {
    useUTC: false,
  }
}

module.exports = config