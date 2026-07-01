# Rain Fan Resume PDFs

This folder contains the Typst source files for the portfolio PDF resumes.

## Files

- `rain-zh.typ` — Chinese resume source
- `rain-en.typ` — English resume source

## Build

Install Typst first:

```powershell
winget install --id Typst.Typst
```

Then generate both PDFs:

```powershell
npm run resume:build
```

Outputs:

- `public/Rain-Fan-FDE-Resume-ZH.pdf`
- `public/Rain-Fan-FDE-Resume-EN.pdf`

## Design rules

- Keep facts aligned with `AGENTS.md`.
- Do not invent unverified metrics.
- Keep Chinese and English versions factually consistent.
- Prefer FDE / AI Solutions language: business diagnosis, solution design, delivery, production launch, agent workflow.
