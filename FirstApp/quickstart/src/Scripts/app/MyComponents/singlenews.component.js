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
var forms_1 = require("@angular/forms");
var SingleNewsComponent = (function () {
    function SingleNewsComponent(api, route, builder) {
        this.api = api;
        this.route = route;
        this.builder = builder;
        this.CommentID = new forms_1.FormControl('');
        this.NewsID = new forms_1.FormControl('');
        this.Name = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        this.Email = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        this.Comment = new forms_1.FormControl('');
        this.CommentForm = this.builder.group({
            CommentID: this.CommentID,
            NewsID: this.NewsID,
            Name: this.Name,
            Email: this.Email,
            Comment: this.Comment
        });
    }
    SingleNewsComponent.prototype.save = function () {
        var _this = this;
        this.NewsID.setValue(this.newsId);
        this.CommentID.setValue(0);
        console.log(this.CommentForm.value);
        this.api.postComment(this.CommentForm.value).subscribe(function (res) {
            _this.LoadComment();
        });
    };
    SingleNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (param) { return param['id']; }).switchMap(function (res) {
            _this.newsId = res;
            return _this.api.getNewsbyId(res);
        }).subscribe(function (res) { return _this.news = res; });
        this.LoadComment();
    };
    SingleNewsComponent.prototype.LoadComment = function () {
        var _this = this;
        this.api.getAllCommments(this.newsId).subscribe(function (res) { return _this.comments = res; });
    };
    return SingleNewsComponent;
}());
SingleNewsComponent = __decorate([
    core_1.Component({
        selector: 'singlenews',
        templateUrl: 'app/templates/SingleNewsComponent.html',
        providers: [service_1.MyService]
    }),
    __metadata("design:paramtypes", [service_1.MyService, router_1.ActivatedRoute, forms_1.FormBuilder])
], SingleNewsComponent);
exports.SingleNewsComponent = SingleNewsComponent;
//# sourceMappingURL=singlenews.component.js.map