import { MessageService } from './MessageService'
import { MessageLogger } from './MessageLogger'

const messageLoggerReader = new MessageLogger('reader')
const messageLoggerWriter = new MessageLogger('writer')
const messageService = new MessageService(messageLoggerReader, messageLoggerWriter)
messageService.save(0, 'Hello World!')

