const { withLayer0, withServiceWorker } = require('@layer0/next/config')

module.exports = withLayer0(
  withServiceWorker({
    target: 'server',
    layer0SourceMaps: true,
  })
)
