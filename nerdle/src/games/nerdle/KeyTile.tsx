import React, {Component} from "react";

import './KeyTile.css';
// import {DoActionFunction, EmptyFunctions} from '../Types';

type KeyTileProps = {
    letter: string;
    guessed: string;
    matched: string;
    // add more properties here ...
};

type KeyTileState = KeyTileProps & {
    // add more attributes here ...
};

export default class KeyTile extends Component<KeyTileProps, KeyTileState> {

    state = {
        letter: '.',
        guessed: '',
        matched: '',
    };

    constructor(props: KeyTileProps) {
        super(props);

        this.state.letter = this.props.letter;
        this.state.guessed = this.props.guessed;
        this.state.matched = this.props.matched;
    }

    render() {
        const letter = this.props.letter;

        const classGuessed: string = this.props.guessed.indexOf(letter) === -1 ? '' : 'key-tile-guessed';
        const classMatched: string = this.props.matched.indexOf(letter) === -1 ? '' : 'key-tile-matched';
        const classTileSize: string = '⏎⌫'.indexOf(letter) === -1 ? '' : 'key-tile-2x';

        const className = `key-tile ${classMatched || classGuessed} ${classTileSize}`;

        const id: string = (() => {
            switch (letter) {
                case '⏎':
                    return 'Enter';
                case '⌫':
                    return 'Delete';
                default:
                    return letter;
            }
        })();

        return (
            <div className={className}><span id={`key-${id}`}>{ this.props.letter.toUpperCase() }</span></div>
        );
    }
}
