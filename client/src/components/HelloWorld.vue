<template>
  <div>
    <h1>Random Users</h1>
    <hr>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h1>Lista Vue JS</h1>
                <ul class="list-group">
                  <li v-for="item in lists" class="list-group-item">
                    {{ item.name.first }} {{ item.name.last }}
                  </li>
                </ul>
            </div>

            <div class="col-md-8">
                <h1>JSON</h1>
                <pre>
                    {{ $data | json  }}
                </pre>
            </div>
        </div>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
var urlUsers = 'https://randomuser.me/api/?results=10'

export default {
  name: 'HelloWorld',
  data () {
    return {
      lists: []
    }
  },
  created() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      axios.get(urlUsers)
        .then(res => {
          this.lists = res.data.results
        })
    }
  }
}
</script>
