const { getAll, create, getOne, remove, update } = require('../controllers/user.contoller');
const express = require('express');

const routerUser = express.Router();

routerUser.route('/')
	.get(getAll)
	.post(create);

routerUser.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerUser;