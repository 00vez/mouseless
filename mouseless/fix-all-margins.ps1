$content = Get-Content src/components/GiftUnwrap.vue -Raw

# Fix all corrupted margin lines
# Pattern: margin-: ;    margin-: ;    (should be margin-left: ...; margin-top: ...;)

# Fix .gw__box .gw__face (lines 146-147)
$content = $content -replace 'margin-: ;\s+margin-: ;\s+backface-visibility:', "margin-left: -$half;\n      margin-top: -$half;\n      backface-visibility:"

# Fix .gw__band3d .gw__bandface--front (line 194)
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(120deg', "margin-left: -($bandw / 2);\n      margin-top: -$bandh / 2;\n      background: linear-gradient(120deg"

# Fix .gw__band3d .gw__bandface--back (need to find the line)
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(300deg', "margin-left: -($bandw / 2);\n      margin-top: -$bandh / 2;\n      background: linear-gradient(300deg"

# Fix .gw__band3d .gw__bandface--left
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(20deg', "margin-left: -($bandw / 2);\n      margin-top: -$bandh / 2;\n      background: linear-gradient(20deg"

# Fix .gw__band3d .gw__bandface--right
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(340deg', "margin-left: -($bandw / 2);\n      margin-top: -$bandh / 2;\n      background: linear-gradient(340deg"

# Fix .gw__band3d .gw__bandface--top
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(160deg', "margin-left: -($half);\n      margin-top: -$bandh / 2;\n      background: linear-gradient(160deg"

# Fix .gw__band3d .gw__bandface--bottom
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: #0d0912;', "margin-left: -($half);\n      margin-top: -$bandh / 2;\n      background: #0d0912;"

# Fix .gw__lid .gw__lidface--front
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(120deg', "margin-left: -$half;\n      margin-top: -$half;\n      background: linear-gradient(120deg"

# Fix .gw__lid .gw__lidface--back
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(300deg', "margin-left: -$half;\n      margin-top: -$half;\n      background: linear-gradient(300deg"

# Fix .gw__lid .gw__lidface--left
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(20deg', "margin-left: -$half;\n      margin-top: -$lidh / 2;\n      background: linear-gradient(20deg"

# Fix .gw__lid .gw__lidface--right
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(340deg', "margin-left: -$half;\n      margin-top: -$lidh / 2;\n      background: linear-gradient(340deg"

# Fix .gw__lid .gw__lidface--top
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(160deg', "margin-left: -$half;\n      margin-top: -$lidh / 2;\n      background: linear-gradient(160deg"

# Fix .gw__lid .gw__lidface--bottom
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: #0d0912;', "margin-left: -$half;\n      margin-top: -$lidh / 2;\n      background: #0d0912;"

# Fix .gw__bow .gw__bowface--front
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(120deg', "margin-left: -39px;\n      margin-top: -47px;\n      background: linear-gradient(120deg"

# Fix .gw__bow .gw__bowface--back
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(300deg', "margin-left: -39px;\n      margin-top: -47px;\n      background: linear-gradient(300deg"

# Fix .gw__bow .gw__bowface--left
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(20deg', "margin-left: -39px;\n      margin-top: -47px;\n      background: linear-gradient(20deg"

# Fix .gw__bow .gw__bowface--right
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(340deg', "margin-left: -39px;\n      margin-top: -47px;\n      background: linear-gradient(340deg"

# Fix .gw__bow .gw__bowface--top
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(160deg', "margin-left: -39px;\n      margin-top: -47px;\n      background: linear-gradient(160deg"

# Fix .gw__bow .gw__bowface--bottom
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: #0d0912;', "margin-left: -39px;\n      margin-top: -47px;\n      background: #0d0912;"

# Fix .gw__knot .gw__knotface--front
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(120deg', "margin-left: -16px;\n      margin-top: -16px;\n      background: linear-gradient(120deg"

# Fix .gw__knot .gw__knotface--back
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(300deg', "margin-left: -16px;\n      margin-top: -16px;\n      background: linear-gradient(300deg"

# Fix .gw__knot .gw__knotface--left
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(20deg', "margin-left: -16px;\n      margin-top: -16px;\n      background: linear-gradient(20deg"

# Fix .gw__knot .gw__knotface--right
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(340deg', "margin-left: -16px;\n      margin-top: -16px;\n      background: linear-gradient(340deg"

# Fix .gw__knot .gw__knotface--top
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: linear-gradient\(160deg', "margin-left: -16px;\n      margin-top: -16px;\n      background: linear-gradient(160deg"

# Fix .gw__knot .gw__knotface--bottom
$content = $content -replace 'margin-: ;\s+margin-: ;\s+background: #0d0912;', "margin-left: -16px;\n      margin-top: -16px;\n      background: #0d0912;"

# Fix .gw__box .gw__face--top (another instance)
$content = $content -replace 'margin-: ;\s+margin-: ;\s+transform: translateZ', "margin-left: -280px;\n      margin-top: -280px;\n      transform: translateZ"

# Fix .gw__box .gw__face--bottom
$content = $content -replace 'margin-: ;\s+margin-: ;\s+transform: translateZ', "margin-left: -280px;\n      margin-top: -280px;\n      transform: translateZ"

$content | Set-Content src/components/GiftUnwrap.vue
Write-Host "Fixed all corrupted margin lines"