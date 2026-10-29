import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const pages = process.env.DEPLOY_TARGET === 'github-pages';
const prefix = pages ? '/vyntrava-technologies-web' : '';
const read = path => {
  assert.ok(existsSync(path), `Missing static route: ${path}`);
  return readFileSync(path, 'utf8');
};

const home = read('out/index.html');
const privacy = read('out/politica-de-privacidad/index.html');
assert.match(home, /Soluciones reales para un trabajo m[aá]s eficiente/i);
assert.match(privacy, /Pol[ií]tica de privacidad/i);
assert.match(home, /name="robots"[^>]*noindex|content="noindex[^"]*"[^>]*name="robots"/i);
assert.match(home, /href="[^"]*politica-de-privacidad\/?"/);
if (pages) {
  assert.ok(home.includes(`href="${prefix}/politica-de-privacidad/"`), 'Privacy link lost Pages basePath');
  assert.ok(privacy.includes(`href="${prefix}/"`), 'Home link lost Pages basePath');
  assert.ok(home.includes(`${prefix}/_next/`), 'JS/CSS assets lost Pages basePath');
}
console.log(`ADEL-WEB-007 export verified: ${pages ? 'GitHub Pages candidate' : 'localhost'}`);
