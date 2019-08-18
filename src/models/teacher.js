import mongoose from 'mongoose';

const teacherSchema = mongoose.Schema({
  name: String,
  surnames: String,
  number: String,
  school: [String],
  orders: [{
    name: String,
    quantity: Number,
    unit_price: Number,
    total_price: Number,
    delvered: Boolean,
    paid_out: Boolean,
    paid: [{
      date: Date,
      quantity: Number
    }]
  }]
});

const teacher = mongoose.model('teachers', teacherSchema);

export default teacher;
