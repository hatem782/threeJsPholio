import React from 'react'
import CardText from './CardText'
function Description() {
  return (
    <mesh>
      <CardText position={[20, 1.5, -53]} text={'Engineering Student in ISAMM  10/2021- present'} fontSize={1.2} maxWidth={20} />
      <CardText position={[58, 2, -51]} text={'Fundamental License in Computer Science and Multimedia 09/2019-07-2021'} fontSize={1} maxWidth={15} />
      <CardText position={[87, 2, -49]} text={'Baccalaureate in  computer Science 2018-2019'} fontSize={1} maxWidth={15} />
      <CardText position={[0.2, 7.2, -39]} text={'Education'} fontSize={1} rotation={[0, -Math.PI / 9, 0]} />
      <CardText position={[-0.5, 8, -35]} text={'Home'} fontSize={1} rotation={[0, Math.PI / 2, 0]} />
      <CardText position={[1, 7.3, -40.5]} text={'Contact'} fontSize={1} rotation={[0, Math.PI / 2, 0]} />
      <CardText position={[-6, 8, -40]} text={'Expercience'} fontSize={1} rotation={[0, -Math.PI / 9, 0]} />
      <CardText position={[-15, 11, -150]} text={'Click The Icons '} fontSize={2.5} />
      <CardText position={[-7.5, 0.1, 7]} text={' ZQSD to drive, space to brake and R to reset '} rotation={[-Math.PI / 2, 0, 0]} fontSize={1} maxWidth={15} />
    </mesh>
  )
}
export default Description
