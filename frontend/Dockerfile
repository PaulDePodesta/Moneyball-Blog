# Verwende das offizielle Node.js-Alpine-Image als Basis
FROM node:alpine

# Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# Kopiere die package.json und package-lock.json (falls vorhanden)
COPY package*.json ./

# Installiere alle Abhängigkeiten
RUN npm install

# Kopiere den restlichen Anwendungscode
COPY . .

# Erstelle den Next.js Produktionsbuild
RUN npm run build

# Exponiere den Port, auf dem der Server läuft
EXPOSE 3000

# Starte die Anwendung im Produktionsmodus
CMD ["npm", "start"]