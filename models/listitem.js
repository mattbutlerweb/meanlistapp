/*jshint esversion: 6 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ListItemSchema = mongoose.Schema({

  name: {

    type: String,
    required: true

  },

  description: {

    type: String,
    required: true

  },

  quantity: {

    type: Number,
    required: true

  },

  list: {

    type: String,
    required:true

  }


});

const ListItem = module.exports = mongoose.model('ListItem', ListItemSchema);

module.exports.addNewListItem = function(newListItem, callback){

      newListItem.save(callback);

};

module.exports.findListItemsByListName = function(listname, callback){

  const query = {list: listname};
  ListItem.find(query, callback);

};
