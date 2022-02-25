---
slug: first-blog-post
title: First Blog Post
authors: [anthony]
tags: [hello-there, docusaurus]
---

PowerShell?

```powershell title="Reboot-All-RODCs.ps1"
$RODCs = (Get-ADDomainController -Filter {IsReadOnly -eq $true})
 
foreach($RODC in $RODCs){
    Invoke-Command -ComputerName $RODC {Restart-Computer}
}
```
