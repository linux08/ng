describe('Header', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	it('links to the correct pages', () => {
		cy.visit('/');
		cy.get('[data-testid="headerlogo"]').click();
		cy.location('pathname').should('eq', '/');
	});
});
