'use strict'

class GroupUpdateController {
  constructor({ socket, request }) {
    this.socket = socket
    this.request = request
    console.log('A new subscription for grup', socket.topic)
  }

  onMessage(message) {
    console.log('got message', message)
  }

  onClose() {
    console.log('Closing subscription for grup', this.socket.topic)
  }
}

module.exports = GroupUpdateController
