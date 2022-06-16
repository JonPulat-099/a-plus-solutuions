<template>
  <div>
    <nav class="bg-[#ffffff] sticky top-0">
      <div class="flex w-full mx-auto py-2">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#bbbbbb] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          @click="openSidebar"
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
      <div id="sidebar" class="absolute top-[50px] left-0">
        <ul>
          <NavLink
            v-for="(s, i) in services"
            :key="i"
            v-smooth-scroll
            :name="s.name"
            :url="s.url"
            @click="openSidebar"
          />
        </ul>

        <nuxt-link class="backToHome" to="/"> Назад </nuxt-link>
      </div>
    </nav>
    <section id="strategy" class="service__section">
      <h2 class="service__section--header text-center text-[#1B778B] uppercase font-bold my-6 text-[32px]">
        IT СТРАТЕГИЯ / IT АРХИТЕКТУРА
      </h2>
      <p class="service__section--text text-[18px] my-2">
        Развитие бизнеса любой современной организации требует поддержки со стороны ИТ, и зачастую ИТ-служба не в
        состоянии обеспечить необходимую скорость развития и инноваций. Такая ситуация возникает из-за того, что многие
        организации обладают устаревшими и сложными в облуживании системами, а также используют устаревший монолитный
        подход в выстраивании ИТ архитектуры.
      </p>
      <p class="service__section--text text-[18px] my-2">
        Таким образом, создаются огромные препятствия для внедрения инноваций и организации становятся неспособными
        быстро и гибко реагировать на новые потребности рынка, например, перейти на новую АБС, развернуть мобильное
        приложение, или запустить онлайн-сервис, проанализировать клиентские данные и применить персонифицированный
        подход, и, в целом, стать цифровым бизнесом.
      </p>
      <p class="service__section--text text-[18px] my-2">
        Для того, чтобы банк стал высокотехнологичным, а ИТ выполняла не только вспомогательную функцию, но и были
        драйвером инноваций, обязательными условиями являются наличие гибкой ИТ архитектуры и современного
        технологического стека. Банкам Узбекистана не хватает опыта и знаний о лучших мировых практиках и их применении.
        Часто менеджмент компаний задается вопросами:
      </p>

      <article class="section__questions">
        <img src="/images/services/woman.jpg" alt="" />
        <ul class="questions my-10">
          <li>
            <img src="/images/diamond.svg" alt="" />
            <p class="text-[18px]">
              <b class="text-[#1B778B]">Как</b> нам развивать <b class="text-[#1B778B]">ИТ-архитектуру</b>?
            </p>
          </li>
          <li>
            <img src="/images/diamond.svg" alt="" />
            <p class="text-[18px]">Что делать с <b class="text-[#1B778B]">АБС</b>?</p>
          </li>
          <li>
            <img src="/images/diamond.svg" alt="" />
            <p class="text-[18px]">Как достичь высокой <b class="text-[#1B778B]">эффективности</b> инвестиций в ИТ?</p>
          </li>
          <li>
            <img src="/images/diamond.svg" alt="" />
            <p class="text-[18px]">
              Как необходимо расставить <b class="text-[#1B778B]">приоритеты</b>? Что должно быть реализовано в первую
              очередь?
            </p>
          </li>
          <li>
            <img src="/images/diamond.svg" alt="" />
            <p class="text-[18px]">
              Какой необходимо заложить <b class="text-[#1B778B]">бюджет на развитие</b>? Какие будут
              <b class="text-[#1B778B]">сроки и ресурсы</b>?
            </p>
          </li>
          <li>
            <img src="/images/diamond.svg" alt="" />
            <p class="text-[18px]">Какой <b class="text-[#1B778B]">стек технологий</b> использовать?</p>
          </li>
        </ul>
      </article>

      <p class="service__section--text text-[18px] my-2">
        Для принятия стратегически обоснованных архитектурных решений нужен взгляд со стороны независимых экспертов,
        обладающих best practice в ИТ стратегии и архитектуре. Наша компания поможет четко сформулировать стратегию
        развития ИТ и дорожную карту перехода от архитектуры, поддерживаемой устаревшими ИТ системами, к целевой. Мы
        применяем проверенный многими международными проектами подход, помогая финансовым организациям технологически
        совершенствоваться.
      </p>

      <h2 class="service__section--header text-center text-[#1B778B] uppercase font-bold my-10 text-[32px]">
        НАШ ПОДХОД
      </h2>
      <p class="service__section--text text-[18px] my-2">
        Обладая опытом как в трансформации бизнеса, так и в технологиях, наши консультанты помогут в разработке
        комплексной ИТ-стратегии. Наш подход включает следующие шаги:
      </p>

      <article class="service__section--solutions my-12">
        <div class="solutions">
          <span class="text-center text-[35px] font-bold align-middle">1</span>
          <div class="block">
            <h3 class="text-[20px] py-3 font-bold uppercase">АНАЛИЗ ТЕКУЩЕГО СОСТОЯНИЯ И ПЛАНОВ РАЗВИТИЯ БИЗНЕСА.</h3>
            <p>
              Дорожная карта развития бизнеса - важная вводная составляющая для определения дорожной карты развития ИТ.
              Поэтому мы начинаем с обзора видения, целей и стратегии бизнеса для дальнейшего определения стратегии
              развития ИТ - какими должны быть технологии и что они должны делать, чтобы поддерживать бизнес-стратегию и
              приносить пользу бизнесу. На данном этапе мы активно вовлекаем руководителей бизнес-подразделений в
              интервью и определяем болевые точки бизнеса, почему они возникли, оцениваем уровень автоматизации
              бизнес-процессов и расставляем приоритеты бизнес-инициативам. Нам необходимо понять, какие возможности
              может реализовать ИТ, который может стать основой для новых бизнес-моделей, и как влияют недостатки ИТ на
              бизнес.
            </p>
          </div>
        </div>
        <div class="solutions">
          <span class="text-center text-[35px] font-bold align-middle"> 2 </span>
          <div class="block">
            <h3 class="text-[20px] py-3 font-bold uppercase">Анализ текущего состояния ИТ.</h3>
            <p>
              На данном этапе мы проводим оценку текущей ИТ архитектуры, а также оцениваем запланированные
              ИТ-инициативы. С помощью опросников и личных интервью мы оцениваем состояние текущего портфеля
              ИТ-проектов, определяем функциональную, прикладную и интеграционную ИТ архитектуру, определяя целевую
              ИТ-архитектура, а также какие системы имеют наивысший приоритет для развития, замены или модернизации. Для
              определения эффективности операционной модели ИТ мы анализируем текущий уровень зрелости ИТ-процессов,
              текущую организационную структуру ИТ, существующую модель сорсинга услуг ИТ, определяем функции персонала
              и текущий уровень компетенций специалистов, проводим экспресс-анализ ИТ-затрат.
            </p>
          </div>
        </div>
        <div class="solutions">
          <span class="text-center text-[35px] font-bold align-middle"> 3 </span>
          <div class="block">
            <h3 class="text-[20px] py-3 font-bold uppercase">ОПРЕДЕЛЕНИЕ ЦЕЛЕВОГО СОСТОЯНИЯ ИТ-АРХИТЕКРУТЫ.</h3>
            <p>
              Этап формирования видения ИТ-стратегии, предполагающей будущее состояние, в котором ИТ-системы,
              технологии, люди и процессы полностью соответствуют бизнес-стратегии. Мы прорабатываем предложения по
              развитию ИТ-архитектуры с развилками ИТ решений с указанием преимуществ и недостатков каждого варианта. Мы
              определяем целевую прикладную и интеграционную архитектуры и проводим Gap-анализ – анализ недостатков и
              отклонение текущего состояния ИТ-архитектуры от целевой. На данном этапе определяется предварительный
              набор действий по переходу из текущего состояния ИТ-Архитектуры к целевому. Мы анализируем и формируем
              целевую процессную модель организационной структуры ИТ и целевую модель управления услугами
              ИТ-поставщиков, а также рекомендуем предварительные шаги по переходу к целевой ИТ-организации.
            </p>
          </div>
        </div>
        <div class="solutions">
          <span class="text-center text-[35px] font-bold align-middle">4</span>
          <div class="block">
            <h3 class="text-[20px] py-3 font-bold uppercase">ФОРМИРОВАНИЕ ПЛАНА ТРАНСФОРМАЦИИ.</h3>
            <p>
              Это этап, на котором мы разрабатываем дорожную карту развития ИТ и отдельные инициативы, необходимые для
              того, чтобы прийти к целевой ИТ архитектуре – это последовательные действия, чтобы определить, как
              организация достигнет целевой архитектуры. Неотъемлемая часть данного этапа - разработка перечня инициатив
              развития. Мы проанализируем внешние и внутренние трудозатраты и инвестиции на реализацию каждой
              инициативы, при необходимости разработаем паспорта проектов с описанием этапов, взаимосвязи с другими
              инициативами, рисков и сроков, расставим приоритеты инициатив и сформируем целевой портфель мероприятий.
            </p>
          </div>
        </div>
        <div class="solutions">
          <span class="text-center text-[35px] font-bold align-middle">5</span>
          <div class="block">
            <h3 class="text-[20px] py-3 font-bold uppercase">ВЫПОЛНЕНИЕ ИНИЦИАТИВ.</h3>
            <p>
              Мы готовы поддержать реализацию предложенных инициатив и проектов. На данном этапе мы готовы как
              предоставить заказчику ключевые, необходимые для реализации инициативы, так и реализовать проекты под
              ключ.
            </p>
          </div>
        </div>
      </article>

      <h2 class="text-center text-[#1B778B] uppercase font-bold my-10 text-[32px]">BEST PRACTICE</h2>
      <article class="best__practice">
        <div class="practice p-6">
          <div class="image"><img src="/images/services/abc.png" alt="" /></div>
          <p>
            Европейский Best Practice от наших партнеров Adastra Business Consulting (ABC). Для обследования
            бизнеса-процессов компании мы привлекаем бизнеса-консультантов ABC
          </p>
        </div>
        <div class="practice p-6">
          <div class="image"><img src="/images/services/experience.png" alt="" /></div>
          <p>Опыт реализации аналогичных проектов, как для заказчиков Узбекистана, так и других стран СНГ и Европы</p>
        </div>
        <div class="practice p-6">
          <div class="image"><img src="/images/services/templates.png" alt="" /></div>
          <p>
            Собственная методология: типовые шаблоны проектных документов (отчетов, презентаций, паспортов инициатив),
            опросники
          </p>
        </div>
        <div class="practice p-6">
          <div class="image"><img src="/images/services/pin.png" alt="" /></div>
          <p>
            Наличие команды, готовой к дальлейшей реализации инициатив или сопровождении исполнения ИТ стратегии,
            обучение и передача экспертизы бизнесу и ИТ
          </p>
        </div>
      </article>
    </section>
    <section id="dwh" class="service__section">
      <h2 class="service__section--header text-center text-[#1B778B] uppercase font-bold my-6 text-[32px]">
        Data Management DWH
      </h2>
      <p class="service__section--text text-[18px] my-2">
        С ростом организации растет количество информационных систем, а также накапливается большой объем информации.
        Сегодня данные являются ценным активом компании и основой для принятия обоснованных управленческих решений. Для
        этого бизнесу должны быть доступны точные, выверенные и прозрачные данные, а также инструменты для проведения
        самостоятельного анализа.
      </p>
      <p class="service__section--text text-[18px] my-2">
        Тем не менее, часто в организациях отсутствует культура по принятию бизнес-решений на основе данных и статистики
        – управленческие решения принимаются интуитивно. В результате бизнес сталкивается с ошибочными выводами,
        снижению операционной эффективности и качества обслуживания клиентов, потере конкурентных преимуществ. Причинами
        отсутствия data-driven подхода являются:
      </p>

      <article class="section__questions">
        <img src="/images/services/dwh.jpg" alt="" />
        <ul class="questions my-10">
          <li>
            <img src="/images/diamond.svg" alt="" />
            <p class="text-[18px]">
              Нехватка <b class="text-[#1B778B]">best practice</b> и бизнес-экспертизы (какие отчеты нужно
              <b class="text-[#1B778B]">сформировать</b>, как и какие данные необходимо
              <b class="text-[#1B778B]">анализировать</b>)
            </p>
          </li>
          <li>
            <img src="/images/diamond.svg" alt="" />
            <p class="text-[18px]">
              Проблемы с <b class="text-[#1B778B]">качеством данных</b>, низкий уровень доверия к данным
            </p>
          </li>
          <li>
            <img src="/images/diamond.svg" alt="" />
            <p class="text-[18px]">Отсутствие необходимых <b class="text-[#1B778B]">ИТ технологий и решений</b></p>
          </li>
          <li>
            <img src="/images/diamond.svg" alt="" />
            <p class="text-[18px]">Hехватка <b class="text-[#1B778B]">технических</b> компетенций.</p>
          </li>
        </ul>
      </article>

      <p class="service__section--text text-[18px] my-2">
        Практически в каждой организации существует множество разрозненных источников данных (CRM, АБС, Процессинг, …),
        вследствие этого у каждого подразделения могут быть свои «версии правды», основанные на различных отчетах и
        методологиях, которые противоречат друг другу. Из-за отсутствия целостного подхода к управления данными и единой
        аналитической платформы бизнес-пользователям не хватает полных детальных или исторических данных для проведения
        всестороннего и глубокого анализа. Пользователям часто приходится вручную объединять и сверять огромное
        количество объемных файлов, что приводит к потере эффективного времени и возникновению ошибок. Кроме того, из-за
        отсутствия специализированных инструментов бизнес-пользователи формируют сотни Excel-отчетов иногда напрямую из
        транзакционных систем и не имеют возможности провести продвинутый анализ или моделирование данных.
      </p>
      <p class="service__section--text text-[18px] my-2">
        Особенно остро данные проблемы ощущаются в финансовом секторе. Организации финансового сектора не производят
        ничего кроме огромного количества данных, поэтому то насколько финансовая организация эффективно управляет
        данные во многом определяет ее эффективность.
      </p>
      <p class="service__section--text text-[18px] my-2">
        Благодаря построению корпоративного хранилища данных (КХД) организация может собирать и хранить
        структурированную, полную и консистентную информацию в одном месте. КХД является «единой версией правды» для
        всей организации, это единая аналитическая база для self-service аналитиков и data scientists.
      </p>

      <h2 class="text-center text-[#1B778B] uppercase font-bold my-10 text-[32px]">ПРЕИМУЩЕСТВА ВНЕДРЕНИЯ КХД</h2>

      <div class="visaul__dwh">
        <div class="visaul__dwh--1">
          <img src="/images/services/big-data.png" alt="" />
          <img src="/images/services/big-data.png" alt="" />
          <img src="/images/services/big-data.png" alt="" />
          <p>Разрозненные источники данных</p>
        </div>
        <div class="visaul__dwh--2"></div>
        <div class="visaul__dwh--3">
          <img src="/images/services/server.png" alt="" />
          <p>КХД</p>
        </div>
        <div class="visaul__dwh--4"></div>
        <div class="visaul__dwh--5">
          <div>
            <img src="/images/services/stock-market.png" alt="" />
            <p>Бизнес-отчетность</p>
          </div>
          <div>
            <img src="/images/services/monitoring.png" alt="" />
            <p>Self-seervice аналитика</p>
          </div>
          <div>
            <img src="/images/services/ai.png" alt="" />
            <p>Продвинутая аналитика</p>
          </div>
        </div>
        <div class="visaul__dwh--6"></div>
        <div class="visaul__dwh--7">
          <img src="/images/services/solution.png" alt="" />
          <p>Верные решения</p>
        </div>
      </div>

      <h2 class="service__section--header text-center text-[#1B778B] uppercase font-bold my-10 text-[32px]">
        НАШ ПОДХОД
      </h2>
      <p class="service__section--text text-[18px] my-2">
        A+ Solutions предоставляет полный спектр услуг в области построения корпоративных хранилищ данных,
        бизнес-аналитики и управления данными. Наши эксперты обладают богатым опытом внедрения хранилищ данных и систем
        бизнес-анализа. Построение Корпоративного хранилища данных
      </p>

      <article class="service__section--solutions my-12">
        <div class="solutions">
          <span class="text-center text-[35px] font-bold align-middle">1</span>
          <div class="block">
            <h3 class="text-[20px] py-3 font-bold uppercase">Целевая Архитектура КХД</h3>
            <p>
              Инфраструктура управления данными должна поддерживать стратегические цели организации. Поэтому на первом
              этапе мы анализируем существующие компоненты архитектуры данных и процессов, формируем дорожную карта
              развития аналитического ландшафта, включая новые инициативы и оценку бюджета. Дорожная карта включает
              внедрение КХД согласно релизам: каждый релиз – это внедрение части КХД на отдельной предметной области
            </p>
          </div>
        </div>
        <div class="solutions">
          <span class="text-center text-[35px] font-bold align-middle"> 2 </span>
          <div class="block">
            <h3 class="text-[20px] py-3 font-bold uppercase">Дизайн Структуры данных в КХД (Бизнес-модель)</h3>
            <p>
              На втором этапе мы разрабатываем целевую архитектуру хранилища данных, определяем оптимальный путь
              перехода к целевой архитектуре, рекомендуем стек технологий
            </p>
          </div>
        </div>
        <div class="solutions">
          <span class="text-center text-[35px] font-bold align-middle"> 3 </span>
          <div class="block">
            <h3 class="text-[20px] py-3 font-bold uppercase">
              Разработка интеграцыонных процессов загрузки данных в КХД
            </h3>
            <p>
              На третьем этапе мы разрабатываем дизайн целевой модели Хранилища данных на выделенной предметной области.
              Далее, мы подключаем необходимые источники данных, разрабатываем интеграционные процессы (ETL) для
              загрузки данных в КХД и необходимые отчеты и аналитические приложения
            </p>
          </div>
        </div>
        <div class="solutions">
          <span class="text-center text-[35px] font-bold align-middle">4</span>
          <div class="block">
            <h3 class="text-[20px] py-3 font-bold uppercase">Реализация релизов согласно дорожной карте</h3>
            <p>
              Реализуем остальные релизы хранилища данных согласно дорожной карте совместно с командой заказчика. На
              данном этапе мы передаем компетенции и обучаем специалистов заказчика.
            </p>
          </div>
        </div>
      </article>

      <h2 class="text-center text-[#1B778B] uppercase font-bold my-10 text-[32px]">BEST PRACTICE</h2>
      <article class="best__practice">
        <div class="practice p-6">
          <div class="image"><img src="/images/services/abc.png" alt="" /></div>
          <p>Опыт реализации аналогичных проектов, как для заказчиков Узбекистана, так и других стран СНГ и Европы</p>
        </div>
        <div class="practice p-6">
          <div class="image"><img src="/images/services/experience.png" alt="" /></div>
          <p>Обучение и передача экспертизы бизнесу и ИТ, формирование компетенций в команде заказчика</p>
        </div>
        <div class="practice p-6">
          <div class="image"><img src="/images/services/templates.png" alt="" /></div>
          <p>Собственная методология внедрения и развития КХД и BI, шаблоны опросников и проектных документов</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TestApp',

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
      ],
    }
  },

  methods: {
    openSidebar() {
      const sidebar = document.getElementById('sidebar')
      const margin = parseInt(sidebar.style.marginLeft)
      sidebar.style.marginLeft = margin === 0 ? '-350px' : '0px'
    },
  },
}
</script>

<style lang="css">
nav {
  width: 100%;
  box-shadow: 2px 21px 29px -15px rgba(34, 60, 80, 0.2);
  z-index: 1001;
}

nav > div {
  max-width: 1400px;
}

.logo {
  height: 35px;
}

#sidebar {
  max-width: 350px;
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  position: fixed;
  overflow-y: scroll;
  margin: 0 0 0 -350px;
  transition: 0.3s;
  box-shadow: inset 2px 21px 29px -15px rgba(34, 60, 80, 0.2);

  padding: 20px 20px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.backToHome {
  display: block;
  padding: 5px 15px;
  border: 1px solid #1B778B;
  margin-top: auto;
  border-radius: 10px;
}

.backToHome:hover {
  background: #1B778B;
  color: #FFFFFF;
}

.service__section {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.section__questions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
}

@media only screen and (max-width: 1024px) {
  .section__questions {
    flex-wrap: wrap;
  }
}

.section__questions img {
  width: 250px;
  height: 250px;
}

.questions li {
  display: flex;
  align-items: center;
}

.questions li b {
  margin: 0;
}

.questions img {
  width: 14px;
  height: 14px;
  margin: 0 8px 0 0;
}

.service__section--solutions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.solutions {
  flex: 1 0 30%;
  min-width: 300px;
  background: #f8f8f8;
  border-radius: 0 10px 10px 0;
  border-left: 1px solid #000;
}

.solutions span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 62px;
  background: #1b778b;
  color: #ffffff;
  position: relative;
  left: -1px;
}

.solutions .block {
  padding: 0 15px 15px;
  position: relative;
}

.best__practice {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.best__practice .practice {
  flex: 1 0 45%;
  border: 1px solid #1b778b;
  border-radius: 10px;
}

.practice .image {
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  position: relative;
  background: rgba(27, 119, 139, 0.11);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.practice .image::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 1px solid #1b778b;
  z-index: -2;
}

.practice .image::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 1px solid #ffffff;
  border-radius: 30%;
  z-index: -1;
}

.practice img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: brightness(0);
}

.visaul__dwh {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.visaul__dwh img {
  width: 70px;
  height: 70px;
  filter: brightness(0) contrast(0) grayscale(0) hue-rotate(0) saturate(0);
}

.visaul__dwh p {
  margin: 0;
  font-weight: 500;
  color: #1b778b;
}

.visaul__dwh--1,
.visaul__dwh--3,
.visaul__dwh--7 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.visaul__dwh--5 div {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.visaul__dwh--5 p {
  margin: 0 0 0 10px;
}

.visaul__dwh--2,
.visaul__dwh--4,
.visaul__dwh--6 {
  width: 50px;
  height: 2px;
  background: #1b778b;
  position: relative;
}

.visaul__dwh--2::after,
.visaul__dwh--4::after,
.visaul__dwh--6::after,
.visaul__dwh--2::before,
.visaul__dwh--4::before,
.visaul__dwh--6::before {
  content: '';
  width: 15px;
  height: 2px;
  position: absolute;
  right: -7px;
  background: #1b778b;
}

.visaul__dwh--2::before,
.visaul__dwh--4::before,
.visaul__dwh--6::before {
  transform: rotate(25deg) translate(-9px, 0px);
}

.visaul__dwh--2::after,
.visaul__dwh--4::after,
.visaul__dwh--6::after {
  transform: rotate(-25deg) translate(-9px, 0px);
}

@media only screen and (max-width: 1024px) {
  .visaul__dwh {
    flex-direction: column;
  }

  .visaul__dwh--2,
  .visaul__dwh--4,
  .visaul__dwh--6 {
    width: 2px;
    height: 50px;
    background: #000;
    position: relative;
    margin: 15px 0;
  }

  .visaul__dwh--2::after,
  .visaul__dwh--4::after,
  .visaul__dwh--6::after,
  .visaul__dwh--2::before,
  .visaul__dwh--4::before,
  .visaul__dwh--6::before {
    bottom: 0;
  }

  .visaul__dwh--2::before,
  .visaul__dwh--4::before,
  .visaul__dwh--6::before {
    transform: rotate(60deg) translate(-8px, 1px);
  }

  .visaul__dwh--2::after,
  .visaul__dwh--4::after,
  .visaul__dwh--6::after {
    transform: rotate(120deg) translate(-8px, 0px);
  }
}
</style>
