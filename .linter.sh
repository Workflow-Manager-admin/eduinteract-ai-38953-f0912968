#!/bin/bash
cd /home/kavia/workspace/code-generation/eduinteract-ai-38953-f0912968/conceptlabfrontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

