var Startup = (function () {
    function Startup() {
        this.R = 2;
        this._d = 4;
    }
    Startup.main = function () {
        console.log("Hello World");
        return 0;
    };
    Startup.prototype.getUserInfo = function () {
        console.log("getUserInfo");
    };
    return Startup;
}());
Startup.PI = 3.14;
Startup.main();
console.log(new Startup().R);
// console.log(new Startup()._d); 
//# sourceMappingURL=app.js.map