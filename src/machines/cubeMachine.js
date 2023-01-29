import {createMachine} from "xstate";


const cubeMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QEsB0AhArsgNhAwgPYC2xAhgHYQAyysALgMQBihATsQATIUAOm9TgGMAFpRgQA2gAYAuolC9CsZPWSEKCkAA9EAWgCM0gOyoATNICcx41dsBWAGzSALC4A0IAJ76XAZjNUAz8XSz9pM0sI4wMzAF84zzQsXAIScipaBkYABTZCIThYLPoiUkoIWBl5JBAlFTUNLV0EQ2tUAJDje2MXMxDpA08fVrMze1QXAA4p6ymDe3sXQZcEpIxsPDKMmjomAEEICE5tiuqtetV1TVqWswXUGe7HR3srS0dI42HfPtQVqbGRxTd73V5rEDJTZpcqZPaMQ7HU5USQGGqKZRXJq3RAGYyBaR+EEg+xmYEuV5+H6tewhSaOClmKZkxxGUIQtDI455ApFHhQRgQDRgVA8ABuhAA1iLOekKpweYVYCoKFAEOKCmRGhRqudapdtc1EGZbP9nA4AlETTZqYYYqhgT0Aq57JYXAY+glEiAKIQIHAtMgLpjDTjRi4Jp0XN1ev1lkNvPpPgZUB8KdIluNQkyORtUlySsGGtcjQh2tHAcYpvYpm5Xo5LLbwo5HiZpgYjCa3FNc1yFfklSqoEWsTdQC1HKZLJYpuF+n5jH4ltZbdPUD0xg2Yr0XiavXEgA */
createMachine({
  states: {
    BuildCommandList: {
      on: {
        "Form input changed": {
          target: "BuildCommandList",
          internal: true,
          actions: "assignInputToContext"
        },
        "Add Command": [{
          target: "BuildCommandList",
          internal: true,
          cond: "validCommand",
          actions: "addCommandToCommandList"
        }, {
          target: "BuildCommandList",
          internal: true,
          cond: "erroredCommand",
          actions: "assignErrorToContext"
        }],
        ProcessListCommands: "Command Processing"
      }
    },

    "Command Processing": {
      invoke: {
        src: "processCommands",
        onDone: "BuildCommandList"
      }
    }
  },
  context: {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    commands: [],
    error: null,
  },

  initial: "BuildCommandList",
  id: "i"
})