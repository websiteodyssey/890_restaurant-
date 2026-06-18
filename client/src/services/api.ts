export type ReservationInput = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
};

export type ReservationResult = {
  message: string;
  reservation: { id: string };
};

export async function createReservation(
  input: ReservationInput
): Promise<ReservationResult> {
  const res = await fetch("/api/reservations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || "Une erreur est survenue. Merci de réessayer.");
  }
  return data as ReservationResult;
}
