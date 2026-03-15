#!/bin/bash

echo "🚀 Deploying your portfolio..."
echo ""

read -p "📝 What did you change? (commit message): " message

if [ -z "$message" ]; then
  message="Update portfolio"
fi

git add .
git commit -m "$message"
git push origin main
npm run deploy

echo ""
echo "✅ Done! Your site will be live in ~2 mins at https://shubhamsonu084.github.io"
