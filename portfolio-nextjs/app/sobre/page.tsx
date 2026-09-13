import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

const experience = [
  ["PayPal", "Principal Designer", "New York"],
  ["BUCK", "Art Director", "New York"],
  ["Work & Co", "Senior Designer", "Sao Paulo"],
  ["Aruliden", "Graphic Designer", "New York"],
  ["R/GA", "Visual Designer", "Sao Paulo"],
];

const clients = [
  "Apple", "Amazon", "Audi", "Google", "IBM", "Itaú", "Mastercard",
  "Meta (Facebook)", "Microsoft", "Nike", "OpenAI", "PayPal", "PepsiCo",
  "Ray-Ban", "Samsung", "Stripe", "Venmo", "WhatsApp",
];

const lectures = [
  ["Ongoing", "Visual Design for Interfaces"],
  ["2025", "CLIP Open Evening - Portfolio Reviews"],
  ["2025", "Design e Libertação: Lutas Anticoloniais ᴘᴛ"],
  ["2024", "Sonhos de Autonomia no Design ᴘᴛ"],
  ["2023", "Guest Critic @ Brand-Driven Interfaces"],
  ["2023", "Curso D:GCNP ᴘᴛ"],
  ["2022", "Espaços do Design no Contemporâneo ᴘᴛ"],
];

const press = [
  ["Fast Company", ""],
  ["Dynamic Logo", "Book"],
  ["14th Brazilian Design Biennial Catalogue", ""],
  ["Computer Arts Magazine", "UK"],
  ["Computer Arts Magazine", "Brazil"],
  ["AIGA 50 Books 50 Covers", ""],
  ["A View on Design", ""],
  ["UOL Tab", "ᴘᴛ"],
  ["The Inspiration Grid", ""],
  ["Freela School", "ᴘᴛ"],
  ["CCSP", "ᴘᴛ"],
  ["AD News", "ᴘᴛ"],
  ["Suplemento Pernambuco", "ᴘᴛ"],
  ["ArchDaily", "ᴘᴛ"],
  ["Diagrama", "ᴘᴛ"],
  ["Coexist", "ᴘᴛ"],
  ["Fala Colega", "ᴘᴛ"],
];

const awards = [
  ["ADC Awards", "Silver Cube"],
  ["ADC Awards", "Shortlist"],
  ["D&AD", "Shortlist"],
  ["LAD Awards", "Silver"],
  ["Creative Review Annual Awards", ""],
  ["Communication Arts", "Award of Excellence"],
  ["Brazilian Design Biennial", ""],
  ["GDUSA", "Branding"],
  ["GDUSA", "Interactive"],
  ["IDEA", "Finalist"],
];

const speakers = [
  ["2025", "DiaTipo SP 2025"],
  ["2025", "Inspira Design, UFF"],
  ["2025", "UniFil"],
  ["2022", "Design Ativista Panel"],
  ["2022", "Recorte Launch Event"],
  ["2022", "Belas Artes"],
  ["2021", "Anhembi Morumbi"],
  ["2021", "ESPM"],
  ["2021", "INSIDE, UnP"],
  ["2020", "Charneira, PUC-PR"],
  ["2020", "EBAC"],
  ["2019", "World Interaction Design Day (IxDD/IxDA)"],
  ["2015", "GAMPI Design,Univille"],
];

const articles = [
  ["2023", "Livros sobre Emprecariado ᴘᴛ"],
  ["2022", "Designers ou Militantes? ᴘᴛ"],
  ["2021", "Design Radical ᴘᴛ"],
];

const jury = [
  ["2026", "BDA", "Jury President, Digital Design"],
  ["2021", "BDA", "Digital Design"],
  ["2020", "BDA", "Jury President, Graphic Design"],
];

const guestCritics = [
  [
    "2025",
    "Harvard University",
    "Graduate School Of Design",
    "Final Review for the Master's in Design Studies",
    "Open Project: Experimental Infrastructures",
    "Students: Gustavo Borges, Nathalie Attalah, Ella St. Hilaire, Jules Bernstein, Sijia Ma",
  ],
  [
    "2021",
    "USP · Universidade de São Paulo",
    "FAUUSP",
    "Final Graduation Assessment Examining Board",
    "Thesis: Agitprop gráfica - Atelier Populaire e propostas para o agora",
    "Student: Lais Matias",
  ],
];

export const metadata = {
  title: "Sobre — Miguel Valinho",
  description: "Trajetória, experiência e atividade profissional de Miguel Valinho",
};

function List({ items }: { items: string[] }) {
  return (
    <div className="space-y-0">
      {items.map((item) => <p key={item} className="leading-[22.89px]">{item}</p>)}
    </div>
  );
}

function YearList({ items }: { items: string[][] }) {
  return (
    <div className="space-y-0">
      {items.map(([year, text]) => (
        <p key={`${year}-${text}`} className="leading-[22.89px]">
          <span className="inline-block w-[66px]">{year}</span>{text}
        </p>
      ))}
    </div>
  );
}

export default function SobrePage() {
  return (
    <div className={instrumentSans.className + " bg-[#fafafa] text-[#020202]"}>
      <div className="px-[38px] md:px-[40px] pt-[0px] pb-[96px]">
        <div className="h-[570px] md:h-[570px]" />
        <div className="border-t border-black" />

        <section className="grid grid-cols-1 md:grid-cols-[42%_29.2%_28.8%] gap-y-12 pt-[46px] pb-[54px]">
          <h2 className="text-[20px] leading-[1.25] font-medium">Experiência</h2>

          <div className="text-[12.7px] font-medium">
            <p className="leading-[22.89px] mb-[12px]">Main Experience</p>
            <div className="space-y-[22px]">
              {experience.map(([company, role, location]) => (
                <div key={company}>
                  <p className="leading-[22.89px]">{company}</p>
                  <p className="leading-[22.89px]">{role}</p>
                  <p className="leading-[22.89px]">{location}</p>
                </div>
              ))}
              <p className="leading-[22.89px]">+</p>
            </div>
          </div>

          <div className="text-[14.3px] font-medium">
            <p className="text-[12.5px] leading-[22.89px] mb-[22px]">Select clients</p>
            <List items={clients} />
          </div>
        </section>

        <div className="border-t border-black" />

        <section className="grid grid-cols-1 md:grid-cols-[42%_29.2%_28.8%] gap-y-12 pt-[46px]">
          <h2 className="text-[20px] leading-[1.25] font-medium">Trajetória</h2>

          <div className="text-[12.7px] font-medium">
            <p className="leading-[22.89px] mb-[18px]">My book</p>
            <p className="leading-[22.89px] mb-[18px]">Design: Global Crítico Negro Prático (ᴘᴛ)</p>
            <div className="w-[220px] aspect-[452.55/254.55] mb-[38px] overflow-hidden bg-white">
              <img
                src="https://www.figma.com/api/mcp/asset/843c9479-6e7c-4d86-bd81-6afb95ad7520.png"
                alt="Book cover"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-[45px]">
              <div>
                <p className="leading-[22.89px] mb-[12px]">Selected Press, Publications, Interviews, Podcasts, Mentions</p>
                <div className="space-y-0">
                  {press.map(([name, suffix]) => (
                    <p key={`${name}-${suffix}`} className="leading-[22.89px]">
                      {name}{suffix && <span className="text-[#8e8e8e]"> {suffix}</span>}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="leading-[22.89px] mb-[12px]">Awards</p>
                <div>
                  {awards.map(([name, suffix]) => (
                    <p key={`${name}-${suffix}`} className="leading-[22.89px]">
                      {name}{suffix && <span className="text-[#8e8e8e]"> {suffix}</span>}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="leading-[22.89px] mb-[12px]">Lectures &amp; Courses</p>
                <YearList items={lectures} />
              </div>
            </div>
          </div>

          <div className="text-[12.7px] font-medium">
            <p className="leading-[22.89px] mb-[18px]">
              In 2017, I created the design research project 148 Designers (ᴘᴛ). Since then, I have been invited to speak at universities and design events, including World Interaction Design Day (IxDD 2019). In 2026, I published my first book: ‘Design: Global Crítico Negro Prático’. I have also written for various design publications, including Revista Recorte, where I served as a guest editor, and I frequently co-host the Brazilian design podcast Diagrama.
            </p>

            <div className="space-y-[45px]">
              <div>
                <p className="leading-[22.89px] mb-[12px]">Speaker engagements</p>
                <YearList items={speakers} />
              </div>

              <div>
                <p className="leading-[22.89px] mb-[12px]">Published Articles</p>
                <YearList items={articles} />
              </div>

              <div>
                <p className="leading-[22.89px] mb-[12px]">Jury</p>
                {jury.map(([year, org, role]) => (
                  <p key={`${year}-${org}-${role}`} className="leading-[22.89px]">
                    <span className="inline-block w-[66px]">{year}</span>{org} <span className="text-[#8e8e8e]">{role}</span>
                  </p>
                ))}
              </div>

              <div>
                <p className="leading-[22.89px] mb-[12px]">Guest Critic Engagements</p>
                <div className="space-y-[22px]">
                  {guestCritics.map(([year, institution, sub, line1, line2, line3]) => (
                    <div key={`${year}-${institution}`}>
                      <p className="leading-[22.89px]">{year}<span className="inline-block w-[66px]" />{institution}</p>
                      <p className="leading-[22.89px] text-[#8e8e8e] ml-[78px]">{sub}</p>
                      <p className="leading-[22.89px] ml-[78px]">{line1}</p>
                      <p className="leading-[22.89px] ml-[78px]">{line2}</p>
                      <p className="leading-[22.89px] ml-[78px]">{line3}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
