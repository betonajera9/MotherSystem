import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/MotherSystem', {
        useNewUrlParser: true
      });
    console.log('=> DB is connected');
  }
  catch {
    console.log('Somethign goes wrong!');
  }
};
