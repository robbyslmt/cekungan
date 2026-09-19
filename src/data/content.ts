/* ------------------------------------------------------------------ */
/*  CEKUNGAN — content & media                                         */
/*  All imagery & motion via Pexels (stock) + one generated topo map   */
/* ------------------------------------------------------------------ */

export const MEDIA = {
  // relative through BASE_URL so the build works at repo root, on a GitHub
  // Pages subpath, or opened locally — an absolute "/images/..." would 404
  // anywhere but the domain root.
  topo: `${import.meta.env.BASE_URL}images/topo.webp`,
  videos: {
    hero: "https://videos.pexels.com/video-files/39192463/16677143_3840_2160_25fps.mp4",
    city: "https://videos.pexels.com/video-files/39356159/16752801_3840_2160_30fps.mp4",
    food: "https://videos.pexels.com/video-files/37543772/15908406_3840_2160_25fps.mp4",
    tea: "https://videos.pexels.com/video-files/38351337/16286137_3840_2160_30fps.mp4",
    crater:
      "https://videos.pexels.com/video-files/4581057/4581057-uhd_4096_2160_24fps.mp4",
  },
  img: {
    kawahPutihLandscape:
      "https://images.pexels.com/photos/32327538/pexels-photo-32327538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    kawahPutihMisty:
      "https://images.pexels.com/photos/32327542/pexels-photo-32327542.jpeg?auto=compress&cs=tinysrgb&w=940",
    ciwideyMist:
      "https://images.pexels.com/photos/15927540/pexels-photo-15927540.jpeg?auto=compress&cs=tinysrgb&w=940",
    tangkuban:
      "https://images.pexels.com/photos/35886238/pexels-photo-35886238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bandungRange:
      "https://images.pexels.com/photos/11112892/pexels-photo-11112892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bragaSunset:
      "https://images.pexels.com/photos/38236144/pexels-photo-38236144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bragaNight:
      "https://images.pexels.com/photos/38437319/pexels-photo-38437319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bragaFashion:
      "https://images.pexels.com/photos/32327668/pexels-photo-32327668.jpeg?auto=compress&cs=tinysrgb&w=940",
    gedungSate:
      "https://images.pexels.com/photos/38086587/pexels-photo-38086587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gedungSateTall:
      "https://images.pexels.com/photos/38391914/pexels-photo-38391914.jpeg?auto=compress&cs=tinysrgb&w=940",
    angklung:
      "https://images.pexels.com/photos/32301865/pexels-photo-32301865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    wayang:
      "https://images.pexels.com/photos/33897285/pexels-photo-33897285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    wayangMaker:
      "https://images.pexels.com/photos/36660925/pexels-photo-36660925.jpeg?auto=compress&cs=tinysrgb&w=940",
    dancers:
      "https://images.pexels.com/photos/32327678/pexels-photo-32327678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    batagor:
      "https://images.pexels.com/photos/37106454/pexels-photo-37106454.jpeg?auto=compress&cs=tinysrgb&w=940",
    seblak:
      "https://images.pexels.com/photos/36359896/pexels-photo-36359896.jpeg?auto=compress&cs=tinysrgb&w=940",
    surabi:
      "https://images.pexels.com/photos/32330782/pexels-photo-32330782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    miekocok:
      "https://images.pexels.com/photos/37205645/pexels-photo-37205645.jpeg?auto=compress&cs=tinysrgb&w=940",
    nasitimbel:
      "https://images.pexels.com/photos/37135571/pexels-photo-37135571.jpeg?auto=compress&cs=tinysrgb&w=940",
    karedok:
      "https://images.pexels.com/photos/37065734/pexels-photo-37065734.jpeg?auto=compress&cs=tinysrgb&w=940",
    escincau:
      "https://images.pexels.com/photos/37134545/pexels-photo-37134545.jpeg?auto=compress&cs=tinysrgb&w=940",
    bandrek:
      "https://images.pexels.com/photos/36039032/pexels-photo-36039032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    floatingMarket:
      "https://images.pexels.com/photos/32212987/pexels-photo-32212987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hotSpring:
      "https://images.pexels.com/photos/35570901/pexels-photo-35570901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    strawberry:
      "https://images.pexels.com/photos/18785809/pexels-photo-18785809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    flowers:
      "https://images.pexels.com/photos/38569729/pexels-photo-38569729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    teaAerial:
      "https://images.pexels.com/photos/6872257/pexels-photo-6872257.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    teaVillage:
      "https://images.pexels.com/photos/37253071/pexels-photo-37253071.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    riceTerraces:
      "https://images.pexels.com/photos/15994341/pexels-photo-15994341.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    streetSnacks:
      "https://images.pexels.com/photos/36913525/pexels-photo-36913525.jpeg?auto=compress&cs=tinysrgb&w=940",
  },
};

/* ------------------------------ dishes ------------------------------ */

export interface Dish {
  no: string;
  name: string;
  gloss: string;
  desc: string;
  heat: number; // 0–5 sambal meter
  tag: string;
  img: string;
}

export const DISHES: Dish[] = [
  {
    no: "01",
    name: "Batagor",
    gloss: "baso tahu goreng — 'fried fish & tofu'",
    desc: "Fish dumplings & tofu, deep-fried to a shatter, drowned in sweet peanut sauce. Bandung's default greeting.",
    heat: 2,
    tag: "FRIED",
    img: MEDIA.img.batagor,
  },
  {
    no: "02",
    name: "Seblak",
    gloss: "from 'seblak-seblak' — the crunch",
    desc: "Crushed wet crackers stewed in garlic-chili broth. A student rite of passage; tears are optional but common.",
    heat: 5,
    tag: "SOUP",
    img: MEDIA.img.seblak,
  },
  {
    no: "03",
    name: "Surabi",
    gloss: "Sundanese rice pancake",
    desc: "Rice-flour pancake with a charred underside, crowned sweet (chocolate, cheese) or savage (sambal).",
    heat: 1,
    tag: "GRIDDLE",
    img: MEDIA.img.surabi,
  },
  {
    no: "04",
    name: "Mie Kocok",
    gloss: "kocok — 'to shake'",
    desc: "Shaken noodles, beef & golden broth, a fistful of celery and fried shallots. Hand-shaken, hence the name.",
    heat: 2,
    tag: "BOWL",
    img: MEDIA.img.miekocok,
  },
  {
    no: "05",
    name: "Nasi Timbel",
    gloss: "timbel — 'wrapped in banana leaf'",
    desc: "Rice steamed in a banana leaf beside smoked fish, tofu, tempeh, sambal terasi and a garden of lalapan.",
    heat: 4,
    tag: "RICE",
    img: MEDIA.img.nasitimbel,
  },
  {
    no: "06",
    name: "Karedok",
    gloss: "the raw Sundanese salad",
    desc: "Uncooked bean sprouts, long beans, cucumber & basil in a warm peanut-palm sugar dressing. Crunch, canonised.",
    heat: 3,
    tag: "SALAD",
    img: MEDIA.img.karedok,
  },
  {
    no: "07",
    name: "Es Cincau",
    gloss: "cincau — grass jelly",
    desc: "Black grass-jelly over shaved ice, palm sugar & coconut. The city's velvet coolant since forever.",
    heat: 0,
    tag: "ICE",
    img: MEDIA.img.escincau,
  },
  {
    no: "08",
    name: "Bandrek",
    gloss: "ginger-fire brew",
    desc: "Ginger, palm sugar, lemongrass & pepper, served volcanic. The highland nightcap — warms you from the teeth down.",
    heat: 0,
    tag: "HOT",
    img: MEDIA.img.bandrek,
  },
];

/* ------------------------------ legend ------------------------------ */

export interface LegendStep {
  no: string;
  text: string;
}

export const LEGEND: LegendStep[] = [
  {
    no: "01",
    text: "A princess, Dayang Sumbi, exiled to the forest for a broken promise, marries a dog — Tumang, a cursed prince in canine skin.",
  },
  {
    no: "02",
    text: "Her son Sangkuriang grows into a great hunter. In a moment of rage he kills Tumang — and is banished toward the mountains.",
  },
  {
    no: "03",
    text: "Years later he returns, grown beyond all recognition. Mother and son meet as strangers — and, unknowing, fall in love.",
  },
  {
    no: "04",
    text: "Dayang Sumbi sees the childhood scar and recoils. To undo the impossible match she sets an impossible task: a great boat and a lake, finished by first light.",
  },
  {
    no: "05",
    text: "With spirit armies he nearly succeeds. So she tricks the roosters — rice pounded till dawn, red silk flashing in the east. Fooled, the birds crow. Enraged, Sangkuriang kicks the half-built boat — and it capsizes.",
  },
];

/* --------------------------- field notes ---------------------------- */

export interface FieldNote {
  icon: "clock" | "backpack" | "bus" | "languages";
  title: string;
  sundanese: string;
  body: string;
}

export const FIELD_NOTES: FieldNote[] = [
  {
    icon: "clock",
    title: "When",
    sundanese: "Isuk-isuk — early, early",
    body: "June to September — dry season. Days 22–26°C, nights 15°C. Weekends belong to Jakarta's exodus; weekdays belong to you.",
  },
  {
    icon: "backpack",
    title: "Pack",
    sundanese: "Seuseuh — the cool air",
    body: "A jacket is not optional. The basin floor is eternal spring; the crater rim is autumn with a wind-chill.",
  },
  {
    icon: "bus",
    title: "Move",
    sundanese: "Angkot — the singing minivan",
    body: "Angkot (ahng-kot) — shareable minivans singing their routes from the curb. Grab & Gojek for everything else. Braga and the Alun-alun: walk.",
  },
  {
    icon: "languages",
    title: "Speak",
    sundanese: "Punten — a soft hello",
    body: "Punten (poon-ten) — 'excuse me, hello'. Nuhun (noo-hoon) — 'thank you'. Mangga (mahng-gah) — 'please, here you go'.",
  },
];

/* ---------------------------- glossary ------------------------------ */

export interface Term {
  word: string;
  roman: string;
  meaning: string;
}

export const PHRASES: Term[] = [
  { word: "PUNten", roman: "poon-ten", meaning: "hello, excuse me" },
  { word: "NUHUN", roman: "noo-hoon", meaning: "thank you" },
  { word: "MANGGA", roman: "mahng-gah", meaning: "please, here you go" },
  { word: "SOMEAH", roman: "soh-mah", meaning: "welcoming warmth" },
  { word: "NGARIUNG", roman: "ngah-ree-oong", meaning: "to gather" },
  { word: "DAHAREUN", roman: "da-ha-re-un", meaning: "food, a feast" },
  { word: "SEUSEUH", roman: "seu-seuh", meaning: "the coolness" },
  { word: "HANGGAR DEUI", roman: "hang-gar deh-ee", meaning: "see you again" },
];

export const NAV_LINKS = [
  { id: "#manifesto", label: "Manifesto", alt: "715" },
  { id: "#kota", label: "Kota — The City", alt: "768" },
  { id: "#dahareun", label: "Dahareun — Food", alt: "768" },
  { id: "#lembang", label: "Lembang — Highlands", alt: "1400" },
  { id: "#gunung", label: "Tangkuban Perahu", alt: "2076" },
  { id: "#kawah", label: "Kawah Putih", alt: "2434" },
  { id: "#notes", label: "Field Notes", alt: "768" },
];
