Write-Host "Starting School Management System..." -ForegroundColor Green
Write-Host ""

Write-Host "1. Setting up database..." -ForegroundColor Yellow
node setup-database.js
Write-Host ""

Write-Host "2. Starting development server..." -ForegroundColor Yellow
npm run dev

Read-Host "Press Enter to continue..."
