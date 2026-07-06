(function () {
  angular
    .module("CustomFilterApp.filters", [])
    .filter("capitalize", function () {
      return function (input) {
        if (input) {
          return input[0].toUpperCase() + input.slice(1);
        }
      };
    })
    .filter("blankIfNegative", function () {
      return function (input) {
        if (input <= 0) return " ";
        else return input;
      };
    });
})();
