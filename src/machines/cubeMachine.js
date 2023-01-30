import {assign, createMachine} from "xstate";


const cubeMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QGMCuAjMBZAhsgFgJYB2YAdAEKqEA2EAwgPYC2zOxEAMobAC4DEAMUYAnZgAISAB1S9xBdjAgBtAAwBdRKCmNYhXoUbEtIAB6IAtAEYArAGYyATgBMADlcB2Ox4+OPANisAFjsAGhAAT0Rgp2dVfxtnKzsgr39HGxsAXyzwtExcAhJyKloGFjYObj5+AEEICHEmVnYVDRMdPQMjE3MEa2cPMg9k1RtXGxCrWwzwqIQ3KzJA30dVVytVVMTs3JB87DwiUkpqOmbKrh4BAAURRmQ4WHEaa-kK1tg1TSQQTv1DMZfn07FYhv5-KpVI4JiEfCE5ohvENJqo7Ot-CkgkFVM4cnkMIciicLq1xHcHk8SFB+BAjOQSAA3RgAa3IB0Kx3IpI45Puj1gemIUAQTIeOG6xG+3w6ugBPWB0S2yxhzkxNisrm8gzCkUQQSs-jIwWcdkmGy2oLs-hye2IjAgcBMHKOxVlXUBvUscSWLncXh8fkCCL1-Q8zjINl8ZsmmzRIzxexdxJKZ3KLSq13d8qBoD6FlcRrsjkchomWqCKw8iIQhqGFrBmX9UMcNqThM5xTIPMaFIFQqg2clXv6EzI2Jh-lNULsrmcbhrGojGrscXshajXltWSAA */
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

        "Process list commands": "Command Processing"
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