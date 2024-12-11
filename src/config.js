export const config = {
  url: {
    login: '/login',
    home: '/',
    create: '/create',
    camera: '/camera',
    profile: '/profile',
    settings: '/settings',
    registration: '/register',
    privacy: '/privacy-policy',
    cookie: '/cookie-use',
    terms: '/terms-and-conditions',
    asset_cdn: 'https://d1cd149ok26yak.cloudfront.net'
  },
  api: {
    user: {
      logout: '/api/v1/logout',
      login: '/api/v1/login',
      register: '/api/v1/register',
      forgot_password: '/api/v1/forgot-password',
      confirm_forgot_password: '/api/v1/confirm-forgot-password',
      session: '/api/v1/session'
    },
    turnstile: '/api/v1/turnstile',
    log: {
      errors: ''
    },
    posts: '/api/v1/posts',
    test: '/api/v1/test',
    likes: '',
    shares: '',
    views: '',
    comments: '',
  },
  store: {
    posts: {
      index: 'posts',
      create: 'create',
      captions: 'captions'
    }
  },
  cookie: {
    session: 'session'
  }
}
