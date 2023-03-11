require('dotenv/config');
const products = require('../data/productSeed.js');
const Product = require('../models/productsModel.js');
const Order = require('../models/ordersModel.js');
const connectDB = require('../config/connection.js');


connectDB();

const importProducts = async () => {
	try {
		await Product.deleteMany();

		await Product.insertMany(products);

		console.log('Data Imported');
		process.exit();
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

const deleteProducts = async () => {
	try {
		await Product.deleteMany();
		await Order.deleteMany();

		console.log('Data destroyed');
		process.exit();
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

// importProducts();
// deleteProducts();

switch (process.argv[2]) {
	case '-d': {
		deleteProducts();
		break;
	}
	default: {
		importProducts();
	}
}
