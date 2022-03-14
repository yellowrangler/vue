export default {
  requests(state, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  }
}