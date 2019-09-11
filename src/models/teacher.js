import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const teacherModel = mongoose.Schema({
  name: String,
  number: String,
  school: [String],
  grade: [String],
  orders: [{ type: Schema.Types.ObjectId, ref: 'orders' }],
});

const teachers = mongoose.model('teachers', teacherModel);

export default teachers;
