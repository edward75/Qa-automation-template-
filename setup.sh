#!/bin/bash

echo "Creating QA Automation Framework..."

mkdir -p api
mkdir -p pages
mkdir -p tests/ui
mkdir -p tests/api
mkdir -p utils
mkdir -p data
mkdir -p environments
mkdir -p fixtures
mkdir -p schemas
mkdir -p reports

echo "Installing dependencies..."

npm init -y

npm install -D @playwright/test typescript ts-node

npx playwright install

echo "Framework setup complete"
