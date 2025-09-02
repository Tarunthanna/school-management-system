Write-Host "Fixing Git Repository..." -ForegroundColor Green

# Remove all git history and start fresh
Write-Host "Removing old git repository..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue

# Initialize new git repository
Write-Host "Initializing new git repository..." -ForegroundColor Yellow
git init

# Add all files
Write-Host "Adding all files..." -ForegroundColor Yellow
git add .

# Create initial commit
Write-Host "Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: School Management System with all files"

# Set branch to main
Write-Host "Setting branch to main..." -ForegroundColor Yellow
git branch -M main

Write-Host "`nGit repository fixed! Now you can add your remote and push." -ForegroundColor Green
Write-Host "`nRun these commands:" -ForegroundColor Cyan
Write-Host "git remote add origin https://github.com/Tarunthanna/school-management-system.git" -ForegroundColor White
Write-Host "git push -u origin main --force" -ForegroundColor White

Write-Host "`nPress Enter to continue..." -ForegroundColor Gray
Read-Host
