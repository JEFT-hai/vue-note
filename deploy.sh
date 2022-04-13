#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# git pull master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO> 这里做出对应的替换
git push -f https://github.com/JEFT-hai/vue-note.git master:gh-pages
# OpenSSL SSL_read: Connection was reset, errno 10054  - git config --global http.sslVerify "false"

cd -