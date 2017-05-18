/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

const List = require('../models/list');
const ListItem = require('../models/listitem');
const config = require('../config/database');

//Create new list

router.post('/newlist', (req, res, next) => {

  let newList = new List({

    name: req.body.name,
    createdby: req.body.createdby

  });

  List.addNewList(newList, (err, list) => {

    if(err){

      res.json({success: false, msg: err});

    } else {

      res.json({success: true, msg: 'New list added'});

    }

  });

});

//Find users lists

router.post('/allLists', (req, res, next) => {

  let createdby = req.body.createdby;

  List.findListsByUser(createdby, (err, lists) => {

    if(err){

      res.json({success: false, msg: err});

    } else {

      res.json(lists);

    }

  });

});

//Find list details

router.post('/list', (req, res, next) => {

  let listname = req.body.listname;

  List.findListByListName(listname, (err, list) => {

    if(err){

      res.json({success: false, msg: err});

    } else {

      ListItem.findListItemsByListName(listname, (err, listitems) => {

        if(err){

          res.json({success: false, msg: err});

        } else {

          res.json(listitems);

        }

      });

    }

  });

});

router.post('/newlistitem', (req, res, next) => {

  let newListItem = new ListItem({

    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    list: req.body.list

  });

  ListItem.addNewListItem(newListItem, (err, list) => {

    if(err){

      res.json({success: false, msg: err});

    } else {

      res.json({success: true, msg: 'New list item added'});

    }

  });

});

module.exports = router;
