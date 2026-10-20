# Fișa disciplinei — FSSA (AFAHC)

Aplicație statică (un singur fișier, `index.html`) prin care cadrele didactice FSSA își completează fișele disciplinei pe modelul 2026, cu datele din planurile de învățământ pre-completate, validări, generare .docx din modelul oficial și PDF prin SharePoint.

- Datele **nu** sunt în acest repo: stau în biblioteca SharePoint a facultății („FSSA – Fișe disciplină 2026”), în care fiecare vede doar folderul lui.
- Autentificare: contul Microsoft 365 instituțional (MSAL.js, Entra ID, permisiuni delegate `User.Read`, `Sites.ReadWrite.All`).
- Configurare: copiați `config.example.js` în `config.js` și completați `clientId`, `tenantId`, `siteUrl`, `library`.
- Publicare: GitHub Pages din `main`; modificările aplicației intră prin pull request.

Sursa aplicației (`app/src`, scripturile de referință) este în pachetul `Sursa_faza3.zip` livrat decanului; `index.html` se regenerează cu `python3 app/build.py`.
