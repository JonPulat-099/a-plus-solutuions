<template>
  <div>
    <img :src="`/images/experience/${img}`" class="sm:w-1/2 lg:w-72 mx-3 my-4" alt="" />
  </div>
</template>
<script>
export default {
  name: "LandingPartnerImage",
  props: {
    img: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
div {
  flex-basis: 22%;
  min-width: 250px;
}
img {
  max-height: 80px;
  object-fit: contain;
}
</style>
