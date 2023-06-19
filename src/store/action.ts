export default {
  setUserName: function(payload) {
    return {
      type: 'SetUserName',
      payload
    }
  }
}