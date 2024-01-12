var j;
j = 10.5;
console.log(j);
var myFunction = function () {
    return 5;
};
function myFunction2() { }
var function1 = myFunction();
var function2 = myFunction2();
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getAll = function () {
        return true;
    };
    ProductService.prototype.getById = function (id) { };
    return ProductService;
}());
