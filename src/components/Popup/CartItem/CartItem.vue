<template>
  <section class="cart-item" @mouseover="showPrice = false" @mouseout="showPrice = true">
    <p class="cart-item__description">{{product.description}}</p>
    <div class="cart-item__counter-container">
      <button @click="counter($event, 1)" class="cart-item__counter-button cart-item__counter-button_up">
        <svg class="cart-item__counter-svg" width="12" height="8" viewBox="0 0 12 8" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"/>
        </svg>
      </button>
      <span class="cart-item__counter-value">{{product.count}} шт</span>
      <button @click="counter($event, -1)" class="cart-item__counter-button">
        <svg class="cart-item__counter-svg" width="12" height="8" viewBox="0 0 12 8" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"/>
        </svg>
      </button>
    </div>
    <b v-if="showPrice" class="cart-item__price">{{product.price}}₽</b>
    <button @click="deleteItem()" v-else class="cart-item__delete">Удалить</button>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        showPrice: false
      }
    },
    props: {
      product: Object,
      index: Number
    },
    methods: {
      counter(e, i) {
        if ((this.product.count <= 1 && i === -1) || (this.product.count >= 99 && i === 1)) {
          return
        }
        this.$store.commit('COUNTER', {
          index: this.index,
          value: i
        })
      },
      deleteItem() {
        this.$store.commit('DELETECARTITEM', this.index)
      }
    }
  }
</script>
