import React from 'react'
import ScoreNavbar from './ScoreNavbar';

const Game = ({player}) => {
    const name = player.name;
    const score = player.score;
  return (
    <div>
        <ScoreNavbar player={name} level={1} score={score} />
    </div>
  )
}

export default Game