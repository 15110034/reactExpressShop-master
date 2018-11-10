const OrdersModel = require('../models/ordersModel.js');

/**
 * ordersController.js
 *
 * @description :: Server-side logic for managing orderss.
 */
module.exports = {
  /**
   * ordersController.list()
   */
  list(req, res) {
    OrdersModel.find((err, orderss) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting orders.',
          error: err,
        });
      }
      return res.json(orderss);
    });
  },

  /**
   * ordersController.show()
   */
  show(req, res) {
    const { id } = req.params;
    OrdersModel.findOne({ _id: id }, (err, orders) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting orders.',
          error: err,
        });
      }
      if (!orders) {
        return res.status(404).json({
          message: 'No such orders',
        });
      }
      return res.json(orders);
    });
  },

  /**
   * ordersController.create()
   */
  create(req, res) {
    const orders = new OrdersModel({
      code: req.body.code,
      createdate: req.body.createdate,
      status: req.body.status,
      price: req.body.price,
      user: req.body.user,
      products: req.body.products,
    });

    orders.save((err, ordersData) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating orders',
          error: err,
        });
      }
      return res.status(201).json(ordersData);
    });
  },

  /**
   * ordersController.update()
   */
  update(req, res) {
    const { id } = req.params;
    OrdersModel.findOne({ _id: id }, (err, orders) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting orders',
          error: err,
        });
      }
      if (!orders) {
        return res.status(404).json({
          message: 'No such orders',
        });
      }

      orders.code = req.body.code ? req.body.code : orders.code;
      orders.createdate = req.body.createdate ? req.body.createdate : orders.createdate;
      orders.status = req.body.status ? req.body.status : orders.status;
      orders.price = req.body.price ? req.body.price : orders.price;
      orders.user = req.body.user ? req.body.user : orders.user;
      orders.products = req.body.products ? req.body.products : orders.products;

      orders.save((errOrder, ordersData) => {
        if (errOrder) {
          return res.status(500).json({
            message: 'Error when updating orders.',
            error: errOrder,
          });
        }

        return res.json(ordersData);
      });
    });
  },

  /**
   * ordersController.remove()
   */
  remove(req, res) {
    const { id } = req.params;
    OrdersModel.findByIdAndRemove(id, (err) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the ordersData.',
          error: err,
        });
      }
      return res.status(204).json();
    });
  },
};
