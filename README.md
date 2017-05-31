
# MirrorTestRepo4Blog
Test: Spiegel Repository 

## 1. Repository Klonen, welches gespiegelt werden soll und anschließend ins geklonte Verzeichnis wechseln.
```bash
git clone --mirror https://github.com/NoLogig/MirrorTestRepo4Blog.git 
cd MirrorTestRepo4Blog.git
```

## 2. Push-URL ändern 
--push Parameter ändert nur die Push-URL. Die Fetsh-URL bleibt natürlich unverändert.
```bash
git remote set-url --push origin https://github.com/NoLogig/MirrorOutputRepo4Blog.git
```
** ```git remote -v ``` zeigt die fetch/- und push-URL an.**

## 3. Fertig
fetch, push ausführen, um die Repos zu vergleichen und ggf. zu aktualisieren 
```bash
git fetch -p origin && git push –mirror
```
