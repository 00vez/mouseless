$content = Get-Content src/components/GiftUnwrap.vue -Raw
$lines = $content -split '\r?\n'
$toggle = $true
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '^\s+margin-:\s') {
        if ($toggle) {
            $lines[$i] = $lines[$i] -replace 'margin-:', 'margin-left:'
        } else {
            $lines[$i] = $lines[$i] -replace 'margin-:', 'margin-top:'
        }
        $toggle = !$toggle
    }
}
$lines -join "`n" | Set-Content src/components/GiftUnwrap.vue
Write-Host "Fixed margin properties"