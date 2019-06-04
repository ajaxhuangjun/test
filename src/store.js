import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
    state: {
        count:1,
    },
    getters:{
        getStateCount(state){
            return state.count+1;
        },
    },

    mutations: {
        add(state,n){
            state.count= state.count+n;
        },
        reduction(state){
            state.count= state.count-1;
        }
    },
    actions: {
        addFun(context,n){
            context.commit("add",n);
        },
        reductionFun(context){
            context.commit("reduction");
        }
    }
});
export default store
