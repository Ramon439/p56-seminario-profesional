const express = require('express')
const carrera = require('../components/carrera/network')

const routes = function (server) {
    server.use('/carrera', carrera)
}

module.exports = routes