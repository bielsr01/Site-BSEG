#!/bin/sh
set -e
export NODE_OPTIONS=--max-old-space-size=4096
PORT=3000 BASE_PATH=/nrs/ pnpm --filter @workspace/certificados-nr run build
BASE_PATH=/ pnpm --filter @workspace/bseg-home run build
cp -r artifacts/certificados-nr/dist/public artifacts/bseg-home/dist/public/nrs
