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
var service_1 = require("../services/service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var NewsComponent = (function () {
    function NewsComponent(api, route) {
        this.api = api;
        this.route = route;
        this.pagenumber = 1;
        this.pagging = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("test");
        this.route.params.map(function (param) { return param['id']; }).switchMap(function (id) {
            if (id === void 0) { id = 1; }
            _this.pagenumber = id;
            return _this.api.getNews(_this.pagenumber);
        }).subscribe(function (res) {
            _this.news = res;
        });
        this.api.getPageCount().subscribe(function (res) {
            for (var i = 1; i <= res; i++) {
                _this.pagging.push(i);
            }
        });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    core_1.Component({
        selector: 'news',
        templateUrl: 'app/templates/NewsComponent.html',
        providers: [service_1.MyService]
    }),
    __metadata("design:paramtypes", [service_1.MyService, router_1.ActivatedRoute])
], NewsComponent);
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map