/** ===============================================
* @Name: ENTRY POINT
================================================= */
//# IMPORTS: >>>
require('dotenv').config();
const Server = require("./server/server");

//# Server >>>
const server = new Server();
server.start();
