type UpdateItem = { period: string | null; description: string };
type Article = { title: string; date: string; updates: UpdateItem[] };

export async function fetchTimeline() {
	const res = await fetch('/api/timeline');
	if (!res.ok) throw new Error('Failed to fetch timeline');
	const payload = await res.json();
	return payload.data as Article[];
}

export async function postTimelineEntry(entry: Article) {
	const res = await fetch('/api/timeline', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(entry),
	});

	if (!res.ok) {
		const err = await res.json().catch(() => ({}));
		throw new Error(err?.error || 'Failed to post timeline entry');
	}

	const payload = await res.json();
	return payload.data as Article;
}

// Usage (example):
// import { postTimelineEntry } from 'lib/timelineClient';
// await postTimelineEntry({ title: 'My update', date: '20/11/25', updates: [{ period: 'Morning', description: 'Did X' }] });
