// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

module.exports = {
  themes: ['@docusaurus/theme-classic'],
};
const config = {
  plugins: [
    ['docusaurus-plugin-yandex-metrica', {
      counterID: '87077503',
    }],

],
  title: 'Анкета менеджера IT-проектов',
  tagline: 'Поможет опросить ключевых членов команды и познакомиться с их работой, планами, понять компетенции, выявить имеющиеся или потенциальные проблемы и определить степень их влияния на бизнес.',
  url: 'https://course.mihailshamin.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/metz-hei/course.mihailshamin.ru/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Вопросы',
        logo: {
          alt: 'Вопросы',
          src: 'img/logo.svg',
        },
        items: [
          {collapsible: false, to: '/po', label: 'К продакту', position: 'left',},
          {collapsible: false, to: '/develop', label: 'Разработчику', position: 'left'},
          {collapsible: false, to: '/design', label: 'Дизайнеру', position: 'left',},
          {collapsible: false, to: '/marketing', label: 'Маркетологу', position: 'left',},
          {collapsible: false, to: '/support', label: 'Поддержке', position: 'left',},
          {collapsible: false, to: '/technical-writer', label: 'Техпису', position: 'left',},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Вопросы',
            items: [
              {
                label: 'К продакту',
                to: '/po',
              },
              {
                label: 'Разработчику',
                to: '/develop',
              },
              {
                label: 'Дизайнеру',
                to: '/design',
              },
              {
                label: 'Маркетологу',
                to: '/marketing',
              },
              {
                label: 'Поддержке',
                to: '/support',
              },
              {
                label: 'Техпису',
                to: '/technical-writer',
              },
            ],
          },
          {
            title: 'Связаться',
            items: [
              {
                label: 'Инстаграм',
                href: 'https://www.instagram.com/kopim.na.modelsplaid/',
              },
              {
                label: 'Телеграм',
                href: 'https://t.me/MihailShamin',
              },
              {
                label: 'Пинтерест',
                href: 'https://www.pinterest.ru/Mihail_Shamin/',
              },
              {
                label: 'shamin.michael@gmail.com',
                href: 'mailto:shamin.michael@gmail.com',
              },
            ],
          },
          {
            title: 'Задонатить',
            items: [
                {
                  html: 'Если было полезно, <a href="https://yoomoney.ru/to/41001868673971">поддержите автора</a>.',
                },
              ],
              },
            ],
        copyright: `© ${new Date().getFullYear()} Проект <a href="https://mihailshamin.ru">Михаила Шамина</a>`,
      },
    }),
};

module.exports = config;
