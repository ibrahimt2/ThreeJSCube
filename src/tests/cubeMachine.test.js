import cubeMachine from '../machines/cubeMachine.js'
import { interpret, withContext } from 'xstate';
import { degToRad } from '../utils/constant.js';

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

    it('starts in the BuildCommandList state', () => {
        expect(service.state.value).toBe('BuildCommandList');
    });

    it('updates formName context on "Form input changed" event with valueType name', () => {

        service.send("Form input changed", { value: 'MOVE TO', valueType: 'name' })

        expect(service.state.context.formName).toEqual('MOVE TO');
    });

    it('updates x context on "Form input changed" event with valueType x', () => {

        service.send("Form input changed", { value: '10', valueType: 'x' })

        expect(service.state.context.formX).toEqual('10');
    });

    it('updates y context on "Form input changed" event with valueType y', () => {

        service.send("Form input changed", { value: '10', valueType: 'y' })

        expect(service.state.context.formY).toEqual('10');
    });

    it('updates z context on "Form input changed" event with valueType z', () => {

        service.send("Form input changed", { value: '10', valueType: 'z' })

        expect(service.state.context.formZ).toEqual('10');
    });

    it('transitions to Command Processing state on "Process list commands" event', () => {
        service.send('Process list commands');

        expect(service.state.value).toBe('Command Processing');
    });

    it('adds command to command list on "Add Command" event with valid input', () => {

        service.send("Form input changed", { value: 'MOVE TO', valueType: 'name' })
        service.send("Form input changed", { value: '10', valueType: 'x' })
        service.send("Form input changed", { value: '20', valueType: 'y' })
        service.send("Form input changed", { value: '30', valueType: 'z' })
        service.send('Add Command');

        expect(service.state.context.commands).toEqual([{ name: 'MOVE TO', x: 10, y: 20, z: 30 }],
);
    });

    it('sets the cube position using the MOVE TO command', async() => {

        service.send("Form input changed", { value: 'MOVE TO', valueType: 'name'})
        service.send("Form input changed", { value: '10', valueType: 'x' })
        service.send("Form input changed", { value: '20', valueType: 'y' })
        service.send("Form input changed", { value: '30', valueType: 'z' })
        service.send('Add Command');
        await service.send('Process list commands');
    
        expect(service.state.context.position).toEqual([10, 20, 30]);
    });

    it('aggregates MOVE BY commands to set the cube position', async() => {

        service.send("Form input changed", { value: 'MOVE BY', valueType: 'name'})
        service.send("Form input changed", { value: '1', valueType: 'x' })
        service.send("Form input changed", { value: '1', valueType: 'y' })
        service.send("Form input changed", { value: '1', valueType: 'z' })
        service.send('Add Command');

        service.send("Form input changed", { value: 'MOVE BY', valueType: 'name'})
        service.send("Form input changed", { value: '2', valueType: 'x' })
        service.send("Form input changed", { value: '2', valueType: 'y' })
        service.send("Form input changed", { value: '2', valueType: 'z' })
        service.send('Add Command');
        await service.send('Process list commands');
    
        expect(service.state.context.position).toEqual([3, 3, 3]);
    });

    it('set the cubes roation using the ROTATE TO command', async() => {

        service.send("Form input changed", { value: 'ROTATE TO', valueType: 'name'})
        service.send("Form input changed", { value: '50', valueType: 'x' })
        service.send("Form input changed", { value: '60', valueType: 'y' })
        service.send("Form input changed", { value: '70', valueType: 'z' })
        service.send('Add Command');
        await service.send('Process list commands');
    
        expect(service.state.context.rotation).toEqual([50, 60, 70]);
    });

    it('aggregates ROTATE BY commands to set the cube position', async() => {

        service.send("Form input changed", { value: 'ROTATE BY', valueType: 'name'})
        service.send("Form input changed", { value: '30', valueType: 'x' })
        service.send("Form input changed", { value: '20', valueType: 'y' })
        service.send("Form input changed", { value: '10', valueType: 'z' })
        service.send('Add Command');

        service.send("Form input changed", { value: 'ROTATE BY', valueType: 'name'})
        service.send("Form input changed", { value: '10', valueType: 'x' })
        service.send("Form input changed", { value: '20', valueType: 'y' })
        service.send("Form input changed", { value: '30', valueType: 'z' })
        service.send('Add Command');
        await service.send('Process list commands');
    
        expect(service.state.context.rotation).toEqual([40, 40, 40]);
    });

    it('ROTATE TO command overwrites previous changes to cube rotation', async() => {

        service.send("Form input changed", { value: 'ROTATE BY', valueType: 'name'})
        service.send("Form input changed", { value: '30', valueType: 'x' })
        service.send("Form input changed", { value: '20', valueType: 'y' })
        service.send("Form input changed", { value: '10', valueType: 'z' })
        service.send('Add Command');

        service.send("Form input changed", { value: 'ROTATE TO', valueType: 'name'})
        service.send("Form input changed", { value: '100', valueType: 'x' })
        service.send("Form input changed", { value: '100', valueType: 'y' })
        service.send("Form input changed", { value: '100', valueType: 'z' })
        service.send('Add Command');
        await service.send('Process list commands');
    
        expect(service.state.context.rotation).toEqual([100, 100, 100]);
    });

    it('MOVE TO command overwrites previous changes to cube position', async() => {

        service.send("Form input changed", { value: 'MOVE BY', valueType: 'name'})
        service.send("Form input changed", { value: '50', valueType: 'x' })
        service.send("Form input changed", { value: '20', valueType: 'y' })
        service.send("Form input changed", { value: '10', valueType: 'z' })
        service.send('Add Command');

        service.send("Form input changed", { value: 'ROTATE TO', valueType: 'name'})
        service.send("Form input changed", { value: '1', valueType: 'x' })
        service.send("Form input changed", { value: '1', valueType: 'y' })
        service.send("Form input changed", { value: '1', valueType: 'z' })
        service.send('Add Command');
        await service.send('Process list commands');
    
        expect(service.state.context.rotation).toEqual([1, 1, 1]);
    });
})
