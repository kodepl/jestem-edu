const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.56)}&q=80`;

const site = {
  name: "Jestem Edu",
  domain: "jestem.edu.pl",
  tagline: "Wiedza, nauka i rozwój osobisty bez zbędnego bełkotu",
  email: "redakcja@jestem.edu.pl",
  city: "Gdańsk",
  address: "ul. Długi Targ 8, 80-828 Gdańsk",
  author: "Anna Kowalczyk",
  authorBio: "Pedagożka i popularyzatorka nauki. Pisze o edukacji, psychologii uczenia się i rozwoju kompetencji.",
  authorRole: "Redaktorka naczelna",
  authorAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1503676260728-1c00da094a0b", 1600),
  aboutImage: u("photo-1523050854058-8df90110c8f1", 1200),
  covers: {
    Edukacja: u("photo-1503676260728-1c00da094a0b"),
    Psychologia: u("photo-1576091160550-2173dba999ef"),
    Nauka: u("photo-1532094349884-543bc11b234d"),
    "Rozwój": u("photo-1522202176988-66273c2fd55f"),
    Kariera: u("photo-1521737604893-d14cc237f11d"),
    Języki: u("photo-1456513080510-7bf3a84b82f8"),
    Dzieci: u("photo-1503454537195-1dcabb73ffb9"),
    Technologia: u("photo-1518770660439-4636190af475"),
    Zdrowie: u("photo-1571019614242-c5c5dee9f50b"),
    Historia: u("photo-1461360370896-922624d12a74"),
    Finanse: u("photo-1554224155-6726b3ff858f"),
    Kultura: u("photo-1481627834876-b7833e8f5570"),
    default: u("photo-1503676260728-1c00da094a0b"),
  } as Record<string, string>,
  rubrics: [
    { name: "Edukacja", blurb: "Szkoła, studia i wszystko, czego nie uczą na lekcjach." },
    { name: "Psychologia", blurb: "Jak działa głowa — motywacja, nawyki, emocje i pamięć." },
    { name: "Nauka", blurb: "Fizyka, biologia, kosmos i odkrycia tłumaczone po ludzku." },
    { name: "Rozwój", blurb: "Kompetencje, kursy, certyfikaty i praktyczna wiedza na co dzień." },
  ],
};

export function rubricSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function coverFor(category?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[category || ""] || site.covers.default;
}

export default site;
