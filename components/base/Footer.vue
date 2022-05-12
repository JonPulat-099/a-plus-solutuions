<template>
  <footer id="contacts" class="max-w-screen-xl px-8 mx-auto">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="w-full flex flex-wrap">
        <div
          class="w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r border-[#DDDDDD]"
        >
          <div class="sm:hidden xl:block mb-6 sm:mb-0">
            <a href="#">
              <img :src="require('~/assets/img/logo/logo.svg')" class="w-24 -mt-2" alt="Nefa Logo" />
            </a>
          </div>
          <ul class="space-y-4">
            <NavLink name="Наши преимущества" url="#why_us" />
            <NavLink name="Услуги" url="#our_services" />
          </ul>
        </div>
        <div
          class="w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <NavLink name="Партнеры" url="#partners" />
            <NavLink name="Контакты" url="#contacts" />
          </ul>
        </div>
        <div
          class="sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[26rem] space-y-4 border-t sm:border-t-0 border-[#DDDDDD]"
        >
          <h5 class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Contacts</h5>
          <p>100070 Ташкент, Узбекистан, Яккасарайский район, улица Глинки - 4</p>
          <p>Телефон: +998 71 111-11-11</p>
        </div>
      </div>
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
      &copy; Copyright 2022 A+ Solutions. All rights reserved
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
}
</script>
