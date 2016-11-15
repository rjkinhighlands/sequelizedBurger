var express = require('express');
var router = express.Router();

var Burger = require('../models') ['Burgers'];
Burger.sync();


router.get('/', function(req, res){
	var info = {
		brgr: [],
		itm: []
};

// WIMPY BURGER TABLE //

Burger.findAll({
	attributes: ['id', 'burger_name', 'devoured']
 }).then(function(data){
  	info.brgr = data;

	res.render('index', info);
	});
  });

// NEW BURGER //

router.post('/create', function(req, res){
	var newBurger = req.body.burgerInput;

	Burger.create({
		burger_name: newBurger,
		devoured: 0
	});
	res.redirect('/');
});

// UPDATE //

router.put('/update/:id', function(req, res){
	Burger.update({
		devoured:[req.body.devoured],
	},{
		where: {
			id: [req.params.id]
		}
	});
	res.redirect('/');
});

// REMOVES //

router.delete('/delete/:id', function(req, res){
	Burger.delete({
		where: {
			id: [req.params.id]
		}
	});
		res.redirect('/');
});

module.exports = router;