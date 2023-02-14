# docker の操作方法

# MySQL の操作方法

## docker 内から DB に入る方法

1、Docker コンテナに接続する。
docker exec -it コンテナ名 sh

２、MySQL にログインする。
mysql -u [ユーザー名] -p

３、データベースを作成する。
mysql> create database [データベース名];

４、データベースに接続する。
mysql> use [データベース名];

５、テーブルを作成する。
mysql> create table [テーブル名] (
[カラム名] [データ型],
[カラム名] [データ型],
...
);

６、データを挿入する。
mysql> insert into [テーブル名] values ([値 1], [値 2], ...);

７、データを取得する。
mysql> select \* from [テーブル名];

## MySQL では、作成済みのデータベースを確認

SHOW DATABASES;

## MySQL にあるテーブルの一覧を確認する方法

SHOW TABLES;

## MySQL のテーブルの内容を表示する

<!-- バックスラッシュは無いものとみなす -->

SELECT \* FROM [テーブル名];

# データベース構造

・データベース名
[myblog]
・テーブル名
[userdata],[blog]
・各テーブル名内カラム
[userdata]
(user_id, user_name, email, pass)
[blog]
(blog_id, date, title, content)
