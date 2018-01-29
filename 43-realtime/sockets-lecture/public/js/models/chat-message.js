class ChatMessage {
  constructor(message) {
    this.username = message.username
    this.timestamp = message.timestamp
    this.message = message.message
  }

  render(parentElement) {
    console.log('REDNER START')
    let container = document.createElement('div')
    let timestamp = document.createElement('span')
    let username = document.createElement('span')
    let message = document.createElement('span')

    container.classList.add('message')
    timestamp.classList.add('timestamp')
    username.classList.add('username')

    timestamp.textContent = this.timestamp
    username.textContent = this.username + ':'
    message.textContent = this.message

    container.appendChild(timestamp)
    container.appendChild(username)
    container.appendChild(message)

    console.log('REDNER DONE')
    parentElement.appendChild(container)
  }
}