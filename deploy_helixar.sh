#!/bin/bash

# Define project path
PROJECT_PATH="/Users/vedantswami/Projects/helixar-design-os"
LOG_FILE="/Users/vedantswami/Projects/helixar-design-os/deploy_log.txt"

# Create/Clear log file
echo "Deployment Log - $(date)" > "$LOG_FILE"

{
  echo "--- Starting Deployment ---"
  cd "$PROJECT_PATH" || { echo "Failed to cd into $PROJECT_PATH"; exit 1; }

  echo "Step 1: Check Git version"
  git --version

  echo "Step 2: Initialize Git"
  if [ ! -d ".git" ]; then
    git init
    echo "Initialized new Git repository."
  else
    echo "Git repository already initialized."
  fi

  echo "Step 3: Set Remote Origin"
  git remote set-url origin https://github.com/vdnthtml/sex-money.git || git remote add origin https://github.com/vdnthtml/sex-money.git
  git remote -v

  echo "Step 4: Check git status"
  git status

  echo "Step 5: Stage Files"
  git add .

  echo "Step 6: Commit Files"
  if git diff-index --quiet HEAD --; then
    echo "Nothing to commit."
  else
    git commit -m "feat: complete Helixar Design OS and landing page"
  fi

  echo "Step 7: Push to GitHub"
  # Switch to main branch if not already on it
  git branch -M main
  git push -u origin main --force

  echo "--- Deployment Complete ---"
} >> "$LOG_FILE" 2>&1
