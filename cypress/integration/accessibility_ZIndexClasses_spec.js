describe('ZIndexClasses Accessibility check', () => {
  beforeEach(() => {
    cy.visit('/ZIndexClasses');
    cy.injectAxe();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('Tests accessibility on the ZIndexClasses page', () => {
    cy.configureAxe({
      rules: [
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    });
    cy.checkA11y();
  });
});
