import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repos } from './repos';
import { environment } from '../environments/environment';



@Injectable()
export class GithubService {
    username: string;

    constructor(private http: HttpClient) {
        console.log('Github Service Ready...');
        this.username = 'jamesgathuru001';

    }
    getUser() {
        return this.http.get('https://api.github.com/users/' + this.username);

    }
    getRepos() {
        return this.http.get(' https://api.github.com/users/' + this.username + '/repos');
    }
    updateUser(username: string) {
        this.username = username;
    }
}
