<template>
  <div class="input-field-block">
    <span>{{ name }}</span>
    <div :class="['input-field-block__field', (err ? 'field-error': '')]">
      <input :type="inputType" :placeholder="placeHolder" v-model="txt" autocomplete="off"/>
    </div>
    <span :class="['error', (err === 'Error message here'  ? 'error-active':'')] ">{{ err }}</span>
  </div>

</template>
<script>
export default  {
  props: {
    name: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    placeHolder: {
      type: String,
      required: false
    },

  },
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
    this.debouncedGetAnswer = this.$_.debounce(this.validateField, 500)
  },
  methods: {
    validateField: function () {
      if (this.txt.length === 0) {
        this.err = 'поле не может быть пустым'
        this.$emit('checkErrors', this.txt)
      } else {
        this.$emit('valueFromField', this.txt)
        this.err = '';
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.input-field-block {
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
      border: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: none;
    }

  }

}
</style>