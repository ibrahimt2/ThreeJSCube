import {assign, createMachine} from "xstate";


const cubeMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QGMCuAjMBZAhsgFgJYB2YAdAEKqEA2EAwgPYC2zOxEAMobAC4DEAMUYAnZgAISAB1S9xBdjAgBtAAwBdRKCmNYhXoUbEtIAB6IAtAEYArAGYyATgBMADlcB2Ox4+OPANisAFjsAGhAAT0Rgp2dVfxtnKzsgr39HGxsAXyzwtExcAhJyKloGFjYObj5+AEEICHEmVnYVDRMdPQMjE3MEa2cPMg9k1RtXGxCrWwzwqIQ3KzJA30dVVytVVMTs3JB87DwiUkpqOmbKrh4BesaL1uUrTSQQTv1DYxe+q39-MjtVOtnEF7OsbI5PHNokFYvFBq5-CDVHYkh4cnkMIciidSucKq1qgIAAoiRjIOCwQn3DiwNTPbS6d49L6IOxWIa-QEQybeDwhKEIXlkSbI9b+FJBIKqZzo-aYwrHcjUxokskUkhQfgQIzkEgAN0YAGtyAcFcUyMrxKrybA9MQoAh9WScN1iHS6R1Ga7etEtssIc5xTYrK5vIMwpFEEEfmRgs47JMNls2XZ-Dk9sRGBA4CZTUdip6uh8ff04ksXO4vD4-IF+ZH+h5nMLfHYMn4AnZvEFZXnsSUzuUWlVroWmZ9QH1rEFXGQxnYESjJVLfDYBVYksLXGt-Mjw64gr8e-L8ydLdb1fbR96Wf0JmRJRD-PHAfPnG4BcGm8GUXOETYfHY6ZZEAA */
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
    formName: 'test'
  },

  initial: "BuildCommandList",
  id: "cubeMachine"


}, {
  actions: {
    assignInputToContext: assign((context, event) => {
      console.log('lol')
      return {
        formName: event.value
      };
    })
  },


})

export default cubeMachine