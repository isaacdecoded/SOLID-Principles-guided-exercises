import { MessageService } from '../srp/MessageService'
import { LoggerManagerSentry } from './LoggerManagerSentry'

export class CustomMessageService extends MessageService {
  get logger() {
    return new LoggerManagerSentry()
  }
}