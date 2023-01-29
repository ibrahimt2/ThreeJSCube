import {createMachine} from "xstate";


const cubeMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QGECuAjMBZAhgYwAsBLAOzADoAhVIgGwmQHsBbZnEiAGSNgBcBiAGKMATswAEpAA6pe4wuxgQA2gAYAuolBTGsIryKMSWkAA9EARgDsq8gFY7Fi3YBMATgAcANlWqnAGhAAT0QAWhcAFjdyNwsAZjdHFxcrO1UXOIiAXyzAtExcQlIKajoGFjYObj5+AAURRjw4WCZWdghYNU0kEB09AyMTcwRQuy9yVRs4ixc7QJCRzPIIrwiPCLjUnLyMbHxiMioaelbKrh4BAEEICHFT9q6TPv1DYx7hldsrTOTPNIirCsvPMwrNolY3HEPG4rICrM4XB5tiB8nsiodSicKu1qlcbndsRxlBZutpdC9Bu9EBELOMPOtAVCvN87B4XCDFq5yJE4qs3C5VHEhV4LMjUYUDhR7hxxPVGs1SFB+BAjBRSAA3RgAayluwlxXI0tucqasD0JCgCA1jRwAxIXUePWedqG1Lidns1mhbjW1lZVg5LnIXjigqsiOmPhDGTFev2BsuUiktCCACU4KhaLxYAAVRgAZSaZGVqvIfFtuoK8cOieTaYzWdzBaLYEdZP6r1dCG+FmWXg8Fhpbh8vhmHPCtkyIqsbNDm1ZMeRJEYEDgJnF1bAT3JLqpIwsqgiEymMzmwTCG3BG1WmXpPOcsar6JKx3KbSqF23HcpoGGP3IcSzBEQ6RDCgLjjMR6sl4aQCgkMJeI+aKSoahLGg0prmlAX4Um8v6WAOyzrPO45LCsawbFsuQonGz7kLWKbprAmbZnmhZgGQOG7vhCDMh45AzH4MGqCGcJxByMz8esh4eOkh5QgCOQ5EAA */
createMachine({
  states: {
    BuildCommandList: {
      on: {
        "Form input changed": {
          target: "BuildCommandList",
          internal: true,
          actions: "assignInputToContext"
        },

        

        ProcessCommands: "Command Processing",
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
        }]
      }
    },

    "Command Processing": {
      invoke: {
        src: "processCommands",
        onDone: "ApplyResultsToScene"
      }
    },

    ApplyResultsToScene: {
      onDone: {
        Done: "Base State",
        target: "BuildCommandList",
        actions: "assignResultsToContext" 
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
  id: "CubeMachine"
})