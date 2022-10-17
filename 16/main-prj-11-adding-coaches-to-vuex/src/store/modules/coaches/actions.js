export default {
  registerACoach(context, data) {
    const oneCoachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    context.commit('registerCoach', oneCoachData);
  }
};