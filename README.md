### Projekt implementujący prosty sklep internetowy.
---

## Technologie
Na froentendzie wykorzystałem React z TailwindCss oraz Vite. Dodatkowo do autoryzacji administratrów korzystam z Auth0. Komunikacja z Api odbywa się przez ReactQuery.

Backend został napisany w C# w oparciu o platformę .Net w wersji 9.0.

Aplikacja wykorzystuje Ovh Cloud Storage to przechowywania zdjęć. Zdjęcia sa pobierane bezpośrednio z serwerów Ovh poprzez podpisane przez BE linki.

W oparciu o gmail działa system powiadomień mailowych o statusie zamówienia.
