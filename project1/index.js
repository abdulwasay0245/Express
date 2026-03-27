require("dotenv").config()
const express = require('express')
const app = express()
const port = 3000

const data = {
  "login": "abdulwasay0245",
  "id": 106981654,
  "node_id": "U_kgDOBmBpFg",
  "avatar_url": "https://avatars.githubusercontent.com/u/106981654?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/abdulwasay0245",
  "html_url": "https://github.com/abdulwasay0245",
  "followers_url": "https://api.github.com/users/abdulwasay0245/followers",
  "following_url": "https://api.github.com/users/abdulwasay0245/following{/other_user}",
  "gists_url": "https://api.github.com/users/abdulwasay0245/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/abdulwasay0245/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/abdulwasay0245/subscriptions",
  "organizations_url": "https://api.github.com/users/abdulwasay0245/orgs",
  "repos_url": "https://api.github.com/users/abdulwasay0245/repos",
  "events_url": "https://api.github.com/users/abdulwasay0245/events{/privacy}",
  "received_events_url": "https://api.github.com/users/abdulwasay0245/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abdul Wasay",
  "company": null,
  "blog": "https://abdul-wasay-0245.vercel.app/",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 48,
  "public_gists": 0,
  "followers": 13,
  "following": 79,
  "created_at": "2022-06-06T14:32:12Z",
  "updated_at": "2026-02-21T11:36:47Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter", (re, res) => {
    res.json("wasay")
})
app.get("/hello", (re, res) => {
    res.send("<h1>Hello</h1>")
})
app.get('/wasay', (req, res) => {
    res.json(data)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
