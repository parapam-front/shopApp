<template>
  <div class="mask" v-show="popupShow">
    <section class="popup">
      <header class="popup__header">
        <div class="popup__title-container">
          <h3 class="popup__title">Ваша корзина</h3>
          <button @click="clearCart()" class="popup__clear">очистить</button>
        </div>
        <button class="popup__close-button" @click="closePopup()">
          <span class="popup__close-span"></span>
          <span class="popup__close-span popup__close-span_perpendicular"></span>
        </button>
      </header>
      <section class="popup__products-container">
        <CartItem
          v-for="(cartItem, index) in cart"
          :key="'cartItem' + cartItem.id"
          :product="cartItem"
          :index="index"
        />
      </section>
      <div class="popup__button-container">
        <div class="popup__sum-container">
          <span class="popup__sum-products">{{sumProducts}} товаров</span>
          <strong class="popup__sum-price">{{sumPrice}} ₽</strong>
        </div>
        <button class="popup__button">оформить заказ</button>
      </div>
    </section>
  </div>
</template>

<script>
  import CartItem from './CartItem/CartItem.vue'

  export default {
    props: {
      cart: Array,
      popupShow: Boolean
    },
    components: {
      CartItem
    },
    computed: {
      sumProducts() {
        const amount = this.cart.reduce((sum, obj) => {
          return sum + obj.count
        }, 0)
        return amount
      },
      sumPrice() {
        const price = this.cart.reduce((sum, obj) => {
          return sum + obj.count * obj.trimPrice
        }, 0)
        return price
      }
    },
    methods: {
      clearCart() {
        this.$store.commit('CLEARCART')
      },
      closePopup() {
        this.$store.commit('POPUPSHOW', false)
      }
    }
  }
</script>
