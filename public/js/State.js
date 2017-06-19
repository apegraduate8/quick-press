import { EventEmitter } from 'events';
import Articles from './Articles'
// const EventEmitter = require('events')

const EV = new EventEmitter()

EV.on("render", function(method){
      // console.log("inside the event emitter >", method)
})

export default EV;
