# Buffalo elm starter  

#### What's inside?  
- no jquery
- no bootstrap
- elm <3
- basic docker compose file with alpine postgres

#### Prerequisites  
- elm
- dep
- docker
- docker-compose

#### How to start
**let** 
 
* codeHubOfYourPreference = "gitlab.com"
* yourUsername = "debudda"
* yourProjectName = "myAwesomeProject"  

**in**  

0) cd $GOPATH/src/{codeHubOfYourPreference}/{yourUsername}/
1) git clone https://github.com/debudda/buffalo-elm-starter.git {youProjectName}
2) cd {yourProjectName}
3) replace "github.com/debudda/buffalo_elm_starter" with "{codeHubOfYourPreference}/{yourUsername}/{yourProjectName}" (sic!)
4) rm -rf .git
5) git init 
6) cd docker && docker-compose up
7) cd .. && buffalo setup
8) buffalo dev