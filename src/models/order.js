import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderModel = mongoose.Schema({
  name: String,
  quantity: Number,
  unit_price: Number,
  total_price: Number,
  delvered: Boolean,
  paid_out: Boolean,
  payments: [{ type: Schema.Types.ObjectId, ref: 'payments' }],
});

const orders = mongoose.model('orders', orderModel);

export default orders;
