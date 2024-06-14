describe('task-manager', () => {
    beforeEach(() => cy.visit('/auth'));

    it('check', () => {
    // Custom command example, see `../support/commands.ts` file
        cy.login('my-email@something.com', 'myPassword');

        // Function helper example, see `../support/app.po.ts` file
        cy.get('span').contains(/Month/);
    });
});