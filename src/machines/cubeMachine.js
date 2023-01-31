import {assign, createMachine} from "xstate";


const cubeMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QGMCuAjMBZAhsgFgJYB2YAdAEKqEA2EAwgPYC2zOxEAMobAC4DEAMUYAnZgAISAB1S9xBdjAgBtAAwBdRKCmNYhXoUbEtIAB6IAtAEYArDbJWAHACYAbK5sBmV6oDsAFn8bABoQAE9EVzJfLxtnT19VR0crK39vAF8M0LRMXAIScipaBhY2Dm4+fgBBCAhxJlZ2FQ0THT0DIxNzBAtPdLIbK1U-JJt-VVcATmdQiIRnKyik1Lsp3ynHSccsnIxsPCJSSmo6RvKuHgEABRFGZDhYcRor+TLm2DVNJBB2-UNjD8ep4rL4yO4RptxgkAp45ogYYMJp4kq5+oFVM5diBcgcCsdimd3hUrvx6DQwDgRG8mhxnlcvm1dP8ukDEKkrNFfM5Eo5EqC0tN4Qt7I5PM5nDZXP4eaorJs0tjcfkjuRzs1xLd7o8SFB+BAjOQSAA3RgAa3IysOhTI6rpWoesD0xCgCBN9xwnWIX0ZPz+Xu6lmGYJsMyszkcQxlU3FjmFnhmZBRXmcYZsI0c-iy2RAxEYEDgJit+LATI6AMDvQTnKGI1540mM2FFi20X80pSjim-hcUaV+xVNsJpVplz4ZZZgNAPRbUQTUyWkbF7dBvmFSzBKTlMRsyUSqimrn7eWtxzt9QdOpdE4DbN6kbIgU2rniI08LgjwqGzkGVnFqi8RwPF8XxPGzDIgA */
createMachine({
  states: {
    BuildCommandList: {
      on: {
        "Form input changed": {
          target: "BuildCommandList",
          internal: true,
          actions: "assignInputToContext"
        },

        "Add Command": {
          target: "BuildCommandList",
          internal: true,
          // cond: "validCommand",
          actions: "addCommandToCommandList"
        },

        "Process list commands": "Command Processing",

        "Clear command list": {
          target: "BuildCommandList",
          internal: true,
          actions: "clearCommands"
        }
      }
    },

    "Command Processing": {
      invoke: {
        src: "processCommands",
        onDone: {
          actions: "assignCommandProcessingResultsToContext",
          target: "BuildCommandList"
        }
      }
    }
  },
  context: {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    commands: [],
    error: null,
    formName: '',
    formX: '',
    formY: '',
    formZ: '',
  },

  initial: "BuildCommandList",
  id: "cubeMachine"


}, {
  actions: {
    assignInputToContext: assign((context, event) => {
      
      if (event.valueType == 'name') {
        return {
          formName: event.value
        };
      } else if(event.valueType == 'x') {
        return {
          formX: event.value
        };
      } else if(event.valueType == 'y') {
        return {
          formY: event.value
        };
      } else if(event.valueType == 'z') {
        return {
          formZ: event.value
        };
      }
      
    }),

    addCommandToCommandList: assign((context, event) => {

      let newCommandArray = context.commands
      newCommandArray.push({name: context.formName, x: parseInt(context.formX), y: parseInt(context.formY), z: parseInt(context.formZ)})

      return {
        commands: newCommandArray
      }
    }),

    assignCommandProcessingResultsToContext: assign((context, event) => {
      return {
        position: event.data[0],
        rotation: event.data[1],
        commands: []
      }
    }),
    clearCommands: assign(() => {
      return {
        commands: []
      }
    })
  },
  


})

export default cubeMachine