const { describe, it, before, after } = require('mocha')
const { generateHTML } = require('../index')
const { expect } = require('chai')
// const chai = await import('chai')

describe('generateHTML functions', () => {
    before(async () => {})

    after(async () => {})

    // Function returns valid HTML string with provided content in h1 tag
    it('should return HTML with content wrapped in h1 tag when valid content provided', async () => {
        const content = 'Test Content'

        const result = generateHTML(content)

        expect(result).to.include('<h1>Test Content</h1>')
        expect(result).to.include('<!DOCTYPE html>')
        expect(result).to.include('<html lang="en">')
    })

    // Handle empty content parameter
    it('should return HTML with empty h1 tag when content is empty', async () => {
        const content = ''

        const result = generateHTML(content)

        expect(result).to.include('<h1></h1>')
        expect(result).to.include('<!DOCTYPE html>')
        expect(result).to.include('<html lang="en">')
    })
})
