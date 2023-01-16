FROM node:16.13.2-alpine
WORKDIR /app
# プロジェクトのコピー
COPY vue-project/ ./
RUN apk update
# Viteを実行
# --hostをvite.configの方で設定
CMD ["yarn", "dev"]

# https://alterbo.jp/blog/ryu2-2106/

# apk = Alpine Linux package management
# Alpine Linuxのパッケージ管理システム

# これを参考に作成
# https://qiita.com/generonishimura/items/88742085294bd0b234a6