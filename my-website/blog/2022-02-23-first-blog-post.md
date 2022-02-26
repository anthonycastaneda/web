---
slug: first-blog-post
title: First Blog Post
authors: [anthony]
tags: [hello-there, powershell]
---

Testing code blocks, here's a little script that will reboot all your RODCs.

:::danger Take care

Don't do this in Production :smile:

:::

```powershell title="Reboot-All-RODCs.ps1"
$RODCs = (Get-ADDomainController -Filter {IsReadOnly -eq $true})
 
foreach($RODC in $RODCs){
    Invoke-Command -ComputerName $RODC {Restart-Computer}
}
```
