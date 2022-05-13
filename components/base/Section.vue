<template>
  <div class="relative grid overflow-hidden mt-24 pt-8" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseSection',
}
</script>
