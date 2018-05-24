<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{count}}</h3>
<button @click="add">+</button>
<button @click="reduce">-</button>
    </div>
</template>

<script>
import store from '@/vuex/store' 
import { mapState ,mapMutations,mapGetters} from 'vuex'
console.log(mapState)
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{...mapGetters(['count'])},
  methods:mapMutations(['add','reduce']),
  store
}
</script>

<style scoped>

</style>