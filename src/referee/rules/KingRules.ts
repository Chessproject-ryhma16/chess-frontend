import { Piece, Position, samePosition, TeamType } from "../../Constants"
import { movePiece, tileIsEmptyOrOccupiedByOpponent, tileIsOccupied, whoseTurn } from "./GeneralRules"

export const kingMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean => {
    for(let i = 1; i < 2; i++) {
        let multiplierX = (desiredPosition.x < initialPosition.x) ? -1 : (desiredPosition.x > initialPosition.x) ? 1 : 0
        let multiplierY = (desiredPosition.y < initialPosition.y) ? -1 : (desiredPosition.y > initialPosition.y) ? 1 : 0

        let passedPosition: Position = {x: initialPosition.x + (i * multiplierX), y: initialPosition.y + (i * multiplierY)}

        if(samePosition(passedPosition, desiredPosition)) {
            if(whoseTurn(team)){
            if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                return true
            }
        }
        } else {
            if(tileIsOccupied(passedPosition, boardState)) {
                break
            }
        }
        if (!tileIsEmptyOrOccupiedByOpponent(desiredPosition, boardState, team)) {
            return false;
        }
        if (desiredPosition.x - initialPosition.x === 2 && initialPosition.x === 4 && initialPosition.y === 0 && whoseTurn(team)) {
            if (tileIsEmptyOrOccupiedByOpponent({ x: 5, y: 0 }, boardState, team) && tileIsEmptyOrOccupiedByOpponent({ x: 6, y: 0 }, boardState, team)) {
                return movePiece(initialPosition, desiredPosition, boardState)
            }
        } 
        if (desiredPosition.x - initialPosition.x === -2 && initialPosition.x === 4 && initialPosition.y === 0 && whoseTurn(team)) {
            if (tileIsEmptyOrOccupiedByOpponent({ x: 3, y: 0 }, boardState, team) && tileIsEmptyOrOccupiedByOpponent({ x: 2, y: 0 }, boardState, team) && tileIsEmptyOrOccupiedByOpponent({ x: 1, y: 0 }, boardState, team)) {
                return movePiece(initialPosition, desiredPosition, boardState)
            }
        } 
        if (desiredPosition.x - initialPosition.x === 2 && initialPosition.x === 4 && initialPosition.y === 7 && whoseTurn(team)) {
            if (tileIsEmptyOrOccupiedByOpponent({ x: 5, y: 7 }, boardState, team) && tileIsEmptyOrOccupiedByOpponent({ x: 6, y: 7 }, boardState, team)) {
                return movePiece(initialPosition, desiredPosition, boardState)
            }
        } 
        if (desiredPosition.x - initialPosition.x === -2 && initialPosition.x === 4 && initialPosition.y === 7 && whoseTurn(team)) {
            if (tileIsEmptyOrOccupiedByOpponent({ x: 3, y: 7 }, boardState, team) && tileIsEmptyOrOccupiedByOpponent({ x: 2, y: 7 }, boardState, team) && tileIsEmptyOrOccupiedByOpponent({ x: 1, y: 7 }, boardState, team)) {
                return movePiece(initialPosition, desiredPosition, boardState)
            }
        }
    }
    return false
}
