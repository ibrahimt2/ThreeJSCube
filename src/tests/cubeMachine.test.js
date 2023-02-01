import cubeMachine from '../machines/cubeMachine.js'
import { interpret, withContext } from 'xstate';

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

    it('should start in the BuildCommandList state', () => {
        expect(service.state.value).toBe('BuildCommandList');
    });

    it('should update formName context on "Form input changed" event with valueType name', () => {

        service.send("Form input changed", { value: 'MOVE TO', valueType: 'name' })

        expect(service.state.context).toEqual({
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            commands: [],
            error: null,
            formName: 'MOVE TO',
            formX: '',
            formY: '',
            formZ: '',
        });
    });

    it('should update x context on "Form input changed" event with valueType x', () => {

        service.send("Form input changed", { value: '10', valueType: 'x' })

        expect(service.state.context).toEqual({
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            commands: [],
            error: null,
            formName: '',
            formX: '10',
            formY: '',
            formZ: '',
        });
    });

    it('should update y context on "Form input changed" event with valueType y', () => {

        service.send("Form input changed", { value: '10', valueType: 'y' })

        expect(service.state.context).toEqual({
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            commands: [],
            error: null,
            formName: '',
            formX: '',
            formY: '10',
            formZ: '',
        });
    });

    it('should update z context on "Form input changed" event with valueType z', () => {

        service.send("Form input changed", { value: '10', valueType: 'z' })

        expect(service.state.context).toEqual({
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            commands: [],
            error: null,
            formName: '',
            formX: '',
            formY: '',
            formZ: '10',
        });
    });

    it('should transition to Command Processing state on "Process list commands" event', () => {
        service.send('Process list commands');

        expect(service.state.value).toBe('Command Processing');
    });

    it('should add command to command list on "Add Command" event with valid input', () => {

        service.send("Form input changed", { value: 'MOVE TO', valueType: 'name' })
        service.send("Form input changed", { value: '10', valueType: 'x' })
        service.send("Form input changed", { value: '20', valueType: 'y' })
        service.send("Form input changed", { value: '30', valueType: 'z' })
        service.send('Add Command');

        expect(service.state.context).toEqual({
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            commands: [{ name: 'MOVE TO', x: 10, y: 20, z: 30 }],
            error: null,
            formName: 'MOVE TO',
            formX: '10',
            formY: '20',
            formZ: '30',
        });
    });

    it('should correctly set the cube position using the MOVE TO command', async() => {

        service.send("Form input changed", { value: 'MOVE TO', valueType: 'name'})
        service.send("Form input changed", { value: '10', valueType: 'x' })
        service.send("Form input changed", { value: '20', valueType: 'y' })
        service.send("Form input changed", { value: '30', valueType: 'z' })
        service.send('Add Command');
        // await waitUntilState(service, state => state.value == 'BuildCommandList')
        await service.send('Process list commands');
        
        // await waitUntilState(service, state => state.value == 'Command Processing')
        // await waitUntilState(service, state => state.value == 'BuildCommandList')


        
        expect(service.state.context).toEqual({
            position: [10, 20, 30],
            rotation: [0, 0, 0],
            commands: [],
            error: null,
            formName: 'MOVE TO',
            formX: '10',
            formY: '20',
            formZ: '30',
        });
    });
})
