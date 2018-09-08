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

0) git clone this repo with alias
1) cd this repo
2) rm -rf .git
3) git init
4) buffalo setup
5) cd docker && docker-compose up
6) buffalo db create && buffalo db migrate
7) cd project root && buffalo dev