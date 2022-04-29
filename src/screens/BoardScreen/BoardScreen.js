import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { windowHeight, windowWidth } from '../../constants/Dimension'
import UserArea from '../../components/UserArea'
import { colors } from '../../constants/colors'
import { BLUE, BOTTOM_VERTICAL, FOUR, GREEN, HOME, ONE, RED, THREE, TOP_VERTICAL, TWO, YELLOW } from '../../constants/constant'
import VerticalCellContainer from '../../components/VerticalCellContainer/VerticalCellContainer'
import HorizontalCellContainer from '../../components/HorizontalCellContainer/HorizontalCellContainer'

const BoardScreen = (props) => {
  const [initialPlayer, setinitialPlayer] = useState({
    red: initPlayer(RED, colors.red),
    yellow: initPlayer(YELLOW, colors.yellow),
    green: initPlayer(GREEN, colors.green),
    blue: initPlayer(BLUE, colors.blue),
  })
  const [turn, setturn] = useState(props.redName !== "" ? RED : props.yellowName !== "" ? YELLOW : props.greenName !== "" ? GREEN : props.blueName !== "" ? BLUE : undefined)
  const [isRolling, setisRolling] = useState(false)
  const [diceNumber, setdiceNumber] = useState(6)
  const [Moves, setMoves] = useState([])

  useEffect(() => {
  }, [])




  function initPlayer(playerType, color) {
    return {
      pieces: initPieces(playerType),
      color: color,
      player: playerType,
    }
  }
  function initPieces(playerColor) {
    return {
      one: { postion: HOME, name: ONE, color: playerColor },
      two: { postion: HOME, name: TWO, color: playerColor },
      three: { postion: HOME, name: THREE, color: playerColor },
      four: { postion: HOME, name: FOUR, color: playerColor },
    }
  }

  const onDiceRoll = () => {
    let RandomNumber = Math.floor(Math.random() * Math.floor(6))
    setdiceNumber(RandomNumber + 1)
    // setisRolling(true)
    // setTimeout(() => {
    //   setisRolling(false)
    // }, 500);
    Moves.push(diceNumber)
    if (diceNumber == 6) {
      if (Moves.length == 3) {
        setMoves([])
        setturn(() => (getNextTurn()))
      } else {
        setMoves(Moves)

      }
    } else {
      setMoves(Moves), () => {
        updatePlayerPieces([turn])
      }

    }
  }


  const isPlayerFinished = (player) => {
    console.log('Player Finishedd Function',);
    const { one, two, three, four } = player.pieces;
    return one.position === FINISHED && two.position === FINISHED && three.position === FINISHED && four.position === FINISHED;
  }

  const getNextTurn = () => {
    console.log('Get Next turn');
    let isYellowNext = props.yellowName != "" && !isPlayerFinished(initialPlayer.yellow);
    let isGreenNext = props.greenName != "" && !isPlayerFinished(initialPlayer.green);
    let isBlueNext = props.blueName != "" && !isPlayerFinished(initialPlayer.blue);
    let isRedNext = props.redName != "" && !isPlayerFinished(initialPlayer.red);
    switch (turn) {
      case RED:
        return isYellowNext ? YELLOW : isGreenNext ? GREEN : isBlueNext ? BLUE : undefined;
      case YELLOW:
        return isGreenNext ? GREEN : isBlueNext ? BLUE : isRedNext ? RED : undefined;
      case GREEN:
        return isBlueNext ? BLUE : isRedNext ? RED : isYellowNext ? YELLOW : undefined;
      case BLUE:
        return isRedNext ? RED : isYellowNext ? YELLOW : isGreenNext ? GREEN : undefined;
      default:
        return turn;
    }
  }


  const updatePlayerPieces = () => {
    console.log('Updation Of Player Pieces');
  }





  return (
    <View style={styles.GameWrapper} >
      <View style={styles.BoarWrapper} >
        <View style={styles.twoPlayerArea} >
          <UserArea userMetaData={initialPlayer.red} turn={turn} customStyle={{ borderTopLeftRadius: 20 }} />
          <VerticalCellContainer position={TOP_VERTICAL} />
          <UserArea userMetaData={initialPlayer.yellow} customStyle={{ borderTopRightRadius: 20 }} />
        </View>
        <HorizontalCellContainer playerInfo={initialPlayer} turn={turn} isRolling={isRolling} diceNumber={diceNumber} onDiceRoll={onDiceRoll} />
        <View style={styles.twoPlayerArea} >
          <UserArea userMetaData={initialPlayer.blue} customStyle={{ borderBottomLeftRadius: 20 }} />
          <VerticalCellContainer position={BOTTOM_VERTICAL} />
          <UserArea userMetaData={initialPlayer.green} customStyle={{ borderBottomRightRadius: 20 }} />
        </View>
      </View>
    </View>
  )
}



export default BoardScreen

const styles = StyleSheet.create({
  GameWrapper: {
    flex: 1,
    backgroundColor: '#23C4ED',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  BoarWrapper: {
    width: windowWidth,
    backgroundColor: '#fff',
    height: windowWidth,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 20,
    elevation: 5,
    alignSelf: 'center',
  },
  twoPlayerArea: {
    // backgroundColor: '#ddd',
    borderRadius: 20,
    // borderWidth: 1,
    flex: 3,
    flexDirection: 'row',
  },
  horizontalRow: {
    flex: 2,
    backgroundColor: '#fff',
  },
  centerRow: {
    flex: 2,
    backgroundColor: '#fff',

  },
})