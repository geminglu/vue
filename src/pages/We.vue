<template>
  <div id="InOrderToLogIn">
    <notLogIn/>
    <InOrderToLogIn/>
    <!-- <publish/> -->
  </div>
</template>

<script>
import notLogIn from '@/components/notLogIn.vue'
import InOrderToLogIn from '@/components/InOrderToLogIn.vue'
import publish from '@/components/publish.vue'
export default {
  name: 'We',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  components: {notLogIn,publish,InOrderToLogIn}
}
</script>

<style scoped>

</style>