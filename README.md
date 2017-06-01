

# Demo: Repository spiegel 

## Repository Klonen, welches gespiegelt werden soll 
```bash
git clone https://github.com/NoLogig/MirrorTestRepo4Blog.git
```

### Repository Klonen, welches gespiegelt werden soll 
```bash
git clone --mirror https://github.com/NoLogig/MirrorOutputRepo4Blog.git 
```

## anschließend ins geklonte Verzeichnis wechseln.
```bash
cd MirrorTestRepo4Blog.git
```

### anschließend ins geklonte Verzeichnis wechseln.
```bash
cd MirrorOutputRepo4Blog.git
```

## fetch/- und push-URL’s ausgeben lassen.  
```bash
git remote –v 
```

## push-URL ändern .
--push Parameter ändert nur die Push-URL. 
```bash
git remote set-url --push origin https://github.com/NoLogig/MirrorOutputRepo4Blog.git
```

### push-URL ändern .
--push Parameter ändert nur die Push-URL. 
```bash
git remote set-url --push origin https://github.com/NoLogig/mirrorFetchPush.git
```
## oder weitere hinzufügen
```bash
git remote set-url --add --push origin https://github.com/Nutzer/weiteresRepository.git
```

## Test clone fetch, pull, push ausführen, um die Repos zu vergleichen und ggf. zu aktualisieren.
```bash
git fetch && git pull && git push
```

```bash
git commit -m
git push
```

### Test mirror fetch, pull, push ausführen, um die Repos zu vergleichen und ggf. zu aktualisieren.
```bash
git fetch -p origin && git push --mirror
```