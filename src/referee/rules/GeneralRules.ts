import { Position, Piece, TeamType, samePosition, PieceType } from '../../Constants'

const capture = require('../../../src/capture.wav')
const kingCapture = require('../../../src/kingCapture.wav')

function playCaptureSound(volume: number) {
    const audio = new Audio(capture);
    audio.volume = volume;
    audio.play();
  }

function playKingCaptureSound(volume: number) {
    const audio = new Audio(kingCapture);
    audio.volume = volume;
    audio.play();
  }

export const tileIsOccupied = (position: Position, boardState: Piece[]): boolean => {
    const piece = boardState.find(p => samePosition(p.position, position))

    if(piece) {
        return true
    } else {
        return false
    }
}

export const tileIsOccupiedByOpponent = (position: Position, boardState: Piece[], team: TeamType): boolean => {
    const piece = boardState.find(p => samePosition(p.position, position) && p.team !== team)

    if(piece && piece.type === PieceType.KING) {
        playKingCaptureSound(1)
        return true
    } else if(piece) {
        playCaptureSound(1)
        return true
    } else {
        return false
    }
}

export const tileIsEmptyOrOccupiedByOpponent = (position: Position, boardState: Piece[], team: TeamType) => {
    return !tileIsOccupied(position, boardState) || tileIsOccupiedByOpponent(position, boardState, team)
}

const moveRook = (initialPosition: Position, desiredPosition: Position, boardState: Piece[]): boolean => {
    let rook: Piece | undefined = boardState.find(piece => piece.position.x === initialPosition.x && piece.position.y === initialPosition.y)
    if (!rook) {
      return false
    }
    rook.position = desiredPosition
    return true
  }

export const movePiece = (initialPosition: Position, desiredPosition: Position, boardState: Piece[]): boolean => {
    if (desiredPosition.x - initialPosition.x === 2 && initialPosition.x === 4 && initialPosition.y === 0) {
      let rookPosition: Position = {x: 7, y: 0}
      let rookDestination: Position = {x: 5, y: 0}
      return moveRook(rookPosition, rookDestination, boardState)
    } 
    if (desiredPosition.x - initialPosition.x === -2 && initialPosition.x === 4 && initialPosition.y === 0) {
      let rookPosition: Position = {x: 0, y: 0}
      let rookDestination: Position = {x: 3, y: 0}
      return moveRook(rookPosition, rookDestination, boardState)
    } 
    if (desiredPosition.x - initialPosition.x === 2 && initialPosition.x === 4 && initialPosition.y === 7) {
      let rookPosition: Position = {x: 7, y: 7}
      let rookDestination: Position = {x: 5, y: 7}
      return moveRook(rookPosition, rookDestination, boardState)
    } 
    if (desiredPosition.x - initialPosition.x === -2 && initialPosition.x === 4 && initialPosition.y === 7) {
      let rookPosition: Position = {x: 0, y: 7}
      let rookDestination: Position = {x: 3, y: 7}
      return moveRook(rookPosition, rookDestination, boardState)
    }
    let piece: Piece | undefined = boardState.find(piece =>
      piece.position.x === initialPosition.x && piece.position.y === initialPosition.y
    )
    if (!piece) {
      return false
    }
    piece.position = desiredPosition
    return true
  }