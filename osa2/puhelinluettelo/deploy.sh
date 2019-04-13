#!/bin/sh
npm run build
rm -rf ../../../fullstackmooc-2019-persons-backend/build
cp -r build ../../../fullstackmooc-2019-persons-backend 