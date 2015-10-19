// Use IIFE to avoid polluting global namespace and in this case to all 'use strict'
// https://github.com/johnpapa/angular-styleguide#style-y010
(function() {
  'use strict';

  // Module Setter because of 2nd parameter, the dependency list
  angular
    .module('simpleApp', []);
    // Use unique naming conventions with separators for sub-modules
    // https://github.com/johnpapa/angular-styleguide#style-y020

    // Avoid using a variable to in setter syntax
    // https://github.com/johnpapa/angular-styleguide#style-y021

    // Set once Get Many
    // https://github.com/johnpapa/angular-styleguide#style-y023
})();
