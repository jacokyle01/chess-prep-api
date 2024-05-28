import { DEPTH, NEXT } from "../enums/training.js";

export const resolvers = {
  Query: {
    getTrainingConfig: () => {
      // Mock data - in a real scenario, you would fetch this from a database or other source
      return {
        buckets: [5, 10, 15],
        getNext: {
          by: DEPTH,
          max: 10,
        },
        demotion: NEXT,
        promotion: NEXT,
        index: 1,
      };
    },
  },
};