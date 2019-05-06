import { TestBed, inject } from '@angular/core/testing';
import { GithubService } from './github.service';
describe('GithubService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [GithubService]
        });
    });
    it('should be created', inject([GithubService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=github.service.spec.js.map