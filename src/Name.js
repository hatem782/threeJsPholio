import { useBox } from '@react-three/cannon'
import Text3d from './Text3d'
function Name() {
  return (
    <group>
      <Jumbo position={[-25, 15, -10]} children="H" />
      <Jumbo position={[-22, 15, -10]} children="A" />
      <Jumbo position={[-19, 15, -10]} children="T" />
      <Jumbo position={[-16, 15, -10]} children="E" />
      <Jumbo position={[-13, 15, -10]} children="M" />

      <Jumbo position={[-5, 15, -10]} children="B" />
      <Jumbo position={[-2, 15, -10]} children="E" />
      <Jumbo position={[1, 15, -10]} children="N" />

      <Jumbo position={[7, 15, -10]} children="C" />
      <Jumbo position={[10, 15, -10]} children="H" />
      <Jumbo position={[13.5, 15, -10]} children="I" />
      <Jumbo position={[15.5, 15, -10]} children="K" />
      <Jumbo position={[18.5, 15, -10]} children="H" />
    </group>
  )
}

function Jumbo({ position, children }) {
  const [ref, api] = useBox(() => ({ mass: 1, position }))
  return (
    <mesh
      friction={0}
      onload={() => {
        api.velocity.set(0, 2, 0)
      }}
      ref={ref}>
      <group>
        <Text3d hAlign="right" children={children} />
      </group>
    </mesh>
  )
}
export default Name
