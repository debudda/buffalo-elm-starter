# Buffalo elm starter  

### What's inside?  
- elm <3
- basic docker compose file with alpine postgres
- scss
- no jquery
- no bootstrap

### Prerequisites  
- elm
- dep
- docker
- docker-compose

### How to start
**let** 
 
* codeHubOfYourPreference = "gitlab.com"
* yourUsername = "debudda"
* yourProjectName = "myAwesomeProject"  

**in**  

0) cd $GOPATH/src/{codeHubOfYourPreference}/{yourUsername}/
1) git clone https://github.com/debudda/buffalo-elm-starter.git {youProjectName}
2) cd {yourProjectName}
3) _sic!_ replace all occurrences of "github.com/debudda/buffalo_elm_starter" in all project files with "{codeHubOfYourPreference}/{yourUsername}/{yourProjectName}"
4) rm -rf .git
5) git init 
6) cd docker && docker-compose up
7) cd .. && buffalo setup
8) buffalo dev