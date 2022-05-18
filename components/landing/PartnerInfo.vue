<template>
  <div class="mb-15" style="margin: 0 0 80px 0">
    <img :src="`/images/partner/${partner.img}`" :class="partner.img.includes('abc') ? 'base__height' : ''" alt="" />
    <p class="text-[18px] mt-6"> {{ partner.text }} </p>
    <div class="w-full flex flex-row flex-wrap place-items-center g-screen rounded-lg">
      <ul class="mt-5 blocks">
        <li v-for="(s,i) in partner.advantages" :key="i" class="text-[18px]">
           <img src="/images/diamond-symbol.png" alt="">
           {{ s }} </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "LandingPartnerInfo",
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
  max-width: 290px;
  height: 45px !important;
}

.base__height {
  max-height: 40px !important;
}

.blocks{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4;
}

.blocks li {
  flex: 1 1 auto;
  margin: 10px;
  display: flex;
  align-items: center;
}

.blocks li img {
  width: 16px !important;
  height: 16px !important;
  margin: 0 5px 0 0;
}
</style>
