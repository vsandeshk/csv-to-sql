const express = require('express')
var router = express.Router()
var controller = require('../controller/controller.js');

router
  .route('/database/create')
  .get(function(req, res) {
    controller.create_database(req, res);
  });

router
  .route('/table/create')
  .get(function(req, res) {
    controller.create_table(req, res);
  });

router
  .route('/data/import')
  .get(function(req, res) {
    controller.import(req, res);
  });

router
  .route('/data/display')
  .get(function(req, res) {
    controller.getTableRows(req, res);
  });


module.exports = router;
