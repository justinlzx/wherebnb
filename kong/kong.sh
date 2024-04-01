#!/bin/bash
# Read the value of the AUTH_KEY environment variable
AUTH_KEY_VALUE=${AUTH_KEY}

# Replace placeholder in kong.yaml with the value of the AUTH_KEY environment variable
sed -i 's/AUTH_KEY/'"${AUTH_KEY_VALUE}"'/g' /etc/kong/kong.yaml

kong start --vv -c /etc/kong/kong.yaml