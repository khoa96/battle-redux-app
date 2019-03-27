import Request from './Request';
import * as token from './token';
import axios from 'axios';

const id = token.GITHUB_ID;
const secret = token.GITHUB_SECRET_ID;
const params = `?client_id=${id}+&client_secret=${secret}`;

// get profile cua user.
export const getProfile = (username) => {
    return Request.get({
        url: "users/" + username
    });
}

// get info user => lay so luong follow
const getUser = (username) => {
    return Request.get({
        url: "users/" + username + params
    })
}

// get repo cua user => lay ra tat ca repo cua 1 user
const getRepo = (username) => {
    return Request.get({
        url: "users/" + username + "/repos" + params + "&per_page=100"
    })
}

// dem tong so star ma 1 user co trong cac repo
const countStar = (repos) => {
    return repos.reduce((count, repo) => {
        return count + repo.stargazers_count;
    }, 0)
}

// tinh diem cua 1 user.
const calculateScore = (followers, stargazers_count) => {
    return 3 * followers + stargazers_count;
}

// lay toan bo thong tin cua user.
const getDataUser = (username) => {
    return axios.all([getUser(username), getRepo(username)])
        .then(data => {
            const info = data[0];
            const repos = data[1];
            return {
                info: info,
                repo: repos.length,
                score: calculateScore(info.followers, countStar(repos))
            }
        })
}

// get info 2 user 
export const getDataAllUser = (username1, username2) => {
    return axios.all([getDataUser(username1), getDataUser(username2)]);
}