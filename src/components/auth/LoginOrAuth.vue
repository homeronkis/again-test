<template>
  <div class="login">
    <Modal :headerTitle="'Вход или Регистрация'">
      <template v-slot:body>
        <div class="wrapper">
          <div class="content">
            <form action="">
            <InputEmail
                @getEmail="email"
                @checkErrors="validationError"
            />

            <InputField
                v-if="showPasswordField"
                @valueFromField="getPassword"
                :name="'Пароль'"
                :inputType="'Password'"
                :placeHolder="'Пароль'"
            />
            </form>
            <Btn
                v-if="showPasswordField"
                :isDisabled="isDisabled"
                :txt="'Войти'"
                :width="'100%'"
                :txtColor="'#ffff'"
                :fill-color="'#8455D7'"
                @clicked="sign"
            />
            <Btn
                v-if="!showPasswordField"
                :isDisabled="isDisabled"
                :txt="'Продолжить'"
                :width="'100%'"
                :txtColor="'#ffff'"
                :fill-color="'#8455D7'"
                @clicked="checkEmailFromServer"
            />

            <span class="gray-txt">Или</span>
            <div class="list-socials">
              <ul>
                <li>G</li>
                <li>A</li>
                <li>VK</li>
                <li>F</li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "../Modal/Modal.vue"
import InputEmail from "../inputs/InputEmail.vue";
import Btn from "../buttons/Btn.vue"
import API from "../../axios"
import InputField from "../inputs/InputField";
export default {
  name: 'loginOrAuth',
  data: function () {
    return {
      emailTxt: '',
      isDisabled: true,
      showPasswordField: false,
      currentPassword: ''
    }
  },
  props: {
    msg: String
  },
  components: {
    Modal,
    InputEmail,
    Btn,
    InputField
  },
  methods: {
    email: function (val) {
      this.isDisabled = false
      this.emailTxt = val
    },
    getPassword: function (val){
      this.currentPassword = val
    },
    sign: async function (){
      var self = this
      try {
        let req = await API.API.post('auth/login', {email: self.emailTxt, password: self.currentPassword})
        console.log(req, "its req sign")
        if(req.data.token){
          window.localStorage.setItem('token', req.data.token)
          await this.$router.push('/Success')
        }
      }catch (e){
        console.log(e, "EEEEEEE")
      }
    },
    checkEmailFromServer: async function () {
      var self = this
      try {
        let req =  await API.API.post('auth/check-email', {email: self.emailTxt})
        if(req.data.exists !== 0){
          console.log("yeah user is ready show password field")
          this.showPasswordField = true
        }else {
          console.log("move to register")
          await self.$router.push('/signUp')
        }
      }catch (e){
        console.log(e, "error cheking email")
      }
    },
    validationError: function () {
      this.isDisabled = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-socials {
  padding: 0 30px 20px 30px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      display: flex;
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      justify-content: center;
      border: 1px solid rgba(208, 204, 204, 0.82);
      border-radius: 50%;
      align-items: center;
    }
  }
}

.gray-txt {
  color: rgba(164, 162, 162, 0.7);
}

//.wrapper {
//  background-color: #ffff;
//  //border-radius: 12px;
//  width: 500px;
//  margin: 0 auto;
//  padding-top: 20px;
//
//  .content {
//    width: 400px;
//    margin: 0 auto;
//  }
//
//  border-bottom-right-radius: 16px;
//  border-bottom-left-radius: 16px;
//}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
