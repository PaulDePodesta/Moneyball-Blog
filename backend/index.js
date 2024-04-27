// Importiere das express Modul
const express = require('express');

// Erstelle eine neue Express Anwendung
const app = express();

// Definiere den Port, auf dem der Server laufen soll
const PORT = process.env.PORT || 3000;

// Middleware, die eingehende Anfragen als JSON-Daten interpretiert
app.use(express.json());

// Eine einfache Route, die auf GET-Anfragen an der Wurzel reagiert
app.get('/', (req, res) => {
    res.send('Willkommen beim Fußball-Finanz-Blog Backend!');
});

// Starte den Server auf dem festgelegten Port
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

