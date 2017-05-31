
# MirrorTestRepo4Blog
Test: Spiegel Repository 

## Repository Klonen, welches gespiegelt werden soll und anschließend ins geklonte Verzeichnis wechseln.
```bash
git clone --mirror https://github.com/NoLogig/MirrorTestRepo4Blog.git 
cd MirrorTestRepo4Blog.git
```
## fetch/- und push-URL ausgeben lassen.  
```bash
git remote -v 
```

## push-URL ändern .
--push Parameter ändert nur die Push-URL. Die Fetsh-URL bleibt natürlich unverändert.
```bash
git remote set-url --push origin https://github.com/NoLogig/MirrorOutputRepo4Blog.git
```

## oder weitere hinzufügen
```bash
git remote set-url --add --push origin https://github.com/Nutzer/weiteresRepository.git
```

## Fertig 1
fetch, push ausführen, um die Repos zu vergleichen und ggf. zu aktualisieren, wenn die push-URL geändert wurde.
```bash
git fetch -p origin && git push –mirror
```
