
import { PropTypes } from "prop-types";

/** Renders a cube in a given position with a given rotation
 */



function RenderedCube({positionArr, rotationArr}) {
    return(
        <mesh position={positionArr} rotation={rotationArr.map(deg => deg * (Math.PI / 180))}>
            <boxBufferGeometry attach="geometry"></boxBufferGeometry>
            <meshLambertMaterial attach="material" color="blue"></meshLambertMaterial>
        </mesh>
    )
}



RenderedCube.propTypes = {

    /** positionArr is an array containing [X, Y, Z] coordinates for position of RenderedCube, in degrees  */
    positionArr: PropTypes.arrayOf(PropTypes.number).isRequired,

    /**rotationArr is an array containing [X, Y, Z] amounts for rotation of RenderedCube, in degrees  */
    rotationArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  };
  
  RenderedCube.defaultProps = {
    positionArr: [0, 0, 0],
    rotationArr: [0, 0, 0],
  };

export default RenderedCube