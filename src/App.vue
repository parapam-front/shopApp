<template>
  <div id="app">
    <Header
      :cart="CART"
    />
    <main class="wrapper">
      <h1 class="title">Слуховые аппараты</h1>
      <section class="catalog">
        <CatalogItem
          v-for="item in PRODUCTS"
          :key="item.id"
          :product="item"
          :cart="CART"
        />
      </section>
      <button class="show-more__button">показать ещё</button>
    </main>
    <Popup
      :cart="CART"
      :popupShow="POPUPSHOW"
    />
  </div>
</template>

<script>
  import CatalogItem from './components/CatalogItem/CatalogItem.vue';
  import Header from './components/Header/Header.vue';
  import Popup from './components/Popup/Popup.vue'
  import {mapActions, mapGetters} from 'vuex';

  export default {
    components: {
      CatalogItem,
      Header,
      Popup
    },
    data() {
      return {
        lol: this.$store.getters.PRODUCTS
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
        'POPUPSHOW'
      ])
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API'
      ])
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
    }
  }
</script>
