# システム管理者から.env ファイルを提供されていることを前提とする

## docker コンテナを立ち上げる

```
docker-compose up -d
```

## docker コンテナに入る

```
docker-compose exec app bash
```

## vite サーバーを起動する

```
docker-compose exec app npm run dev
```

## php-csfixer を実行する（差分を比較する）

```
./vendor/bin/php-cs-fixer fix --dry-run --diff ./
```

## php-csfixer を実行する（差分を実行する）

```
./vendor/bin/php-cs-fixer fix ./
```
