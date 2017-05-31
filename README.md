
# MirrorTestRepo4Blog
Test Spiegel Repository 

## 1. Repository Klonen, welches gespiegelt werden soll und ins Verzeichnis wechseln
```bash
git clone --mirror https://github.com/NoLogig/MirrorTestRepo4Blog.git 
cd MirrorTestRepo4Blog.git
```

## 2. Push-Url ändern 
--push ändern nur die Push-Url :
```bash
git remote set-url --push origin https://github.com/NoLogig/MirrorOutputRepo4Blog.git
```
Mit ```bash git remote -v ```kann man sich die fetch und push URL anzeigen lassen.

## 3. Fertig
fetch und push ausführen, um die Repos zu vergleichen und ggf. zu aktualisieren 
```bash
git fetch -p origin && git push –mirror
```
