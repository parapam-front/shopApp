<template>
  <article class="catalog-item">
    <figure class="catalog-item__figure">
      <img class="catalog-item__image" :src="product.image" :alt="product.name + 'image'">
      <figcaption class="catalog-item__description">
        {{product.description}}
      </figcaption>
    </figure>
    <span class="catalog-item__in-stock">{{product.in_stock ? 'В наличии' : 'Нет в наличии'}}</span>
    <div class="catalog-item__price-container">
      <strong class="catalog-item__price">
        {{priceWithSpaces}}₽
      </strong>
      <s>1 134 500 ₽</s>
    </div>
    <button @click="addToCart()" class="catalog-item__button">купить</button>
  </article>
</template>

<script>
  export default {
    props: {
      product: Object,
      cart: Array
    },
    computed: {
      priceWithSpaces() {
        return this.product.price.toString().split('').reverse().map((item, index) => index % 3 === 0 ? item + '  ' : item).reverse().join('')
      }
    },
    methods: {
      addToCart() {
        const flag = this.cart.filter(item => item.id === this.product.id)
        if (!flag.length) {
          this.$store.commit('ADD_TO_CART', {
            id: this.product.id,
            name: this.product.name,
            price: this.priceWithSpaces,
            trimPrice: this.product.price,
            description: this.product.description,
            count: 1
          })
        }
      }
    }
  }
</script>
