import { createStore } from 'vuex'

export default createStore({
  namespaced: true,
  state: {
    cartList: []
  },
  getters: {
    cartLength(state) {
      return state.cartList.length;
    },
    cartList(state) {
      return state.cartList
    }
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        //1.查找之前数组中是否有该商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
        //2.判断oldProduct
        if (oldProduct) {
          context.commit('addCounter', oldProduct)
          resolve('当前商品数量+1')
        } else {
          payload.count = 1
          context.commit('addToCart', payload)
          resolve('添加了新的商品')
        }
      })
    }
  },
  modules: {}
})