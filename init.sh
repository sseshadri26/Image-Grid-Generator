#!/bin/bash

jsArr='let srcArr = [';

for fname in $(ls $1)
do
	jsArr="$jsArr\"images/$fname\"",;
done
jsArr=${jsArr%','}
jsArr+='];'
echo $jsArr > srcURLs.js
open imageGrid.html
