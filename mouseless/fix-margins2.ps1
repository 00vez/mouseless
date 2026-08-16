$content = Get-Content src/components/GiftUnwrap.vue -Raw
$lines = $content -split '\r?\n'

# Fix specific line numbers based on original grep output
# Lines that should be margin-top (from original grep output even-numbered entries)
$marginTopLines = @(147, 197, 215, 233, 251, 277, 291, 305, 319, 333, 353, 390, 412, 429)

for ($i = 0; $i -lt $lines.Count; $i++) {
    $lineNum = $i + 1
    if ($marginTopLines -contains $lineNum) {
        $lines[$i] = $lines[$i] -replace 'margin-left:', 'margin-top:'
    }
}

$lines -join "`n" | Set-Content src/components/GiftUnwrap.vue
Write-Host "Fixed margin-top properties"