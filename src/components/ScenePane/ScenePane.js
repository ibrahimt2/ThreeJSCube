import RenderedCube from "../RenderedCube/RenderedCube.js"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Container from "react-bootstrap/esm/Container.js"
import './ScenePane.css'


/** Renders a scene given the required parameters */

function ScenePane() {
    return (
        <Container className="scene-container mt-4">
            <Canvas>
                <ambientLight intensity={0.1} />
                <spotLight position={[9, 16, 10]} angle={0.2} />
                <Stars></Stars>
                <OrbitControls></OrbitControls>
                <RenderedCube></RenderedCube>
            </Canvas>
        </Container>
    )
}

export default ScenePane