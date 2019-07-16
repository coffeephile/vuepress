module.exports = {
  title: 'VuePress Demo',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      {
        title: 'Home',
        path: '/'
      },
        {
        title: 'Introduction',
        children: [
          {
            title: 'Part 1',
            path: '/introduction/intro1'
          },
          {
            title: 'Part 2',
            path: '/introduction/intro2'
          }
        ]
      },
      {
        title: 'Documents',
        children: [
          ['/docs/', 'Documents Top'],
          {
            title: 'Subsection',
            children: [
              ['/docs/subsec/', 'Subsection Top'],
              {
                title: 'Deep Subsection',
                children: [
                  ['/docs/subsec/subsubsec/', 'So deep.'],
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
