import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    popupShow: false
  },
  mutations: {
    ADD_TO_CART: (state, product) => {
      state.cart.push(product)
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    COUNTER: (state, counterData) => {
      state.cart[counterData.index].count += counterData.value
    },
    POPUPSHOW: (state, popupShow) => {
      state.popupShow = popupShow
    },
    DELETECARTITEM: (state, deleteIndex) => {
      state.cart.splice(deleteIndex, 1)
    },
    CLEARCART: (state) => {
      state.cart = []
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('https://xn--b1adsenbbojhpy.xn--p1ai/api/product/?cityId=1', {
        method: "GET"
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data.results)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
    POPUPSHOW(state) {
      return state.popupShow
    }
  }
})
