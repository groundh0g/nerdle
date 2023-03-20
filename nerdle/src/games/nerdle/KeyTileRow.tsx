import React, {Component} from "react";

import './KeyTileRow.css';
import KeyTile from "./KeyTile";

type KeyTileRowProps = {
    letters: string;
    guessed: string;
    matched: string;
    // add more properties here ...
};

type KeyTileRowState = KeyTileRowProps & {
    // add more attributes here ...
};

export default class KeyTileRow extends Component<KeyTileRowProps, KeyTileRowState> {

    state = {
        letters: '',
        guessed: '',
        matched: '',
    };

    constructor(props: KeyTileRowProps) {
        super(props);

        this.state.letters = this.props.letters;
    }

    render() {
        return (
            <div className='key-tile-row'>
                {this.props.letters.split('').map((value, index, array) =>
                    <KeyTile key={value} letter={value} guessed={this.props.guessed} matched={this.props.matched} />)}
            </div>
        );
    }
}
