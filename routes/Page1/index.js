module.exports = {
  path: '/page1',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/page1'))
    })
  }
}
