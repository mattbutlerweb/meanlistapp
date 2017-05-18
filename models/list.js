/*jshint esversion: 6 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ListSchema = mongoose.Schema({

  name: {

    type: String,
    required: true

  },
  createdby: {

    type: String,
    required: true

  }
});

const List = module.exports = mongoose.model('List', ListSchema);

module.exports.addNewList = function(newList, callback){

      newList.save(callback);

};

module.exports.findListsByUser = function(createdby, callback){

  const query = {createdby: createdby};
  List.find(query, callback);

};

module.exports.findListByListName = function(listname, callback){

  const query = {name: listname};
  List.find(query, callback);

};
