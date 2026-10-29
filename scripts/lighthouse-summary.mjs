import { readFileSync } from 'node:fs';

const modes = ['mobile', 'desktop'];
const lines = [
  '## ADEL-WEB-007 · Lighthouse production audit',
  '',
  '| Metric | Mobile | Desktop |',
  '|---|---:|---:|',
];
const reports = modes.map(mode => {
  const result = JSON.parse(readFileSync(`lighthouse-results/${mode}.report.json`, 'utf8'));
  const categories = result.categories ?? {};
  const audit = result.audits ?? {};
  return {
    mode,
    scores: Object.fromEntries(['performance', 'accessibility', 'best-practices', 'seo'].map(key => [key, categories[key]?.score == null ? 'N/A' : Math.round(categories[key].score * 100).toString()])),
    metrics: Object.fromEntries(['first-contentful-paint', 'largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time'].map(key => [key, audit[key]?.displayValue ?? 'N/A'])),
    errors: result.runtimeError?.message ?? null,
  };
});
for (const key of ['performance', 'accessibility', 'best-practices', 'seo']) {
  const label = { performance: 'Performance', accessibility: 'Accessibility', 'best-practices': 'Best practices', seo: 'SEO' }[key];
  lines.push(`| ${label} | ${reports[0].scores[key]} | ${reports[1].scores[key]} |`);
}
for (const key of ['first-contentful-paint', 'largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time']) {
  lines.push(`| ${key} | ${reports[0].metrics[key]} | ${reports[1].metrics[key]} |`);
}
lines.push('', 'Scores are lab measurements on the root-mounted static export, **not** a live Pages URL or complete WCAG audit.');
for (const report of reports) if (report.errors) lines.push(`WARNING (${report.mode}): ${report.errors}`);
const message = lines.join('\n');
console.log(message);
if (process.env.GITHUB_STEP_SUMMARY) {
  const { appendFileSync } = await import('node:fs');
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, message + '\n');
}
