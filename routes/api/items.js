const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');




//@route get api/items
// @desc get all items
// @access public

router.get('/', (req, res) => {
    Item
        .find()
        .sort({date: -1})
        .then(items => res.json(items))
});

//@route post api/items
// @desc post an items
// @access public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    //save the item posted
    newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
// @desc DELETE an items
// @access public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then(item => 
            item.remove().then(() => res.json({success: true}))
        )
        .catch(err => res.status(404).json({success: false}))
});

module.exports =  router; 