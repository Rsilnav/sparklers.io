#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)
    
# Import the SSH deployment key
openssl aes-256-cbc -K $encrypted_978553fa01c4_key -iv $encrypted_978553fa01c4_iv -in deploy-key.ppk.enc -out deploy-key.ppk -d
rm deploy-key.ppk.enc # Don't need it anymore
chmod 600 deploy-key.ppk
mv deploy-key.ppk ~/.ssh/id_rsa