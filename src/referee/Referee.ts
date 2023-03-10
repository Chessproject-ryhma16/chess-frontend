import { PieceType, TeamType, Piece, Position } from "../Constants"
import { pawnMove, knightMove, bishopMove, rookMove, queenMove, kingMove} from "./rules"


const capture = require('../../src/capture.wav')

function playCaptureSound(volume: number) {
    const audio = new Audio(capture)
    audio.volume = volume
    audio.play()
  }

export default class Reference {
    isEnPassantMove(initialPosition: Position, desiredPosition: Position, type: PieceType, team: TeamType, boardState: Piece[]) {
        const pawnDirection = team === TeamType.OUR ? 1 : -1

        if(type === PieceType.PAWN) {
            if((desiredPosition.x - initialPosition.x === -1 || desiredPosition.x -initialPosition.x === 1) && desiredPosition.y - initialPosition.y === pawnDirection) {
                const piece = boardState.find(
                    (p) => p.position.x === desiredPosition.x && p.position.y === desiredPosition.y - pawnDirection && p.enPassant
                )
                if(piece) {
                    
                    playCaptureSound(1)
                    return true
                }
            }
        }

        return false
    }

    isValidMove(initialPosition: Position, desiredPosition: Position, type: PieceType, team: TeamType, boardState: Piece[]) {
        let validMove = false
        switch(type) {
            case PieceType.PAWN:
                validMove = pawnMove(initialPosition, desiredPosition, team, boardState)
                break
            case PieceType.KNIGHT:
                validMove = knightMove(initialPosition, desiredPosition, team, boardState)
                break
            case PieceType.BISHOP:
                validMove = bishopMove(initialPosition, desiredPosition, team, boardState)
                break
            case PieceType.ROOK:
                validMove = rookMove(initialPosition, desiredPosition, team, boardState)
                break
            case PieceType.QUEEN:
                validMove = queenMove(initialPosition, desiredPosition, team, boardState)
                break
            case PieceType.KING:
                validMove = kingMove(initialPosition, desiredPosition, team, boardState)
        } 

        return validMove  
    }
}