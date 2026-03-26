import puppeteer from 'puppeteer'
import { marked } from 'marked'

export async function generatePDF(markdownText) {
    // Detect and wrap the intro block (everything before the first ###)
    const withIntro = markdownText.replace(
        /^([\s\S]*?)(?=###)/,
        (match) => `<div class="intro">${match.trim()}</div>\n\n`
    )

    const body = marked(withIntro)

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@300;400;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'IBM Plex Sans', sans-serif;
          background: #0a0a0a;
          color: #e4e4e4;
          padding: 56px 64px;
        }

        /* ── Intro block ── */
        .intro {
          border-left: 3px solid #61dafb;
          padding: 16px 20px;
          margin-bottom: 40px;
          background: #0f1a1f;
          border-radius: 0 6px 6px 0;
        }

        .intro p {
          font-size: 15px;
          color: #d4d4d4;
          line-height: 1.9;
          margin-bottom: 8px;
          font-weight: 300;
        }

        .intro p:last-child { margin-bottom: 0; }

        /* ── Headings ── */
        h1 {
          font-size: 26px;
          font-weight: 600;
          color: #fff;
          border-bottom: 1px solid #2a2a2a;
          padding-bottom: 16px;
          margin-bottom: 32px;
          letter-spacing: -0.02em;
        }

        h2 {
          font-size: 17px;
          font-weight: 600;
          color: #fff;
          margin: 36px 0 14px;
          letter-spacing: -0.01em;
        }

        h3 {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          margin: 28px 0 10px;
          letter-spacing: -0.01em;
        }

        /* ── Body text ── */
        p {
          font-size: 13.5px;
          color: #999;
          line-height: 1.85;
          margin-bottom: 14px;
          font-weight: 300;
        }

        /* ── Bullet points ── */
        ul {
          list-style: none;
          margin: 8px 0 20px;
          padding: 0;
        }

        ul li {
          font-size: 13.5px;
          color: #999;
          padding: 7px 0 7px 16px;
          border-left: 2px solid #61dafb;
          margin-bottom: 8px;
          line-height: 1.7;
        }

        ul li strong {
          color: #e4e4e4;
          font-weight: 600;
        }

        /* ── Divider ── */
        hr {
          border: none;
          border-top: 1px solid #1e1e1e;
          margin: 32px 0;
        }

        /* ── Links (source URLs) ── */
        a {
          color: #61dafb;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          text-decoration: none;
        }

        /* ── Italic / em (used for source labels) ── */
        em {
          color: #555;
          font-style: normal;
          font-size: 12px;
          font-family: 'IBM Plex Mono', monospace;
        }

        /* ── Inline code ── */
        code {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: #61dafb;
          background: #0f1a1f;
          padding: 1px 5px;
          border-radius: 3px;
        }

        /* ── Footer ── */
        .footer {
          margin-top: 56px;
          padding-top: 16px;
          border-top: 1px solid #2a2a2a;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          color: #444;
          letter-spacing: 0.1em;
          display: flex;
          justify-content: space-between;
        }
      </style>
    </head>
    <body>
      ${body}
      <div class="footer">
        <span>THE CODE REPORT</span>
        <span>GENERATED ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}</span>
      </div>
    </body>
    </html>
  `

    const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'networkidle0' })
    const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: '48px', bottom: '48px', left: '0', right: '0' }
    })
    await browser.close()
    return pdfBuffer
}