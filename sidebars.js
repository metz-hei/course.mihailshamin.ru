

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
};

/**
 module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: 'Вопросы к дизайнеру',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'design/index'
      },
      items: [
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
        'design/index',
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
    },
  ],
  mySidebar2: [
    {
      type: 'category',
      label: 'Дев',
      link: {
        type: 'doc',
        id: 'develop/index'
      },
      items: [
        'develop/index',
        'develop/dod', 
        'develop/dor',
        'develop/backup',
      ],
    },
    {
      type: 'link',
      label: 'Learn more',
      href: 'https://example.com',
    },
  ],
};

**/
