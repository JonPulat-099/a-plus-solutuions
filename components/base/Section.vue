<template>
  <div class="relative sm:px-8 grid overflow-hidden" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseSection',
}
</script>
