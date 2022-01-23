<template>
  <div class="email-block">
    <span>E-mail</span>
    <div :class="['email-block__field', (err ? 'field-error': '')]">
      <input type="text" v-model="txt" placeholder="E-mail"/>
    </div>
    <span :class="['error', (err === 'Error message here'  ? 'error-active':'')] ">{{ err }}</span>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      txt: '',
      err: ''
    }
  },
  watch: {
    txt: function () {
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    this.debouncedGetAnswer = this.$_.debounce(this.validateEmail, 500)
  },
  methods: {
    validateEmail: function () {
      let check = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.txt)
      if (check) {
        this.err = '';
        this.$emit('getEmail', this.txt)
      }
      else if (this.txt.length === 0) {
        this.err = ''
      } else {
        this.$emit('checkErrors')
        this.err = 'Error message here';
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.email-block {
  .error-active {
    opacity: 0;
  }
  span{
    display: block;
    width: 100%;
    text-align: left;
    &:first-child {
      margin-bottom: 5px;
      font-size: 12px;
    }
    &:last-child {
      color: #B96669;
      font-size: 12px;
      margin-top: 5px;
      font-weight: bold;
      opacity: 1;
      height: 16px;
    }
  }
  .field-error {
    -webkit-box-shadow: 0px 0px 3px 2px rgba(227, 114, 129, 1);
    -moz-box-shadow: 0px 0px 3px 2px rgba(227, 114, 129, 1);
    box-shadow: 0px 0px 3px 2px rgba(227, 114, 129, 1);
    background-color: #ffff;
  }
  &__field {
    height: 40px;
    border-radius: 6px;
    background-color: #E8ECF5;
    padding: 0 20px;
    input {
      display: block;
      outline: none;
      font-size: 16px;
      margin: 0;
      padding: 0;
      border: 0;
      width: 100%;
      height: 100%;
      background: none;
    }

  }

}
</style>