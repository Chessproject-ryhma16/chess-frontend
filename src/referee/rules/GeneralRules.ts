import { Position, Piece, TeamType, samePosition, PieceType } from '../../Constants'

const capture = require('../../../src/capture.wav')
const kingCapture = require('../../../src/kingCapture.wav')

function playCaptureSound() {
    new Audio(capture).play()
}

function playKingCaptureSound() {
    new Audio(kingCapture).play()
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
        playKingCaptureSound()
        return true
    } else if(piece) {
        playCaptureSound()
        return true
    } else {
        return false
    }
}

export const tileIsEmptyOrOccupiedByOpponent = (position: Position, boardState: Piece[], team: TeamType) => {
    return !tileIsOccupied(position, boardState) || tileIsOccupiedByOpponent(position, boardState, team)
}