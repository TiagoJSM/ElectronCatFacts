import reducer from './catFacts'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    { fact: null, loadingFact: false, loadingFactSuccess: false }
  )
})