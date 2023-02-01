
import { PropTypes } from "prop-types";

/** RenderedCube. 
 * 
 * Renders a cube in a given position with a given rotation
 * 
 * Rendered by: ScenePane
 */



function RenderedCube({position, rotation}) {
    return(
        <mesh position={position} rotation={rotation.map(deg => deg * (Math.PI / 180))}>
            <boxBufferGeometry attach="geometry"></boxBufferGeometry>
            <meshPhongMaterial attach="material" color="white"></meshPhongMaterial>
        </mesh>
    )
}



RenderedCube.propTypes = {

    /** positionArr is an array containing [X, Y, Z] coordinates for position of RenderedCube, in degrees  */
    position: PropTypes.arrayOf(PropTypes.number).isRequired,

    /**rotationArr is an array containing [X, Y, Z] amounts for rotation of RenderedCube, in degrees  */
    rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
  };
  
  RenderedCube.defaultProps = {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  };

export default RenderedCube