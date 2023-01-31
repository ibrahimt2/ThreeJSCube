import RenderedCube from "../../components/RenderedCube/RenderedCube.js"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Container from "react-bootstrap/esm/Container.js"
import './ScenePane.css'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { HemisphereLight } from "three"
import * as THREE from 'three'


/** ScenePane.
 * 
 *  Renders a scene given the required parameters 
 * 
 *  Renders: RenderedCube
 *  Rendered by: MainPage
*/

function ScenePane({ position, rotation }) {

    const points = []
    points.push(new THREE.Vector3(-1000, 0, 0))
    points.push(new THREE.Vector3(1000, 0, 0))

    const points2 = []
    points2.push(new THREE.Vector3(0, -1000, 0))
    points2.push(new THREE.Vector3(0, 1000, 0))

    const points3 = []
    points3.push(new THREE.Vector3(0, 0, -1000))
    points3.push(new THREE.Vector3(0, 0, 1000))


    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const lineGeometry2 = new THREE.BufferGeometry().setFromPoints(points2)
    const lineGeometry3 = new THREE.BufferGeometry().setFromPoints(points3)



    return (
        <div className='shadow p-3 m-5 mx-5 bg-white rounded'>
            <h1>Cube Viewer</h1>
            <Container className="scene-container mt-4 shadow">
                <Canvas>
                    <group position={[0, 0, 0]}>
                        <line geometry={lineGeometry}>
                            <lineBasicMaterial attach="material" color={'red'} linewidth={30} linecap={'round'} linejoin={'round'} />
                        </line>
                    </group>
                    <group position={[0, 0, 0]}>
                        <line geometry={lineGeometry2}>
                            <lineBasicMaterial attach="material" color={'green'} linewidth={30} linecap={'round'} linejoin={'round'} />
                        </line>
                    </group>
                    <group position={[0, 0, 0]}>
                        <line geometry={lineGeometry3}>
                            <lineBasicMaterial attach="material" color={'blue'} linewidth={30} linecap={'round'} linejoin={'round'} />
                        </line>
                    </group>
                    <ambientLight intensity={0.1} />
                    {/* <HemisphereLight></HemisphereLight> */}
                    <spotLight position={[9, 16, 10]} />
                    <Stars></Stars>
                    <OrbitControls></OrbitControls>
                    <RenderedCube position={position} rotation={rotation}></RenderedCube>
                </Canvas>
            </Container>
            <Row className="bg-light p-3 mx-1 mt-4 rounded">
                <Col>
                    <Row><h5>Current Position</h5></Row>
                    <Row><p>{position.toString()}</p></Row>
                </Col>
                <Col>
                    <Row><h5>Current Rotation (°)</h5></Row>
                    <Row><p>{rotation.toString()}</p></Row>
                </Col>
            </Row>
        </div>
    )
}

export default ScenePane