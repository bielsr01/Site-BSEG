#!/bin/bash
set -e

echo "==> Building certificados-nr (/nrs/)..."
PORT=3000 BASE_PATH=/nrs/ pnpm --filter @workspace/certificados-nr run build

echo "==> Building bseg-home (/)..."
pnpm --filter @workspace/bseg-home run build

echo "==> Merging /nrs/ into home output..."
cp -r artifacts/certificados-nr/dist/public artifacts/bseg-home/dist/public/nrs

echo "==> Build complete."
