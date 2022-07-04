<template>
  <div>
    <div v-if="overlay" id="overlay" class="fixed top-[60px]" @click="toggleSidebar"></div>
    <nav class="services__nav h-[60px] top-0 flex items-center justify-center">
      <div class="flex w-full max-w-[980px] mx-auto">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#bbbbbb] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          @click="toggleSidebar"
        >
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <img class="logo ml-4" :src="require('~/assets/img/logo/logo.svg')" alt="" />
      </div>
      <div id="sidebar" class="absolute top-[60px] left-0">
        <ul>
          <li v-for="(s, i) in services" :key="i">
            <a :href="s.url" @click.prevent="goToBlock(s.url)"> {{ s.name }} </a>
          </li>
        </ul>

        <nuxt-link class="backToHome" to="/"> Назад </nuxt-link>
      </div>
    </nav>
    <!-- SERVICE STARTY -->
    <div id="strategy" class="services__section max-w-[1100px] mx-auto pt-16">
      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">
        IT СТРАТЕГИЯ / IT АРХИТЕКТУРА
      </h1>
      <div class="images overflow-hidden rounded-[#30px]">
        <img
          class="w-[1100px] h-[350px] pt-8 pb-10 object-cover lg:object-fill"
          src="/images/services/banner_1.png"
          alt=""
        />
      </div>
      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Развитие бизнеса любой современной организации требует поддержки со стороны ИТ, и зачастую ИТ-служба не в
        состоянии обеспечить необходимую скорость развития и инноваций. Такая ситуация возникает из-за того, что многие
        организации обладают устаревшими и сложными в облуживании системами, а также используют устаревший монолитный
        подход в выстраивании ИТ архитектуры.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Таким образом, создаются огромные препятствия для внедрения инноваций и организации становятся неспособными
        быстро и гибко реагировать на новые потребности рынка, например, перейти на новую АБС, развернуть мобильное
        приложение, или запустить онлайн-сервис, проанализировать клиентские данные и применить персонифицированный
        подход, и, в целом, стать цифровым бизнесом.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Для того, чтобы банк стал высокотехнологичным, а ИТ выполняла не только вспомогательную функцию, но и были
        драйвером инноваций, обязательными условиями являются наличие гибкой ИТ архитектуры и современного
        технологического стека. Банкам Узбекистана не хватает опыта и знаний о лучших мировых практиках и их применении.
        Часто менеджмент компаний задается вопросами:
      </p>

      <div class="max-w-[980px] md:mx-auto flex items-center justify-between flex-col lg:flex-row mx-5 my-16">
        <img class="flex-[0_0_25%] lg:mb-0 mb-10" src="images/services/frame_1.png" alt="" />
        <div class="flex-[0_0_65%] md:mx-0 mx-5">
          <ul class="list-disc">
            <li class="text-[18px] leading-8 font-normal">
              Как нам развивать <b class="text-[#2199B4]">ИТ-архитектуру?</b>
            </li>
            <li class="text-[18px] leading-8 font-normal">Что делать с <b class="text-[#2199B4]">АБС?</b></li>
            <li class="text-[18px] leading-8 font-normal">
              Как достичь высокой <b class="text-[#2199B4]">эффективности</b> инвестиций в ИТ?
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Как необходимо расставить <b class="text-[#2199B4]">приоритеты?</b> Что должно быть реализовано в первую
              очередь?
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Какой необходимо заложить <b class="text-[#2199B4]">бюджет на развитие?</b> Какие будут
              <b class="text-[#2199B4]">сроки и ресурсы?</b>
            </li>
            <li class="text-[18px] leading-8 font-normal">
              <b class="text-[#2199B4]">Какой стек технологий</b> использовать?
            </li>
          </ul>
        </div>
      </div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-16 mx-5">
        Для принятия стратегически обоснованных архитектурных решений нужен взгляд со стороны независимых экспертов,
        обладающих best practice в ИТ стратегии и архитектуре. Наша компания поможет четко сформулировать стратегию
        развития ИТ и дорожную карту перехода от архитектуры, поддерживаемой устаревшими ИТ системами, к целевой. Мы
        применяем проверенный многими международными проектами подход, помогая финансовым организациям технологически
        совершенствоваться.
      </p>
    </div>
    <div class="our__approach pt-16 pb-96">
      <div class="our__approach--container max-w-[980px] lg:mx-auto mx-5">
        <h1 class="font-extrabold text-[30px] leading-[34px]">НАШ ПОДХОД</h1>

        <p class="text-[16] leading-[20px] font-normal mt-8 mb-16">
          Обладая опытом как в трансформации бизнеса, так и в технологиях, наши консультанты помогут в разработке
          комплексной ИТ-стратегии. Наш подход включает следующие шаги:
        </p>

        <div v-for="(a, i) in info.first_approach" :key="i" class="approach">
          <div class="approach__title flex flex-nowrap justify-between items-center">
            <h2 class="text-[24px] leading-7 text-[#2199B4] font-bold">{{ a.title }}</h2>
            <div class="relative min-w-[84px] min-h-[38px] text-center">
              <img class="absolute z-0" src="/images/services/arrow.svg" alt="" />
              <span class="text-[30px] text-white font-extrabold relative z-10"> {{ i + 1 }} </span>
            </div>
          </div>
          <p class="approach__text text-[16] leading-[20px] font-normal mt-6 mb-24">
            {{ a.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="best__practice -mt-96 mb-20 max-w-[1100px] mx-auto">
      <div
        class="best__practice--container relative z-0 bg-[#2199B4] rounded-[40px] lg:mx-auto mx-5 px-4 py-10 md:p-14"
      >
        <h1 class="font-extrabold text-[30px] leading-[34px] text-white">BEST PRACTICE</h1>
        <div class="practices flex flex-wrap justify-between flex-col md:flex-row">
          <div v-for="(b, i) in info.first_best_practice" :key="i" class="pratice flex-[0_1_45%] my-14 mx-3">
            <div class="image w-[80px] h-[80px] bg-white rounded-[20px] flex items-center justify-center mb-5">
              <img :src="b.img" alt="" />
            </div>
            <p class="text-white text-[16] leading-[20px] font-normal">{{ b.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SERVICE END -->
    <!-- SERVICE START -->

    <h1 id="dwh" class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">
      DATA MANAGEMENT DWH
    </h1>

    <div class="images overflow-hidden rounded-[#30px]">
      <img
        class="w-[1100px] h-[350px] mx-auto pt-8 pb-10 object-cover lg:object-fill"
        src="/images/services/banner_2.png"
        alt=""
      />
    </div>

    <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
      С ростом организации растет количество информационных систем, а также накапливается большой объем информации.
      Сегодня данные являются ценным активом компании и основой для принятия обоснованных управленческих решений. Для
      этого бизнесу должны быть доступны точные, выверенные и прозрачные данные, а также инструменты для проведения
      самостоятельного анализа.
    </p>

    <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
      Тем не менее, часто в организациях отсутствует культура по принятию бизнес-решений на основе данных и статистики –
      управленческие решения принимаются интуитивно. В результате бизнес сталкивается с ошибочными выводами, снижению
      операционной эффективности и качества обслуживания клиентов, потере конкурентных преимуществ. Причинами отсутствия
      data-driven подхода являются:
    </p>

    <div class="max-w-[980px] md:mx-auto flex items-center justify-between flex-col lg:flex-row mx-5 my-16">
      <img class="flex-[0_0_25%] lg:mb-0 mb-10" src="images/services/frame_2.png" alt="" />
      <div class="flex-[0_0_65%] md:mx-0 mx-5">
        <ul class="list-disc">
          <li class="text-[18px] leading-8 font-normal">
            Нехватка <b class="text-[#2199B4]">best practice</b> и бизнес-экспертизы (какие отчеты нужно
            <b class="text-[#2199B4]">сформировать</b>, как и какие данные необходимо
            <b class="text-[#2199B4]">анализировать</b>).
          </li>
          <li class="text-[18px] leading-8 font-normal">
            Проблемы с <b class="text-[#2199B4]">качеством данных</b>, низкий уровень доверия к данным.
          </li>
          <li class="text-[18px] leading-8 font-normal">
            Отсутствие необходимых <b class="text-[#2199B4]">ИТ технологий и решений</b>.
          </li>
          <li class="text-[18px] leading-8 font-normal">
            Hехватка <b class="text-[#2199B4]">технических</b> компетенций.
          </li>
        </ul>
      </div>
    </div>

    <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
      Практически в каждой организации существует множество разрозненных источников данных (CRM, АБС, Процессинг, …),
      вследствие этого у каждого подразделения могут быть свои «версии правды», основанные на различных отчетах и
      методологиях, которые противоречат друг другу. Из-за отсутствия целостного подхода к управления данными и единой
      аналитической платформы бизнес-пользователям не хватает полных детальных или исторических данных для проведения
      всестороннего и глубокого анализа. Пользователям часто приходится вручную объединять и сверять огромное количество
      объемных файлов, что приводит к потере эффективного времени и возникновению ошибок. Кроме того, из-за отсутствия
      специализированных инструментов бизнес-пользователи формируют сотни Excel-отчетов иногда напрямую из
      транзакционных систем и не имеют возможности провести продвинутый анализ или моделирование данных.
    </p>

    <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
      Особенно остро данные проблемы ощущаются в финансовом секторе. Организации финансового сектора не производят
      ничего кроме огромного количества данных, поэтому то насколько финансовая организация эффективно управляет данные
      во многом определяет ее эффективность.
    </p>

    <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
      Благодаря построению корпоративного хранилища данных (КХД) организация может собирать и хранить структурированную,
      полную и консистентную информацию в одном месте. КХД является «единой версией правды» для всей организации, это
      единая аналитическая база для self-service аналитиков и data scientists.
    </p>

    <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">
      DATA ПРЕИМУЩЕСТВА ВНЕДРЕНИЯ КХД
    </h1>

    <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>

    <div class="our__approach pt-16 pb-96">
      <div class="our__approach--container max-w-[980px] lg:mx-auto mx-5">
        <h1 class="font-extrabold text-[30px] leading-[34px]">НАШ ПОДХОД</h1>

        <p class="text-[16] leading-[20px] font-normal mt-8 mb-16">
          A+ Solutions предоставляет полный спектр услуг в области построения корпоративных хранилищ данных,
          бизнес-аналитики и управления данными. Наши эксперты обладают богатым опытом внедрения хранилищ данных и
          систем бизнес-анализа. Построение Корпоративного хранилища данных
        </p>

        <div v-for="(a, i) in info.second__approach" :key="i" class="approach">
          <div class="approach__title flex flex-nowrap justify-between items-center">
            <h2 class="text-[24px] leading-7 text-[#2199B4] font-bold">{{ a.title }}</h2>
            <div class="relative min-w-[84px] min-h-[38px] text-center">
              <img class="absolute z-0" src="/images/services/arrow.svg" alt="" />
              <span class="text-[30px] text-white font-extrabold relative z-10"> {{ i + 1 }} </span>
            </div>
          </div>
          <p class="approach__text text-[16] leading-[20px] font-normal mt-6 mb-24">
            {{ a.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="best__practice -mt-96 mb-20 max-w-[1100px] mx-auto">
      <div
        class="best__practice--container relative z-0 bg-[#2199B4] rounded-[40px] lg:mx-auto mx-5 px-4 py-10 md:p-14"
      >
        <h1 class="font-extrabold text-[30px] leading-[34px] text-white">BEST PRACTICE</h1>
        <div class="practices flex flex-wrap justify-between flex-col md:flex-row">
          <div v-for="(b, i) in info.second_best_practice" :key="i" class="pratice flex-[0_1_45%] my-14 mx-3">
            <div class="image w-[80px] h-[80px] bg-white rounded-[20px] flex items-center justify-center mb-5">
              <img :src="b.img" alt="" />
            </div>
            <p class="text-white text-[16] leading-[20px] font-normal">{{ b.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SERVICE END -->
    <!-- SERVICE START -->
    <div id="data_gvr" class="services__section max-w-[1100px] mx-auto pt-16">
      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">DATA GOVERNANCE</h1>
      <div class="images overflow-hidden rounded-[#30px]">
        <img
          class="w-[1100px] h-[350px] pt-8 pb-10 object-cover lg:object-fill"
          src="/images/services/banner_1.png"
          alt=""
        />
      </div>
      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Data Governance – это концепция управления данными, включающая:
      </p>

      <ul class="max-w-[980px] lg:mx-auto mx-5 list-disc my-10">
        <li class="text-[18px] leading-8 font-normal">
          правила, регламенты, политики, процессы позволяющие организации обеспечивать высокое качество данных на
          протяжении их всего жизненного цикла,
        </li>
        <li class="text-[18px] leading-8 font-normal">
          внедрение инструментов управления данными, поддерживающих бизнес-цели.
        </li>
      </ul>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Целями Data Governance являются обеспечение доступности, удобства использования, согласованности, целостности и
        безопасности данных, соответствие их общепринятым стандартам. Для этого необходимо создание процессов
        эффективного управления данными в масштабах всей организации. На практике речь идет об установлении
        систематического контроля над этими процессами – это определение ответственных и обязанностей, например,
        назначается ответственность за последствия низкого качества данных, ответственность за обеспечение доступа всех
        пользователей внутри организации к имеющимся данным.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Внедрение Data Governance помогает компаниям оставаться гибкими по мере того, как они вырастают до больших
        размеров. Преимущества, которые получают организации:
      </p>

      <div class="max-w-[980px] md:mx-auto flex items-center justify-between flex-col lg:flex-row mx-5 my-16">
        <img class="flex-[0_0_25%] lg:mb-0 mb-10" src="images/services/frame_1.png" alt="" />
        <div class="flex-[0_0_65%] md:mx-0 mx-5">
          <ul class="list-disc">
            <li class="text-[18px] leading-8 font-normal">
              Принятие <b class="text-[#2199B4]">решений</b> на основе
              <b class="text-[#2199B4]">согласованных и унифицированных</b> данных
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Четко определенные правила изменения <b class="text-[#2199B4]">процессов и данных</b>
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Снижение затрат в других областях <b class="text-[#2199B4]">управления данными</b> за счет предоставления
              <b class="text-[#2199B4]">механизмов централизованного контроля</b>
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Повышение <b class="text-[#2199B4]">эффективности</b> за счет возможности повторного использования
              <b class="text-[#2199B4]">процессов и данных</b>
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Повышение <b class="text-[#2199B4]">доверия</b> к данным за счет
              <b class="text-[#2199B4]">улучшения качества</b> данных
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Согласованные <b class="text-[#2199B4]">требования</b> к данным
            </li>
          </ul>
        </div>
      </div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-16 mx-5">
        A+ Solutions предлагает услуги по стратегическому управлению данными в следующих областях:
      </p>

      <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>
    </div>

    <!-- SERVICE END -->
    <!-- SERVICE START -->
    <div id="quality_data" class="services__section max-w-[1100px] mx-auto pt-16">
      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">КАЧЕСТВО ДАННЫХ</h1>
      <div class="images overflow-hidden rounded-[#30px]">
        <img
          class="w-[1100px] h-[350px] pt-8 pb-10 object-cover lg:object-fill"
          src="/images/services/banner_1.png"
          alt=""
        />
      </div>
      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Качество используемых данных напрямую влияет на качество принимаемых решений и лояльность клиентов. Плохие
        данные возникают из-за ошибок ввода операторов, фиктивных данных, некорректно предоставленных данных клиентами,
        пропущенных значений, дублирования.
      </p>
      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Низкокачественные данные приводят к некорректным отчетам и аналитическим результатам, а они, в свою очередь, к
        неточным и неверным выводам. Помимо этого, качество данных прямо или косвенно влияет на:
      </p>

      <div class="max-w-[980px] md:mx-auto flex items-center justify-between flex-col lg:flex-row mx-5 my-16">
        <img class="flex-[0_0_25%] lg:mb-0 mb-10" src="images/services/frame_1.png" alt="" />
        <div class="flex-[0_0_65%] md:mx-0 mx-5">
          <ul class="list-disc">
            <li class="text-[18px] leading-8 font-normal">
              <b class="text-[#2199B4]">Регуляторные риски.</b> Штрафы за <b class="text-[#2199B4]">ошибки</b> в
              предоставлении <b class="text-[#2199B4]">регуляторной отчетности</b> о показателях организации.
            </li>
            <li class="text-[18px] leading-8 font-normal">
              <b class="text-[#2199B4]">Регуляторные риски.</b> Недоверие к <b class="text-[#2199B4]">прогнозным</b> и
              другим <b class="text-[#2199B4]">отчетам</b>, и, в целом, к организации.
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Производительность сотрудников. Увеличенное время <b class="text-[#2199B4]">подготовки отчетов</b>, ручные
              сверки, <b class="text-[#2199B4]">поиск ошибок</b> и их
              <b class="text-[#2199B4]">исправление сотрудниками</b>.
            </li>
            <li class="text-[18px] leading-8 font-normal">Операционные <b class="text-[#2199B4]">риски</b></li>
          </ul>
        </div>
      </div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-16 mx-5">
        Ошибки в данных могут дорого обойтись компании. Проще и дешевле исправлять ошибки в данных, чем их последствия.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-16 mx-5">
        Мы уделяем особое внимание процессам управления качеством данных и предоставляем решение по управлению качеством
        данных. Ваши данные будут точнее, надежнее и понятнее, а четко сформулированная стратегия управления качеством
        данных – вашим партнером в принятии бизнес-решений.
      </p>
    </div>
    <div class="our__approach py-16">
      <div class="our__approach--container max-w-[980px] lg:mx-auto mx-5">
        <h1 class="font-extrabold text-[30px] leading-[34px]">НАШ ПОДХОД</h1>

        <p class="text-[16] leading-[20px] font-normal mt-8 mb-16">
          A+ Solutions предоставляет полный спектр услуг в области построения корпоративных хранилищ данных,
          бизнес-аналитики и управления данными. Наши эксперты обладают богатым опытом внедрения хранилищ данных и
          систем бизнес-анализа. Построение Корпоративного хранилища данных
        </p>

        <div v-for="(a, i) in info.third_approach" :key="i" class="approach">
          <div class="approach__title flex flex-nowrap justify-between items-center">
            <h2 class="text-[24px] leading-7 text-[#2199B4] font-bold">{{ a.title }}</h2>
            <div class="relative min-w-[84px] min-h-[38px] text-center">
              <img class="absolute z-0" src="/images/services/arrow.svg" alt="" />
              <span class="text-[30px] text-white font-extrabold relative z-10"> {{ i + 1 }} </span>
            </div>
          </div>
          <p class="approach__text text-[16] leading-[20px] font-normal mt-6 mb-24">
            {{ a.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- SERVICE END -->
    <!-- SERVICE START -->
    <div id="management_metadt" class="services__section max-w-[1100px] mx-auto pt-16">
      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">
        КАТАЛОГ ДАННЫХ И УПРАВЛЕНИЕ МЕТАДАННЫМИ
      </h1>
      <div class="images overflow-hidden rounded-[#30px]">
        <img
          class="w-[1100px] h-[350px] pt-8 pb-10 object-cover lg:object-fill"
          src="/images/services/banner_1.png"
          alt=""
        />
      </div>
      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        С ростом компании и количества информационных систем бизнес-пользователи и аналитики все больше времени теряют
        на поиск необходимых им данных, чем на их анализ. Кроме того, часто в организации возникают разногласия при
        интерпретации терминов, например, «количество дней просрочки» может по-разному трактоваться сотрудниками
        различных подразделений банка.
      </p>

      <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Управление метаданными – важная часть Data Governance. Системы управления метаданными – это корпоративный
        «Google» и «Wikipedia», где собираются и систематизируются знания об имеющихся в компании данных.
        Бизнес-глоссарий и каталог данных позволяют пользователям прийти к взаимному согласию и найти компромисс при
        спорах о терминологии в рамках компании. Термины сопоставляются с источниками данных в каталоге данных, а
        возможности data lineage позволяют проследить происхождение данных, от источника до их конечного преобразования.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Каталог данных может существовать отдельно от процессов управления качеством данных, однако их интеграция
        повышает полезность каталога данных для пользователей и эффективность системы управления качеством данных.
        Каталог данных становится «центральной точкой правды», позволяющей не только найти необходимую информацию, но и
        предоставляющей прозрачную картину о состоянии данных в организации, позволяя пользователям самостоятельно
        проводить анализ данных, их источников и оценивать достоверность имеющихся данных, а понимание семантики и
        потоков данных позволяет проактивно выявлять ошибки и определять дополнительные точки контроля.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Компоненты системы управления метаданными:
      </p>

      <div class="max-w-[980px] md:mx-auto flex items-center justify-between flex-col lg:flex-row mx-5 my-16">
        <img class="flex-[0_0_25%] lg:mb-0 mb-10" src="images/services/frame_1.png" alt="" />
        <div class="flex-[0_0_65%] md:mx-0 mx-5">
          <ul class="list-disc">
            <li class="text-[18px] leading-8 font-normal">
              <b class="text-[#2199B4]">Бизнес-глоссарий</b> - содержит описание ключевых объектов и терминов компании
            </li>
            <li class="text-[18px] leading-8 font-normal">
              <b class="text-[#2199B4]">Словарь данных</b> - структуру данных ваших систем: таблицы, поля, процедуры,
              представления, а также правила преобразования данных.
            </li>
            <li class="text-[18px] leading-8 font-normal">
              <b class="text-[#2199B4]">Каталог отчетов</b> - все ваши отчеты доступны и систематизированы.
            </li>
            <li class="text-[18px] leading-8 font-normal">
              <b class="text-[#2199B4]">Проверки качества данных</b> - определение бизнес-правил качества данных и
              реализованные в системе проверки
            </li>
            <li class="text-[18px] leading-8 font-normal">
              <b class="text-[#2199B4]">Системы и приложения</b> - каталог IT-систем
            </li>
            <li class="text-[18px] leading-8 font-normal">
              <b class="text-[#2199B4]">Пользователи</b> - все ваши сотрудники: data steward, владельцы, группы
              пользователей
            </li>
            <li class="text-[18px] leading-8 font-normal">
              <b class="text-[#2199B4]">Процессы</b> - возможность управления жизненным циклом метаданных
            </li>
          </ul>
        </div>
      </div>

      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">
        ПРЕИМУЩЕСТВА ИСПОЛЬЗОВАНИЯ КАТАЛОГА ДАННЫХ
      </h1>

      <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>
    </div>
    <div class="our__approach py-16">
      <div class="our__approach--container max-w-[980px] lg:mx-auto mx-5">
        <h1 class="font-extrabold text-[30px] leading-[34px]">НАШ ПОДХОД</h1>

        <div v-for="(a, i) in info.fourth_approach" :key="i" class="approach">
          <div class="approach__title flex flex-nowrap justify-between items-center">
            <h2 class="text-[24px] leading-7 text-[#2199B4] font-bold">{{ a.title }}</h2>
            <div class="relative min-w-[84px] min-h-[38px] text-center">
              <img class="absolute z-0" src="/images/services/arrow.svg" alt="" />
              <span class="text-[30px] text-white font-extrabold relative z-10"> {{ i + 1 }} </span>
            </div>
          </div>
          <p class="approach__text text-[16] leading-[20px] font-normal mt-6 mb-24">
            {{ a.text }}
          </p>
        </div>
      </div>
    </div>
    <!-- SERVICE END -->
    <!-- SERVICE START -->
    <div id="control_data" class="services__section max-w-[1100px] mx-auto pt-16">
      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">УПРАВЛЕНИЕ МАСТЕР-ДАННЫМИ</h1>
      <div class="images overflow-hidden rounded-[#30px]">
        <img
          class="w-[1100px] h-[350px] pt-8 pb-10 object-cover lg:object-fill"
          src="/images/services/banner_1.png"
          alt=""
        />
      </div>
      <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Зачастую в больших организациях недостаточно внимания уделяют управлению мастер-данными и НСИ. Данные о
        клиентах, продуктах и др. ведутся разрозненно во множестве информационных систем (АБС, CRM, HR-системы и т. д.),
        из-за чего в системах хранятся дублированные, фрагментированные или устаревшие данные. Пользователи тратят свое
        время на объединение и сведение данных, поиск ошибок, исправление их вручную в хранилищах данных и системах
        отчетности. При этом делается это не централизованно: перечни атрибутов одних и тех же справочников в разных
        подразделениях значительно различаются, а в качестве единственного источника по всем атрибутам справочника
        обычно выступают файлы MS Excel.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Это приводит к дублированию данных, проблемам с качеством данных в отчетах и аналитике, неэффективной трате
        времени, принятию неверных решений.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Системы управления мастер-данными (Master Data Management) помогают бизнесу получить точные, целостные и
        надежные версии данных, унифицированных и единых для всех подразделений компании. При правильном управлении
        мастер-данными каждое бизнес-подразделение может валидировать и синхронизировать разрозненные данные.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Master Data Management обеспечит вашей компании эффективную экономию финансовых и трудовых ресурсов,
        затрачиваемых на поиск и проверку данных, позволяя сфокусировать усилия вашего бизнеса на важных решениях.
      </p>

      <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Команда A+ Solutions обладает большим опытом использования проверенных и усовершенствованных методологий
        внедрения успешных решений в области управления данными. Мы производим оценку текущего состояния ваших данных,
        очищаем, улучшаем и консолидируем их, и в итоге подбираем оптимальную стратегию для вашей компании. Мы уверены,
        что данные являются стратегическим долгосрочным преимуществом компании и основой для принятия важнейших
        бизнес-решений.
      </p>
    </div>

    <div class="our__approach pt-16 pb-96">
      <div class="our__approach--container max-w-[980px] lg:mx-auto mx-5">
        <h1 class="font-extrabold text-[30px] leading-[34px]">НАШ ПОДХОД</h1>

        <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
          Экспертиза A+ Solutions в создании центра компетенций MDM основана на трехстороннем подходе:
        </p>

        <div v-for="(a, i) in info.fifth_approach" :key="i" class="approach">
          <div class="approach__title flex flex-nowrap justify-between items-center">
            <h2 class="text-[24px] leading-7 text-[#2199B4] font-bold">{{ a.title }}</h2>
            <div class="relative min-w-[84px] min-h-[38px] text-center">
              <img class="absolute z-0" src="/images/services/arrow.svg" alt="" />
              <span class="text-[30px] text-white font-extrabold relative z-10"> {{ i + 1 }} </span>
            </div>
          </div>
          <p class="approach__text text-[16] leading-[20px] font-normal mt-6 mb-24">
            {{ a.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="best__practice -mt-96 mb-20 max-w-[1100px] mx-auto">
      <div
        class="best__practice--container relative z-0 bg-[#2199B4] rounded-[40px] lg:mx-auto mx-5 px-4 py-10 md:p-14"
      >
        <h1 class="font-extrabold text-[30px] leading-[34px] text-white">BEST PRACTICE</h1>
        <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
          Команда A+ Solutions имеет богатый опыт разработки и реализации стратегий управления справочными данными,
          основываясь на следующих рекомендациях:
        </p>

        <div class="w-[100%] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>

        <div class="practices flex flex-wrap justify-between flex-col md:flex-row">
          <div v-for="(b, i) in info.fifth_best_practice" :key="i" class="pratice flex-[0_1_45%] my-14 mx-3">
            <div class="image w-[80px] h-[80px] bg-white rounded-[20px] flex items-center justify-center mb-5">
              <img :src="b.img" alt="" />
            </div>
            <p class="text-white text-[16] leading-[20px] font-normal">{{ b.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SERVICE END -->
    <!-- SERVICE START -->
    <div id="ingetration_app" class="services__section max-w-[1100px] mx-auto pt-16">
      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">
        Enterprise Application Integration
      </h1>
      <div class="images overflow-hidden rounded-[#30px]">
        <img
          class="w-[1100px] h-[350px] pt-8 pb-10 object-cover lg:object-fill"
          src="/images/services/banner_1.png"
          alt=""
        />
      </div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Банки Узбекистана привыкли работать с единой монолитной системой АБС. Но неизбежно с ростом организации и
        бизнеса возникнет потребность в дополнительных приложениях, поэтому количество используемых приложений в банках
        в ближайшее время вырастет. Автоматизация современных финансовых организаций использует подход, основанный на
        множестве приложений и использовании микросервисной архитектуры. Такой подход требует особого внимания к
        интеграции приложений и созданию новых ИТ-компетенций.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Прямым следствием нехватки знаний и отсутствия квалифицированных специалистов в области интеграции приложений
        становится неправильно спроектированная архитектура, которая в свою очередь является причиной следующих
        последствий:
      </p>

      <div class="max-w-[980px] md:mx-auto flex items-center justify-between flex-col lg:flex-row mx-5 my-16">
        <img class="flex-[0_0_25%] lg:mb-0 mb-10" src="images/services/frame_1.png" alt="" />
        <div class="flex-[0_0_65%] md:mx-0 mx-5">
          <ul class="list-disc">
            <li class="text-[18px] leading-8 font-normal">
              Рост затрат на поддержку интеграционных интерфейсов при увеличении числа интегрируемых приложений
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Зависимость от интеграционных интерфейсов, разработанных единственным разработчиком, сложности развития
              приложений при неверном управлении задачей интеграции и отсутствии документации
            </li>
            <li class="text-[18px] leading-8 font-normal">Зависимость от компетенций вендора приложения</li>
            <li class="text-[18px] leading-8 font-normal">
              При неправильной интеграции приложений реализация функционала в одном приложении «ломает» другие
              приложения
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Низкая производительность бизнес-процессов при ожидании ответа интегрированных систем
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Невозможность быстрого предоставления пользователям сервисов, невозможность работы в режиме 24*7
            </li>
          </ul>
        </div>
      </div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Это в свою очередь напрямую влияет на показатели бизнеса: низкий time-2-market, неэффективные операционные
        расходы, увеличенные операционные риски, потеря конкурентоспособности.
      </p>
    </div>

    <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>

    <div class="our__approach py-16 mb-10">
      <div class="our__approach--container max-w-[980px] lg:mx-auto mx-5">
        <h1 class="font-extrabold text-[30px] leading-[34px]">НАШ ПОДХОД</h1>

        <div v-for="(a, i) in info.sixth_approach" :key="i" class="approach">
          <div class="approach__title flex flex-nowrap justify-between items-center">
            <h2 class="text-[24px] leading-7 text-[#2199B4] font-bold">{{ a.title }}</h2>
            <div class="relative min-w-[84px] min-h-[38px] text-center">
              <img class="absolute z-0" src="/images/services/arrow.svg" alt="" />
              <span class="text-[30px] text-white font-extrabold relative z-10"> {{ i + 1 }} </span>
            </div>
          </div>
          <p class="approach__text text-[16] leading-[20px] font-normal mt-6 mb-24" v-html="a.text"></p>
        </div>
      </div>
    </div>

    <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
      Правильно выстроенная команда внутри компании или вовне, внедрение процессов непрерывной разработки обеспечит
      постоянную поддержку архитектуры и работы интеграционных сервисов, что поможет оптимизировать стоимость владения
      приложениями и получить надежную и масштабируемую архитектуру.
    </p>

    <!-- SERVICE END -->
    <!-- SERVICE START -->
    <div id="app_development" class="services__section max-w-[1100px] mx-auto pt-16">
      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">
        Мобильные приложения и заказная разработка
      </h1>
      <div class="images overflow-hidden rounded-[#30px]">
        <img
          class="w-[1100px] h-[350px] pt-8 pb-10 object-cover lg:object-fill"
          src="/images/services/banner_1.png"
          alt=""
        />
      </div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Качественно разработанные программные решения и приложения способны повысить продажи, увеличить количество и
        лояльность клиентов, повысить узнаваемость компании и эффективность бизнеса в разы. A+ Solutions разрабатывает
        приложения любой сложности.
      </p>
    </div>

    <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>

    <!-- SERVICE END -->
    <!-- SERVICE START -->
    <div id="optimization_business" class="services__section max-w-[1100px] mx-auto pt-16">
      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">
        Оптимизация бизнес-процессов
      </h1>
      <div class="images overflow-hidden rounded-[#30px]">
        <img
          class="w-[1100px] h-[350px] pt-8 pb-10 object-cover lg:object-fill"
          src="/images/services/banner_1.png"
          alt=""
        />
      </div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        ифровая трансформация и внедрение инноваций невозможно без эффективных бизнес-процессов. Неоптимальные процессы
        могут тормозить рост банка, негативно влиять на качество предоставляемых сервисов и лояльность клиентов, а также
        снизить продуктивность труда. При неоптимальной организации процессов задачи, которую в развитых организациях
        выполняет один-два человека, может требовать работы десятков сотрудников.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Длительное выполнение бизнес-процессов в значительной мере определяется низким уровнем применяемых
        производственных и управленческих методик, включая низкий уровень программного и технического обеспечения.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Последствия низкоэффективных процессов:
      </p>

      <div class="max-w-[980px] md:mx-auto flex items-center justify-between flex-col lg:flex-row mx-5 my-16">
        <img class="flex-[0_0_25%] lg:mb-0 mb-10" src="images/services/frame_1.png" alt="" />
        <div class="flex-[0_0_65%] md:mx-0 mx-5">
          <ul class="list-disc">
            <li class="text-[18px] leading-8 font-normal">
              Рост операционных расходов и временных затрат: дополнительные расходы на избыточные шаги бизнес-процесса,
              дублирование функций из-за слабого взаимодействия подразделений друг с другом при организации
              бизнес-процесса.
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Репутационные риски и отток клиентов: множество ручных процессов приводят к ошибкам и большому количеству
              жалоб со стороны клиента, а также частым сбоям в бизнес-процессах.
            </li>
            <li class="text-[18px] leading-8 font-normal">
              В совокупности последствия приводят к замедлению развития бизнеса.
            </li>
          </ul>
        </div>
      </div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Необходимы эффективные методы организационного развития, реинжиниринга и управления бизнес-процессами, которые
        позволят организации повысить прозрачность бизнеса и привести к оптимизации расходов, эффективной утилизации
        ресурсов, лояльности клиентов. Часто бизнес-процессы в компании развиваются исторически и у компании не хватает
        взгляда со стороны, внутреннего опыта и экспертизы для их изменений.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Опыт нашей команды совместно с международной экспертизой наших партнеров поможет организациям в реинжиниринге и
        автоматизации бизнес-процессов.
      </p>
    </div>

    <div class="our__approach py-16">
      <div class="our__approach--container max-w-[980px] lg:mx-auto mx-5">
        <h1 class="font-extrabold text-[30px] leading-[34px]">НАШ ПОДХОД</h1>

        <div v-for="(a, i) in info.seventh_approach" :key="i" class="approach">
          <div class="approach__title flex flex-nowrap justify-between items-center">
            <h2 class="text-[24px] leading-7 text-[#2199B4] font-bold">{{ a.title }}</h2>
            <div class="relative min-w-[84px] min-h-[38px] text-center">
              <img class="absolute z-0" src="/images/services/arrow.svg" alt="" />
              <span class="text-[30px] text-white font-extrabold relative z-10"> {{ i + 1 }} </span>
            </div>
          </div>
          <p class="approach__text text-[16] leading-[20px] font-normal mt-6 mb-24">
            {{ a.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- SERVICE END -->
    <!-- SERVICE START -->
    <div id="automation_process" class="services__section max-w-[1100px] mx-auto pt-16">
      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">Robot Process Automation</h1>
      <div class="images overflow-hidden rounded-[#30px]">
        <img
          class="w-[1100px] h-[350px] pt-8 pb-10 object-cover lg:object-fill"
          src="/images/services/banner_1.png"
          alt=""
        />
      </div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Прогресс не стоит на месте, и многие организации понимают, что автоматизация рутинных процессов поможет
        предоставлять клиентам более качественные и быстрые сервисы.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Robot Process Automation (RPA) – это технологии автоматизации рутинных бизнес-процессов с помощью программных
        роботов. Боты имитируют ручные действия пользователей, что позволяет значительно ускорить время выполнения
        рутинных операций, сэкономить на трудовых ресурсах или перенаправить их на выполнение интеллектуальных задач. Во
        многих случаях внедрение RPA гораздо проще и быстрее по сравнению с перевнедрением информационных систем.
      </p>

      <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        Какие процессы подходят для автоматизации с помощью RPA? Это могут быть:
      </p>

      <div class="max-w-[980px] md:mx-auto flex items-center justify-between flex-col lg:flex-row mx-5 my-16">
        <img class="flex-[0_0_25%] lg:mb-0 mb-10" src="images/services/frame_1.png" alt="" />
        <div class="flex-[0_0_65%] md:mx-0 mx-5">
          <ul class="list-disc">
            <li class="text-[18px] leading-8 font-normal">Процессы управления персоналом</li>
            <li class="text-[18px] leading-8 font-normal">Проведение операций в международных платежных системах</li>
            <li class="text-[18px] leading-8 font-normal">Проведение операций в международных платежных системах</li>
            <li>Заполнение регистрационных форм и заявок</li>
            <li>Процессы, требующие двойного ввода</li>
            <li>И многие другие…</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>

    <div class="our__approach py-16">
      <div class="our__approach--container max-w-[980px] lg:mx-auto mx-5">
        <h1 class="font-extrabold text-[30px] leading-[34px]">НАШ ПОДХОД</h1>

        <div v-for="(a, i) in info.eighth_approach" :key="i" class="approach">
          <div class="approach__title flex flex-nowrap justify-between items-center">
            <h2 class="text-[24px] leading-7 text-[#2199B4] font-bold">{{ a.title }}</h2>
            <div class="relative min-w-[84px] min-h-[38px] text-center">
              <img class="absolute z-0" src="/images/services/arrow.svg" alt="" />
              <span class="text-[30px] text-white font-extrabold relative z-10"> {{ i + 1 }} </span>
            </div>
          </div>
          <p class="approach__text text-[16] leading-[20px] font-normal mt-6 mb-24">
            {{ a.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- SERVICE END -->
    <!-- SERVICE START -->
    <div id="anti_money" class="services__section max-w-[1100px] mx-auto pt-16">
      <h1 class="max-w-[980px] lg:mx-auto mx-5 font-extrabold text-[30px] leading-[34px]">
        Anti-Money Laundering – Противодействие отмыванию денег
      </h1>
      <div class="images overflow-hidden rounded-[#30px]">
        <img
          class="w-[1100px] h-[350px] pt-8 pb-10 object-cover lg:object-fill"
          src="/images/services/banner_1.png"
          alt=""
        />
      </div>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        В целях обеспечения надлежащего исполнения Законодательства Республики Узбекистан и Правил внутреннего контроля
        финансовые организации должны выявлять операции, попадающие под требования ПОД/ФТ. Требования постоянно
        обновляются, а также дополняются международными организациями, что заставляет финансовые организации регулярно
        пересматривать и дорабатывать существующие процессы автоматизации.
      </p>

      <p class="max-w-[980px] lg:mx-auto text-[16] leading-[20px] font-normal mb-6 mx-5">
        С какими проблемами сталкиваются банки, у которых AML является частью АБС:
      </p>

      <div class="max-w-[980px] md:mx-auto flex items-center justify-between flex-col lg:flex-row mx-5 my-16">
        <img class="flex-[0_0_25%] lg:mb-0 mb-10" src="images/services/frame_1.png" alt="" />
        <div class="flex-[0_0_65%] md:mx-0 mx-5">
          <ul class="list-disc">
            <li class="text-[18px] leading-8 font-normal">
              В монолитной архитектуре отсутствуют сервисы AML, которые можно вызывать в других системах, например, в
              процессинге
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Чтобы добавить новые проверки, необходимо подключать вендора АБС, что приводит к длительным и дорогим
              доработкам, так как изменения в модуле AML затрагивают ядро АБС
            </li>
            <li class="text-[18px] leading-8 font-normal">
              Отсутствие гибких настроек, из-за чего возникают проблемы с кастомизацией и реализацией логики сложных
              проверок в АБС, например контроль назначения платежа, общие суммы транзакций
            </li>
            <li>Необходимо дорабатывать модуль для формирования отчетов регуляторам</li>
            <li>Много проверок в силу отсутствия автоматизации выполняется вручную</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-[1100px] h-[350px] rounded-md bg-fuchsia-300 mx-auto my-10"></div>

    <div class="our__approach pt-16 pb-96">
      <div class="our__approach--container max-w-[980px] lg:mx-auto mx-5">
        <h1 class="font-extrabold text-[30px] leading-[34px]">НАШ ПОДХОД</h1>

        <p class="text-[16] leading-[20px] font-normal mt-8 mb-16">
          Мы рекомендуем, чтобы решение AML было отдельным приложением и не являлось частью АБС. При такой архитектуре
          банк получает следующие преимущества:
        </p>

        <div v-for="(a, i) in info.nineth_approach" :key="i" class="approach">
          <div class="approach__title flex flex-nowrap justify-between items-center">
            <h2 class="text-[24px] leading-7 text-[#2199B4] font-bold">{{ a.title }}</h2>
            <div class="relative min-w-[84px] min-h-[38px] text-center">
              <img class="absolute z-0" src="/images/services/arrow.svg" alt="" />
              <span class="text-[30px] text-white font-extrabold relative z-10"> {{ i + 1 }} </span>
            </div>
          </div>
          <p class="approach__text text-[16] leading-[20px] font-normal mt-6 mb-24">
            {{ a.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="best__practice -mt-96 mb-20 max-w-[1100px] mx-auto">
      <div
        class="best__practice--container relative z-0 bg-[#2199B4] rounded-[40px] lg:mx-auto mx-5 px-4 py-10 md:p-14"
      >
        <h1 class="font-extrabold text-[30px] leading-[34px] text-white">BEST PRACTICE</h1>
        <div class="practices flex flex-wrap justify-between flex-col md:flex-row">
          <div v-for="(b, i) in info.nineth_best_practice" :key="i" class="pratice flex-[0_1_45%] my-14 mx-3">
            <div class="image w-[80px] h-[80px] bg-white rounded-[20px] flex items-center justify-center mb-5">
              <img :src="b.img" alt="" />
            </div>
            <p class="text-white text-[16] leading-[20px] font-normal">{{ b.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import ServicesInfo from './data'

export default {
  name: 'ServicesPage',
  data() {
    return {
      services: [
        {
          name: 'IT СТРАТЕГИЯ / IT АРХИТЕКТУРА',
          url: '#strategy',
        },
        {
          name: 'Data Management',
          url: '#dwh',
        },
        {
          name: 'DATA GOVERNANCE',
          url: '#data_gvr',
        },
        {
          name: 'КАЧЕСТВО ДАННЫХ',
          url: '#quality_data',
        },
        {
          name: 'КАТАЛОГ ДАННЫХ И УПРАВЛЕНИЕ МЕТАДАННЫМИ',
          url: '#management_metadt',
        },
        {
          name: 'УПРАВЛЕНИЕ МАСТЕР-ДАННЫМИ',
          url: '#control_data',
        },
        {
          name: 'Мобильные приложения и заказная разработка',
          url: '#app_development',
        },
        {
          name: 'Оптимизация бизнес-процессов',
          url: '#optimization_business',
        },
        {
          name: 'Robot Process Automation',
          url: '#automation_process',
        },
        {
          name: 'Anti-Money Laundering – Противодействие отмыванию денег',
          url: '#anti_money',
        },
        {
          name: 'Enterprise Application Integration',
          url: '#ingetration_app',
        },
      ],
      info: ServicesInfo,
      overlay: false,
    }
  },

  destroyed() {
    document.body.style.overflow = 'visible';
  },

  methods: {
    toggleSidebar() {
      const sidebar = document.getElementById('sidebar')
      const marginLeft = parseInt(sidebar.style.marginLeft)
      sidebar.style.marginLeft = marginLeft === 0 ? '-350px' : '0px'
      this.overlay = !this.overlay
      document.body.style.overflow = marginLeft === 0 ? 'visible' : 'hidden'
    },

    goToBlock(url) {
      const $targetEle = $(url)
      $('html, body').stop().animate({
          'scrollTop': $targetEle.offset().top
      }, 100, 'swing');
      this.toggleSidebar()
    }
  },
}
</script>

<style src="~/assets/css/services.css"></style>
