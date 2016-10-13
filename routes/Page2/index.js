module.exports = {
  path: '/page2',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/page2'))
    })
  }
}
