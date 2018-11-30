<template>
  <div>
    <h1>Items</h1>
    <hr>
    <div class="container">
        {{ msg }}
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
var urlItems = 'http://localhost:8081/items'

export default {
  name: 'Items',
  data () {
    return {
      msg: {}
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems() {
      axios.get(urlItems)
        .then(res => {
          this.msg = res.data
        })
    }
  }
}
</script>
