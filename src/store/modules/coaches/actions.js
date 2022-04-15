import axios from "axios"
export default {
    registerCoach(context,  data){
        const coachData = {
            id: context.rootGetters.userId,
            firstName : data.first,
            lastName: data.last,
            description : data.desc,
            hourlyRate: data.rate,
            areas : data.areas
        }

        axios.get('https://find-a-coach-b2e1f-default-rtdb.firebaseio.com/')
 
        context.commit('registerCoach', coachData)
    }
}