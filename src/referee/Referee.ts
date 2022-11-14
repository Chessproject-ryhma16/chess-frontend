import { PieceType, TeamType } from "../components/Chessboard/Chessboard";

export default class Reference {
    isValidMove(px: number, py: number ,x: number, y: number, type: PieceType, team: TeamType) { 
        console.log("REferefefefasdfa")
        console.log(`Previous location: (${px}),(${py})`)
        console.log(`Current location: (${x}),(${y})`)
        console.log(`Piece Type: (${type})`)
        console.log(`Team: (${team})`)

        if(type == PieceType.PAWN) {
            if(team == TeamType.OUR) {
                if(py == 1) {
                    if(px == x && (y - py == 1 || y - py == 2)) {
                        return true;
                    }
                } else {
                    if(px == x && y - py == 1) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}