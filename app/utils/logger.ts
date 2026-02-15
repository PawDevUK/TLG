// Example usage: sending a log to the API
export async function logEvent(level: string, message: string, meta?: Record<string, unknown>) {
  await fetch('/api/logs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ level, message, meta }),
  });
}

// Example usage: fetching logs from the API
export async function fetchLogs() {
  const res = await fetch('/api/logs');
  const data = await res.json();
  return data.logs;
}
