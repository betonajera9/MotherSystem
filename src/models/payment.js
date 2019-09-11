import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const paymentModel = mongoose.Schema({
  amount: Number,
  date: String,
});

const payments = mongoose.model('payments', paymentModel);

export default payments;
