---
title: "Jak wyjaśnić uczniowi, co tracker wysyła przy jednym wejściu na tekst"
description: "Przewodnik po działaniu trackerów w przeglądarkach dla nauczycieli i uczniów."
pubDate: "2026-09-22"
author: "Anna Kowalczyk"
authorBio: "Pedagożka i popularyzatorka nauki. Pisze o edukacji, psychologii uczenia się i rozwoju kompetencji."
category: "Edukacja"
tags: ["prywatność", "tracker", "cookies"]
readingTime: "6 min"
image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&h=900&q=80"
---

## Dlaczego warto zrozumieć, co wysyła tracker

Wyobraź sobie, że uczniowie wchodzą na stronę internetową, a Ty chcesz im wytłumaczyć, co się wtedy dzieje z ich danymi. To nie jest prosta sprawa, zwłaszcza gdy chodzi o trackery. Oto jak to można przedstawić w sposób przystępny i nieprzerażający.

Kiedy osoba klika w link do artykułu, przeglądarka wysyła jedno żądanie HTTP. Jest to zazwyczaj skrypt lub niewielki piksel 1x1 z zewnętrznej domeny, który ma na celu odnotowanie wizyty. W tym momencie przeglądarka dołącza do żądania swoje IP i user-agent, co oznacza, że strona może zobaczyć adres użytkownika i rodzaj przeglądarki.

### Co dokładnie leci do trackera

1. **Adres artykułu (dl)** - to miejsce, które odwiedzamy.
2. **Strona poprzednia (dr)** - skąd przybyliśmy.
3. **Nazwa zdarzenia (en)** - typ akcji, na przykład page_view.
4. **Identyfikator (cid)** - unikalny znacznik przeglądarki, często przechowywany w ciasteczku, takim jak _ga przy Google Analytics lub _fbp przy pikselu Meta.

Przykładowy adres, który może być wysyłany, wyglądałby tak: `collect.example.invalid/g/collect?dl=adres_artykulu&dr=strona_poprzednia&en=page_view&cid=identyfikator`. , że pierwszy raz, gdy ktoś wchodzi na stronę, tracker zazwyczaj tworzy nowy identyfikator. Przy kolejnych wizytach na tej samej domenie, ten sam cid będzie wciąż używany, nawet jeśli URL się zmieni.

### Co nie jest wysyłane

To ważne, aby podkreślić, co nie leci do trackera. W żądaniu nie ma treści artykułu, haseł, plików z dysku ani informacji ze skrzynki mailowej. To konkretne dane dotyczące wizyty, a nie osobiste informacje.

Rozkład takiego żądania jest w tekście [co leci do trackera z przeglądarki](https://www.blackweb.pl/blog/co-tracker-wysyla-przy-jednym-wejscie).

Niektóre informacje, jak geolokalizacja, są określane na podstawie IP, co jest mylące, ponieważ nie odpowiada to rzeczywistej lokalizacji GPS. Miasto, które wyświetla się na stronie, często jest błędne.

### Przykłady działania trackera

Poniższa tabela przedstawia, co wysyłane jest przy pierwszym i kolejnym wejściu na stronę:

| Typ danych       | Pierwsze wejście | Kolejne wejście |
|------------------|------------------|------------------|
| Adres artykułu   | Tak              | Tak              |
| Strona poprzednia| Tak              | Tak              |
| Nazwa zdarzenia  | Tak              | Tak              |
| Identyfikator    | Tak              | Tak              |
| Treść artykułu   | Nie              | Nie              |
| Hasła            | Nie              | Nie              |

### Co z banerami

Często banery dotyczące prywatności są spóźnione. Żądanie związane z trackerem może zostać wysłane, zanim użytkownik zdąży kliknąć "Akceptuję". Zamknięcie banera nie cofa wcześniejszych działań.

Aby lepiej zrozumieć, co leci do trackera z przeglądarki, warto samodzielnie to sprawdzić. Można użyć okna prywatnego i w zakładce Sieć obserwować żądania do obcych domen. Warto zwrócić uwagę na ścieżki takie jak `collect`, `pixel` lub `g/collect`, zanim podejmie się decyzję o akceptacji.

Dzięki tej wiedzy uczniowie będą lepiej rozumieć, co dzieje się z ich danymi w sieci. Edukacja w tym zakresie pomoże im świadomie korzystać z zasobów internetu.
