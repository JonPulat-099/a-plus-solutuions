<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="a_plus_solutions" class="w-full pb-24">
      <BaseSection>
        <div class="w-full mt-12 px-6 text-center sm:text-left flex flex-col justify-center header__section">
          <img :src="require('~/assets/img/logo/logo.svg')" class="mb-6" alt="Nefa Logo" />
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[1.5rem] sm:text-3xl xl:text-3xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 mb-4"
          >
            ИТ компания <br>
            <span class="text-header-gradient">Основанная в Узбекистане</span> <br>
            Выходцами из международной компании
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph sm:block">
            &emsp; Имея более чем 20-летний международный опыт в различных направлениях информационных технологий, наша команда
            предлагает услуги в области развития современной ИТ-архитектуры организации, реализации проектов по
            бизнес-аналитике и управления данными, оптимизации процессов, внедрении AML решения (противодействие
            отмыванию денег), роботизации бизнес-процессов, создании мобильных и заказной разработки приложений.
            Используйте наш уникальный опыт и экспертизу для осуществления цифровой трансформации бизнеса.
          </p>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-1.png')"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-3.png')"
          class="hidden sm:block absolute bottom-56 right-24 w-6"
        />
      </BaseSection>
    </section>

    <!-- Crypto statistic section -->
    <section
      class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
    >
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <LandingAboutCard
          data-aos="fade-up"
          title="Наша команда -"
          subtitle="более 30 профессионалов "
          img="/images/about/team(1).png"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingAboutCard
          data-aos="fade-up"
          data-aos-delay="150"
          title="Успешно реализованные"
          subtitle="проекты в Узбекистане"
          img="/images/about/uzb1.png"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingAboutCard
          data-aos="fade-up"
          data-aos-delay="300"
          title="Более 50 международных проектов,"
          subtitle="выполненных нашими сотрудниками"
          img="/images/about/goal.png"
          class="lg:px-8"
        />
      </div>
    </section>

    <!-- Partners section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">
          ПРОЕКТНЫЙ ОПЫТ ОСНОВАТЕЛЕЙ И РУКОВОДИЕТЛЕЙ A+ SOLUTIONS
        </h3>
        <!-- <p data-aos="flip-down" class="paragraph">We're partners with countless major organisations around the globe</p> -->
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage
            v-for="img in experience"
            :key="img"
            :img="img"
          />
        </div>
      </div>
    </section>

    <!-- Getting started section -->
    <section id="why_us" class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 mt-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">ПОЧЕМУ МЫ</h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-20 left-64 xl:left-[18rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-20 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>


    <section class="relative max-w-full sm:mx-4 xl:mx-8 mt-24 sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-2xl sm:text-3xl font-semibold text-left">Текущая ситуация</h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8
          mb-8"
        >
          <LandingWhyCard v-for="(d,i) in default_sitation" :key="i" :text="d.text" :img="d.img" :color="d.bg_color" />
        </div>
        <h2 data-aos="flip-down" class="text-2xl sm:text-3xl font-semibold text-left">Решение</h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingWhyCard v-for="(s,i) in solutions" :key="i" :text="s.text" :img="s.img" :color="s.bg_color" />
        </div>
      </div>
    </section>


    <!-- Getting started section services -->
    <section id="our_services"  class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full p-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center mb-5">НАШИ УСЛУГИ</h2>
        <p data-aos="fade-up" class="text-center mb-8 xl:w-2/3">
          A+ Solutions предлагает широкий спектр услуг в области информационных технологий, начиная с разработки IT
          стратегии и заканчивая разработкой широкого спектра приложений
        </p>
        <div data-aos="fade-up" class="w-full flex flex-row flex-wrap place-items-center g-screen">

          <div
            v-for="(s,i) in services" :key="i"
            class="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:w-1/1 service cursor-pointer"
            :class="i == 7 || i == 6 ? 'md:w-1/2 lg:w-1/2 ' : 'md:w-1/2 lg:w-1/3'"
          >
            <p class="w-full rounded-lg text-center font-semibold hover:shadow-lg" v-html="s"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced trading tools section -->
    <section id="partners"  class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto">
        <div data-aos="fade-right" class="px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-semibold">НАШИ <span class="text-header-gradient">ПАРТНЕРЫ</span></h2>
          <h3 class="text-[2rem] text-[#697DAC]">Бизнес-консалтинг</h3>
          <LandingPartnerInfo data-aos="fade-up" :partner="abc" />


          <h3 class="text-[2rem] text-[#697DAC]">Управление Качеством Данных и Data Governance</h3>
          <LandingPartnerInfo data-aos="fade-up" :partner="ataccama" />

          <h3 class="text-[2rem] text-[#697DAC]">Self-service аналитика</h3>
          <LandingPartnerInfo data-aos="fade-up" :partner="alteryx" />
        </div>
      </div>
    </section>

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      steps: [
        {
          img: 'star.png',
          title: 'Лучшие практика',
          description:
            'В части бизнес-процессов',
        },
        {
          img: 'settings.png',
          title: 'Компетенции',
          description:
            'Квалифицированные ИТ-ресурсы',
        },
        {
          img: 'briefcase.png',
          title: 'Эффективность',
          description:
            'Оптимальное соотношение цена-качество',
        },
      ],
      default_sitation: [
        {
          text: 'Недостаток квалифицированных ИТ специалистов',
          img: 'user.png',
          bg_color: "#CDE9D6"
        },
        {
          text: "Неддостаток компетенций в бизнесе по подготовке бизнес-требований дл ИТ",
          img: 'pen.png',
          bg_color: "#CDE9D6"
        },
        {
          text: "Органиченные знания по best-practice как в части бизнеса, так и в части ИТ-архитектуры",
          img: 'docs.png',
          bg_color: "#CDE9D6"
        },
      ],
      solutions: [
        {
          text: "Привлечение европейский экспертов для дизайна оптимальных бизнес-решений",
          img: 'worldwide.png',
          bg_color: "#F8D3CF"
        },
        {
          text: "Привлечение ИТ-экспертов из России для дизайна оптимальной архитектуры и передачи знаний по лучшим практикам ИТ",
          img: 'account.png',
          bg_color: "#F8D3CF"
        },
        {
          text: "Развитие локальных компетенций благодаря совместной работы командах с европейскими и российскими специалистами",
          img: 'location.png',
          bg_color: "#F8D3CF"
        },
      ],

      experience: [
        'iyb.png',
        'rff_bank.png',
        'kaspi-bank.jpg',
        'sber_bank.png',
        'pkb.png',
        'otkrity_bank.png',
        'ak_bars_bank.png',
        'ros_bank.png',
        'ya_market.png',
        'tele2.png',
        'x5_retail.png',
        'mtc.png',
        'avast.png',
        'erste_bank.png',
        'finnair.png',
      ],
      services: [
        'ИТ Стратигия <br> ИТ Архитектура <br> ИТ Процессы',
        'Управлене данными Корпоративное хранилище данных',
        "Data Governance",
        "Мобильные и веб-приложения",
        "Интеграция приложения",
        "Anti-Money Laundering",
        "Автоматизация процессов бек-офиса",
        "Robot Process Automation"
      ],

      abc: {
        img: "abc.png",
        text: "Для эффективного использования цифровых технологий ИТ решения должны быть неразрывно связаны с потребностями бизнеса. Совместно с международной компанией Adastra Business Consulting мы предлагаем подход, который обеспечит синергию бизнес-стратегии и ИТ решений. Adastra Business Consulting предоставляет свою экспертизу в следующих бизнес-направлениях: управление кредитными рисками, взыскание, скоринг, одобрение розничных и корпоративных клиентов, предотвращение мошенничества, управление ценностью клиента, проектирование и оптимизация бизнес-процессов и др.",
        advantages: [
          "Западный Know-How",
          "Эффекктивные Бизнес-процессы",
          "Эффективные Ресурсы",
          "Лучшие Архитектурные Практика"
        ]
      },
      ataccama: {
        img: "ataccama.png",
        text: "Ataccama – глобальная компания, предоставляющая своим клиентам универсальную платформу Ataccama ONE для обеспечения качества данных, управления мастер-данными и метаданными. Ataccama специализируется на комплексных решениях по управлению корпоративными данными (Data Governance), помогая компаниям поддерживать процессы и увеличивать ценность данных. Среди клиентов Ataccama: Банк Ipak Yuli, Kaspibank, Райффайзенбанк, Яндекс Маркет, МТС, Теле2 и многие другие",
        advantages: [
          "Профилирование Данных",
          "Обеспечение Качеством Данных",
          "Управление Мастер-Данными и НСИ",
          "Управление МетаДанными"
        ]
      },

      alteryx: {
        img: "alteryx.png",
        text: "Alteryx предоставляет аналитикам данных и data scientist инструмент для самостоятельного анализа данных – Alteryx Designer. С более чем 250 встроенными функциями бизнес-пользователи могут быстро профилировать, подготавливать, обрабатывать и анализировать свои данные без необходимости написания SQL кода или программных скриптов. Если раньше для построения аналитической модели или отчета требовалось несколько инструментов и даже несколько разных специалистов, то сегодня достаточно одного инструмента – Alteryx Designer.",
        advantages: [
          "Смешивание Данныхи их Подготовка",
          "Анализ Данных",
          "Распространение Результатов",
        ]
      }
    }
  },
}
</script>
<style>
#a_plus_solutions {
  overflow: hidden !important;
}

.text-header-gradient {
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}

.header__section img {
  width: 280px !important;
  margin: 0 auto 30px;
}

#why {
  padding: 50px 0;
}

.service {
 overflow: hidden;
}

.service p {
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #D2E4FD;
  padding: 10px;
}
</style>
