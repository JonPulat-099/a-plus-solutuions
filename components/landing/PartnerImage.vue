<template>
  <div>
    <img :src="`/images/experience/${img}`" class="sm:w-1/2 lg:w-72 m-4" alt="" />
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
  display: flex;
  justify-content: center;
  flex-basis: 20%;
  min-width: 150px;
}
img {
  max-height: 70px;
  object-fit: contain;
}
</style>
