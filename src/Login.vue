<template>
  <div>
    <form action="" class="col s12">

      <div class="row">

        <div class="input-field col s12">
          <i class="material-icons prefix">account_circle</i>
          <input type="text" id="login" v-model="user.login">
          <label for="login">Login</label>
          <!--<div>
            <span class="chip red lighten-5 right" 
              v-if="$validateForm.login.required">
              Campo requirido
            </span>
            <span class="chip red lighten-5 right" 
              v-if="$validateForm.login.minlength">
              Mínimo 4 caracteres
            </span>
          </div>-->
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">vpn_key</i>
          <input type="text" id="password" v-model="user.password">
          <label for="password">Password</label>
          <!--<div>
            <span class="chip red lighten-5 right" 
              v-if="$validateForm.login.required">
              Campo requirido
            </span>
            <span class="chip red lighten-5 right" 
              v-if="$validateForm.login.minlength">
              Mínimo 4 caracteres
            </span>
          </div>-->
        </div>

        <div class="input-field col s12" v-if="user.isNew">
          <i class="material-icons prefix">chevron_right</i>
          <input type="text" id="name" v-model="user.name">
          <label for="name">Your name</label>
        </div>

        <div class="col s12">
          <input type="checkbox" id="createaccount" v-model="user.isNew">
          <label for="createaccount">Create account?</label>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          name: '',
          password: '',
          login: '',
          isNew: false
        }
      }
    }
  }
</script>

<style scoped>
  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: static;
    opacity: 1;
    pointer-events: auto;
  }
  [type="checkbox"]+label:before,
  [type="checkbox"]:not(.filled-in)+label:after {
    content: initial;
  }
</style>


