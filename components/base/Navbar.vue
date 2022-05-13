<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="w-full flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
        <div class="relative w-full flex flex-row items-center justify-between py-6">
          <div>
            <img
              :src="require('~/assets/img/logo/logo.svg')"
              class="w-32 xl:w-44 cursor-pointer"
              alt="A+ Solutions Logo"
              @click="goToMain"
            />
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <NavLink v-smooth-scroll :name="$t('nav.adventages')" url="#why_us" />
          <NavLink v-smooth-scroll :name="$t('nav.services')" url="#our_services" />
          <NavLink v-smooth-scroll :name="$t('nav.partners')" url="#partners" />
          <NavLink v-smooth-scroll :name="$t('nav.contacts')" url="#contacts" />
          <li class="relative group">
            <button
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
              @click="dropdownNavbar = !dropdownNavbar"
            >
              <span> {{ langs[$i18n.locale] }} </span>
              <ChevronUpIcon v-if="dropdownNavbar" :size="16" />
              <ChevronDownIcon v-else :size="16" />
            </button>
            <transition name="transform-fade-down">
              <ul
                v-if="dropdownNavbar"
                class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
              >
                <li>
                  <a
                    href="javascript:void(0)"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    @click="changeLocale('ru')"
                    >Русский</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    @click="changeLocale('en')"
                    >English</a
                  >
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      dropdownNavbar: false,
      langs: {
        en: 'English',
        ru: 'Русский',
      },
    }
  },

  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang
      this.$router.push(this.switchLocalePath(lang))
    },

    goToMain() {
      this.$router.push('/');
      $('html, body').stop().animate({
          'scrollTop': 0
      }, 300, 'swing');
    }
  },
}
</script>
<style>

#navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
.sticky {
  background: #f8f8f8;
  padding: 0 !important;
  -webkit-box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sticky .flex {
  padding: 5px 30px;
}

.sticky .relative.w-full.flex {
  width: 80vw;
  padding: 5px auto;
  justify-content: space-between;
}

.sticky .relative.w-full.flex img {
  width: 9rem;
}
</style>
