<template>
  <Modal :headerTitle="'Регистрация'">
    <template v-slot:body>
      <div class="wrapper">
        <div class="content">
          <form action="">
          <InputEmail
              @getEmail="email"
          />
          <InputField
              :name="'Пароль'"
              :inputType="'password'"
              :placeHolder="'Пароль'"
              @valueFromField="getPassword"
              @checkErrors="getPassword"
          />
          <InputField
              :name="'Имя Фамилия'"
              :inputType="'text'"
              :placeHolder="'Имя Фамилия'"
              @valueFromField="getName"
              @checkErrors="getName"
          />
          <InputField
              :name="'Телефон'"
              :inputType="'text'"
              :placeHolder="'Телефон'"
              @valueFromField="getPhone"
              @checkErrors="getPhone"
          />
          <Btn
              :isDisabled="emailVal.length ===0 || password.length ===0 || nameVal.length === 0 || phone.length === 0"
              :txt="'Создать аккаунт'"
              :width="'100%'"
              :txtColor="'#ffff'"
              :fill-color="'#8455D7'"
              @clicked="signUp"
              @checkErrors="signUp"
          />
          </form>
          <span class="info">Нажимая на "Создать аккаунт", вы соглашаетесь с <a href="">Политикой обработки данных</a></span>

        </div>
      </div>
    </template>
  </Modal>
</template>
<script>
import Modal from "../Modal/Modal.vue"
import InputEmail from "../inputs/InputEmail";
import InputField from "../inputs/InputField";
import Btn from "../buttons/Btn"
import API from "../../axios"
export default  {
  name: 'SignUp',
  data: function (){
    return {
      emailVal: '',
      password: '',
      nameVal: '',
      phone: ''

    }
  },
  components: {
    Modal,
    InputEmail,
    InputField,
    Btn
  },
  methods: {
    signUp: async function (){
      var self = this
      try {
        let req = await API.API.post(
            'auth/register', {
              name: self.nameVal,
              phone: self.phone,
              email: self.emailVal,
              password: self.password
            }
        )
        if(req.data.success){
          await this.$router.push('/')
        }
      }catch (e){
        console.log("register error", e)
      }
    },
    email: function (v){
      this.emailVal = v
    },
    getPassword: function (v){
      this.password = v
    },
    getName: function (v){
      this.nameVal = v
    },
    getPhone: function (v){
      this.phone = v
    }
  }
}
</script>
<style lang="scss" scoped>
.info {
  display: block;
  padding: 0 0 30px 0;
}
</style>