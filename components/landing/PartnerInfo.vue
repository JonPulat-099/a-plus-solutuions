<template>
  <div class="mb-10">
    <img :src="`/images/partner/${partner.img}`" alt="" />
    <p> {{ partner.text }} </p>
    <div class="w-full flex flex-row flex-wrap place-items-center g-screen rounded-lg">
      <!-- <div
        v-for="(s, i) in partner.advantages"
        :key="i"
        class="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:w-1/1"
      >
        <p class="w-full text-center"> {{ s }} </p>
      </div> -->

      <ul class="mt-5">
        <li v-for="(s,i) in partner.advantages" :key="i">&#9830; {{ s }} </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "PartnerInfo",
  props: {
    partner: {
      type: Object,
      default: null
    }
  }
}
</script>
<style scoped>
img {
  max-width: 240px;
  margin: 0 auto;
}

.blocks{
  background: #E7E7E9;
  margin: 20px 0;
}
</style>
