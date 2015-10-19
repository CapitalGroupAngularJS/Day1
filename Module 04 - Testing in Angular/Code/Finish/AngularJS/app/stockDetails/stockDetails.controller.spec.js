describe("stockDetails.Controller", function() {

    // ** Arrange **
    beforeEach(module("app"));

    var vm;
    beforeEach(inject(function($controller) {
      // ** Act **
      // Create controller
      vm = $controller("StockDetails");
    }));

    // ** Assert **
    // Test that controller sets message property to "StockDetails Controller"
    it("should set message Property to 'StockDetails Controller'", function () {
        expect(vm.message).toEqual("StockDetails Controller");
    });
});
