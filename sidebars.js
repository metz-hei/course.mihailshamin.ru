/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  design: [
      'design/index',
      {
        type: 'category',
        label: 'Как устроена работа над задачей?',
        link: {
          type: 'doc',
          id: 'design/work/index',
        },
        items: [
          'design/work/workFirstPresentation',
          'design/work/workSecondPresentation', 
          'design/work/workSorting',
        ]
      },
        'design/checklist', 
        {
          type: 'link',
          label: 'Проводите ли юзабилити-тестирование?',
          href: 'https://guides.kontur.ru/user-research/choosingresearch/',
        },
        'design/debt',
        'design/rdpk',
        'design/ds',
        'design/tokens',
        'design/matrix',  
      ],
  develop: [
        'develop/index',
        'develop/dor',
        'develop/dod',
        'develop/estimate',
        'develop/technicalDebt',
        'develop/culture',
        'develop/monitoring',
        'develop/incident',
        'develop/test',
        {
          type: 'category',
          label: 'Какая документация ведется по проекту?',
          link: {
            type: 'doc',
            id: 'develop/docs/index',
          },
          items: [
            'develop/docs/test-plan',
            'develop/docs/test-case', 
            'develop/docs/roadmap',
            'develop/docs/release-checklist',
            'develop/docs/product-vision',
            'develop/docs/project-charter',
          ]
        },
        'develop/delete',
        'develop/checklist',
        'develop/logs',
        {
          type: 'category',
          label: 'Как выкатываете в бой?',
          link: {
            type: 'doc',
            id: 'develop/deploy/index',
          },
          items: [
            {
              type: 'link',
              label: 'Какую стартегию деплоя используете?',
              href: 'https://habr.com/ru/company/flant/blog/471620/',
            },
            'develop/deploy/feature-flags',
          ]
        },
      {
        type: 'link',
        label: 'Как разворачиваете окружение?',
        href: 'https://guides.hexlet.io/vagrant/',
      },
      'develop/backup',
      'develop/kpi',
      'develop/matrix',
    ],
  po: [
      'po/index',
      'po/business',
      'po/product',
      'po/customers',
      'po/competitors',
      {
        type: 'category',
        label: 'Как ищутся гипотезы?',
        link: {
          type: 'doc',
          id: 'po/researches/index',
        },
        items: [
          'po/researches/marketing',
          'po/researches/functionalityAudit',
          'po/researches/technicalAudit',
          'po/researches/RFM',
          'po/researches/scriptAudit',
        ]
      },
      'po/feedback',
      {
        type: 'category',
        label: 'Как приоритизируются задачи?',
        link: {
          type: 'doc',
          id: 'po/prioritization/index',
        },
        items: [
          'po/prioritization/aarrr',
          'po/prioritization/heart',
          'po/prioritization/ducalis',
          {
            type: 'link',
            label: 'По циклу HADI',
            href: 'https://bureau.ru/soviet/20190425/',
          },
          'po/prioritization/it-agency',
        ]
      },
      'develop/docs/index',
      'po/metrics',
      'develop/logs',
      'po/task-create',
      'po/task-movement',
      'po/storytelling',
      'po/risks',
      'po/team',
      {
        type: 'category',
        label: 'Какие принципы приняты в команде?',
        link: {
          type: 'doc',
          id: 'po/principles/index',
        },
        items: [
          'po/principles/agile',
          'po/principles/lean-startup',
          'po/principles/hadi',
          {
            type: 'link',
            label: 'Кодекс профессиональной этики',
            href: 'https://bureau.ru/bb/soviet/20140623/',
          },
          'develop/dor',
          {
            type: 'link',
            label: 'Делать ≠ Сделать',
            href: 'https://bureau.ru/books/fff/demo/4',
          },
          'po/principles/first-time',
          'po/principles/dont-move',
          'po/principles/move',
          'po/principles/meeting',
          'po/principles/retro',
          'po/principles/50',
          {
            type: 'link',
            label: 'Не впритык',
            href: 'https://bureau.ru/bb/soviet/20130909/',
          },
          'po/principles/fast-communication',
          'po/principles/protocol',
          'po/principles/in-out',
          'po/principles/come-with-solution',
          'develop/checklist',
          {
            type: 'link',
            label: 'Технолог — тоже дизайнер',
            href: 'https://vimeo.com/34066658',
          },
          'design/checklist',
          {
            type: 'link',
            label: 'Дизайнер разделяет согласование и сдачу',
            href: 'https://youtu.be/WIFG_yQMCz8',
          },

        ]
      },
      'po/team-metrics',
      'po/happiness',
  ],
  support: [
    'support/index',
    'support/tickets',
    'support/channels',
    'support/guideline',
    'support/sla',
    'support/distribution-tickets',
    'support/play',
    'support/feedback',
    'support/custdev',
    'support/monitoring',
  ]
};
