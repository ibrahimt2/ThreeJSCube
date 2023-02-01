import { cubeMachine } from '../machines/cubeMachine.js'
import { interpret } from 'xstate';

describe('cubeMachine', () => {
    let machine;
    let service;


    beforeEach(() => {
        machine = cubeMachine.withContext({
          position: [0, 0, 0],
          rotation: [0, 0, 0],
          commands: [],
          error: null,
          formName: '',
          formX: '',
          formY: '',
          formZ: '',
        });
        service = interpret(machine).start();
      });

    
})