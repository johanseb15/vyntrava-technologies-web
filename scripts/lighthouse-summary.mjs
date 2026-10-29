import { readFileSync } from 'node:fs';

const modes = ['mobile', 'desktop'];
const lines = [
  '## ADEL-WEB-007 · Lighthouse production audit',
  '',
  '| Metric | Mobile | Desktop |',
  '|---|---:|---:|',
];
const reports = modes.map(mode => {
  const result = JSON.parse(readFileSync(`lighthouse-results/${mode}.json`, 'utf8'));
  const categories = result.categories ?? {};
  const audit = result.audits ?? {};
  return {
    mode,
    scores: Object.fromEntries(['performance', 'accessibility', 'best-practices', 'seo'].map(key => [key, categories[key]?.score == null ? 'N/A' : Math.round(categories[key].score * 100).toString()])),
    metrics: Object.fromEntries(['first-contentful-paint', 'largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time'].map(key => [key, audit[key]?.displayValue ?? 'N/A'])),
    errors: result.runtimeError?.message ?? null,
    audits: audit,
    categories,
  };
});
for (const key of ['performance', 'accessibility', 'best-practices', 'seo']) {
  const label = { performance: 'Performance', accessibility: 'Accessibility', 'best-practices': 'Best practices', seo: 'SEO' }[key];
  lines.push(`| ${label} | ${reports[0].scores[key]} | ${reports[1].scores[key]} |`);
}
for (const key of ['first-contentful-paint', 'largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time']) {
  lines.push(`| ${key} | ${reports[0].metrics[key]} | ${reports[1].metrics[key]} |`);
}
lines.push('', '### Recomendaciones verificadas por Lighthouse');
for (const report of reports) {
  lines.push('', `#### ${report.mode}`);
  for (const key of ['performance', 'seo']) {
    const category = report.categories[key];
    if (!category) continue;
    const issues = (category.auditRefs ?? [])
      .filter(ref => (ref.weight ?? 0) > 0)
      .map(ref => ({ ref, audit: report.audits[ref.id] }))
      .filter(({ audit }) => audit && audit.score !== null && audit.score < 1)
      .sort((a, b) => (a.audit.score ?? 1) - (b.audit.score ?? 1))
      .slice(0, 10);
    lines.push(`**${category.title ?? key}** — ${issues.length ? 'auditorías por revisar' : 'sin fallas ponderadas'}`);
    for (const { ref, audit } of issues) {
      const detail = audit.displayValue ? ` (${audit.displayValue})` : '';
      lines.push(`- ${ref.id}: ${audit.title}${detail} — score ${Math.round(audit.score * 100)}`);
    }
  }
  const lcpNode = report.audits['largest-contentful-paint-element']?.details?.items?.[0]?.node;
  if (lcpNode) lines.push(`**Elemento LCP:** \`${(lcpNode.snippet ?? lcpNode.selector ?? '').slice(0, 260).replaceAll('\\n', ' ')}\``);
  for (const id of ['lcp-discovery-insight', 'lcp-breakdown-insight', 'render-blocking-resources', 'uses-optimized-images', 'uses-responsive-images']) {
    const audit = report.audits[id];
    if (audit && audit.score !== 1) lines.push(`- Diagnóstico adicional ${id}: ${audit.displayValue ?? audit.title}`);
  }
}
lines.push('', 'Scores are lab measurements on the root-mounted static export, **not** a live Pages URL or complete WCAG audit.');
for (const report of reports) if (report.errors) lines.push(`WARNING (${report.mode}): ${report.errors}`);
const message = lines.join('\n');
console.log(message);
if (process.env.GITHUB_STEP_SUMMARY) {
  const { appendFileSync } = await import('node:fs');
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, message + '\n');
}
