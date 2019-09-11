//Controllers
import teachers from '../models/teacher';
import payments from '../models/payment';
import orders from '../models/order';

export const resolvers = {
  Query: {
    async getTeachers() {
      return await teachers.find();
    },

    async getTeacher(_, { name, grade }) {
      if (grade == undefined) {
        return await teachers.find({ name: name });
      }else {
        return await teachers.find({ name: name, grade: grade });
      }
    },

  },
  Mutation: {
    async createTeacher(_, { input }) {
      return await teachers.create(input);
    },

    async updateTeacher(_, { _id, input }) {
      return await teachers.findByIdAndUpdate(_id, input, { new: true });
    },

    async updateTeacher(_, { _id }) {
      return await teachers.findByIdAndDelete(_id);
    },

    async createOrder(_, { input }) {
      return await teachers.create(input);
    },

    async updateOrder(_, { _id, input }) {
      return await teachers.findByIdAndUpdate(_id, input, { new: true });
    },

    async updateOrder(_, { _id }) {
      return await teachers.findByIdAndDelete(_id);
    },

    async createPayment(_, { input }) {
      return await teachers.create(input);
    },

    async updatePayment(_, { _id, input }) {
      return await teachers.findByIdAndUpdate(_id, input, { new: true });
    },

    async updatePayment(_, { _id }) {
      return await teachers.findByIdAndDelete(_id);
    },
  },
};
