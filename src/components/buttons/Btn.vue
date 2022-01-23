<template>
  <button
         @click="$emit('clicked')"
         :disabled="isDisabled"
         :style="{
          width: `${width}`,
          color: txtColor,
          background: fillColor,
        }">{{txt}}</button>
</template>
<script>
export default {
  props: {
    txt: {
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false
    },
    txtColor: {
      type: String,
      required: false,
    },
    fillColor: {
      type: String,
      required: false,
    },
    isDisabled: {
      type: Boolean,
      required: false,
    }
  }
}
</script>
<style lang="scss" scoped>

button {
  &:disabled {
    background-color: gray;
    color: #ffff;
    cursor: not-allowed;
    pointer-events: all !important;
  }
  border-radius: 30px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0;

  &:hover {
    color: rgba(208, 204, 204, 0.92) !important;
  }
}
</style>