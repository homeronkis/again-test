<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <div class="header-content">
              <span>{{headerTitle}}</span>
              <span class="x-close">x</span>
            </div>
          </div>
          <div class="modal-body">
            <slot name="body">

            </slot>
          </div>

          <span></span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    headerTitle: {
      type: String,
      required: false
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .wrapper {
  background-color: #ffff;
  //border-radius: 12px;
  width: 500px;
  margin: 0 auto;
  padding-top: 20px;

  .content {
    width: 400px;
    margin: 0 auto;
  }

  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  left: 0;
  margin: 0px auto;
  //box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header {
  position: relative;
  background-color: #ffff;
  width: 500px;
  margin: 0 auto;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.25);
  .header-content {
    width: 400px;
    margin: 0 auto;

    span {
      &:first-child {
        font-size: 20px;
        font-weight: bold;
        display: block;
        width: 100%;
        text-align: left;
      }

      &:last-child {
        position: absolute;
        font-size: 20px;
        right: 25px;
        top: 15px;
      }
    }
  }

}
.modal-body {
  //margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>