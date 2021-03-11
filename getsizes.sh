#!/bin/bash
rm sizes.json
echo "{" >> sizes.json
for f in images/*; do
    size=$(stat -f%z "$f")
    echo "'$f': '$size'," >> sizes.json
done
echo "}" >> sizes.json

