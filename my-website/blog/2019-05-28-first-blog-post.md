---
slug: first-blog-post
title: First Blog Post
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---

PowerShell?

```powershell title="hello.ps1"
$computers = (Get-Content C:\Temp\AD-PCs.txt)
foreach ($computer in $computers) {
    Set-ExecutionPolicy -ExecutionPolicy Bypass -Force
    Invoke-Command  -ScriptBlock {
        $temp = "c:\temp"
        if (!(Test-Path $temp)) { mkdir c:\Temp }
        $PSWindowsUpdates = "c:\program files\WindowsPowershell\Modules\PSWindowsUpdate"
        if (!(Test-Path $PSWindowsUpdates)) {
            Invoke-WebRequest -Uri http://(host)/PSWindowsUpdate.zip -Method GET `
             -OutFile c:\temp\PSWindowsUpdate.zip 
            Expand-Archive -Path C:\temp\PSWindowsUpdate.zip `
             -DestinationPath "c:\program files\WindowsPowershell\Modules\"
        }
    } -ComputerName $computer
}
```
