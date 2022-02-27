# Ping all the PCs in an OU

I've gotten requests from field techs asking for a report of all the PCs at their location, and if they are online or not.

It happened often enough that I wrote a script for it:

```powershell
(Get-ADComputer -SearchBase "OU=Chicago Workstations,DC=contoso,DC=com" -Filter *).Name |
ForEach-Object {
    If (Test-Connection -ComputerName $_ -Count 1 -ErrorAction SilentlyContinue) {
        Test-Connection -ComputerName $_ -Count 1 `
        | Select-Object Address, ProtocolAddress,
        @{Name = 'Status'; Expression = { 'Online' } }
    }
    Else {
        $_ | Select-Object @{Name = 'Address'; Expression = { $_ } },
        @{Name = 'ProtocolAddress'; Expression = { 'NoAddress' } },
        @{Name = 'Status'; Expression = { 'Offline' } }
    }
} | Export-Csv .\OU-Report.csv
```

As you can see it isn't anything fancy but I found it to be useful.  Maybe the field techs knew they could ask me for a report
and I'd respond with one fairly quickly.  I'm too nice.
