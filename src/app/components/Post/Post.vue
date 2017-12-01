
<template>
  <transition name="fade">
  <div class="review">
    <div class="review__title">
      <div class="review__name">{{ post.name }}</div>
      <div class="review__date">{{post.date | formatDate}}</span></div>
    </div>
    <div class="review__bubble">
      {{ post.text }}
    </div>
  </div>
  </transition>
</template>



<script lang="babel">
import Vue from 'vue'

export default Vue.extend({
  name: 'post',
  props: ['post']
})
</script>

<style media="screen">
.review {
  margin-bottom: 24px;
}
.review__title {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.review__name {
  font-weight: 600;
  margin-right: 8px;
}
.review__date {
  font-size: 14px;
  color: rgba(0,0,0,0.5);
}
.review__bubble {
  position: relative;
  padding: 16px;
  background: #f2fbff;
  border: 1px solid rgba(0,0,0,0.25);
  box-shadow: 0 4px 12px -3px rgba(0,0,0,0.1);
  font-size: 16px;
  line-height: 1.4;
}
.review__bubble:before {
  content: '';
  position: absolute;
  left: 16px;
  top: -7px;
  width: 12px;
  height: 12px;
  transform: rotate(-45deg);
  background-color: #f2fbff;
  border-top: solid 1px rgba(0,0,0,0.25);
  border-right: solid 1px rgba(0,0,0,0.25);
}
</style>
