//Controllers
import teacher from '../models/teacher';

export const resolvers = {
  Query: {
    async teachers() {
      return await teacher.find();
    },
    async geTeacher(_, {_id}) {
      return await teacher.findById(id);
    }
  },
  Mutation: {
    async createTeacher(_, {input}) {
      return await teacher.create(input);
    },
    async updateTeacher(_, {_id, input}) {
      return await teacher.findByIdAndUpdate(_id, input, {new: true});
    },
    async updateTeacher(_, {_id}) {
      return await teacher.findByIdAndDelete(_id);
    }
  }
};
