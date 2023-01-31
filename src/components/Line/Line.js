import * as THREE from 'three'

function Line({ start, end, color}) {

    const points = []
    points.push(new THREE.Vector3(start[0], start[1], start[2]))
    points.push(new THREE.Vector3(end[0], end[1], end[2]))

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

    return (
        <group position={[0, 0, 0]}>
            <line geometry={lineGeometry}>
                <lineBasicMaterial attach="material" color={color} linewidth={30} linecap={'round'} linejoin={'round'} />
            </line>
        </group>
    )
}

export default Line