describe('Node Guardians Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Displays the header', () => {
		cy.get('[data-testid="header"]').should('be.visible');
	});

	it('Displays the quest cards', () => {
		cy.get('[data-testid="quest-card"]').should('exist');
	});

	it('Displays error message if there is an error fetching data', () => {
		cy.server();
		cy.route({
			method: 'GET',
			url: 'http://localhost:3000/api/quests',
			status: 500,
			response: {}
		});
		cy.get('[data-testid="error-message"]').should('exist');
	});
});
