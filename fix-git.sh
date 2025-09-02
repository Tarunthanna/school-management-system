#!/bin/bash

echo "Fixing Git Repository..."

# Remove all git history and start fresh
rm -rf .git

# Initialize new git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: School Management System with all files"

# Set branch to main
git branch -M main

echo "Git repository fixed! Now you can add your remote and push."
echo "Run these commands:"
echo "git remote add origin https://github.com/Tarunthanna/school-management-system.git"
echo "git push -u origin main --force"
