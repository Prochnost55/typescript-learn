import Player from "./Player";
import BotDifficultyLevel from "../constants/BotDifficultyLevel";
import PlayerType from "../constants/PlayerType";

class Bot extends Player {
    private difficultyLevel: BotDifficultyLevel;

    constructor(name: string, symbol: string, type: PlayerType, difficultyLevel: BotDifficultyLevel){
        super(name, symbol, type);
        this.difficultyLevel = difficultyLevel;
    }

    public getBotDifficultyLevel(): BotDifficultyLevel {
        return this.difficultyLevel;
    }   

}

export default Bot;
