import RenderedCube from "../../components/RenderedCube/RenderedCube.js"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Line } from '@react-three/drei'
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
    return (
        <div className='shadow p-3 m-5 mx-5 bg-white rounded'>
            <h1>Cube Viewer</h1>
            <Container className="scene-container mt-4 shadow">
                <Canvas>
                   <Line points={[[-1000, 0, 0], [1000, 0, 0]]} color='red' lineWidth={1} ></Line>
                   <Line points={[[0, -1000, 0], [0, 1000, 0]]} color='blue' lineWidth={1} ></Line>
                   <Line points={[[0, 0, -1000], [0, 0, 1000]]} color='green' lineWidth={1} ></Line>
                    <ambientLight intensity={0.1} />
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