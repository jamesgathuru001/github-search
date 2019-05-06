import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GithubService } from '../github.service';
import 'rxjs/add/operator/map';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_githubService) {
        var _this = this;
        this._githubService = _githubService;
        this.user = [];
        this.repos = [];
        this._githubService.getUser().subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            // console.log(user);
            _this.repos = repos;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.searchUser = function () {
        var _this = this;
        this._githubService.updateUser(this.username);
        this._githubService.getUser().subscribe(function (user) {
            _this.user = user;
        });
        // Console.log('It works');
        this._githubService.getRepos().subscribe(function (repos) {
            // Console.log(user);
            _this.repos = repos;
        });
    };
    ProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [GithubService])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map