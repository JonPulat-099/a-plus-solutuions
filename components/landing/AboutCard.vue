<template>
  <div class="w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6" v-bind="$attrs">
    <div class="flex flex-col">
      <div class="grid place-items-center g-screen -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="w-32 h-32 m-4 px-2 sm:px-6 py-2 flex items-center rounded-full border-4 border-slate-50 custom__card">
          <img class="w-28 h-28 object-contain" :src="img" alt="Sunset in the mountains">
        </div>
        <div class="px-6 py-4">
          <p class="text-center text-xl text-base">
            {{ title }} <span class="font-bold text-[#697DAC]"> {{ subtitle }} </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutCard',
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>
<style>
  .custom__card {
    background: #D2E4FD;
  }
</style>
