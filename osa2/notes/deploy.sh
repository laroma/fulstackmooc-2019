#!/bin/sh
npm run build
rm -rf ../../osa3/notes-backend/build
cp -r build ../../osa3/notes-backend/