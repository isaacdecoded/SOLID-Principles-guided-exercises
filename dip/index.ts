import MessageManager from './MessageManager'
import MessageLogger from './MessageLogger'

const messageLogger = new MessageLogger()
const messageManager = new MessageManager(messageLogger, messageLogger)
