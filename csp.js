const policies = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://maps.googleapis.com',
    'https://www.googletagmanager.com',
  ],
  'child-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': ["'self'", 'https://raw.githubusercontent.com'],
  'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],
  'frame-src': ["'self'"],
  'connect-src': [
    "'self'",
    'https://fonts.googleapis.com',
    'https://www.googletagmanager.com',
    'https://maps.googleapis.com',
    'https://api.iconify.design',
    'https://api.simplesvg.com',
    'https://api.unisvg.com',
  ],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
