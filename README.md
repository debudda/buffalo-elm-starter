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

0) cd $GOPATH/src/{code hub of your preference (ie github.com/gitlab.com)}/{your username}/
1) git clone https://github.com/debudda/buffalo-elm-starter.git {your app name}
2) cd {your app name}
3) replace "github.com/debudda/buffalo_elm_starter" with "{your code hub}/{your username}/{your app name}" (sic!)
4) rm -rf .git
5) git init 
6) cd docker && docker-compose up
7) cd .. && buffalo setup
8) buffalo dev