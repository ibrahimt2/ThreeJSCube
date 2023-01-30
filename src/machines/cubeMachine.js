import {assign, createMachine} from "xstate";


const cubeMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QGMCuAjMBZAhsgFgJYB2YAdAEKqEA2EAwgPYC2zOxEAMobAC4DEAMUYAnZgAISAB1S9xBdjAgBtAAwBdRKCmNYhXoUbEtIAB6IAtAEYArAGYyATgBMADlcB2Ox4+OPANisAFjsAGhAAT0Rgp2dVfxtnKzsgr39HGxsAXyzwtExcAhJyKloGFjYObj5+AEEICHEmVnYVDRMdPQMjE3MEa2cPMg9k1RtXGxCrWwzwqIQ3KzJA30dVVytVVMTs3JB87DwiUkpqOmbKrh4BesaL1uUrTSQQTv1DYxe+q39-MjtVOtnEF7OsbI5PHNokFYvFBq5-CDVHYkh4cnkMIciidSucKq1qgIAAoiRjIOCwQn3DiwNTPbS6d49L6IOxWIa-QEQybeDwhKEIXlkSbI9b+FJBIKqZzo-aYwrHcjUxokskUkhQfgQIzkEgAN0YAGtyAcFcUyMrxKrybA9MQoAh9WScN1iHS6R1Ga7etEtssIc5xTYrK5vIMwpFEEEfmRgs47JMNls2XZ-Dk9sRGBA4CZTUdip6uh8ff04ksXO4vD4-IF+ZH+h5nMLfLzXI41ojEbK89iSmdyi0qtdC0zPqA+tYgq4yGM7AiUZKpb4bAKrElhW34sjw64gr9u-L8ydLdb1faR96Wf0JmRJRD-PHAXPnG4BcGm8GUbOETYfHZ01kQA */
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

        // "Add Command": [{
        //   target: "BuildCommandList",
        //   internal: true,
        //   cond: "validCommand",
        //   actions: "addCommandToCommandList"
        // }, {
        //   target: "BuildCommandList",
        //   internal: true,
        //   cond: "erroredCommand",
        //   actions: "assignErrorToContext"
        // }],

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
      newCommandArray.push({name: context.formName, x: context.formX, y: context.formY, z: context.formZ})

      return {
        commands: newCommandArray
      }
    })
  },
  


})

export default cubeMachine