"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HiAngularComponent = (function () {
    function HiAngularComponent() {
        this.mystyle = 'black';
        this.dynamicClass = 'danger';
        this.count = 1;
        this.isActive = false;
        this.myswitch = 3;
        this.people = [
            { name: 'ابراهیم', family: 'زارعی', age: 30 },
            { name: 'اسما', family: 'حسینی', age: 40 },
            { name: 'علی', family: 'احمدی', age: 18 }
        ];
    }
    HiAngularComponent.prototype.active = function () {
        this.isActive = !this.isActive;
    };
    return HiAngularComponent;
}());
HiAngularComponent = __decorate([
    core_1.Component({
        selector: 'hiangular',
        templateUrl: '/app/templates/HiAngular.html',
        styleUrls: ['app/Content/MyComponent.css']
    }),
    __metadata("design:paramtypes", [])
], HiAngularComponent);
exports.HiAngularComponent = HiAngularComponent;
//# sourceMappingURL=HiAngular.js.map