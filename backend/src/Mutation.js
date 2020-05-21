const Mutation = {
  async createItem(parent, args, ctx, info) {
    //TO DO: check if user logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: { ...args },
      },
      info
    );
    return item;
  },
};
module.exports = Mutation;
