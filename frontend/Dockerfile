FROM node:18-alpine
# ↓ローカルのfrontendというディレクトリをコンテナの中で「app」として見立て作る
WORKDIR /app/frontend

RUN [ "yarn", "install", "--rm" ]

# プロジェクトのコピー
# 左の「.」はコピー元（ここでいうローカルのDockerfileと同じ階層にあるディレクトリ・ファイルを指す）、右の「.」はコピー先（Dockerコンテナ内）
COPY . .
RUN apk update
# Viteを実行
# --hostをvite.configの方で設定
CMD ["yarn", "dev"]

# https://alterbo.jp/blog/ryu2-2106/

# これを参考に作成
# https://qiita.com/generonishimura/items/88742085294bd0b234a6
