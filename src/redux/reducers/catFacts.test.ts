import reducer, { fetchingCatFact, fetchCatFactSuccess, fetchCatFactFailure } from './catFacts'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    { id: null, fact: null, loadingFact: false, loadingFactSuccess: false }
  )
})

test('should contain a fact', () => {
  expect(reducer(undefined, fetchCatFactSuccess({id: 1, fact: "a fact"}))).toEqual(
    { id: 1,fact: "a fact", loadingFact: false, loadingFactSuccess: true }
  )
})

test('should not contain a fact', () => {
  expect(reducer(undefined, fetchCatFactFailure())).toEqual(
    { id: null, fact: null, loadingFact: false, loadingFactSuccess: false }
  )
})

test('should be in loading state', () => {
  expect(reducer(undefined, fetchingCatFact())).toEqual(
    { id: null, fact: null, loadingFact: true, loadingFactSuccess: false }
  )
})