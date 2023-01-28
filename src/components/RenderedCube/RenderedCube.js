
/** Renders a scene given the required parameters */

function RenderedCube() {
    return(
        <mesh>
            <boxBufferGeometry attach="geometry"></boxBufferGeometry>
            <meshLambertMaterial attach="material" color="blue"></meshLambertMaterial>
        </mesh>
    )
}

export default RenderedCube