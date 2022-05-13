<template>
  <div class="relative grid overflow-hidden" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseSection',
}
</script>
