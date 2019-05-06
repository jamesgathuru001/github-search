import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GithubService } from './github.service';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib_1.__decorate([
        Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [GithubService]
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map