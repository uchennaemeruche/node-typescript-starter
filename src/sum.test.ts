import { add } from './sum'

describe('SUM', () => {
    it('returns the sum of two numbers', () => {
        const result = add(2, 2)
        expect(result).toEqual(4)
    })
})
