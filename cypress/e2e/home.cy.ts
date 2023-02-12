describe('Node Guardians Home Page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Displays the header', () => {
		cy.get('[data-testid="header"]').should('be.visible');
	});

	it('Displays the quest cards', () => {
		cy.get('[data-testid="quest-card"]').should('exist');
	});
});
