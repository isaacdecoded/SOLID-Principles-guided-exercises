import MessageManager from '../srp/MessageManager'
import LoggerManagerSentry from './LoggerManagerSentry'

export default class CustomMessageManager extends MessageManager {
  get Logger() {
    return new LoggerManagerSentry()
  }
}