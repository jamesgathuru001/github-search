import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
var GithubService = /** @class */ (function () {
    function GithubService(_http) {
        this._http = _http;
        console.log('Github Service Ready...');
        this.username = 'jamesgathuru001';
    }
    GithubService.prototype.getUser = function () {
        return this._http.get('https://api.github.com/users/' + this.username);
    };
    GithubService.prototype.getRepos = function () {
        return this._http.get(' https://api.github.com/users/' + this.username + '/repos');
    };
    GithubService.prototype.updateUser = function (username) {
        this.username = username;
    };
    GithubService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], GithubService);
    return GithubService;
}());
export { GithubService };
//# sourceMappingURL=github.service.js.map