describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	// it('should display a header', () => {
	// 	cy.get('header').should('be.visible');
	// });

	// it('should display a grid of quest cards', () => {
	// 	cy.get('.quest-card').should('have.length.greaterThan', 0);
	// });

	// it('should display the correct quest information for each card', () => {
	// 	cy.get('.quest-card').each(($el) => {
	// 		cy.wrap($el).should('contain', 'Quest Name');
	// 		cy.wrap($el).should('contain', 'Quest Description');
	// 	});
	// });
});
