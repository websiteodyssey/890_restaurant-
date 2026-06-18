import express from "express";
import cors from "cors";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "data");
const DATA_FILE = join(DATA_DIR, "reservations.json");
const PORT = Number(process.env.PORT) || 4000;
// Jeton simple pour protéger l'accès admin (à changer en production).
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "890-admin";

type Reservation = {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  guests: number;
  notes: string;
  createdAt: string;
};

const app = express();
app.use(cors());
app.use(express.json());

async function readReservations(): Promise<Reservation[]> {
  if (!existsSync(DATA_FILE)) return [];
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Reservation[];
  } catch {
    return [];
  }
}

async function writeReservations(list: Reservation[]): Promise<void> {
  if (!existsSync(DATA_DIR)) await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
}

// Horaires d'ouverture : fermé le jeudi (index 4 = jeudi).
function isOpenOn(dateStr: string): boolean {
  const d = new Date(`${dateStr}T12:00:00`);
  if (Number.isNaN(d.getTime())) return false;
  return d.getDay() !== 4; // 4 = jeudi
}

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", restaurant: "890 Restaurant" });
});

// Créer une réservation
app.post("/api/reservations", async (req, res) => {
  const { name, email, phone, date, time, guests, notes } = req.body ?? {};

  if (!name || !email || !phone || !date || !time || !guests) {
    return res
      .status(400)
      .json({ error: "Merci de renseigner tous les champs obligatoires." });
  }

  const guestsNum = Number(guests);
  if (!Number.isInteger(guestsNum) || guestsNum < 1 || guestsNum > 20) {
    return res
      .status(400)
      .json({ error: "Le nombre de convives doit être compris entre 1 et 20." });
  }

  if (!isOpenOn(String(date))) {
    return res.status(400).json({
      error: "Le restaurant est fermé ce jour-là (fermeture le jeudi).",
    });
  }

  const reservation: Reservation = {
    id: `RES-${Date.now().toString(36).toUpperCase()}`,
    name: String(name).trim(),
    email: String(email).trim(),
    phone: String(phone).trim(),
    date: String(date),
    time: String(time),
    guests: guestsNum,
    notes: String(notes ?? "").trim(),
    createdAt: new Date().toISOString(),
  };

  const list = await readReservations();
  list.push(reservation);
  await writeReservations(list);

  res.status(201).json({
    message: "Votre demande de réservation a bien été enregistrée.",
    reservation,
  });
});

// Consulter les réservations (admin) — protégé par jeton
app.get("/api/reservations", async (req, res) => {
  const token = req.header("x-admin-token");
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ error: "Accès non autorisé." });
  }
  const list = await readReservations();
  list.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  res.json({ count: list.length, reservations: list });
});

app.listen(PORT, () => {
  console.log(`890 Restaurant — serveur de réservation sur http://localhost:${PORT}`);
});
