(function() {
  'use strict';

  angular
    .module('simpleApp')
    // Avoid using a variable to in getter syntax
    // https://github.com/johnpapa/angular-styleguide#style-y022

    .controller("SimpleController", SimpleController);
    // Use function declarations instead of function expression / callbacks
    // https://github.com/johnpapa/angular-styleguide#style-y024

  function SimpleController() {
    var vm = this;
    vm.person = {
      firstName: "",
      lastName: "",
      display: function() { return "Hi, I'm " + this.firstName + " " + this.lastName; }
    };
    vm.saveClick = saveClick;

    function saveClick() {
      vm.message = vm.person.display();
    }
  }
})();
