/*
    ZADANIE T2D6 - 15.02.2024 - stykanie sie divami typu egzamin

    Weź diva swojego, puśc rege.
    To przywoła do stykania sie divami kolegę.

    Odpowiadaj tylko na jedno pytanie na raz.
    Rób to po kolei.
    Gdy odpowiesz źle otrzymasz link z materiałem do przeczytania.
    Po przeczytaniu spróbuj odpowiedzieć ponownie.
    Lub poszukaj pomocy na naszym knurskim discordzie.
    Gdy odpowiesz dobrze, przejdź do następnego pytania.

    Niektóre pytania są zamknięte i odpowiedz na nie literką.
    Niektóre pytania są otwarte, odpowiedz zgodnie z instrukcją.

    Ten egzamin jest wymagany aby uzyskać promocję do następnego tygodnia.

    Do każdego pytania napisz uzasadnienie swoimi słowami.
    Będzie to przydatne w ocenie Twojego zrozumienia tematu.

    Wybierz niżej język w którym chcesz materiały do przeczytania.
    Generalnie materiały po angielsku są bardziej wartościowe.
    Więc jeśli umiesz ten język wybierz angielski.
*/
// *** USTAWIENIA JĘZYKA MATERIAŁÓW ***
const JĘZYK = "en"; // ustaw na "en" jeśli chcesz materiały po angielsku

// *** USTAWIENIA TELEMETRII ***
// Włącza albo wyłącza telemetrie.
// Przyesyła ona na bieżąco Twój postęp w zadaniu do KNUR CAMP supportu.
// Pozwala nam to ulepszyć KNURCAMPA i też lepiej zobaczyć braki w wiedzy :3
// Telemetria jest tylko dla knursantów.
// Nie działa automatycznie gdy nie podasz tokenu knursanta niżej.
const TELEMETRIA = true;
// Wysyła mi ten plik zadania na server.
const TELEMETRIA_ZAAWANSOWANA = true;
// Wypisuje w konsoli co wysyła na server jak jesteś paranoikiem.
const TELEMETRIA_OUT = false;
// Twój token knursanta (jak nie masz zostaw puste).
// Jeśli jesteś knursantem to dostałeś swój token na DM.
// np: const TOKEN_TELEMETRII = "abcdefgh";
// Gdzie abcdefgh to kod który dostałeś w wiadomości prywatnej.
const TOKEN_TELEMETRII = require("../../token.json").token;

/* KOD WERYFIKUJĄCY - NIE DOTYKAJ */
eval(
  Buffer.from(
    "Y29uc3QgVkVSSUZJRVIgPSBbXTsKClZFUklGSUVSWzBdID0ge3R5cGU6ICJvcGVuIiwgY29ycmVjdDogWyJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCIsICJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgpIl0sIHJlc291cmNlOiB7CiAgICAicGwiOiAiaHR0cHM6Ly9rdXJzanMucGwva3Vycy9kb20vZG9tIiwKICAgICJlbiI6ICJodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2pzL2pzX2ludHJvLmFzcCIKfX0KClZFUklGSUVSWzFdID0ge3R5cGU6ICJjbG9zZWQiLCBjb3JyZWN0OiAiQiIsIHJlc291cmNlOiB7CiAgICAicGwiOiAiaHR0cHM6Ly9rdXJzanMucGwva3Vycy9hamF4L2FzeW5jaHJvbmljem5vc2Mtd3N0ZXAiLAogICAgImVuIjogImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTGVhcm4vSmF2YVNjcmlwdC9Bc3luY2hyb25vdXMvSW50cm9kdWNpbmciCn19CgpWRVJJRklFUlsyXSA9IHt0eXBlOiAib3BlbiIsIGNvcnJlY3Q6ICJhYmMiLCByZXNvdXJjZTogewogICAgInBsIjogImh0dHBzOi8va3Vyc2pzLnBsL2t1cnMvZG9tL2RvbSIsCiAgICAiZW4iOiAiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvaW5uZXJIVE1MIgp9fTsKClZFUklGSUVSWzNdID0ge3R5cGU6ICJtdWx0aSIsIGNvcnJlY3Q6IFsiQSIsICJCIiwgIkMiLCAiRCIsICJFIl0sIHJlc291cmNlOiB7CiAgICAicGwiOiAiaHR0cHM6Ly9rdXJzanMucGwva3Vycy9hamF4L3Byb21pc2UiLAogICAgImVuIjogImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvVXNpbmdfcHJvbWlzZXMiCn19CgpWRVJJRklFUls0XSA9IHt0eXBlOiAib3BlbiIsIGNvcnJlY3Q6ICJ2YWx1ZSIsIHJlc291cmNlOiB7CiAgICAicGwiOiAiaHR0cHM6Ly9ob3cyaHRtbC5wbC9pbnB1dC10eXBlLWh0bWwvIiwKICAgICJlbiI6ICJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQiCn19CgpWRVJJRklFUls1XSA9IHt0eXBlOiAib3BlbiIsIGV4YWN0OiB0cnVlLCBjb3JyZWN0OiBbInNldEludGVydmFsIiwgInNldEludGVydmFsKCkiXSwgcmVzb3VyY2U6IHsKICAgICJwbCI6ICJodHRwczovL2t1cnNqcy5wbC9rdXJzL2ludGVydmFscy9pbnRlcnZhbHMiLAogICAgImVuIjogImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9zZXRJbnRlcnZhbCIKfX0KClZFUklGSUVSWzZdID0ge3R5cGU6ICJjbG9zZWQiLCBjb3JyZWN0OiAiQiIsIHJlc291cmNlOiB7CiAgICAicGwiOiAiaHR0cHM6Ly9rdXJzanMucGwva3Vycy9hamF4L2FzeW5jaHJvbmljem5vc2Mtd3N0ZXAiLAogICAgImVuIjogImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTGVhcm4vSmF2YVNjcmlwdC9Bc3luY2hyb25vdXMvSW50cm9kdWNpbmciCn19CgpWRVJJRklFUls3XSA9IHt0eXBlOiAibXVsdGkiLCByZW1vdmVTcGFjZXM6IHRydWUsIGNvcnJlY3Q6IFsiQSIsICJCIiwgIkUiXSwgcmVzb3VyY2U6IHsKICAgICJwbCI6ICJodHRwczovL2t1cnNqcy5wbC9rdXJzL2FqYXgvYXN5bmNocm9uaWN6bm9zYy13c3RlcCIsCiAgICAiZW4iOiAiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9MZWFybi9KYXZhU2NyaXB0L0FzeW5jaHJvbm91cy9JbnRyb2R1Y2luZyIKfX0KClZFUklGSUVSWzhdID0ge3R5cGU6ICJvcGVuIiwgY29ycmVjdDogImRvY3VtZW50LmJvZHkiLCByZXNvdXJjZTogewogICAgInBsIjogImh0dHBzOi8va3Vyc2pzLnBsL2t1cnMvZG9tL2RvbSIsCiAgICAiZW4iOiAiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50Igp9fQoKVkVSSUZJRVJbOV0gPSB7dHlwZTogIm9wZW4iLCBjb3JyZWN0OiAiYWRkRXZlbnRMaXN0ZW5lciIsIHJlc291cmNlOiB7CiAgICAicGwiOiAiaHR0cHM6Ly9rdXJzanMucGwva3Vycy9ldmVudHMvZXZlbnRzIiwKICAgICJlbiI6ICJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0phdmFTY3JpcHQvQnVpbGRpbmdfYmxvY2tzL0V2ZW50cyIKfX0KClZFUklGSUVSWzEwXSA9IHt0eXBlOiAib3BlbiIsIG9wdDogdHJ1ZSwgY29ycmVjdDogImNvcnMiLCByZXNvdXJjZTogewogICAgInBsIjogImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQ09SUyIsCiAgICAiZW4iOiAiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9DT1JTIgp9fQoKdmFyIGNvdW50ZXI7CnZhciB1b1BhaXI7Cgpjb25zdCBhbnN3ZXJzID0gW107CgpmdW5jdGlvbiBpc0Fuc3dlclZhbGlkKGV4YWN0LCBvcHRpb25zLCBhbnN3ZXIsIHR5cGUpCnsKICAgIGlmKHR5cGUgPT09ICJtdWx0aSIpCiAgICB7CiAgICAgICAgY29uc3QgYW5zd2VyT3B0ID0gYW5zd2VyLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAiIikuc3BsaXQoIiwiKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7CiAgICAgICAgY29uc3Qgb3B0aW9uc09wdCA9IG9wdGlvbnMuc29ydCgoYSwgYikgPT4gYSAtIGIpOwoKICAgICAgICBpZihvcHRpb25zT3B0Lmxlbmd0aCAhPT0gYW5zd2VyT3B0Lmxlbmd0aCkKICAgICAgICB7CiAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CgogICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvcHRpb25zT3B0Lmxlbmd0aDtpKyspCiAgICAgICAgewogICAgICAgICAgICBpZihvcHRpb25zT3B0W2ldLnRvTG93ZXJDYXNlKCkgIT09IGFuc3dlck9wdFtpXS50b0xvd2VyQ2FzZSgpKQogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgIH0KCiAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KICAgIGlmKEFycmF5LmlzQXJyYXkob3B0aW9ucykpCiAgICB7CiAgICAgICAgZm9yKGxldCBvcHQgb2Ygb3B0aW9ucykKICAgICAgICB7CiAgICAgICAgICAgIGlmKGV4YWN0KQogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBpZihvcHQudG9Mb3dlckNhc2UoKSA9PT0gYW5zd2VyLnRvTG93ZXJDYXNlKCkpCiAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZQogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBpZihvcHQudG9Mb3dlckNhc2UoKSA9PT0gYW5zd2VyLnRvTG93ZXJDYXNlKCkpCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9CiAgICBlbHNlIAogICAgewogICAgICAgIGlmKGV4YWN0KQogICAgICAgIHsKICAgICAgICAgICAgaWYob3B0aW9ucyA9PT0gYW5zd2VyKQogICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgfQogICAgICAgIGVsc2UgewogICAgICAgICAgICBpZihvcHRpb25zLnRvTG93ZXJDYXNlKCkgPT0gYW5zd2VyLnRvTG93ZXJDYXNlKCkpCiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICB9CiAgICB9CgogICAgcmV0dXJuIGZhbHNlOwp9CgpmdW5jdGlvbiBvZHBvd2llZMW6KG8pCnsKICAgIGlmKCFjb3VudGVyKSBjb3VudGVyID0gMDsKICAgIGlmKGNvdW50ZXIgPCAyKSByZXR1cm47CgogICAgaWYodW9QYWlyKQogICAgewogICAgICAgIGNvbnNvbGUubG9nKCJOaWUgbW/FvGVzeiB6b3N0YXdpxIcgcHl0YW5pYSBiZXogdXphc2FkbmllbmlhLiIpOwogICAgICAgIHByb2Nlc3MuZXhpdCgwKTsKICAgIH0KCiAgICBpZighbykKICAgIHsKICAgICAgICByZXR1cm47CiAgICB9CgogICAgY29uc3QgcSA9IFZFUklGSUVSW2NvdW50ZXIgLSAyXTsKCiAgICBpZighcS5leGFjdCkKICAgIHsKICAgICAgICBpZih0eXBlb2YgbyAhPT0gInN0cmluZyIpIG8gPSBvLnRvU3RyaW5nKCk7CiAgICB9CgogICAgaWYocS5yZW1vdmVTcGFjZXMpCiAgICB7CiAgICAgICAgbyA9IG8ucmVwbGFjZSgvIC9nLCAiIik7CiAgICB9CgogICAgaWYoIWlzQW5zd2VyVmFsaWQocS5leGFjdCwgcS5jb3JyZWN0LCB0eXBlb2YgbyA9PT0gInN0cmluZyIgPyBvLnRvTG93ZXJDYXNlKCkgOiAwLCBxLnR5cGUpKQogICAgewogICAgICAgIGNvbnNvbGUubG9nKGAke2NvdW50ZXIgLSAxfS8xMDogT2Rwb3dpZWTFuiBuaWVwcmF3aWTFgm93YWApOwogICAgICAgIGlmKHEudGlwKQogICAgICAgICAgICBjb25zb2xlLmxvZyhxLnRpcCk7CiAgICAgICAgY29uc29sZS5sb2coIlByemVjenl0YWogdGVuIGFydHlrdcWCIGkgc3Byw7NidWogb2Rwb3dpZWR6aWXEhyBwb25vd25pZS4iKTsKICAgICAgICBjb25zb2xlLmxvZyhgJHtxLnJlc291cmNlW0rEmFpZS119YCk7CiAgICB9CiAgICBlbHNlIAogICAgewogICAgICAgIHVvUGFpciA9IHRydWU7CiAgICAgICAgY29uc29sZS5sb2coYCR7Y291bnRlciAtIDF9LzEwOiBPZHBvd2llZMW6IHByYXdpZMWCb3dhYCk7CgogICAgICAgIGlmKGNvdW50ZXIgLSAxID09PSAxMCkKICAgICAgICB7CiAgICAgICAgICAgIGNvbnNvbGUubG9nKCJHcmF0dWxhY2plIHpkYW5pYSBwaWVyd3N6ZWogY3rEmcWbY2kgZWd6YW1pbnUhIik7CiAgICAgICAgICAgIGNvbnNvbGUubG9nKCJPdG8gbGlzdGEgbWF0ZXJpYcWCw7N3IHXFvHl0eWNoIHcgdHltIGVnemFtaW5pZSBkbyB1dHJ3YWxlbmlhIGkgcHJ6ZWN6eXRhbmlhOiIpOwogICAgICAgICAgICBjb25zdCBkZWR1cGxpY2F0b3IgPSBbXTsKICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIFZFUklGSUVSKQogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBpZighZGVkdXBsaWNhdG9yLmluY2x1ZGVzKGl0ZW0ucmVzb3VyY2VbSsSYWllLXSkpCiAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5yZXNvdXJjZVtKxJhaWUtdKTsKICAgICAgICAgICAgICAgICAgICBkZWR1cGxpY2F0b3IucHVzaChpdGVtLnJlc291cmNlW0rEmFpZS10pOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQp9CgpmdW5jdGlvbiB1emFzYWRuaWVuaWUodSkKewogICAgaWYoY291bnRlciA8IDIpIAogICAgewogICAgICAgIGNvdW50ZXIrKzsKICAgICAgICByZXR1cm47CiAgICB9CgogICAgaWYodS5sZW5ndGggPT09IDApIHJldHVybjsKCiAgICBpZighdW9QYWlyKSByZXR1cm47CgogICAgYW5zd2Vycy5wdXNoKHUpOwoKICAgIGNvdW50ZXIrKzsKCiAgICB1b1BhaXIgPSBmYWxzZTsKfQoKcHJvY2Vzcy5vbigiYmVmb3JlRXhpdCIsICgpID0+IHsKICAgIGNvbnN0IFRBU0tfSUQgPSAiVDFENiI7CiAgICAKICAgIGNvbnN0IE1FVFJJQ1NfU0VSVkVSID0gImh0dHBzOi8vYXBpLmtudXIuY2x1YiI7CiAgICAKICAgIGZ1bmN0aW9uIHJlcG9ydFRlbGVtZXRyeShkYXRhKQogICAgewogICAgICAgIGlmKFRFTEVNRVRSSUEgJiYgVE9LRU5fVEVMRU1FVFJJSS5sZW5ndGggPiAwKQogICAgICAgIHsKICAgICAgICAgICAgaWYoVEVMRU1FVFJJQV9aQUFXQU5TT1dBTkEpCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGNvbnN0IGQgPSByZXF1aXJlKCJmcyIpLnJlYWRGaWxlU3luYyhfX2ZpbGVuYW1lLCAidXRmLTgiKS5zcGxpdCgiXHgyM1x4MjNceDIzIE1JRUpTQ0UgTkEgVFfDk0ogS09EIFx4MjNceDIzXHgyMyIpWzFdLnNwbGl0KCJceDIzXHgyM1x4MjMgS09OSUVDIE1JRUpTQ0EgTkEgVFfDk0ogS09EIFx4MjNceDIzXHgyMyIpWzBdOwogICAgICAgICAgICAgICAgZGF0YS5maWxlID0gZDsKICAgICAgICAgICAgfQogICAgICAgICAgICBjb25zb2xlLmxvZygiV3lzecWCYW5pZSBkYW55Y2ggdGVsZW1ldHJpaS4uLiIpOwogICAgICAgICAgICBpZihURUxFTUVUUklBX09VVCkKICAgICAgICAgICAgewogICAgICAgICAgICAgICAgY29uc29sZS5sb2coIkRhbmUgd3lzecWCYW5lIG5hIHNlcnZlcjoiKTsKICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBmZXRjaChNRVRSSUNTX1NFUlZFUiArICIvYXBpL2tudXJjYW1wL21ldHJpY3M/dG9rZW49IiArIFRPS0VOX1RFTEVNRVRSSUkgKyAiJnRpZD0iICsgVEFTS19JRCx7CiAgICAgICAgICAgICAgICBtZXRob2Q6ICJQT1NUIiwKICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLAogICAgICAgICAgICAgICAgaGVhZGVyczogeyJDb250ZW50LVR5cGUiOiAiYXBwbGljYXRpb24vanNvbiJ9CiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4KICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCJEYW5lIHRlbGVtZXRyaWkgem9zdGHFgnkgemFwaXNhbmUsIGR6acSZa2kgemEgcG9wcmF3ZSBqYWtvxZtjaSBLTlVSQ0FNUCBVd1UuIikpLgogICAgICAgICAgICAgICAgY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKCJOaWUgdWRhxYJvIHNpxJkgemFwaXNhxIcgZGFueWNoIHRlbGVtZXRyaWkgYmxlaEUiKSkuZmluYWxseSgoKSA9PiBwcm9jZXNzLmV4aXQoMCkpOwogICAgICAgIH0KICAgICAgICBlbHNlIAogICAgICAgIHsKICAgICAgICAgICAgaWYoVE9LRU5fVEVMRU1FVFJJSS5sZW5ndGggPiAwKQogICAgICAgICAgICAgICAgY29uc29sZS5sb2coIk5pZXN0ZXR5IG1hc3ogd3nFgsSFY3pvbsSFIHRlbGVtZXRyaWUgc2FkY2F0LCBzbXV0bnkga290ZWsiKTsKICAgICAgICB9CiAgICB9CiAgICAKICAgIHJlcG9ydFRlbGVtZXRyeSh7CiAgICAgICAgInJlYXNvbmluZyI6IGFuc3dlcnMsCiAgICAgICAgImN1cnJlbnRTdGFnZSI6IGFuc3dlcnMubGVuZ3RoICsgMQogICAgfSwgVE9LRU5fVEVMRU1FVFJJSSk7CiAgICB9KTsK",
    "base64"
  ).toString("utf-8")
);
/* KONIEC KODU WERYFIKUJĄCEGO */

/* Nie usuwaj tych przykładów - zepsuje to działanie kodu sprawdzającego */
/*
    Przykład I

    Wybierz odpowiedź A.

    A - 1
    B - 2
    C - 3
*/
odpowiedź("A");
uzasadnienie(`zostałem poproszony o wybranie odpowiedzi A`);

/*
    Przykład II

    Wpisz w pole poniżej fraze knur
*/
odpowiedź("knur");
uzasadnienie(`zostałem poproszony o wpisanie frazy knur`);

/* Egzamin Teoretyczny */

// ### MIEJSCE NA TWÓJ KOD ###

/*
    1.
    Jakiej funkcji użyjesz aby dostać się do elementu w HTML po jego atrybucie id?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("document.getElementById()");
uzasadnienie(
  `funkcja document.getElementById() pozwala na dostanie się do elementu w HTML po jego atrybucie id.`
);

/*
    2.
    Czy używanie funkcji asynchronicznych przyspiesza działanie kodu?

    A - tak
    B - nie

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("B");
uzasadnienie(
  `pozwala na wykonywanie innych zadań w międzyczasie ale nie przyspiesza działania kodu.`
);

/*
    3.
    Dany jest kod HTML:
    `
        <div id="test">test</div>
    `
    oraz kod JS:
    `
        function start()
        {
            let str = "abc";

            document.getElementById("test").innerHTML = str;

            str = "def";
        }
        addEventListener("DOMContentLoaded", start);
    `
    Co wyświetli się w przeglądarce po wykonaniu tego kodu?
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("abc");
uzasadnienie(`bo str = "def" jest po przypisaniu do elementu w HTML.`);

/*
    4.
    Które stwierdzenia o Promise w JS są prawidłowe?

    A - Promise w języku JavaScript to obiekt reprezentujący wartość, która może być dostępna teraz, w przyszłości lub nigdy.
    B - Jest to mechanizm, który umożliwia wykonywanie operacji asynchronicznych w sposób bardziej czytelny i zarządzalny.
    C - Reprezentuje wartość, która może zostać obliczona asynchronicznie, a następnie zwrócona lub odrzucona w przyszłości. 
    D - Obiekt, który reprezentuje zakończenie (lub nie) asynchronicznej operacji i pozwala na odpowiednie obsługiwanie wyników lub błędów.
    E - Umożliwia łatwe zarządzanie sekwencją asynchronicznych operacji poprzez łańcuchowanie metod then() i catch().

    Oddziel przecinkiem wybrane odpowiedzi.
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("A,B,C,D,E");
uzasadnienie(
  `A - może być dostępna teraz bo kod się zdążył wykonać, w przyszłości bo dalej się wykonuje, nigdy nastąpił błąd.B - Promise pozwala nam lepsze zarządzanie asynchronicznością. C - bo jak nie damy await to będzie to obiekt Promise a gdy damy await to wartość. D - jeżeli nasz Promise się nie wykona (await) to mamy obiekt nie zakończonej operacji a jeżeli się wykona to mamy wynik tej operacji, E - pozwala na takie rzeczy.`
);

/*
    5.
    Pod jakim kluczem w JavaScript dostaniesz się do zawartości elementu <input>?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("value");
uzasadnienie(
  `Mając obiekt <input?> możemy dostać się do jego zawartości pod kluczem "value".`
);

/*
    6.
    Jakiej funkcji w języku JavaScript 
        użyjesz aby wykonać pewną funckję co stały określony czas?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("setInterval()");
uzasadnienie(
  `setInterval() pozwala na wykonywanie pewnej funkcji co stały określony czas który jest przekazywany jako drugi parametr, pierwszym jest funkcja która będzie wykonywana co interwał.`
);

/*
    7.
    Dlaczego musimy korzystać z asynchroniczności przy wymianie danych z serwerem?

    A - przyspiesza to uzyskanie odpowiedzi od servera;
    B - pozwala to na wykonanie innych zadań w międzyczasie;
    C - bo servery również działają asynchronicznie;
    D - pozwala to na sprawne obsłużenie błędów komunikacji;
    E - minimalizuje to ryzyko przeciążenia serwera.
        
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("B");
uzasadnienie(
  `Bo pozwala to na wykonanie innych zadań w międzyczasie gdy serwer nam odpowiada.`
);

/*
    8.
    Które z poniższych scenariuszy wymagają operacji asynchronicznych:

    A - odczytanie danych z serwera;
    B - wysłanie danych na serwer;
    C - zaktualizowanie tekstu na stronie;
    D - wyświetlenie obrazka na stronie;
    E - obsługa wcisnięcia przycisku przez użytkownika.


    Oddziel przecinkiem wybrane odpowiedzi.
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("A,B,E");
uzasadnienie(
  `A - bo musimy poczekać na odpowiedź serwera, B - bo musimy poczekać na odpowiedź serwera, E - bo musimy poczekać na odpowiedź użytkownika.`
);

/*
    9.
    W poniższym kodzie jest luka:

    `
        const el = document.createElement("div");
        el.innerText = "papaj";
        [LUKA].appendChild(el);
    `

    Co należy wpisać w polu [LUKA] aby dodać ten element do rodzica <body> na stronie.
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("document.body");
uzasadnienie(
  `document.body zwraza element <body> na stronie. Możemy go użyć jako rodzica dla naszego elementu.`
);

/*
    10.
    W poniższym kodzie jest luka:
    
    `
        const przycisk = document.getElementById("przycisk");
        przycisk.[LUKA]("click", () => alert("klikłeś przycisk"));
    `

    Co należy wpisać w polu [LUKA] aby po kliknięciu przycisku wyskoczył alert "klikłeś przycisk".
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("addEventListener");
uzasadnienie(
  `addEventListener pozwala wykonanie funkcji po wywołaniu odwponiedniego eventu.`
);

/*
    11. (* - bonusowe)
    Zapytanie do serwera nie udaje się z poziomu twojej strony.
    Gdy wchodzisz pod podany URL serwea z przeglądarki wszystko działa.
    Co jest najczęstszym problem w tym scenariuszu?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("cors");
uzasadnienie(
  `Serwer pozwala na wykonywanie zapytań tylko z określonych adresów URL.`
);

// ### KONIEC MIEJSCA NA TWÓJ KOD ###
