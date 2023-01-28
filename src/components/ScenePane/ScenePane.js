import RenderedCube from "../RenderedCube/RenderedCube.js"
import { Canvas } from '@react-three/fiber'


/** Renders a scene given the required parameters */

function ScenePane() {
    return(
        <Canvas className="canvas">
            <RenderedCube></RenderedCube>
        </Canvas>
    )
}

export default ScenePane