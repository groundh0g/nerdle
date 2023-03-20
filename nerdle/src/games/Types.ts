
export type KeyStates = "None" | "Guessed" | "Matched";
export type LetterStates = "None" | "Valid" | "Matched";

export type DoActionFunction = (payload?: unknown) => void;
export type HandleEventFunction = (event: Event) => void;

export class EmptyFunctions {
    static emptyDoActionFunction: DoActionFunction = () => { /**/ };
    static emptyHandleEventFunction: HandleEventFunction = (event: Event) => { /**/ };
}
