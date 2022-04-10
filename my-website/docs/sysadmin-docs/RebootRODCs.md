# Reboot all the RODCs in a Domain

RODCs are fairly safe to reboot at will, authentication will failover to the next Domain Controller based on Site topology.
So let's reboot `all the things!`

:::danger

Obviously you should be careful doing this in a Production domain :laughing:

:::

```powershell title='Reboot All The RODCs'
$RODCs = (Get-ADDomainController -Filter {IsReadOnly -eq $true})

foreach($RODC in $RODCs){
    Invoke-Command -ComputerName $RODC {Restart-Computer}
    }
```

See? Easy.
