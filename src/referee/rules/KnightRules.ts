import { Position,TeamType, Piece } from "../../Constants"
import { tileIsEmptyOrOccupiedByOpponent, whoseTurn } from "./GeneralRules"

export const knightMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean => {
    for(let i = -1; i < 2; i+=2) {
        for (let j = -1; j < 2; j+=2) {
        if(desiredPosition.y - initialPosition.y === 2 * i) {
            if (desiredPosition.x - initialPosition.x === j){
                if(whoseTurn(team)){
                if(tileIsEmptyOrOccupiedByOpponent(desiredPosition, boardState, team)) {
                    return true
                }
            }
        }
    }

        if(desiredPosition.x - initialPosition.x === 2 * i) {
            if (desiredPosition.y - initialPosition.y === j){
                if(whoseTurn(team)){
                    if(tileIsEmptyOrOccupiedByOpponent(desiredPosition, boardState, team)) {
                        return true
                    }
                }
            }
        }
    }
}
    return false
}