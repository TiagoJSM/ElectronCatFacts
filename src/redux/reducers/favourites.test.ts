import reducer, { Favourite, addToFavourites, removeFromFavourites } from './favourites'

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
        { favourites: [] }
    )
})

test('should contain a fact', () => {
    expect(reducer(undefined, addToFavourites({ id: 1, fact: "a fact" }))).toEqual(
        { favourites: [{ id: 1, fact: "a fact" }] }
    )
})

test('should contain two fact', () => {
    const previousState = {
        favourites: [
            { id: 1, fact: "a fact" }
        ]
    };
    expect(reducer(previousState, addToFavourites({ id: 2, fact: "another fact" }))).toEqual(
        { favourites: [{ id: 1, fact: "a fact" }, { id: 2, fact: "another fact" }] }
    )
})

test('should contain one fact', () => {
    const previousState = {
        favourites: [
            { id: 1, fact: "a fact" },
            { id: 2, fact: "another fact" }
        ]
    };
    expect(reducer(previousState, removeFromFavourites(1))).toEqual(
        { favourites: [{ id: 2, fact: "another fact" }] }
    )
})