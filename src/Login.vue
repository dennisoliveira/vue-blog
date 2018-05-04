<template>
  <div>

    <div class="progress" v-show="showProgress">
      <div class="indeterminate"></div>
    </div>

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
          <input type="password" id="password" v-model="user.password">
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
          <input type="checkbox" id="createaccount" class="filled-in" 
            v-model="user.isNew">
          <label for="createaccount">Create account?</label>
        </div>

        <div class="input-field col s12">
          <button 
            class="waves-effect waves-light btn right"
            @click="doLogin">
            Enviar
          </button>
        </div>

      </div>

    </form>

  </div>
</template>

<script>

  import Auth from './auth'

  export default {
    name: 'login',
    data () {
      return {
        user: {
          name: '',
          password: '',
          login: '',
          isNew: false
        },
        showProgress: false
      }
    }, 
    methods: {
      doLogin: function(event) {
        event.preventDefault()

        this.showProgress = true

        this.$http.post('/api/login', this.user)
        .then(function (response) {

          this.showProgress = false
          Auth.setLogin(response.data)
          this.$router.push('home')
          Materialize.toast('Login realizado com sucesso!', 3000)

        }, function(error) {

          this.showProgress = false
          Materialize.toast('Error: ' + error.data, 3000)

        })

      }
    }
  }
</script>

<style scoped>
  /* Bugfix para checkbox no windows 7 */
  /*[type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: static;
    opacity: 1;
    pointer-events: auto;
  }
  [type="checkbox"]+label:before,
  [type="checkbox"]:not(.filled-in)+label:after {
    content: initial;
  }*/
</style>


