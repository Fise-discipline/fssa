// Configurația publică a aplicației (Faza 0). Copiați ca config.js lângă index.html și completați.
// Niciuna dintre valori nu este secretă: aplicația SPA se autentifică prin contul utilizatorului (MSAL, flux PKCE).
window.CONFIG = {
  clientId: "<Application (client) ID din Entra ID → App registrations>",
  tenantId: "<Directory (tenant) ID>",
  siteUrl: "https://<tenant>.sharepoint.com/sites/<site>",   // site-ul SharePoint al facultății
  library: "FSSA – Fișe disciplină 2026",                    // numele bibliotecii de documente
  scopes: ["User.Read", "Sites.ReadWrite.All"],
};
