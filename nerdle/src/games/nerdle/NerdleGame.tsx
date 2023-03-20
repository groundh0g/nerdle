import React, {Component} from "react";

import './NerdleGame.css';
import WordRow from './WordRow';
import {DoActionFunction, EmptyFunctions} from '../Types';
import KeyboardTiles from "./KeyboardTiles";

type NerdleGameProps = {
    // add more properties here ...
};

type NerdleGameState = NerdleGameProps & {
    guessed: string;
    matched: string;
    theword: string;
    // add more attributes here ...
};

export default class NerdleGame extends Component<NerdleGameProps, NerdleGameState> {

    state = {
        guessed: '',
        matched: '',
        theword: '',
    };

    constructor(props: NerdleGameProps) {
        super(props);

        this.state.guessed = 'avoidreamgreednerdynerds';
        this.state.matched = 'nerds';
        this.state.theword = 'nerds';
    }

    render() {
        return (
            <div className='nerdle-game'>
                <WordRow row={0} answer={'nerds'} guess={'avoid'} />
                <WordRow row={1} answer={'nerds'} guess={'dream'} />
                <WordRow row={2} answer={'nerds'} guess={'greed'} />
                <WordRow row={3} answer={'nerds'} guess={'nerdy'} />
                <WordRow row={4} answer={'nerds'} guess={'nerds'} />
                <WordRow row={4} answer={'nerds'} guess={'     '} />
                <KeyboardTiles guessed={this.state.guessed} matched={this.state.matched} />
            </div>
        );
    }
}
