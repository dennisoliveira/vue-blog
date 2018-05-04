<template>
  <div>Logout</div>
</template>

<script>
  import Auth from './auth'
  export default {
    name: 'logout',
    data () {
      return {

      }
    },
    created: function () {
      Auth.logout()
      //console.log(Auth.getLogin())
      this.$router.push('home')
      Materialize.toast('Logout realizado com sucesso', 3000)
    }
    
  }
</script>

<style>

</style>


