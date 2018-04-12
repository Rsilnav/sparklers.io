#!/bin/bash
set -x
#if [ $TRAVIS_BRANCH == 'master' ] ; then
    git init
        
    git remote add deploy "deploy@vps124793.ovh.net:/var/www/sparklers.io"
    git config user.name "Travis CI"
    git config user.email "rafael.silnav+travisCI@gmail.com"
    
    git add .
    git commit -m "Deploy"
    git push --force deploy master
#else
#    echo "Not deploying, since this branch isn't master."
#fi