export const SHOW_CHARACTERS = "SHOW_CHARACTERS"

export function showCharacters(){
    const characters = [
        {id: 1, name: 'Simone'},
        {id: 2, name: 'Sam'},
    ];
    return {
        type: SHOW_CHARACTERS,
        payload: characters
    }
}