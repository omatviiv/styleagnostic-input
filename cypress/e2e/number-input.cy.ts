describe('number input tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  const input = () => cy.get('input[type="number"]')
  it('number input exists and placeholder is Number', () => {
    input().should('exist').and('have.attr', 'placeholder', 'Number')
  })
  it('number input can be typed into, and deleted', () => {
    input().type('123').should('have.value', '123')
    input().clear().should('be.empty')
  })
  it('letter, symbol input is not allowed', () => {
    input().type('abc~!@#$%^&*()\|?/.<>.=+-_').should('have.value', '')
  })

})
