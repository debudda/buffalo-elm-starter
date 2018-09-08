# Buffalo elm starter  

#### What's inside?  
- no jquery
- no bootstrap
- elm <3
- basic docker compose file with alpine postgres

#### Prerequisites  
- elm
- docker
- docker-compose

#### How to start

0) git clone this repo with alias
1) cd this repo
2) rm -rf .git
3) git init
4) dep ensure (or whatever)
5) npm/yarn install
6) cd docker && docker-compose up
7) buffalo db create && buffalo db migrate
8) cd project root && buffalo dev