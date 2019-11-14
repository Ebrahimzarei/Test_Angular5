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
var CounterComponent = (function () {
    function CounterComponent() {
        this.numberChange = new core_1.EventEmitter();
    }
    CounterComponent.prototype.increment = function () {
        this.number++;
        this.numberChange.emit(this.number);
    };
    return CounterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CounterComponent.prototype, "number", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CounterComponent.prototype, "numberChange", void 0);
CounterComponent = __decorate([
    core_1.Component({
        selector: 'counter',
        templateUrl: '/app/templates/Counter.html'
    })
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.js.map