export default{
    requests(state, _getters, _rootState, rootGetter){
        const coachId = rootGetter.userId
        return state.requests.filter(req => req.coachId === coachId);
    },
    hasRequests(_state, getters) {
        return getters.requests && getters.requests.length > 0;
    }

}