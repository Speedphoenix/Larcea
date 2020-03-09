#!/bin/sh

pgpasswd=${PGPASSWORD:-"12345montagneazertyatleastIhaveVodka"}
database=${PGDBNAME:-"larcea"}
username=${PGUSER:-"larcea"}

docker run --name larcea-postgres -e POSTGRES_PASSWORD= -d postgres
