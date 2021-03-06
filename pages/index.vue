<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="a_plus_solutions" class="w-full pb-24 max-w-screen-xl mx-auto xl:mx-5">
      <BaseSection>
        <div class="w-full mt-12 6 text-center sm:text-left flex flex-col justify-center header__section">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[1.5rem] sm:text-3xl xl:text-3xl font-bold leading-tight capitalize mb-10 text-center text-[#1B778B]"
            style="word-spacing: 8px;"
          >
            {{ $t('header.first') }} <br />
            {{ $t('header.second') }} <br />
            {{ $t('header.third') }}
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph sm:block text-[18px]">
            {{ $t('header.text') }}
          </p>
        </div>
      </BaseSection>
    </section>

    <!-- Crypto statistic section -->
    <section
      class="team max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 bg-white transform lg:-translate-y-12"
    >
      <div class="w-full flex flex-col lg:flex-row">
        <LandingAboutCard
          data-aos="fade-up"
          :title="$t('header.command.simple')"
          :subtitle="$t('header.command.strong')"
          img="/images/about/team(1).png"
          class="lg:px-8 aos-animate text-[18px]"
        />
        <LandingAboutCard
          data-aos="fade-up"
          data-aos-delay="150"
          :title="$t('header.national.simple')"
          :subtitle="$t('header.national.strong')"
          img="/images/about/uzb1.png"
          class="lg:px-8 text-[18px]"
        />
        <LandingAboutCard
          data-aos="fade-up"
          data-aos-delay="300"
          :title="$t('header.international.simple')"
          :subtitle="$t('header.international.strong')"
          img="/images/about/goal.png"
          class="lg:px-8 text-[18px]"
        />
      </div>
    </section>

    <!-- Partners section -->
    <section class="base__container relative max-w-full sm:px-6 mt-14 mb-24 overflow-hidden bg-[#f8f8f8]">
      <div class="experience w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h2 data-aos="flip-down" class="text-2xl font-semibold text-[#1B778B] text-[30px] mb-12">
          {{ $t('exprience_project') }}
        </h2>
        <!-- <p data-aos="flip-down" class="paragraph">We're partners with countless major organisations around the globe</p> -->
        <div data-aos="fade-up" class="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center mt-6">
          <LandingPartnerImage
            v-for="img in experience"
            :key="img"
            data-aos="fade-up"
            data-aos-delay="300"
            :img="img"
          />
        </div>
      </div>
    </section>

    <!-- Getting started section -->
    <section id="why_us" class="base__container relative m sm:mx-4 xl:mx-10 mt-24 overflow-hidden">
      <div class="w-full py-18">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center text-[#1B778B] uppercase" style="word-spacing:6px;">
          {{ $t('why_us') }}
        </h2>
        <div data-aos="fade-up" class="px-4 xl:px-10 mt-16 sm:mt-8 why_us--items">
          <LandingStep v-for="step in steps" :key="step.title" :step="step" class="why_us--item" />
        </div>
      </div>
    </section>

    <section id="solutions" class="relative max-w-full mt-24 overflow-hidden">
      <div class="base__container py-20">
        <h2 data-aos="flip-down" class="text-2xl sm:text-3xl font-semibold text-center text-[#1B778B] mb-6">
          {{ $t('default_sitation.title') }}
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex items-stretch flex-col lg:flex-row justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8 mb-12"
        >
          <LandingWhyUsCard
            v-for="(d, i) in default_sitation"
            :key="i"
            :text="d.text"
            :img="d.img"
            :color="d.bg_color"
          />
        </div>
        <h2 data-aos="flip-down" class="text-2xl sm:text-3xl font-semibold text-center text-[#1B778B] mt-14 mb-6">
          {{ $t('solutions.title') }}
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex items-stretch flex-col lg:flex-row justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingWhyUsCard v-for="(s, i) in solutions" :key="i" :text="s.text" :img="s.img" :color="s.bg_color" />
        </div>
      </div>
    </section>

    <!-- Getting started section services -->
    <section id="our_services" class="base__container relative max-w-full sm:mx-4 xl:mx-10 my-18 overflow-hidden">
      <div class="w-full flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center mb-10 text-[#1B778B] mt-4">
          {{ $t('our_service.title') }}
        </h2>
        <p data-aos="fade-up" class="text-center mb-12 py-6 xl:w-2/3 text-[18px] sm:px-6">
          {{ $t('our_service.text') }}
        </p>
        <div data-aos="fade-up" class="w-full flex flex-row flex-wrap place-items-center items-stretch g-screen">
          <div
            v-for="(s, i) in services"
            :key="i"
            class="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:w-1/1 service mb-12"
            :class="i == 7 || i == 6 ? 'md:w-1/2 lg:w-1/2 ' : 'md:w-1/2 lg:w-1/3'"
          >
            <p class="w-full h-full rounded-lg font-semibold text-center" v-html="s"></p>
          </div>
        </div>
      </div>

      <nuxt-link class="learn__more" to="/services"> Learn more </nuxt-link>
    </section>

    <!-- Advanced trading tools section -->
    <section id="partners" class="relative max-w-full mb-10 overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto">
        <div data-aos="fade-right" class="px-4 sm:px-6">
          <h2 class="text-4xl font-semibold text-center mb-10 text-[#1B778B]">{{ $t('our_partners.header') }}</h2>
          <h3 class="text-[1.7rem] mb-6 font-bold">{{ $t('our_partners.business_consulting.header') }}</h3>
          <LandingPartnerInfo data-aos="fade-up" :partner="abc" />

          <h3 class="text-[1.7rem] mb-6 font-bold">{{ $t('our_partners.control_quality.header') }}</h3>
          <LandingPartnerInfo data-aos="fade-up" :partner="ataccama" />

          <h3 class="text-[1.7rem] mb-6 font-bold">{{ $t('our_partners.self_service.header') }}</h3>
          <LandingPartnerInfo data-aos="fade-up" :partner="alteryx" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  layout: "base",
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      steps: [
        {
          img: 'star.png',
          title: this.$t('best_practice.title'),
          description: this.$t('best_practice.text'),
        },
        {
          img: 'settings.png',
          title: this.$t('kompetension.title'),
          description: this.$t('kompetension.text'),
        },
        {
          img: 'briefcase.png',
          title: this.$t('efficiency.title'),
          description: this.$t('efficiency.text'),
        },
      ],
      default_sitation: [
        {
          text: this.$t('default_sitation.limitations.first'),
          img: 'user.png',
          bg_color: '#F8D3CF',
        },
        {
          text: this.$t('default_sitation.limitations.second'),
          img: 'pen.png',
          bg_color: '#F8D3CF',
        },
        {
          text: this.$t('default_sitation.limitations.third'),
          img: 'docs.png',
          bg_color: '#F8D3CF',
        },
      ],
      solutions: [
        {
          text: this.$t('solutions.first'),
          img: 'worldwide.png',
          bg_color: '#cdeef7',
        },
        {
          text: this.$t('solutions.second'),
          img: 'account.png',
          bg_color: '#cdeef7',
        },
        {
          text: this.$t('solutions.third'),
          img: 'location.png',
          bg_color: '#cdeef7',
        },
      ],

      experience: [
        'iyb.png',
        'rff_bank.png',
        'kaspi-bank.png',
        'sber_bank.png',
        'otkrity_bank.png',
        'ros_bank.png',
        'ya_market.png',
        'tele2.png',
        'x5_retail.png',
        'avast.png',
        'erste_bank.png',
        'finnair.png',
        'gazprom.png',
        'pkb.png',
        'ak_bars_bank.png',
        'mtc.png',
      ],
      services: [
        this.$t('services.service1'),
        this.$t('services.service2'),
        this.$t('services.service3'),
        this.$t('services.service4'),
        this.$t('services.service5'),
        this.$t('services.service6'),
        this.$t('services.service7'),
        this.$t('services.service8'),
      ],

      abc: {
        img: 'abc.svg',
        website: "https://www.adastra-abc.com/en/",
        text: this.$t('our_partners.business_consulting.text'),
        advantages: [
          this.$t('our_partners.business_consulting.adventages1'),
          this.$t('our_partners.business_consulting.adventages2'),
          this.$t('our_partners.business_consulting.adventages3'),
          this.$t('our_partners.business_consulting.adventages4'),
        ],
      },
      ataccama: {
        img: 'ataccama.png',
        website: "https://www.ataccama.com/",
        text: this.$t('our_partners.control_quality.text'),
        advantages: [
          this.$t('our_partners.control_quality.adventages1'),
          this.$t('our_partners.control_quality.adventages2'),
          this.$t('our_partners.control_quality.adventages3'),
          this.$t('our_partners.control_quality.adventages4'),
        ],
      },

      alteryx: {
        img: 'alteryx.png',
        website: "https://www.alteryx.com/",
        text: this.$t('our_partners.self_service.text'),
        advantages: [
          this.$t('our_partners.self_service.adventages1'),
          this.$t('our_partners.self_service.adventages2'),
          this.$t('our_partners.self_service.adventages3'),
        ],
      },
    }
  },
}
</script>
<style>

.header__section {
  padding: 0 20px;
}
.team {
  -webkit-box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
}

#a_plus_solutions {
  overflow: hidden !important;
  margin: 0 auto;
}

#why {
  padding: 50px 0;
}

#why_us {
  padding: 85px 0 0 0;
  margin: 0 auto;
}

#why_us h2 {
  margin: 0 0 70px 0;
}

#solutions {
  background-color: #f8f8f8;
}

#our_services {
  padding: 70px 0 0 0;
}


@media screen and (max-width: 640px) {
  #our_services .flex > p {
    padding: 0 25px;
    text-align: left;   
  }

  .header__section {
    padding: 0 25px;
  }

  .header__section p {
    text-align: left;
  }
}

.base__container .w-full{
  max-width: 1400px;
  margin: 0 auto;
}

.service {
  margin: 0 0 40px 0 !important;
}

.service p {
  min-height: 150px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 10px;
  font-size: 20px;
  color: #1b778b;
  -webkit-box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
}

.why_us--items {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

.why_us--items .why_us--item {
  width: 25%;
  min-width: 295px;
}

#partners {
  padding: 80px 0 0 0;
}

.learn__more {
  width: 220px;
  height: 45px;
  border: 1px solid #1B778B;
  color: #1B778B;
  border-radius: 10px;
  display: block;
  text-align: center;
  line-height: 45px; 
  margin: 0 auto;
  transition: .3s;
  font-weight: 600;
}

.learn__more:hover {
  background: #1B778B;
  color: #FFFFFF;
  -webkit-box-shadow: inset 0px 0px 21px -15px rgba(255,255,255,1);
  -moz-box-shadow: inset 0px 0px 21px -15px rgba(255,255,255,1);
  box-shadow: inset 0px 0px 35px -15px rgba(255,255,255,1);
}
</style>
