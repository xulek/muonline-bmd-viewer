# Architektura TestAnimationScene - Szczegółowa dokumentacja

## Spis treści
1. [Skąd pochodzą dane - źródła](#1-skąd-pochodzą-dane---źródła)
2. [Struktura klas postaci](#2-struktura-klas-postaci)
3. [Struktura przedmiotów](#3-struktura-przedmiotów)
4. [AppearanceConfig - centralny obiekt konfiguracji](#4-appearanceconfig---centralny-obiekt-konfiguracji)
5. [Proces ładowania postaci krok po kroku](#5-proces-ładowania-postaci-krok-po-kroku)
6. [Mapowanie ścieżek modeli](#6-mapowanie-ścieżek-modeli)
7. [System nakładania przedmiotów](#7-system-nakładania-przedmiotów)
8. [Szkielet (Skeleton) i kości (Bones)](#8-szkielet-skeleton-i-kości-bones)
9. [Jak tekstury trafiają na odpowiednie części ciała](#9-jak-tekstury-trafiają-na-odpowiednie-części-ciała)
10. [Przykłady konkretnych wartości](#10-przykłady-konkretnych-wartości)

---

## 1. Skąd pochodzą dane - źródła

### 1.1 Baza przedmiotów (ItemDatabase)

**Źródło danych:** Plik `Data/Local/item.bmd` w folderze z zasobami gry MU Online.

**Co zawiera plik item.bmd:**
- Definicje WSZYSTKICH przedmiotów w grze
- Każdy przedmiot ma unikalny identyfikator: para (Group, ID)
- Przykłady grup:
  - Grupa 0-6: Bronie (miecze, topory, łuki, laski, itp.)
  - Grupa 7: Hełmy
  - Grupa 8: Zbroje (Armor)
  - Grupa 9: Spodnie (Pants)
  - Grupa 10: Rękawice (Gloves)
  - Grupa 11: Buty (Boots)
  - Grupa 12: Skrzydła i inne specjalne przedmioty
  - Grupa 13: Zwierzaki/pety

**Struktura pojedynczego przedmiotu w bazie:**
```
ItemDefinition:
  - ID: numer przedmiotu w grupie (np. 0, 1, 2...)
  - Group: numer grupy (np. 7 dla hełmów)
  - Name: nazwa wyświetlana (np. "Bronze Helm")
  - TexturePath: ścieżka do modelu 3D (np. "Item/Helm01.bmd")
  - Width/Height: rozmiar w ekwipunku
  - Statystyki: obrona, obrażenia, wymagania, itp.
```

**Jak scena pobiera dane:**
```
ItemDatabase.GetArmors()    → zwraca wszystkie przedmioty z grupy 8
ItemDatabase.GetWeapons()   → zwraca wszystkie przedmioty z grup 0-6
ItemDatabase.GetWings()     → zwraca przedmioty z grupy 12 o specyficznych ID
ItemDatabase.GetItemDefinition(group, id) → pojedynczy przedmiot
```

### 1.2 Baza pojazdów (VehicleDatabase)

**Źródło danych:** Predefiniowana lista w kodzie (nie wczytuje z pliku).

**Lista dostępnych pojazdów:**
| ID | Nazwa | Model 3D |
|----|-------|----------|
| 0 | Dark Horse | DarkHorse.bmd |
| 1 | Divine Horse | Divine_Horse.bmd |
| 2 | Giant Dark Wizard 01 | Giant_DarkWizard_01.bmd |
| 3 | Giant Elf 01 | Giant_Elf_01.bmd |
| 4 | Giant Grow Lancer 01 | Giant_GrowLancer_01.bmd |
| 5 | Leviathan | Leviathan.bmd |
| 6 | Leviathan Rare | LeviathanRare.bmd |
| 7+ | Dodatkowe Fenriry, Dark Wolf, itp. | - |

**Dodatkowe parametry pojazdu:**
- RiderHeightOffset - o ile w górę przesunąć postać
- IdleActionIndex - która animacja gdy stoi
- RunActionIndex - która animacja gdy biegnie
- AnimationSpeedMultiplier - prędkość odtwarzania animacji

### 1.3 Lista klas postaci

**Źródło danych:** Predefiniowany enum w kodzie.

**Struktura numeracji klas:**
```
1st Class (podstawowe):     1-15
2nd Class (awans):         201-215
3rd Class (mistrz):        301-315
4th Class (arcymistrz):    401-415
```

**Pełna lista klas:**

| Klasa | Wartość | Typ |
|-------|---------|-----|
| Dark Wizard | 1 | 1st |
| Soul Master | 201 | 2nd |
| Grand Master | 301 | 3rd |
| Soul Wizard | 401 | 4th |
| Dark Knight | 2 | 1st |
| Blade Knight | 202 | 2nd |
| Blade Master | 302 | 3rd |
| Dragon Knight | 402 | 4th |
| Fairy Elf | 3 | 1st |
| Muse Elf | 203 | 2nd |
| High Elf | 303 | 3rd |
| Noble Elf | 403 | 4th |
| Magic Gladiator | 4 | 1st |
| Duel Master | 304 | 3rd |
| Magic Knight | 404 | 4th |
| Dark Lord | 5 | 1st |
| Lord Emperor | 305 | 3rd |
| Empire Lord | 405 | 4th |
| Summoner | 6 | 1st |
| Bloody Summoner | 206 | 2nd |
| Dimension Master | 306 | 3rd |
| Dimension Summoner | 406 | 4th |
| Rage Fighter | 7 | 1st |
| Fist Master | 307 | 3rd |
| Fist Blazer | 407 | 4th |
| Glow Lancer | 8 | 1st |
| Mirage Lancer | 308 | 3rd |
| Shining Lancer | 408 | 4th |
| Rune Mage | 9 | 1st |
| Rune Spell Master | 209 | 2nd |
| Grad Rune Master | 309 | 3rd |
| Majestic Rune Wizard | 409 | 4th |
| Slayer | 10 | 1st |
| Royal Slayer | 210 | 2nd |
| Master Slayer | 310 | 3rd |
| Slaughterer | 410 | 4th |
| Gun Crusher | 11 | 1st |
| Gun Breaker | 211 | 2nd |
| Master Gun Breaker | 311 | 3rd |
| Heist Gun Crasher | 411 | 4th |
| White Wizard | 12 | 1st |
| Light Master | 212 | 2nd |
| Shine Wizard | 312 | 3rd |
| Shine Master | 412 | 4th |
| Mage | 13 | 1st |
| Wo Mage | 213 | 2nd |
| Arch Mage | 313 | 3rd |
| Mystic Mage | 413 | 4th |
| Illusion Knight | 14 | 1st |
| Mirage Knight | 214 | 2nd |
| Illusion Master | 314 | 3rd |
| Mystic Knight | 414 | 4th |
| Alchemist | 15 | 1st |
| Alchemic Master | 215 | 2nd |
| Alchemic Force | 315 | 3rd |
| Creator | 415 | 4th |

---

## 2. Struktura klas postaci

### 2.1 Dlaczego klasa ma znaczenie?

Klasa postaci determinuje:
1. **Modele bazowe** - jak wygląda postać bez pancerza
2. **Dostępne animacje** - różne klasy mają różne style ruchu
3. **Płeć** - niektóre klasy są męskie, inne żeńskie

### 2.2 Modele bazowe dla klas

Dla każdej klasy istnieje zestaw 5 modeli bazowych:
```
Player/HelmClass{XX}.bmd      - głowa/postać
Player/ArmorClass{XX}.bmd     - tułów
Player/PantClass{XX}.bmd      - nogi/spodnie
Player/GloveClass{XX}.bmd     - ręce
Player/BootClass{XX}.bmd      - stopy
```

Gdzie {XX} to numer klasy zapisany na 2 cyfrach:
- Dark Wizard (1) → "01"
- Soul Master (201) → "201"
- Grand Master (301) → "301"

### 2.3 Mapowanie klas sieciowych na modele

Nie wszystkie klasy mają własne modele. Niektóre klasy awansowane używają modeli klas podstawowych:

```
Dark Wizard (1) → używa modeli 01
Soul Master (201) → używa modeli 01 (te same co Dark Wizard)
Grand Master (301) → używa modeli 01
Soul Wizard (401) → używa modeli 01

Dark Knight (2) → używa modeli 02
Blade Knight (202) → używa modeli 02
Blade Master (302) → używa modeli 02
Dragon Knight (402) → używa modeli 02
```

---

## 3. Struktura przedmiotów

### 3.1 System identyfikacji przedmiotów

Każdy przedmiot jest identyfikowany przez parę wartości:
- **Group** (byte) - grupa przedmiotu (0-15)
- **ID** (short) - numer w grupie (0-511)

Przykłady:
```
Hełm Bronze Helm:     Group=7,  ID=0
Zbroja Bronze Armor:  Group=8,  ID=0
Miecz Kris:           Group=0,  ID=1
Skrzydła lvl 1:       Group=12, ID=0
```

### 3.2 Grupy przedmiotów - szczegóły

| Grupa | Nazwa | Opis | Przykłady |
|-------|-------|------|-----------|
| 0 | Swords | Miecze | Kris, Gladius, Katana |
| 1 | Axes | Topory | Small Axe, Battle Axe |
| 2 | Maces | Maczugi | Mace, Flail |
| 3 | Spears | Włócznie | Spear, Dragon Lance |
| 4 | Bows | Łuki i kusze | Short Bow, Crossbow |
| 5 | Staffs | Laski i berła | Skull Staff, Angelic Staff |
| 6 | Books/Shields | Księgi i tarcze | Book, Small Shield |
| 7 | Helms | Hełmy | Bronze Helm, Dragon Helm |
| 8 | Armors | Zbroje | Bronze Armor, Dragon Armor |
| 9 | Pants | Spodnie | Bronze Pants, Dragon Pants |
| 10 | Gloves | Rękawice | Bronze Gloves, Dragon Gloves |
| 11 | Boots | Buty | Bronze Boots, Dragon Boots |
| 12 | Wings/Items | Skrzydła i specjalne | Wings, Rings, Pendants |
| 13 | Pets | Zwierzaki | Fairy, Uniria, Dinorant |

### 3.3 Właściwości przedmiotu

Każdy przedmiot w bazie ma następujące pola:
```
Name: "Dragon Armor"
Group: 8
ID: 14
TexturePath: "Item/Armor14.bmd"
Width: 2
Height: 3
Defense: 40
RequiredLevel: 60
RequiredStrength: 120
AllowedClasses: [DarkKnight, BladeKnight, BladeMaster]
```

### 3.4 Skrzydła - specjalna grupa

Skrzydła są w grupie 12, ale mają specjalne ID:

| ID | Nazwa skrzydeł |
|----|----------------|
| 0 | Wings of Elf |
| 1 | Wings of Heaven |
| 2 | Wings of Satan |
| 3 | Wings of Mistery |
| 4 | Wings of Spirit |
| 5 | Wings of Soul |
| 6 | Wings of Dragon |
| 27 | Wings of Darkness |
| 28 | Wings of Desolation |
| 36-43 | Różne skrzydła 3rd class |
| 130+ | Skrzydła 4th class |

---

## 4. AppearanceConfig - centralny obiekt konfiguracji

### 4.1 Co to jest AppearanceConfig?

To obiekt, który zbiera WSZYSTKIE informacje o wyglądzie postaci w jednym miejscu. Jest to "przepis" na stworzenie postaci.

### 4.2 Struktura AppearanceConfig

```
AppearanceConfig:
  // Podstawowe
  PlayerClass: enum (np. DarkWizard = 1)
  Pose: byte (pozycja postaci, zazwyczaj 0)
  
  // Lewa ręka (broń/tarcza)
  LeftHandItemIndex: byte (ID przedmiotu, 0xFF = pusto)
  LeftHandItemGroup: byte (grupa przedmiotu)
  LeftHandItemLevel: byte (+0 do +15)
  LeftHandExcellent: bool
  LeftHandAncient: bool
  
  // Prawa ręka (broń)
  RightHandItemIndex: byte
  RightHandItemGroup: byte
  RightHandItemLevel: byte
  RightHandExcellent: bool
  RightHandAncient: bool
  
  // Hełm
  HelmItemIndex: int (0xFFFF = pusto)
  HelmItemLevel: int
  HelmExcellent: bool
  HelmAncient: bool
  
  // Zbroja
  ArmorItemIndex: int
  ArmorItemLevel: int
  ArmorExcellent: bool
  ArmorAncient: bool
  
  // Spodnie
  PantsItemIndex: int
  PantsItemLevel: int
  PantsExcellent: bool
  PantsAncient: bool
  
  // Rękawice
  GlovesItemIndex: int
  GlovesItemLevel: int
  GlovesExcellent: bool
  GlovesAncient: bool
  
  // Buty
  BootsItemIndex: int
  BootsItemLevel: int
  BootsExcellent: bool
  BootsAncient: bool
  
  // Skrzydła
  WingInfo:
    ItemIndex: short (ID skrzydeł, -1 = brak)
    Level: byte (+1 do +13)
    Type: byte (typ skrzydeł)
  
  // Pojazd
  RidingVehicle: short (ID pojazdu, -1 = brak)
```

### 4.3 Wartości "pusto"

| Slot | Wartość "pusto" | Znaczenie |
|------|-----------------|-----------|
| Pancerz (Helm/Armor/Pants/Gloves/Boots) | 0xFFFF (65535) | Brak przedmiotu, użyj modelu bazowego |
| Broń (LeftHand/RightHand) | 0xFF (255) | Brak broni w ręce |
| Skrzydła | ItemIndex = -1 | Brak skrzydeł |
| Pojazd | -1 | Brak pojazdu |

### 4.4 Przykładowy AppearanceConfig

```
Postać: Dark Knight (klasa 2) w pełnym ekwipunku

PlayerClass: DarkKnight (2)

HelmItemIndex: 14        // Dragon Helm
HelmItemLevel: 13        // +13
HelmExcellent: true      // Excellent
HelmAncient: false

ArmorItemIndex: 14       // Dragon Armor
ArmorItemLevel: 13
ArmorExcellent: true
ArmorAncient: false

PantsItemIndex: 14       // Dragon Pants
PantsItemLevel: 13
PantsExcellent: true
PantsAncient: false

GlovesItemIndex: 14      // Dragon Gloves
GlovesItemLevel: 13
GlovesExcellent: true
GlovesAncient: false

BootsItemIndex: 14       // Dragon Boots
BootsItemLevel: 13
BootsExcellent: true
BootsAncient: false

LeftHandItemIndex: 0xFF  // Pusto (brak tarczy)
LeftHandItemGroup: 0

RightHandItemIndex: 21   // Dark Breaker (miecz)
RightHandItemGroup: 0    // Grupa miecz
RightHandItemLevel: 13
RightHandExcellent: true
RightHandAncient: false

WingInfo.ItemIndex: 36   // Wings of Storm
WingInfo.Level: 13

RidingVehicle: -1        // Bez pojazdu
```

---

## 5. Proces ładowania postaci krok po kroku

### Krok 1: Inicjalizacja świata
```
Tworzony jest SelectWorld:
  - WorldIndex: 94 (specjalny świat dla ekranu wyboru postaci)
  - Pozycja kamery: (14229, 12340, 380)
  - Pozycja postaci: (14000, 12295, 250)
  - Kąt postaci: 90 stopni
  - Oświetlenie otoczenia: 0.6
```

### Krok 2: Tworzenie kontrolera
```
CharacterSelectionController:
  - Zarządza listą postaci
  - Obsługuje kliknięcia w postać
  - Zarządza animacjami
  - Aktualizuje pozycje etykiet nad postaciami
```

### Krok 3: Tworzenie obiektu gracza
```
PlayerObject:
  - Tworzy wszystkie części jako dzieci:
    * HelmMask (opcjonalna twarz pod hełmem)
    * Helm (hełm)
    * Armor (zbroja)
    * Pants (spodnie)
    * Gloves (rękawice)
    * Boots (buty)
    * Weapon1 (lewa ręka)
    * Weapon2 (prawa ręka)
    * EquippedWings (skrzydła)
    * Vehicle (pojazd)
```

### Krok 4: Ładowanie modelu bazowego
```
Dla każdej części ciała:
  1. Pobierz numer klasy (np. 2 dla Dark Knight)
  2. Sformatuj jako 2 cyfry: "02"
  3. Zbuduj ścieżkę: "Player/HelmClass02.bmd"
  4. Załaduj model BMD
  5. Przypisz do odpowiedniej części

Przykładowe ścieżki dla Dark Knight (klasa 2):
  - Player/HelmClass02.bmd
  - Player/ArmorClass02.bmd
  - Player/PantClass02.bmd
  - Player/GloveClass02.bmd
  - Player/BootClass02.bmd
```

### Krok 5: Nakładanie pancerza

Dla każdego slotu pancerza (Helm, Armor, Pants, Gloves, Boots):

```
1. Sprawdź czy HelmItemIndex != 0xFFFF
   Jeśli tak:
     a. Pobierz definicję przedmiotu z ItemDatabase
        ItemDatabase.GetItemDefinition(7, HelmItemIndex)
        
     b. Pobierz ścieżkę modelu: "Item/Helm14.bmd"
     
     c. Zamień "Item/" na "Player/": "Player/Helm14.bmd"
        (Sprawdź czy plik istnieje, jeśli nie - użyj oryginału)
     
     d. Załaduj model BMD
     
     e. Przypisz do obiektu Helm
     
     f. Ustaw właściwości:
        - ItemLevel = 13
        - IsExcellentItem = true
        - IsAncientItem = false
   
   Jeśli nie (pusty slot):
     - Pozostaw model bazowy z kroku 4
```

### Krok 6: Nakładanie broni

```
Dla lewej ręki (Weapon1):
  1. Sprawdź czy LeftHandItemIndex != 0xFF
  2. Pobierz definicję:
     ItemDatabase.GetItemDefinition(LeftHandItemGroup, LeftHandItemIndex)
  3. Załaduj model z TexturePath (bez zamiany ścieżki)
  4. Przypisz do Weapon1
  5. Ustaw pozycję przyczepienia do kości 33 (lewa dłoń)

Dla prawej ręki (Weapon2):
  1. Sprawdź czy RightHandItemIndex != 0xFF
  2. Pobierz definicję z bazy
  3. Załaduj model
  4. Przypisz do Weapon2
  5. Ustaw pozycję przyczepienia do kości 42 (prawa dłoń)
```

### Krok 7: Nakładanie skrzydeł

```
1. Sprawdź czy WingInfo.ItemIndex >= 0
2. Jeśli tak:
   - Ustaw EquippedWings.ItemIndex = WingInfo.ItemIndex
   - Ustaw EquippedWings.Hidden = false
   - Ustaw poziom skrzydeł (dla efektów wizualnych)
3. Jeśli nie:
   - Ustaw EquippedWings.Hidden = true
```

### Krok 8: Nakładanie pojazdu

```
1. Sprawdź czy RidingVehicle >= 0
2. Pobierz definicję pojazdu z VehicleDatabase
3. Załaduj model pojazdu (np. "DarkHorse.bmd")
4. Ustaw pozycję postaci z offsetem wysokości
5. Ustaw animację postaci na "siedzenie"
```

### Krok 9: Finalizacja

```
1. Ustaw początkową animację (PlayerStopMale/Female)
2. Ustaw pozycję w świecie
3. Ustaw kąt obrotu
4. Dodaj do listy obiektów świata
5. Wyświetl etykietę z nazwą i poziomem
```

---

## 6. Mapowanie ścieżek modeli

### 6.1 Zamiana ścieżek dla pancerza

Modele w folderze "Item/" są przeznaczone dla ekwipunku (ikony). Modele dla postaci są w "Player/".

```
Item/Helm14.bmd → Player/Helm14.bmd
Item/Armor14.bmd → Player/Armor14.bmd
Item/Pant14.bmd → Player/Pant14.bmd
Item/Glove14.bmd → Player/Glove14.bmd
Item/Boot14.bmd → Player/Boot14.bmd
```

**Uwaga:** System sprawdza czy plik w "Player/" istnieje. Jeśli nie, używa oryginału z "Item/".

### 6.2 Ścieżki dla broni

Bronie NIE są zamieniane - używają oryginalnych ścieżek:
```
Item/Sword21.bmd (używana bez zmian)
```

### 6.3 Ścieżki dla pojazdów

```
DarkHorse.bmd (bez folderu - w głównym katalogu modeli)
Divine_Horse.bmd
Leviathan.bmd
```

---

## 7. System nakładania przedmiotów

### 7.1 Hierarchia obiektów postaci

```
PlayerObject (korzeń)
├── HelmMask (opcjonalna twarz pod hełmem)
├── Helm (hełm)
├── Armor (zbroja)
├── Pants (spodnie)
├── Gloves (rękawice)
├── Boots (buty)
├── Weapon1 (broń lewa)
├── Weapon2 (broń prawa)
├── EquippedWings (skrzydła)
└── Vehicle (pojazd)
    └── PlayerObject (postać na pojezdzie)
```

### 7.2 Kości (bone) do przyczepiania

Modele postaci mają szkielet (bones). Przedmioty są przyczepiane do konkretnych kości:

| Część | Indeks kości | Opis |
|-------|--------------|------|
| Weapon1 (lewa) | 33 | Lewa dłoń |
| Weapon2 (prawa) | 42 | Prawa dłoń |
| Skrzydła | 47 | Pleców (ten sam co broń na plecach) |

### 7.3 Mechanizm przyczepiania

```
1. Model postaci ma hierarchię kości
2. Każda kość ma macierz transformacji (pozycja, rotacja, skala)
3. Obiekt broni/skrzydeł kopiuje macierz kości-rodzica
4. Obiekt broni dodaje własny offset pozycji/rotacji
5. Wynik: broń porusza się razem z dłonią
```

---

## 8. Szkielet (Skeleton) i kości (Bones)

### 8.1 Co to jest szkielet w modelu BMD?

Model BMD (format Mu Online) zawiera **szkielet** - hierarchiczną strukturę kości (bones), która pozwala na animację postaci. Szkielet to drzewo, gdzie każda kość może mieć rodzica i dzieci.

### 8.2 Struktura kości (Bone)

Każda kość w modelu zawiera:
```
Bone:
  - Name: nazwa kości (np. "Head", "LeftHand", "RightHand")
  - Parent: indeks kości rodzica (-1 = brak rodzica, to korzeń)
  - Matrixes: tablica macierzy transformacji dla każdej klatki animacji
```

### 8.3 Hierarchia kości w modelu postaci

Typowa struktura kości w modelu gracza:
```
Bone 0: Root (korzeń, całe ciało)
  ├── Bone 1: Hips (biodra)
  │     ├── Bone 2: Spine (kręgosłup)
  │     │     ├── Bone 3: Chest (klatka piersiowa)
  │     │     │     ├── Bone 4: Neck (szyja)
  │     │     │     │     └── Bone 5: Head (głowa)
  │     │     │     ├── Bone 6: LeftShoulder (lewe ramię)
  │     │     │     │     ├── Bone 7: LeftUpperArm (lewe ramię górne)
  │     │     │     │     │     └── Bone 8: LeftForeArm (lewe przedramię)
  │     │     │     │     │           └── Bone 33: LeftHand (lewa dłoń) ← BRONIE LEWA
  │     │     │     ├── Bone 9: RightShoulder (prawe ramię)
  │     │     │     │     ├── Bone 10: RightUpperArm (prawe ramię górne)
  │     │     │     │     │     └── Bone 11: RightForeArm (prawe przedramię)
  │     │     │     │     │           └── Bone 42: RightHand (prawa dłoń) ← BRONIE PRAWA
  │     │     │     └── Bone 47: Back (plecy) ← SKRZYDŁA
  │     └── ... (nogi)
```

### 8.4 Kluczowe indeksy kości

| Indeks | Nazwa kości | Przeznaczenie |
|--------|-------------|---------------|
| 0 | Root | Cała postać, pozycja w świecie |
| 5 | Head | Głowa, obrót głowy |
| 33 | LeftHand | Lewa dłoń - przyczepienie broni lewej |
| 42 | RightHand | Prawa dłoń - przyczepienie broni prawej |
| 47 | Back | Plecy - przyczepienie skrzydeł i broni na plecach |

### 8.5 Macierze transformacji kości

Każda kość ma macierz transformacji (Matrix 4x4), która zawiera:
- **Pozycję** (X, Y, Z) - gdzie kość jest w przestrzeni
- **Rotację** (Quaternion) - obrót kości
- **Skalę** - rozmiar (zazwyczaj 1, 1, 1)

Te macierze są **hierarchiczne** - pozycja kości dziecka jest względem rodzica.

---

## 9. Jak tekstury trafiają na odpowiednie części ciała

### 9.1 Struktura modelu BMD - Meshes

Model BMD składa się z:
```
Model BMD:
  - Bones[]: tablica kości (szkielet)
  - Actions[]: tablica animacji
  - Meshes[]: tablica siatkach (meshes) - to są widoczne części modelu
```

Każdy Mesh to zbiór trójkątów z teksturą, który jest przypisany do konkretnej kości.

### 9.2 Jak meshe są przypisane do kości?

```
Mesh:
  - Vertices[]: wierzchołki (punkty 3D)
  - Triangles[]: trójkąty (indeksy wierzchołków)
  - TexCoords[]: współrzędne tekstur (UV)
  - TexturePath: ścieżka do pliku tekstury (.ozt/.ozj)
  - BoneIndex: indeks kości, do której mesh jest przypisany
```

**Każdy mesh jest "przyczepiony" do jednej kości.** Gdy kość się porusza (animacja), mesh porusza się razem z nią.

### 9.3 Modele bazowe klas - jak to działa?

Model bazowy postaci (np. `Player/ArmorClass02.bmd`) zawiera:
```
ArmorClass02.bmd (Dark Knight - tułów):
  - Bones: szkielet całej postaci (wspólny dla wszystkich części)
  - Meshes:
      * Mesh 0: tułów (przypisany do kości Chest)
      * Mesh 1: ramiona (przypisane do kości LeftShoulder/RightShoulder)
```

### 9.4 Nakładanie pancerza na ciało

Gdy zakładasz pancerz (np. Dragon Armor), system:

```
1. Ładuje model pancerza: Player/Armor14.bmd

2. Model pancerza zawiera:
   - Bones: ten sam szkielet co ciało (ważne!)
   - Meshes:
       * Mesh 0: zewnętrzna warstwa zbroi (skorupa)
       * Mesh 1: wewnętrzne elementy (opcjonalnie)

3. Meshe pancerza są przypisane do tych samych kości co ciało:
   - Mesh 0 (skorupa) → kość Chest (klatka piersiowa)
   - To oznacza, że gdy klatka piersiowa się porusza, zbroja się z nią porusza

4. Podczas renderowania:
   - Najpierw renderowane jest ciało bazowe (ArmorClass02)
   - Potem renderowany jest pancerz (Armor14) w tym samym miejscu
   - Pancerz "zakrywa" ciało, bo jest na nim narysowany
```

### 9.5 Dlaczego hełm nie zawsze zakrywa twarz?

Niektóre hełmy mają otwartą twarz (np. korona), inne zamkniętą (np. hełm rycerski).

```
Helm14.bmd (Dragon Helm):
  - Meshes:
      * Mesh 0: hełm zewnętrzny (skorupa)
      * Mesh 1: elementy twarzy (opcjonalnie)

System sprawdza:
  - Jeśli hełm ma mesh z twarzą → ukrywa głowę bazową
  - Jeśli hełm NIE ma twarzy → pokazuje głowę bazową pod spodem
```

### 9.6 Bronie - przyczepianie do dłoni

Bronie są inaczej podpięte niż pancerz:

```
Sword21.bmd (Dark Breaker):
  - Bones: własny, prosty szkielet (1-2 kości)
  - Meshes:
      * Mesh 0: ostrze (przypisane do kości 0 - korzeń broni)
      * Mesh 1: rękojeść (przypisane do kości 1 - uchwyt)

Przyczepienie do postaci:
  1. Broń jest osobnym obiektem (WeaponObject)
  2. Jest dzieckiem PlayerObject
  3. ParentBoneLink = 42 (prawa dłoń)
  4. Podczas animacji:
     - Pobierana jest macierz kości 42 (prawa dłoń) z postaci
     - Macierz broni = macierz kości 42 × offset broni
     - Broń porusza się dokładnie tak jak dłoń
```

### 9.7 Skrzydła - przyczepianie do pleców

```
Wing36.bmd (Wings of Storm):
  - Bones: własny szkielet skrzydeł (kości dla lewego i prawego skrzydła)
  - Meshes: siatki skrzydeł

Przyczepienie:
  1. Skrzydła są osobnym obiektem (WingObject)
  2. ParentBoneLink = 47 (plecy)
  3. Podczas animacji:
     - Pobierana jest macierz kości 47 (plecy)
     - Skrzydła mają własną animacją (flapping)
     - Macierz skrzydeł = macierz pleców × animacja skrzydeł
```

### 9.8 Podsumowanie - jak tekstury trafiają na ciało

| Element | Jak jest podpięty | Co się porusza razem |
|---------|-------------------|---------------------|
| Ciało bazowe (ArmorClass) | Meshe przypisane do kości ciała | Animacja szkieletu postaci |
| Pancerz (ArmorXX) | Meshe przypisane do tych samych kości co ciało | Animacja szkieletu postaci |
| Hełm (HelmXX) | Meshe przypisane do kości głowy | Animacja szkieletu postaci |
| Broń (Weapon) | Osobny obiekt, ParentBoneLink do kości dłoni | Pozycja dłoni + własny obrót |
| Skrzydła (Wings) | Osobny obiekt, ParentBoneLink do kości pleców | Pozycja pleców + własna animacja |

---

## 10. Przykłady konkretnych wartości

### 10.1 Przykład 1: Dark Wizard bez wyposażenia

```
PlayerClass: DarkWizard (1)

HelmItemIndex: 0xFFFF (pusto)
ArmorItemIndex: 0xFFFF (pusto)
PantsItemIndex: 0xFFFF (pusto)
GlovesItemIndex: 0xFFFF (pusto)
BootsItemIndex: 0xFFFF (pusto)

LeftHandItemIndex: 0xFF (pusto)
RightHandItemIndex: 0xFF (pusto)

WingInfo.ItemIndex: -1 (brak)
RidingVehicle: -1 (brak)

Załadowane modele:
- Player/HelmClass01.bmd (głowa Dark Wizard)
- Player/ArmorClass01.bmd (tułów Dark Wizard)
- Player/PantClass01.bmd (nogi Dark Wizard)
- Player/GloveClass01.bmd (ręce Dark Wizard)
- Player/BootClass01.bmd (stopy Dark Wizard)

Renderowanie:
- Tylko ciało bazowe, wszystkie meshe przypisane do odpowiednich kości szkieletu
```

### 10.2 Przykład 2: Blade Knight w Dragon Set

```
PlayerClass: BladeKnight (202) → mapowane na modele 02

HelmItemIndex: 14 (Dragon Helm, grupa 7)
HelmItemLevel: 13 (+13)
HelmExcellent: true

ArmorItemIndex: 14 (Dragon Armor, grupa 8)
ArmorItemLevel: 13
ArmorExcellent: true

PantsItemIndex: 14 (Dragon Pants, grupa 9)
PantsItemLevel: 13
PantsExcellent: true

GlovesItemIndex: 14 (Dragon Gloves, grupa 10)
GlovesItemLevel: 13
GlovesExcellent: true

BootsItemIndex: 14 (Dragon Boots, grupa 11)
BootsItemLevel: 13
BootsExcellent: true

RightHandItemIndex: 21 (Dark Breaker, grupa 0)
RightHandItemLevel: 13
RightHandExcellent: true

WingInfo.ItemIndex: 36 (Wings of Storm)
WingInfo.Level: 13

Załadowane modele:
- Player/HelmClass02.bmd (bazowa głowa Blade Knight)
- Player/Helm14.bmd (Dragon Helm nakładony na głowę)
- Player/Armor14.bmd (Dragon Armor na klatkę piersiową)
- Player/Pant14.bmd (Dragon Pants na nogi)
- Player/Glove14.bmd (Dragon Gloves na ręce)
- Player/Boot14.bmd (Dragon Boots na stopy)
- Item/Sword21.bmd (Dark Breaker w prawej ręce)
- Skrzydła ID 36 (Wings of Storm na plecach)

Renderowanie - kolejność:
1. Ciało bazowe (ArmorClass02) - kość Chest
2. Zbroja (Armor14) - ta sama kość Chest, nakłada się na ciało
3. Hełm (Helm14) - kość Head
4. Spodnie (Pant14) - kości nóg
5. Rękawice (Glove14) - kości przedramion
6. Buty (Boot14) - kości stóp
7. Broń (Sword21) - przyczepiona do kości 42 (prawa dłoń)
8. Skrzydła (Wing36) - przyczepione do kości 47 (plecy)
```

### 10.3 Przykład 3: Fairy Elf na Fenriru

```
PlayerClass: FairyElf (3) → mapowane na modele 03

HelmItemIndex: 0xFFFF (pusto - widać uszy elfa)
ArmorItemIndex: 8 (Leather Armor)
ArmorItemLevel: 9 (+9)

LeftHandItemIndex: 7 (Elven Bow, grupa 4)
LeftHandItemLevel: 9

RightHandItemIndex: 0xFF (pusto)

RidingVehicle: 12 (Blue Fenrir)

Załadowane modele:
- Player/HelmClass03.bmd (głowa Fairy Elf z uszami)
- Player/Armor08.bmd (Leather Armor na klatkę)
- Item/Bow07.bmd (Elven Bow w lewej ręce)
- FenrirBlue.bmd (pojazd)

Pozycja postaci:
- Normalnie: Z = 0
- Na Fenriru: Z = RiderHeightOffset (np. 100 jednostek w górę)

Renderowanie:
1. Pojazd (Fenrir) - osobny obiekt
2. Postać na pojezdzie - przesunięta w górę o offset
3. Animacja postaci: "siedzenie" zamiast stania
```

---

## Podsumowanie kluczowych zasad

1. **Klasa determinuje modele bazowe** - numer klasy (1, 2, 3...) jest używany w nazwach plików
2. **Przedmioty nakładają się na bazę** - jeśli slot jest pusty (0xFFFF), widać model bazowy
3. **Ścieżki pancerza są zamieniane** - "Item/" → "Player/" dla modeli na postaci
4. **Bronie używają oryginalnych ścieżek** - bez zamiany
5. **Skrzydła i pojazdy to osobne obiekty** - podpięte do odpowiednich kości
6. **Każdy przedmiot ma Group + ID** - para wartości identyfikujących w bazie
7. **Poziom i typ wpływają na efekty wizualne** - +13, Excellent, Ancient zmieniają wygląd (blask, efekty cząsteczkowe)
8. **Szkielet (Bones) jest kluczowy** - wszystkie części ciała i przedmioty są podpięte do kości
9. **Meshe są przypisane do kości** - gdy kość się porusza, mesh się z nią porusza
10. **Bronie i skrzydła używają ParentBoneLink** - są przyczepione do konkretnych kości (33, 42, 47)
