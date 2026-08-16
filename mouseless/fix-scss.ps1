$filepath = "C:\Users\v\Documents\lib\macos\mouseless\src\components\GiftUnwrap.vue"

$content = Get-Content -Path $filepath -Raw

# Replace corrupted variable lines
$content = $content -replace '\s+\$box:\s+\?\s+;', "`t$box: 240px;"
$content = $content -replace '\s+\$half:\s+\?\s+;', "`t$half: 120px;"
$content = $content -replace '\s+\$bandw:\s+\?\s+;', "`t$bandw: 58px;"
$content = $content -replace '\s+\$bandh:\s+\?\s+;', "`t$bandh: $box;"
$content = $content -replace '\s+\$lidh:\s+\?\s+;', "`t$lidh: 34px;"

$content | Set-Content -Path $filepath
Write-Host "SCSS variables repaired successfully"
