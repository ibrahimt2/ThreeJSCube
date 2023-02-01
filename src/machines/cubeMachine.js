import { assign, createMachine } from "xstate";

const cubeMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QGMCuAjMBZAhsgFgJYB2YAdAEKqEA2EAwgPYC2zOxEAMobAC4DEAMUYAnZgAISAB1S9xBdjAgBtAAwBdRKCmNYhXoUbEtIAB6IAtAEYArDbJWAHACYAbK5sBmV6oDsAFn8bABoQAE9EVzJfLxtnT19VR0crK39vAF8M0LRMXAIScipaBhY2Dm4+fgBBCAhxJlZ2FQ0THT0DIxNzBAtPdLIbK1U-JJt-VVcATmdQiIRnKyik1Lsp3ynHSccsnIxsPCJSSmo6RvKuHgFa+vPm5StNJBB2-UNjZ56+gaGRxMdxpMZnNEJ4bKpBv1nFMZr40n9XLsQLkDgVjsUzmVmpUBAAFESMZBwWDiGhXeRYjiwNRPbS6N5dT6gqy+MjuEabcYJAKeEEIbmDCaeJKufqBVTOJEo-JHIqnUpNCpXfj0GhgHAiCmK+pkvg0tr0zofUA9VJWaK+Zz-RIstLTPnOeyOTzOR2ufxW1RWTZpKX7GWFMh3DjifGE4kkKD8CBGcgkABujAA1uRpYdA8H6mGibA9MQoAgE4ScEaafrnq8jd1LMNWTYZlZnAC0tCXY4+Z4ZmRhV5oYtwUl-FlsiBiIwIHATGm0WADR13tXep3zb9RgCJtNZuFLFtov53TEXM3PI4hyPp7KTiVMzi5wzjWYd1FO1MlgDnfuWb4+UtWSkvTENjJIkqhTIi57+umxyZqGBI5nmUB3lWTK9ACZCBJsrjxCMJ6uu224IEMziDFYLqqF4jgeL4vieMOGRAA */
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
            actions: "addCommandToCommandList",
            cond: "validCommand"
          }, {
            target: "BuildCommandList",
            internal: true,
            actions: "setErrorMessage"
          }],

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

    services: {
      "processCommands": async (context) => {

        let positionResult = context.position
        let rotationResult = context.rotation
        let commandArray = context.commands
      
        while (commandArray.length !== 0) {
            let command = commandArray.shift()
      
            if (command.name === 'MOVE TO') {
                positionResult = [command.x, command.y, command.z]
            } else if (command.name === 'ROTATE TO') {
                rotationResult = [command.x, command.y, command.z]
            } else if (command.name === 'MOVE BY') {
                positionResult = [positionResult[0] + command.x, positionResult[1] + command.y, positionResult[2] + command.z]
            } else if (command.name === 'ROTATE BY') {
                rotationResult = [rotationResult[0] + command.x, rotationResult[1] + command.y, rotationResult[2] + command.z]
            }
        }
      
        return [positionResult, rotationResult]
      }

    },

    guards: {
      "validCommand": (context, event) => {
        if (context.formName === false || context.formX === '' || context.formY === '' || context.formZ === '' || isNaN(context.formX) || isNaN(context.formY) || isNaN(context.formZ)) {
          return false
        } else {
          return true
        }
      },
    },
    actions: {

      /** Sets error message depending on current context */
      setErrorMessage: assign((context) => {
        if (context.formName === false) {
          return { error: 'Please select a command to add' }
        } else if (context.formX === '' || context.formY === '' || context.formZ === '') {
          return { error: 'Please provide numeric inputs for X, Y and Z fields' }
        } else if (isNaN(context.formX) || isNaN(context.formY) || isNaN(context.formZ)) {
          return { error: 'Please provide numeric inputs for X, Y and Z fields' }
        }
      }),

      /** Assign values in input text fields to context */
      assignInputToContext: assign((context, event) => {
        if (event.valueType === 'name') {
          return {
            formName: event.value
          };
        } else if (event.valueType === 'x') {
          return {
            formX: event.value
          };
        } else if (event.valueType === 'y') {
          return {
            formY: event.value
          };
        } else if (event.valueType === 'z') {
          return {
            formZ: event.value
          };
        }

      }),

      /** Create a command from current form values and add it to context.commands */
      addCommandToCommandList: assign((context, event) => {

        let newCommandArray = context.commands
        newCommandArray.push({ name: context.formName, x: parseFloat(context.formX), y: parseFloat(context.formY), z: parseFloat(context.formZ) })

        return {
          commands: newCommandArray,
          error: null
        }
      }),

      /** Assign command processing results to context.position and context.rotation */
      assignCommandProcessingResultsToContext: assign((context, event) => {
        return {
          position: event.data[0],
          rotation: event.data[1],
          commands: [],
        }
      }),

      /** Clear the commands array */
      clearCommands: assign(() => {
        return {
          commands: []
        }
      })
    },



  })

export default cubeMachine