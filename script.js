// ===================== i18n =====================
const I18N = {
  no: {
    'nav.home':'Hjem','nav.services':'Tjenester','nav.about':'Om oss','nav.blog':'Blogg','nav.contact':'Kontakt','nav.cta':'Ta kontakt →',

    'hero.title':'Vi forsvarer<br/>dine systemer.',
    'hero.title.prefix':'Vi forsvarer',
    'hero.lede':'Blue team-spesialister med 16+ års erfaring fra norsk CERT/SOC-drift. Vi bygger deteksjon, håndterer hendelser og herder infrastruktur — som en forlengelse av teamet ditt, ikke konsulenter med rapporter.',
    'hero.cta1':'Se våre tjenester →','hero.cta2':'Om ForSec',
    'hero.stat1':'ÅRS ERFARING','hero.stat2':'ÅR MED CERT/SOC','hero.stat3':'SOC-MILJØER BYGGET',

    'who.eyebrow':'— HVEM VI ER —','who.title':'Eksperter, ikke bare konsulenter',
    'who.lede':'16+ års hands-on erfaring fra norsk CERT/SOC-drift. Vi bygger deteksjoner, etterforsker hendelser og herder infrastruktur.',
    'who.c1.title':'Deteksjon og trusseljakt','who.c1.body':'Vi skriver deteksjonsregler, tuner SIEM-plattformer og jakter på trusler i ditt miljø med Sigma, YARA og KQL.','who.c1.chip':'Detection as code',
    'who.c2.title':'Forensikk og hendelsesrespons','who.c2.body':'Når hendelsen inntreffer, er vi der. Disk-, minne- og nettverksforensikk med bevissinnhenting som holder i retten.','who.c2.chip':'Court grade',
    'who.c3.title':'Herding og sikkerhetstesting','who.c3.body':'Systematisk herding av servere, AD og sky. Penetrasjonstesting og purple teaming for å finne og lukke hull.','who.c3.chip1':'Hardening','who.c3.chip2':'Purple team',
    'common.readmore':'Les mer →','common.readmoreSvc':'Les mer om tjenesten →',

    'core.eyebrow':'— KJERNEKOMPETANSE —','core.title':'Blue team sikkerhetsoperasjoner',
    'core.lede':'Tre forsvarspilarer — bygget av operatører som har gjort dette på ordentlig.',
    'core.c1.title':'Deteksjonsutvikling','core.c1.body':'Skreddersydde deteksjonsregler i Sigma, YARA, KQL og SPL. SIEM-tuning, trusseljakt og detection-as-code som fanger reelle trusler — ikke bare støy.',
    'core.c1.l1':'Microsoft Sentinel / Splunk / Elastic','core.c1.l2':'Detection engineering med Git workflows','core.c1.l3':'MITRE ATT&CK mapping per regel',
    'core.c2.title':'Hendelsesrespons og forensikk','core.c2.body':'Fra første alarm til ferdig rapport. Disk- og minneforensikk, skadevareanalyse, bevissikring og responsavtaler for når minuttene teller.',
    'core.c2.l1':'Garantert responstid på retainer','core.c2.l2':'Volatility, FTK, EnCase, Velociraptor','core.c2.l3':'Rapporter som holder i rett',
    'core.c3.title':'Herding og vurderinger','core.c3.body':'Penetrasjonstesting, AD-sikkerhetsgjennomgang, sky-sikkerhetsvurdering og systematisk herding. Vi finner hullene og hjelper deg å tette dem.',
    'core.c3.l1':'CIS-benchmarks og NSMs grunnprinsipper','core.c3.l2':'Azure / AWS / GCP sikkerhetsvurdering','core.c3.l3':'Purple team-øvelser',

    'partners.eyebrow':'— PÅLITELIGE PARTNERSKAP —','partners.title':'Anerkjent av bransjeledere',
    'partners.lede':'Strategiske partnerskap som styrker våre sikkerhetskapabiliteter.',
    'partners.p1.title':'Microsoft Partner','partners.p1.body':'Beskyttelse på bedriftsnivå med Microsofts skyteknologier og sikkerhetsløsninger.',
    'partners.p1.l1':'Azure sikkerhetsarkitektur og implementering','partners.p1.l2':'Microsoft Defender for Cloud ekspertise','partners.p1.l3':'Sentinel SIEM/SOAR-integrasjon','partners.p1.l4':'Microsoft 365 sikkerhetsoptimalisering',
    'partners.p2.title':'FIRST.org Liaison','partners.p2.body':'Direkte tilknytning til det globale hendelsesresponssamfunnet gjennom FIRST.org-medlemskap.',
    'partners.p2.l1':'Global deling av trusselinformasjon','partners.p2.l2':'Direkte tilknytning til internasjonale sikkerhetsteam','partners.p2.l3':'Tidlig varslingssystem for nye trusler','partners.p2.l4':'Tilgang til hendelsesrespons playbooks og metodikker',

    'ind.eyebrow':'— BRANSJER —','ind.title':'Vi forsvarer organisasjoner på tvers av sektorer','ind.lede':'Hver bransje har unike trusselbilder. Vi bringer operatør-nivå blue team-ekspertise tilpasset din sektor.',
    'ind.i1.title':'Finans og bank','ind.i1.body':'Finansinstitusjoner møter sofistikerte trusselaktører som retter seg mot transaksjoner og kundedata.',
    'ind.i1.l1':'Deteksjonsregler for finanssvindel og innsidertrusler','ind.i1.l2':'Hendelsesrespons for betalingssystemer og handelsplattformer','ind.i1.l3':'Penetrasjonstesting mot SWIFT, DORA og PCI DSS-omfang',
    'ind.i2.title':'Helse og omsorg','ind.i2.body':'Helsedata er hovedmål. Vi beskytter systemene klinikere er avhengige av daglig.',
    'ind.i2.l1':'Trusseldeteksjon på tvers av kliniske nettverk og Normen','ind.i2.l2':'Hendelsesrespons for pasientjournalsystemer','ind.i2.l3':'Herding av medisinsk utstyrsnettverk og IoT',
    'ind.i3.title':'Offentlig sektor','ind.i3.body':'Vi bygde ekspertisen vår inne i norsk offentlig sektor CERT/SOC — vi kjenner dette domenet.',
    'ind.i3.l1':'Deteksjonsutvikling i tråd med NSMs grunnprinsipper','ind.i3.l2':'Hendelsesrespons og forensikk for offentlig infrastruktur','ind.i3.l3':'Herding mot statlige og APT-trusler',
    'ind.i4.title':'Teknologi og SaaS','ind.i4.body':'Hurtigvoksende teknologiselskaper trenger sikkerhet som holder tritt med utviklingen.',
    'ind.i4.l1':'Sky-sikkerhetsvurderinger (Azure, AWS, GCP)','ind.i4.l2':'Container- og Kubernetes-herding','ind.i4.l3':'Purple teaming for SaaS-plattformer og API-er',

    'faq.eyebrow':'— OFTEST STILTE SPØRSMÅL —','faq.title':'Vanlige spørsmål om IT-sikkerhet','faq.lede':'Svar på det norske virksomheter lurer på om cybersikkerhet og våre tjenester.',
    'faq.q1':'Hvordan kommer vi i gang med en sikkerhetsvurdering?','faq.a1':'Vi starter med en kort kartleggingssamtale, definerer scope og leverer en gjennomgang av nåværende sikkerhetstilstand med konkrete tiltak.',
    'faq.q2':'Hva koster sikkerhetstjenester, og hvordan prises de?','faq.a2':'Engangsvurderinger fra 45 000 kr, retainer fra 25 000 kr/mnd. Endelig pris avhenger av miljø og scope.',
    'faq.q3':'Vi har aldri hatt en sikkerhetsgjennomgang — er det for sent?','faq.a3':'Nei. Vi har hjulpet virksomheter i alle modenhetsnivåer. Det viktigste er å starte med en realistisk basislinje.',
    'faq.q4':'Hva innebærer deteksjonsutvikling egentlig?','faq.a4':'Skreddersydde regler i Sigma/YARA/KQL/SPL, MITRE ATT&CK-mapping og kontinuerlig tuning for å redusere falske positiver.',
    'faq.q5':'Hva gjør vi hvis vi opplever et sikkerhetsbrudd?','faq.a5':'Kontakt vakttelefonen. Vi starter triage, isolerer, samler bevis og koordinerer hendelsen til normalisering.',
    'faq.q6':'Hva skiller ForSec fra andre sikkerhetsselskaper?','faq.a6':'Operatører, ikke konsulenter. 16+ års CERT/SOC-erfaring og leveranser som faktisk integreres i ditt team.',

    'blog.eyebrow':'— SISTE FRA BLOGGEN —','blog.title':'Innsikt og rådgivning','blog.all':'Se alle artikler →',
    'blog.b1.date':'15. FEB','blog.b1.read':'5 min lesetid','blog.b1.title':'NIS2-direktivet: Hva norske virksomheter må vite i 2026','blog.b1.body':'NIS2 stiller strengere krav til cybersikkerhet for kritisk infrastruktur. Her er hva din virksomhet må gjøre for å bli compliant.',
    'blog.b2.date':'28. FEB','blog.b2.read':'6 min lesetid','blog.b2.title':'Ransomware-trender i Norge: Slik beskytter du virksomheten','blog.b2.body':'Ransomware-angrep mot norske virksomheter øker. Lær om de nyeste trendene og konkrete tiltak for å beskytte din organisasjon.','blog.b2.tag':'Sikkerhet',
    'blog.b3.tag':'Hendelsesrespons','blog.b3.date':'1. MARS','blog.b3.read':'7 min lesetid','blog.b3.title':'Slik bygger du en hendelsesresponsplan som faktisk fungerer','blog.b3.body':'En hendelsesresponsplan er verdiløs hvis ingen vet hvordan den brukes. Her er en praktisk guide til å bygge en plan som virker under press.','blog.b3.chip1':'Hendelsesrespons','blog.b3.chip2':'Planlegging',

    'cta.eyebrow':'— TA KONTAKT —','cta.title':'Klar for sterkere forsvar?','cta.lede':'La oss diskutere hvordan vi kan hjelpe å sikre din organisasjon. Innledende samtale er alltid uforpliktende.',
    'cta.btn1':'📞 Ta kontakt →','cta.t1':'★ FIRST.ORG MEDLEM','cta.t2':'★ MICROSOFT PARTNER','cta.t3':'★ BASERT I NORGE',

    'footer.tag':'OPERATIV CYBERSIKKERHET','footer.body':'Blue team-spesialister med 16+ års CERT/SOC-erfaring. Deteksjon, respons og herding — bygget av operatører, ikke konsulenter.','footer.status':'SOC OPERATIVT &nbsp;/&nbsp; 24/7',
    'footer.h1':'SELSKAP','footer.about':'Om oss','footer.contact':'Kontakt','footer.career':'Karriere','footer.privacy':'Personvern','footer.terms':'Vilkår',
    'footer.h2':'TJENESTER','footer.s1':'Deteksjonsutvikling','footer.s2':'Hendelsesrespons','footer.s3':'Forensikk','footer.s4':'Penetrasjonstesting','footer.s5':'Herding og vurdering',
    'footer.h3':'KONTAKT','footer.addr':'Terje Løvås vei 1<br/>4879 Grimstad, Norge',
    'footer.copy':'© 2026 ForSec AS — Alle rettigheter reservert','footer.orgnr':'Org.nr: 931 208 306','footer.lang.no':'NORSK','footer.lang.en':'ENGLISH',

    'svc.eyebrow':'— VÅRE TJENESTER —','svc.title':'Tjenester','svc.lede':'Teknisk sikkerhet fra operatører med 16+ års erfaring fra norsk CERT/SOC-drift.<br/>Vi bygger, detekterer, responderer og herder.',
    'svc.p1.title':'Blue Team & Deteksjonsutvikling','svc.p1.body':'Vi bygger deteksjonskapabiliteter som faktisk fanger reelle trusler. Fra Sigma- og YARA-regler til fullstendige detection-as-code-pipelines — vi designer, implementerer og tuner deteksjonslogikk tilpasset ditt miljø.','svc.p1.target':'For SOC-team og virksomheter som vil bygge eller forbedre sine deteksjonsevner',
    'svc.p2.title':'Digital etterforskning og hendelsesrespons','svc.p2.body':'Når hendelsen inntreffer, teller minuttene. Vi gjennomfører disk-, minne- og nettverksforensikk, sikrer bevis og leverer rapporter som holder i retten. Vi tilbyr også retainer-avtaler for garantert responstid.','svc.p2.target':'For virksomheter som opplever eller vil forberede seg på sikkerhetshendelser',
    'svc.p3.title':'Sikkerhetstesting og sårbarhetsvurdering','svc.p3.body':'Grundig teknisk testing av infrastruktur, applikasjoner og skyløsninger. Vi finner sårbarhetene før angripere gjør det — med konkrete funn og prioriterte anbefalinger.','svc.p3.target':'For virksomheter som vil kjenne sine tekniske svakheter og lukke dem',

    'cat.eyebrow':'— TJENESTEKATALOG —','cat.title':'Alle våre tjenester i detalj','cat.lede':'Konkrete leveranser, tydelig scope, og hvem hver tjeneste passer for.','cat.deliv':'LEVERANSER',
    'cat.s1.title':'Deteksjonsutvikling','cat.s1.body':'Strukturert utvikling og forvaltning av deteksjonsregler i din SIEM. Vi designer, koder, tester og dokumenterer regler — og setter opp prosessen for å forvalte dem over tid.','cat.s1.target':'For SOC-team som vil heve deteksjonsmodenheten',
    'cat.s1.l1':'Sigma/YARA/KQL-deteksjonsregler','cat.s1.l2':'SIEM-tuning og optimalisering','cat.s1.l3':'detection-as-code pipeline','cat.s1.l4':'trusseljaktrapporter','cat.s1.l5':'SOC-modenhetsvurdering',
    'cat.s2.title':'Hendelsesrespons og forensikk','cat.s2.body':'Når en hendelse inntreffer leverer vi rask, strukturert respons. Vi gjennomfører digital etterforskning og leverer bevissikret rapport som tåler juridisk granskning.','cat.s2.target':'For virksomheter som trenger akutt eller proaktiv responskapasitet',
    'cat.s2.l1':'Forensisk analyse (disk/minne/nettverk)','cat.s2.l2':'bevissinnhenting og beviskjede','cat.s2.l3':'malware-analyse','cat.s2.l4':'hendelsesrapport for ledelse/forsikring/politi','cat.s2.l5':'retainer-avtale med SLA',
    'cat.s3.title':'Penetrasjonstesting','cat.s3.body':'Reell testing av angrepsflaten din. Vi simulerer angripere mot infrastruktur, web-applikasjoner, APIer og sky for å avdekke konkrete sårbarheter — med tydelig prioritering.','cat.s3.target':'For virksomheter som vil verifisere sikkerhetsnivået sitt',
    'cat.s3.l1':'Sårbarhetsskanning (intern/ekstern)','cat.s3.l2':'penetrasjonstest av webapplikasjoner og APIer','cat.s3.l3':'Active Directory-sikkerhetsvurdering','cat.s3.l4':'sky-sikkerhetsgjennomgang (Azure/AWS/GCP)',
    'cat.s4.title':'Purple teaming','cat.s4.body':'Samarbeid mellom angrep og forsvar i kontrollerte øvelser. Vi emulerer reelle trusselaktører basert på MITRE ATT&CK, tester deteksjonsdekningen din, og forbedrer forsvaret sammen med ditt team.','cat.s4.target':'For modne sikkerhetsteam som vil teste og forbedre forsvaret sitt systematisk',
    'cat.s4.l1':'MITRE ATT&CK-basert emulering','cat.s4.l2':'deteksjonsgapanalyse','cat.s4.l3':'angrepssimulering med sanntids blue team-tilbakemelding','cat.s4.l4':'måldrevet forbedringsplan',
    'cat.s5.title':'Herding — on-prem og sky','cat.s5.body':'Systematisk herding av servere, nettverk, Active Directory og skyplattformer. Vi følger CIS-benchmarks og best practices for å redusere angrepsflaten — enten du kjører on-prem, hybrid eller full sky.','cat.s5.target':'For virksomheter som vil redusere angrepsflaten i infrastrukturen sin',
    'cat.s5.l1':'Windows/Linux-herding (CIS-benchmarks)','cat.s5.l2':'Active Directory-herding og tiering','cat.s5.l3':'Azure/M365-sikkerhetskonfigurasjon','cat.s5.l4':'nettverkssegmentering og zero trust','cat.s5.l5':'container- og Kubernetes-sikkerhet',
    'cat.s6.title':'Tabletop-øvelser og trening','cat.s6.body':'Realistiske øvelsesscenarier som tester organisasjonens evne til å håndtere sikkerhetshendelser. Fra ransomware-scenarier for ledelsen til tekniske incident response-drills for SOC-teamet.','cat.s6.target':'For ledelse, styre og sikkerhetsteam som vil øve på realistiske hendelser',
    'cat.s6.l1':'Ransomware-scenario for ledelsen','cat.s6.l2':'teknisk IR-drill for sikkerhetsteam','cat.s6.l3':'krisehåndteringsøvelse','cat.s6.l4':'styrebriefing om cybersikkerhet','cat.s6.l5':'evalueringsrapport med forbedringstiltak',

    'proc.eyebrow':'— SLIK JOBBER VI —','proc.title':'Fra kartlegging til sikkerhet','proc.lede':'En strukturert prosess som gir resultater — uten å forstyrre din daglige drift.',
    'proc.s1.title':'Kartlegging','proc.s1.body':'Vi starter med å forstå din virksomhet, systemer og risikoeksponering gjennom samtaler og teknisk gjennomgang.',
    'proc.s2.title':'Vurdering','proc.s2.body':'Grundig analyse av sikkerhetsnivå med testing, sårbarhetsskanning og gjennomgang av arkitektur og rutiner.',
    'proc.s3.title':'Rapport og plan','proc.s3.body':'Detaljert rapport med funn, risikorangering og en prioritert handlingsplan med konkrete tiltak.',
    'proc.s4.title':'Implementering','proc.s4.body':'Vi hjelper med å implementere tiltakene — fra konfigurasjonsendringer til oppbygging av deteksjonskapabiliteter.'
  },
  en: {
    'nav.home':'Home','nav.services':'Services','nav.about':'About','nav.blog':'Blog','nav.contact':'Contact','nav.cta':'Contact us →',

    'hero.title':'We defend<br/>your systems.',
    'hero.title.prefix':'We defend',
    'hero.lede':'Blue team specialists with 16+ years of experience from Norwegian CERT/SOC operations. We build detection, handle incidents and harden infrastructure — as an extension of your team, not consultants delivering reports.',
    'hero.cta1':'See our services →','hero.cta2':'About ForSec',
    'hero.stat1':'YEARS EXPERIENCE','hero.stat2':'YEARS IN CERT/SOC','hero.stat3':'SOC ENVIRONMENTS BUILT',

    'who.eyebrow':'— WHO WE ARE —','who.title':'Experts, not just consultants',
    'who.lede':'16+ years hands-on experience from Norwegian CERT/SOC operations. We build detections, investigate incidents and harden infrastructure.',
    'who.c1.title':'Detection and threat hunting','who.c1.body':'We write detection rules, tune SIEM platforms and hunt for threats in your environment using Sigma, YARA and KQL.','who.c1.chip':'Detection as code',
    'who.c2.title':'Forensics and incident response','who.c2.body':'When an incident strikes, we are there. Disk, memory and network forensics with evidence collection that holds up in court.','who.c2.chip':'Court grade',
    'who.c3.title':'Hardening and security testing','who.c3.body':'Systematic hardening of servers, AD and cloud. Penetration testing and purple teaming to find and close gaps.','who.c3.chip1':'Hardening','who.c3.chip2':'Purple team',
    'common.readmore':'Read more →','common.readmoreSvc':'Read more about the service →',

    'core.eyebrow':'— CORE COMPETENCE —','core.title':'Blue team security operations',
    'core.lede':'Three defensive pillars — built by operators who have done this for real.',
    'core.c1.title':'Detection engineering','core.c1.body':'Tailored detection rules in Sigma, YARA, KQL and SPL. SIEM tuning, threat hunting and detection-as-code that catches real threats — not just noise.',
    'core.c1.l1':'Microsoft Sentinel / Splunk / Elastic','core.c1.l2':'Detection engineering with Git workflows','core.c1.l3':'MITRE ATT&CK mapping per rule',
    'core.c2.title':'Incident response and forensics','core.c2.body':'From first alert to finished report. Disk and memory forensics, malware analysis, evidence preservation and response agreements for when minutes matter.',
    'core.c2.l1':'Guaranteed response time on retainer','core.c2.l2':'Volatility, FTK, EnCase, Velociraptor','core.c2.l3':'Reports that hold up in court',
    'core.c3.title':'Hardening and assessments','core.c3.body':'Penetration testing, AD security review, cloud security assessment and systematic hardening. We find the gaps and help you close them.',
    'core.c3.l1':'CIS benchmarks and NSM core principles','core.c3.l2':'Azure / AWS / GCP security assessment','core.c3.l3':'Purple team exercises',

    'partners.eyebrow':'— TRUSTED PARTNERSHIPS —','partners.title':'Recognized by industry leaders',
    'partners.lede':'Strategic partnerships that strengthen our security capabilities.',
    'partners.p1.title':'Microsoft Partner','partners.p1.body':'Enterprise-grade protection with Microsoft cloud technologies and security solutions.',
    'partners.p1.l1':'Azure security architecture and implementation','partners.p1.l2':'Microsoft Defender for Cloud expertise','partners.p1.l3':'Sentinel SIEM/SOAR integration','partners.p1.l4':'Microsoft 365 security optimization',
    'partners.p2.title':'FIRST.org Liaison','partners.p2.body':'Direct connection to the global incident response community through FIRST.org membership.',
    'partners.p2.l1':'Global threat intelligence sharing','partners.p2.l2':'Direct ties to international security teams','partners.p2.l3':'Early warning system for new threats','partners.p2.l4':'Access to incident response playbooks and methodologies',

    'ind.eyebrow':'— INDUSTRIES —','ind.title':'We defend organizations across sectors','ind.lede':'Every industry has unique threat landscapes. We bring operator-level blue team expertise tailored to your sector.',
    'ind.i1.title':'Finance and banking','ind.i1.body':'Financial institutions face sophisticated threat actors targeting transactions and customer data.',
    'ind.i1.l1':'Detection rules for financial fraud and insider threats','ind.i1.l2':'Incident response for payment systems and trading platforms','ind.i1.l3':'Penetration testing against SWIFT, DORA and PCI DSS scope',
    'ind.i2.title':'Healthcare','ind.i2.body':'Health data is a prime target. We protect the systems clinicians rely on daily.',
    'ind.i2.l1':'Threat detection across clinical networks and Normen','ind.i2.l2':'Incident response for patient record systems','ind.i2.l3':'Hardening of medical device networks and IoT',
    'ind.i3.title':'Public sector','ind.i3.body':'We built our expertise inside Norwegian public sector CERT/SOC — we know this domain.',
    'ind.i3.l1':'Detection engineering aligned with NSM core principles','ind.i3.l2':'Incident response and forensics for public infrastructure','ind.i3.l3':'Hardening against state and APT threats',
    'ind.i4.title':'Technology and SaaS','ind.i4.body':'Fast-growing tech companies need security that keeps pace with development.',
    'ind.i4.l1':'Cloud security assessments (Azure, AWS, GCP)','ind.i4.l2':'Container and Kubernetes hardening','ind.i4.l3':'Purple teaming for SaaS platforms and APIs',

    'faq.eyebrow':'— FREQUENTLY ASKED QUESTIONS —','faq.title':'Common questions about IT security','faq.lede':'Answers to what Norwegian businesses wonder about cybersecurity and our services.',
    'faq.q1':'How do we get started with a security assessment?','faq.a1':'We start with a short scoping call, define the scope and deliver a review of current security posture with concrete actions.',
    'faq.q2':'What do security services cost, and how are they priced?','faq.a2':'One-off assessments from NOK 45,000, retainer from NOK 25,000/month. Final price depends on environment and scope.',
    'faq.q3':'We have never had a security review — is it too late?','faq.a3':'No. We have helped organizations at every maturity level. The important thing is to start with a realistic baseline.',
    'faq.q4':'What does detection engineering actually involve?','faq.a4':'Tailored rules in Sigma/YARA/KQL/SPL, MITRE ATT&CK mapping and continuous tuning to reduce false positives.',
    'faq.q5':'What do we do if we experience a security breach?','faq.a5':'Call the on-call line. We start triage, isolate, gather evidence and coordinate the incident through to recovery.',
    'faq.q6':'What sets ForSec apart from other security companies?','faq.a6':'Operators, not consultants. 16+ years of CERT/SOC experience and deliveries that actually integrate into your team.',

    'blog.eyebrow':'— LATEST FROM THE BLOG —','blog.title':'Insights and advisory','blog.all':'See all articles →',
    'blog.b1.date':'15 FEB','blog.b1.read':'5 min read','blog.b1.title':'The NIS2 directive: What Norwegian businesses must know in 2026','blog.b1.body':'NIS2 raises the bar for cybersecurity for critical infrastructure. Here is what your business must do to become compliant.',
    'blog.b2.date':'28 FEB','blog.b2.read':'6 min read','blog.b2.title':'Ransomware trends in Norway: How to protect your business','blog.b2.body':'Ransomware attacks against Norwegian businesses are increasing. Learn the latest trends and concrete steps to protect your organization.','blog.b2.tag':'Security',
    'blog.b3.tag':'Incident response','blog.b3.date':'1 MAR','blog.b3.read':'7 min read','blog.b3.title':'How to build an incident response plan that actually works','blog.b3.body':'An incident response plan is worthless if no one knows how to use it. Here is a practical guide to building a plan that works under pressure.','blog.b3.chip1':'Incident response','blog.b3.chip2':'Planning',

    'cta.eyebrow':'— CONTACT US —','cta.title':'Ready for stronger defense?','cta.lede':'Let us discuss how we can help secure your organization. An initial conversation is always non-binding.',
    'cta.btn1':'📞 Contact us →','cta.t1':'★ FIRST.ORG MEMBER','cta.t2':'★ MICROSOFT PARTNER','cta.t3':'★ BASED IN NORWAY',

    'footer.tag':'OPERATIONAL CYBERSECURITY','footer.body':'Blue team specialists with 16+ years of CERT/SOC experience. Detection, response and hardening — built by operators, not consultants.','footer.status':'SOC OPERATIONAL &nbsp;/&nbsp; 24/7',
    'footer.h1':'COMPANY','footer.about':'About','footer.contact':'Contact','footer.career':'Careers','footer.privacy':'Privacy','footer.terms':'Terms',
    'footer.h2':'SERVICES','footer.s1':'Detection engineering','footer.s2':'Incident response','footer.s3':'Forensics','footer.s4':'Penetration testing','footer.s5':'Hardening and assessment',
    'footer.h3':'CONTACT','footer.addr':'Terje Løvås vei 1<br/>4879 Grimstad, Norway',
    'footer.copy':'© 2026 ForSec AS — All rights reserved','footer.orgnr':'Org.no: 931 208 306','footer.lang.no':'NORSK','footer.lang.en':'ENGLISH',

    'svc.eyebrow':'— OUR SERVICES —','svc.title':'Services','svc.lede':'Technical security from operators with 16+ years from Norwegian CERT/SOC operations.<br/>We build, detect, respond and harden.',
    'svc.p1.title':'Blue Team & Detection Engineering','svc.p1.body':'We build detection capabilities that actually catch real threats. From Sigma and YARA rules to full detection-as-code pipelines — we design, implement and tune detection logic tailored to your environment.','svc.p1.target':'For SOC teams and organizations that want to build or improve detection capabilities',
    'svc.p2.title':'Digital forensics and incident response','svc.p2.body':'When an incident strikes, minutes matter. We perform disk, memory and network forensics, preserve evidence and deliver reports that hold up in court. We also offer retainer agreements for guaranteed response time.','svc.p2.target':'For organizations experiencing or preparing for security incidents',
    'svc.p3.title':'Security testing and vulnerability assessment','svc.p3.body':'Thorough technical testing of infrastructure, applications and cloud. We find the vulnerabilities before attackers do — with concrete findings and prioritized recommendations.','svc.p3.target':'For organizations that want to know their technical weaknesses and close them',

    'cat.eyebrow':'— SERVICE CATALOG —','cat.title':'All our services in detail','cat.lede':'Concrete deliverables, clear scope, and who each service fits.','cat.deliv':'DELIVERABLES',
    'cat.s1.title':'Detection engineering','cat.s1.body':'Structured development and management of detection rules in your SIEM. We design, code, test and document rules — and set up the process to maintain them over time.','cat.s1.target':'For SOC teams that want to raise detection maturity',
    'cat.s1.l1':'Sigma/YARA/KQL detection rules','cat.s1.l2':'SIEM tuning and optimization','cat.s1.l3':'detection-as-code pipeline','cat.s1.l4':'threat hunt reports','cat.s1.l5':'SOC maturity assessment',
    'cat.s2.title':'Incident response and forensics','cat.s2.body':'When an incident strikes we deliver fast, structured response. We perform digital forensics and deliver evidence-preserved reports that withstand legal scrutiny.','cat.s2.target':'For organizations needing acute or proactive response capacity',
    'cat.s2.l1':'Forensic analysis (disk/memory/network)','cat.s2.l2':'evidence collection and chain of custody','cat.s2.l3':'malware analysis','cat.s2.l4':'incident report for management/insurance/police','cat.s2.l5':'retainer agreement with SLA',
    'cat.s3.title':'Penetration testing','cat.s3.body':'Real testing of your attack surface. We simulate attackers against infrastructure, web applications, APIs and cloud to surface concrete vulnerabilities — with clear prioritization.','cat.s3.target':'For organizations that want to verify their security level',
    'cat.s3.l1':'Vulnerability scanning (internal/external)','cat.s3.l2':'penetration test of web apps and APIs','cat.s3.l3':'Active Directory security assessment','cat.s3.l4':'cloud security review (Azure/AWS/GCP)',
    'cat.s4.title':'Purple teaming','cat.s4.body':'Collaboration between offense and defense in controlled exercises. We emulate real threat actors based on MITRE ATT&CK, test your detection coverage, and improve defense together with your team.','cat.s4.target':'For mature security teams that want to test and improve defense systematically',
    'cat.s4.l1':'MITRE ATT&CK-based emulation','cat.s4.l2':'detection gap analysis','cat.s4.l3':'attack simulation with real-time blue team feedback','cat.s4.l4':'goal-driven improvement plan',
    'cat.s5.title':'Hardening — on-prem and cloud','cat.s5.body':'Systematic hardening of servers, networks, Active Directory and cloud platforms. We follow CIS benchmarks and best practices to reduce attack surface — whether you run on-prem, hybrid or full cloud.','cat.s5.target':'For organizations that want to reduce attack surface in their infrastructure',
    'cat.s5.l1':'Windows/Linux hardening (CIS benchmarks)','cat.s5.l2':'Active Directory hardening and tiering','cat.s5.l3':'Azure/M365 security configuration','cat.s5.l4':'network segmentation and zero trust','cat.s5.l5':'container and Kubernetes security',
    'cat.s6.title':'Tabletop exercises and training','cat.s6.body':'Realistic exercise scenarios that test your organization\'s ability to handle security incidents. From ransomware scenarios for leadership to technical incident response drills for the SOC team.','cat.s6.target':'For leadership, board and security teams that want to drill realistic incidents',
    'cat.s6.l1':'Ransomware scenario for leadership','cat.s6.l2':'technical IR drill for security teams','cat.s6.l3':'crisis management exercise','cat.s6.l4':'board briefing on cybersecurity','cat.s6.l5':'evaluation report with improvement actions',

    'proc.eyebrow':'— HOW WE WORK —','proc.title':'From discovery to security','proc.lede':'A structured process that delivers results — without disrupting your daily operations.',
    'proc.s1.title':'Discovery','proc.s1.body':'We start by understanding your business, systems and risk exposure through conversations and technical review.',
    'proc.s2.title':'Assessment','proc.s2.body':'Thorough analysis of security posture with testing, vulnerability scanning and review of architecture and routines.',
    'proc.s3.title':'Report and plan','proc.s3.body':'Detailed report with findings, risk ranking and a prioritized action plan with concrete measures.',
    'proc.s4.title':'Implementation','proc.s4.body':'We help implement the actions — from configuration changes to building detection capabilities.'
  }
};

// ===================== Reveal gate =====================
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js-reveal');
}

// ===================== Hero rotator (declared early — applyLang depends on it) =====================
const ROTATOR_WORDS = {
  no: ['din organisasjon.','ditt nettverk.','din infrastruktur.'],
  en: ['your organization.','your network.','your infrastructure.']
};
const heroRotator = document.getElementById('heroRotator');
let rotIdx = 0;
let rotWords = ROTATOR_WORDS.no;

function rebuildRotator(lang) {
  if (!heroRotator) return;
  rotWords = ROTATOR_WORDS[lang] || ROTATOR_WORDS.no;
  rotIdx = 0;
  heroRotator.classList.remove('is-out','is-prep');
  heroRotator.textContent = rotWords[0];
}

function applyLang(lang) {
  const dict = I18N[lang]; if (!dict) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('lang', lang);
  rebuildRotator(lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

const urlLang = new URLSearchParams(location.search).get('lang');
const savedLang = urlLang || localStorage.getItem('lang');
if (savedLang && I18N[savedLang]) applyLang(savedLang);

function tickRotator() {
  if (!heroRotator || rotWords.length < 2) return;
  // phase 1: slide up + fade out
  heroRotator.classList.remove('is-prep');
  heroRotator.classList.add('is-out');
  setTimeout(() => {
    // phase 2: swap text, jump to below (no transition)
    rotIdx = (rotIdx + 1) % rotWords.length;
    heroRotator.textContent = rotWords[rotIdx];
    heroRotator.classList.remove('is-out');
    heroRotator.classList.add('is-prep');
    void heroRotator.offsetWidth; // force reflow
    // phase 3: release prep -> transitions to base (opacity 1, translateY 0)
    heroRotator.classList.remove('is-prep');
  }, 460);
}

try {
  rebuildRotator(document.documentElement.lang || 'no');
  setInterval(tickRotator, 2600);
} catch (err) { console.warn('rotator init failed', err); }

// ===================== Theme toggle =====================
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.dataset.theme = savedTheme;
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';

themeBtn?.addEventListener('click', () => {
  const isDark = root.dataset.theme === 'dark';
  root.dataset.theme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
});

// ===================== FAQ accordion (one open) =====================
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) faqItems.forEach(o => { if (o !== item) o.open = false; });
  });
});

// ===================== Active nav on scroll =====================
const ids = ['top','tjenester','om','blogg','kontakt'];
const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
const links = document.querySelectorAll('.nav-link');
const setActive = id => links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
const navIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
  { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => navIO.observe(s));

// ===================== Reveal on scroll =====================
const revealIO = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 4, 3) * 80}ms`;
  revealIO.observe(el);
});

// Safety: if anything still hidden after 2.5s (e.g. IO never fired), force visible
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
}, 2500);

// ===================== Magnetic-ish button tilt =====================
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - .5) * 8;
    const y = ((e.clientY - r.top)  / r.height - .5) * 6;
    btn.style.transform = `translate(${x}px, ${-2 + y}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});
