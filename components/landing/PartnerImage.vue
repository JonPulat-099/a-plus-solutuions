<template>
  <div>
    <img :src="`/images/experience/${img}`" class="sm:w-1/2 lg:w-72 mx-3 my-4" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
img {
  max-height: 80px;
  object-fit: contain;
}
</style>
