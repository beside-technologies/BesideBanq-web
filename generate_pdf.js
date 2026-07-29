const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const puppeteer = require('puppeteer');

async function generatePDF() {
  console.log('Reading PRD.md...');
  const mdContent = fs.readFileSync(path.join(__dirname, 'PRD.md'), 'utf8');

  console.log('Converting Markdown to HTML...');
  const htmlContent = marked(mdContent);

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Besidebanq PRD</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      font-size: 13px;
      line-height: 1.7;
      color: #1a1a2e;
      padding: 40px 60px;
      max-width: 900px;
      margin: 0 auto;
    }
    h1 {
      font-size: 28px;
      color: #1a0434;
      border-bottom: 4px solid #6B21A8;
      padding-bottom: 12px;
      margin-bottom: 20px;
      margin-top: 30px;
    }
    h2 {
      font-size: 20px;
      color: #6B21A8;
      border-left: 5px solid #6B21A8;
      padding-left: 12px;
      margin-top: 36px;
      margin-bottom: 14px;
    }
    h3 {
      font-size: 16px;
      color: #1a0434;
      margin-top: 24px;
      margin-bottom: 10px;
    }
    h4 {
      font-size: 14px;
      color: #4a1580;
      margin-top: 18px;
      margin-bottom: 8px;
    }
    p {
      margin-bottom: 12px;
    }
    ul, ol {
      margin: 10px 0 12px 24px;
    }
    li {
      margin-bottom: 5px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 12px;
    }
    th {
      background: #6B21A8;
      color: white;
      padding: 8px 12px;
      text-align: left;
      font-weight: 600;
    }
    td {
      padding: 7px 12px;
      border-bottom: 1px solid #e8e0f0;
    }
    tr:nth-child(even) td {
      background: #f9f5ff;
    }
    code {
      background: #f0e8ff;
      color: #6B21A8;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 12px;
    }
    pre {
      background: #1a0434;
      color: #f0e8ff;
      padding: 16px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 14px 0;
      font-size: 12px;
      line-height: 1.6;
    }
    pre code {
      background: none;
      color: #f0e8ff;
      padding: 0;
    }
    blockquote {
      border-left: 4px solid #6B21A8;
      background: #f9f5ff;
      padding: 10px 16px;
      margin: 14px 0;
      border-radius: 0 6px 6px 0;
      color: #4a1580;
      font-style: italic;
    }
    hr {
      border: none;
      border-top: 2px solid #e8e0f0;
      margin: 28px 0;
    }
    strong {
      color: #1a0434;
      font-weight: 700;
    }
    em {
      color: #555;
    }
    a {
      color: #6B21A8;
      text-decoration: none;
    }
    /* Cover page style for first H1 */
    .cover {
      text-align: center;
      padding: 80px 0 60px;
      border-bottom: 3px solid #6B21A8;
      margin-bottom: 40px;
    }
    @media print {
      body { padding: 20px 40px; }
      h2 { page-break-before: auto; }
    }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;

  const htmlPath = path.join(__dirname, 'PRD_temp.html');
  fs.writeFileSync(htmlPath, fullHtml);
  console.log('HTML written. Launching browser...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(`file:///${htmlPath}`, { waitUntil: 'networkidle0' });

  console.log('Generating PDF...');
  const pdfPath = path.join(__dirname, 'Besidebanq_PRD.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `<div style="font-size:9px; color:#999; width:100%; text-align:right; padding-right:20px;">Besidebanq — Product Requirements Document</div>`,
    footerTemplate: `<div style="font-size:9px; color:#999; width:100%; text-align:center;">Page <span class="pageNumber"></span> of <span class="totalPages"></span> &nbsp;|&nbsp; Confidential © 2026 Besidebanq Inc.</div>`
  });

  await browser.close();

  // Clean up temp HTML
  fs.unlinkSync(htmlPath);

  console.log(`\n✅ PDF generated successfully!`);
  console.log(`📄 Saved to: ${pdfPath}`);
}

generatePDF().catch(err => {
  console.error('❌ Error generating PDF:', err.message);
  process.exit(1);
});
