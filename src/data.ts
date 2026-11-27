// All site content lives here, so wording can be changed without touching the layout.
// Rule (agreed): design / DTP projects use GENERIC client names; translation & transcription may name companies.

const img = (p: string) => `/images/${p}`;

export const CONTACT = {
  email: 'gobinathfreelancer@gmail.com',
  whatsappNumber: '+91 99420 63008',
  whatsapp: 'https://wa.me/919942063008',
  linkedin: 'https://www.linkedin.com/in/gobinath-d-0b9937202/',
  upwork: 'https://www.upwork.com/freelancers/~0125092b98b4ee49c9',
  fiverr: 'https://www.fiverr.com/sellers/gobinath786/',
};

export const HERO_TAGLINE =
  'I localize documents in 13+ languages, translate and transcribe Tamil, create multilingual layouts, and write screenplays';

export const ABOUT_TEXT =
  "I'm Gobinath, a multilingual DTP specialist, Tamil translator, transcription reviewer, and screenwriter. I work on document localization across 13+ languages, recreating layouts, formatting publications, and preparing professional print-ready documents. I also handle Tamil translation, audio transcription, subtitle localization, and screenplay writing. From complex document recreation to creative storytelling, I focus on accuracy, quality, and delivering work that meets each client's expectations.";


// Numbers under the About text (all from real projects; they count up when they scroll into view).
export const ABOUT_STATS = [
  { value: 13, suffix: '+', label: 'Languages' },
  { value: 870, suffix: '+', label: 'Custom flyers delivered' },
  { value: 50000, suffix: '+', label: 'Words translated' },
  { value: 400, suffix: '', label: 'Page catalog designed' },
];

export const SERVICES = [
  {
    name: 'Multilingual DTP & Localization',
    desc: 'Placing translated text into InDesign, Illustrator and Photoshop files in 13+ languages, including Tamil, Malayalam, Chinese and Japanese, while keeping the original design intact.',
  },
  {
    name: 'Document Recreation & Design',
    desc: 'Rebuilding non-editable PDFs and scans as clean, editable files, and designing catalogs, flyers, presentations and newsletters that are ready for print or web.',
  },
  {
    name: 'Translation',
    desc: 'Natural, accurate English ↔ Tamil translation and AI post-editing for medical, banking, insurance, corporate and subtitle content.',
  },
  {
    name: 'Transcription',
    desc: 'Verbatim and non-verbatim Tamil transcription with speaker labels and annotation tags, including review of other transcribers’ work.',
  },
  {
    name: 'Script Formatting',
    desc: 'Turning Word, PDF or plain-text manuscripts into industry-standard screenplays in Final Draft.',
  },
  {
    name: 'Scriptwriting',
    desc: 'Short films, feature screenplays and Tamil cultural adaptations, written in Tamil or Thanglish, including ghostwriting.',
  },
];

export type ProjectImage = { src: string; label: string };

export type Project = {
  id: string;
  title: string;
  category: 'Multilingual DTP & Localization' | 'Document Recreation & Design' | 'Script Formatting';
  tag: string; // short label shown on cards, e.g. languages
  summary: string;
  challenge: string;
  solution: string[];
  tools: string[];
  images: ProjectImage[]; // all images, shown in the project viewer
  card?: [ProjectImage, ProjectImage, ProjectImage]; // featured card: left-top, left-bottom, right-tall
  dimensions?: boolean; // item 11: show size markers
  featured?: number; // order on the main page (1–6)
};

export const PROJECTS: Project[] = [
  {
    id: 'menu-card',
    featured: 1,
    title: 'Menu Card Localization',
    category: 'Multilingual DTP & Localization',
    tag: 'English → Tamil · Malayalam · Kannada · Telugu',
    summary:
      'Restaurant menu boards and showcards for a quick-service restaurant chain, localized into four South Indian languages.',
    challenge:
      'Curved and outlined text plus four scripts with very different text lengths, all inside a tight, brand-controlled layout.',
    solution: [
      'Replaced every English line with the client’s translations in Adobe Illustrator.',
      'Rebuilt curved text and re-balanced spacing so each language looks native to the design.',
      'Kept typography, pricing blocks and visual hierarchy identical across all four versions.',
    ],
    tools: ['Adobe Illustrator', 'Microsoft Word'],
    images: [
      { src: img('01-menu-card/tamil-side-panels.jpg'), label: 'Tamil' },
      { src: img('01-menu-card/kannada-side-panels.jpg'), label: 'Kannada' },
      { src: img('01-menu-card/malayalam-side-panels.jpg'), label: 'Malayalam' },
      { src: img('01-menu-card/telugu-showcard.jpg'), label: 'Telugu' },
    ],
    card: [
      { src: img('01-menu-card/kannada-side-panels.jpg'), label: 'Kannada' },
      { src: img('01-menu-card/telugu-showcard.jpg'), label: 'Telugu' },
      { src: img('01-menu-card/tamil-side-panels.jpg'), label: 'Tamil' },
    ],
  },
  {
    id: 'travel-guide',
    featured: 2,
    title: 'Travel Guide eBook Localization',
    category: 'Multilingual DTP & Localization',
    tag: 'English → 6 European languages',
    summary:
      'City travel guides for a travel author, localized into Spanish, French, German, Portuguese, Catalan and Italian. Some guides run past 300 pages.',
    challenge:
      'Long publications where every language expands or shrinks differently, and the layout still has to hold on every page.',
    solution: [
      'Worked from full InDesign packages (INDD, links, fonts) and replaced text in all six languages.',
      'Re-fitted text frames page by page so nothing overflowed or broke the design.',
      'Applied proofreader corrections from Word files into the final, publication-ready eBooks.',
    ],
    tools: ['Adobe InDesign', 'ChatGPT', 'Microsoft Word'],
    images: [
      { src: img('02-travel-guide/english-227.jpg'), label: 'English · source' },
      { src: img('02-travel-guide/catalan-227.jpg'), label: 'Catalan' },
      { src: img('02-travel-guide/french-227.jpg'), label: 'French' },
      { src: img('02-travel-guide/portuguese-227.jpg'), label: 'Portuguese' },
      { src: img('02-travel-guide/english-276.jpg'), label: 'English · source' },
      { src: img('02-travel-guide/catalan-276.jpg'), label: 'Catalan' },
    ],
    card: [
      { src: img('02-travel-guide/english-227.jpg'), label: 'English · source' },
      { src: img('02-travel-guide/portuguese-227.jpg'), label: 'Portuguese' },
      { src: img('02-travel-guide/french-227.jpg'), label: 'French' },
    ],
  },
  {
    id: 'cjk',
    featured: 3,
    title: 'Product Brochure: English → Chinese & Japanese',
    category: 'Multilingual DTP & Localization',
    tag: 'English → Chinese · Japanese',
    summary: 'A steel-industry product catalog typeset in Chinese and Japanese from the client’s translations.',
    challenge:
      'CJK typography needs special fonts, and the original used hand-made bullet styles that InDesign could not convert automatically.',
    solution: [
      'Applied the client-specified CJK-compatible font across both languages.',
      'Recreated the custom bullets, indents and paragraph formatting by hand for consistency.',
      'Delivered complete INDD/IDML packages ready for publication.',
    ],
    tools: ['Adobe InDesign', 'Adobe Acrobat', 'CJK fonts'],
    images: [
      { src: img('04-cjk/english-groups.jpg'), label: 'English · source' },
      { src: img('04-cjk/chinese-groups.jpg'), label: 'Chinese' },
      { src: img('04-cjk/japanese-groups.jpg'), label: 'Japanese' },
      { src: img('04-cjk/english-references.jpg'), label: 'English · source' },
      { src: img('04-cjk/chinese-references.jpg'), label: 'Chinese' },
      { src: img('04-cjk/japanese-references.jpg'), label: 'Japanese' },
    ],
    card: [
      { src: img('04-cjk/english-groups.jpg'), label: 'English · source' },
      { src: img('04-cjk/chinese-groups.jpg'), label: 'Chinese' },
      { src: img('04-cjk/japanese-groups.jpg'), label: 'Japanese' },
    ],
  },
  {
    id: 'social-posters',
    featured: 4,
    title: 'Social Media Poster Localization',
    category: 'Multilingual DTP & Localization',
    tag: 'German → French · Italian',
    summary: 'Promotional posters for a safety-equipment brand, localized from flattened images only.',
    challenge: 'No editable source files and unknown fonts. The German text was baked into the pictures.',
    solution: [
      'Removed the German text with Photoshop Generative Fill while keeping the backgrounds intact.',
      'Identified matching fonts with AI font recognition.',
      'Re-typeset French and Italian versions that look like the originals.',
    ],
    tools: ['Adobe Photoshop', 'Generative Fill', 'AI font recognition'],
    images: [
      { src: img('09-social-posters/german-1.jpg'), label: 'German · source' },
      { src: img('09-social-posters/french-1.jpg'), label: 'French' },
      { src: img('09-social-posters/italian-1.jpg'), label: 'Italian' },
      { src: img('09-social-posters/german-2.jpg'), label: 'German · source' },
      { src: img('09-social-posters/french-2.jpg'), label: 'French' },
      { src: img('09-social-posters/italian-2.jpg'), label: 'Italian' },
    ],
    card: [
      { src: img('09-social-posters/german-1.jpg'), label: 'German · source' },
      { src: img('09-social-posters/french-2.jpg'), label: 'French' },
      { src: img('09-social-posters/italian-1.jpg'), label: 'Italian' },
    ],
  },
  {
    id: 'qr-flyers',
    featured: 5,
    title: '870+ Location-Specific QR Flyers',
    category: 'Document Recreation & Design',
    tag: '870+ versions · 10 days',
    summary:
      'One InDesign template turned into more than 870 personalised flyers for a corporate client, each with its own location, URL and QR code.',
    challenge: 'A single mismatch between a location, its link and its QR code would send staff to the wrong survey.',
    solution: [
      'Pulled each location’s URL and QR code from the client’s Word file into the template.',
      'Exported both interactive (clickable) and print-ready PDFs for every version.',
      'Checked every flyer before delivery: 100% accurate, delivered in about 10 days.',
    ],
    tools: ['Adobe InDesign', 'Adobe Acrobat', 'Microsoft Word'],
    images: [
      { src: img('06-qr-flyers/before.jpg'), label: 'Template' },
      { src: img('06-qr-flyers/after-1.jpg'), label: 'Location version' },
      { src: img('06-qr-flyers/after-2.jpg'), label: 'Location version' },
      { src: img('06-qr-flyers/after-3.jpg'), label: 'Location version' },
    ],
    card: [
      { src: img('06-qr-flyers/before.jpg'), label: 'Template' },
      { src: img('06-qr-flyers/after-2.jpg'), label: 'Location version' },
      { src: img('06-qr-flyers/after-1.jpg'), label: 'Location version' },
    ],
  },
  {
    id: 'redesign-16x9',
    featured: 6,
    dimensions: true,
    title: '36-Page Redesign + 16:9 Conversion',
    category: 'Document Recreation & Design',
    tag: '11.69 × 8.27 in → 16:9',
    summary:
      'A 36-page corporate policy document rebuilt from a PDF in InDesign, then re-laid out for the web in 16:9 widescreen.',
    challenge:
      'Changing the page shape from about 11:8 to 16:9 moves everything. Simply resizing the pages would break the layout.',
    solution: [
      'Matched the original fonts (Adobe Fonts + client files), colors (Adobe Color) and trim size (Acrobat).',
      'Rebuilt all 36 pages with paragraph and character styles.',
      'Re-composed every page for 16:9 and re-aligned recurring elements across the document.',
    ],
    tools: ['Adobe InDesign', 'Adobe Acrobat', 'Adobe Color', 'Adobe Fonts'],
    images: [
      { src: img('11-redesign-16x9/before-design.jpg'), label: 'Original PDF' },
      { src: img('11-redesign-16x9/after-design.jpg'), label: 'Rebuilt in InDesign' },
      { src: img('11-redesign-16x9/before-11.69x8.27.jpg'), label: '11.69 × 8.27 in' },
      { src: img('11-redesign-16x9/after-16x9.jpg'), label: '16:9 widescreen' },
    ],
  },
  {
    id: 'german-tamil-flyer',
    title: 'Healthcare Flyer: German → Tamil',
    category: 'Multilingual DTP & Localization',
    tag: 'German → Tamil',
    summary: 'A two-page home-care flyer localized into Tamil and prepared for commercial printing.',
    challenge: 'First print job with specific bleed and trim requirements.',
    solution: [
      'Placed the Tamil translation into the InDesign source while keeping layout and branding.',
      'Set up bleed and trim exactly to the printer’s specification.',
      'The client came back with another localization job a few months later.',
    ],
    tools: ['Adobe InDesign', 'Adobe Acrobat'],
    images: [
      { src: img('03-german-tamil-flyer/german-2.jpg'), label: 'German · source' },
      { src: img('03-german-tamil-flyer/tamil-2.jpg'), label: 'Tamil' },
      { src: img('03-german-tamil-flyer/german-3.jpg'), label: 'German · source' },
      { src: img('03-german-tamil-flyer/tamil-3.jpg'), label: 'Tamil' },
    ],
  },
  {
    id: 'tamil-malayalam',
    title: 'Tamil & Malayalam Document Localization',
    category: 'Multilingual DTP & Localization',
    tag: 'English → Tamil · Malayalam',
    summary: 'Hotel house-rules document for a content agency: fixed the Tamil version and built the Malayalam one.',
    challenge:
      'The Tamil file had font-rendering errors the original team could not fix, and the Malayalam translation came as an uncopyable PDF.',
    solution: [
      'Spotted and corrected the Tamil typography and text errors as a native speaker.',
      'Extracted the Malayalam text with AI OCR.',
      'Built the Malayalam version in Illustrator from the English design.',
    ],
    tools: ['Adobe Illustrator', 'AI OCR'],
    images: [
      { src: img('05-tamil-malayalam/english-source.jpg'), label: 'English · source' },
      { src: img('05-tamil-malayalam/malayalam.jpg'), label: 'Malayalam' },
      { src: img('05-tamil-malayalam/tamil-before.jpg'), label: 'Tamil · before (font errors)' },
      { src: img('05-tamil-malayalam/tamil-after.jpg'), label: 'Tamil · after' },
    ],
  },
  {
    id: 'pdf-spanish-english',
    title: '20-Page PDF: Spanish → English',
    category: 'Multilingual DTP & Localization',
    tag: 'Spanish → English · 1 day',
    summary: 'A 20-page company catalog localized from a non-editable PDF, delivered in about one day.',
    challenge: 'No source files, and two pages were pure images with the text baked in.',
    solution: [
      'Ran Acrobat OCR and rebuilt 18 vector pages in Illustrator.',
      'Matched fonts with Adobe Fonts and colors with Adobe Color.',
      'Cleaned the 2 image pages in Photoshop with Generative Fill and re-typeset them.',
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Acrobat OCR', 'Adobe Fonts'],
    images: [
      { src: img('07-pdf-spanish-english/spanish.jpg'), label: 'Spanish · source' },
      { src: img('07-pdf-spanish-english/english.jpg'), label: 'English' },
    ],
  },
  {
    id: 'doc-spanish-english',
    title: '6-Page Brochure: Spanish → English',
    category: 'Multilingual DTP & Localization',
    tag: 'Spanish → English',
    summary: 'An agricultural machinery brochure localized while keeping every image in place.',
    challenge: 'Text had to be rebuilt in exactly the same position and style with no source file.',
    solution: [
      'Used each page as a faded background guide to re-place the text precisely.',
      'Matched typefaces (Adobe Fonts / Google Fonts) and exact colors (Adobe Color).',
      'Handled the image-only first page in Photoshop.',
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe Color'],
    images: [
      { src: img('08-doc-spanish-english/spanish.jpg'), label: 'Spanish · source' },
      { src: img('08-doc-spanish-english/english.jpg'), label: 'English' },
    ],
  },
  {
    id: 'catalog-recreation',
    title: 'Product Catalog Recreation',
    category: 'Document Recreation & Design',
    tag: 'PDF → editable InDesign',
    summary: 'A tooling catalog rebuilt as editable InDesign from a PDF, then localized from French into English and German.',
    challenge: 'Blur, glow and transparency effects were lost when the PDF was converted.',
    solution: [
      'Recreated the layout in InDesign and restored the missing visual effects by hand.',
      'Localized the content while keeping product data accurate.',
      'Delivered editable files, and the client left positive feedback.',
    ],
    tools: ['Adobe InDesign', 'Adobe Acrobat', 'ChatGPT'],
    images: [
      { src: img('10-catalog-recreation/before.jpg'), label: 'Original' },
      { src: img('10-catalog-recreation/after.jpg'), label: 'Recreated' },
    ],
  },
  {
    id: 'word-to-indesign',
    title: 'Word → InDesign Document Conversion',
    category: 'Document Recreation & Design',
    tag: 'Word → InDesign',
    summary: 'A long Word report moved into the client’s InDesign template with its headers and footers.',
    challenge: 'Custom content boxes and formatting do not transfer from Word to InDesign.',
    solution: [
      'Rebuilt text styles and custom content boxes to match the Word original.',
      'Set up automatic page numbering and consistent styles throughout.',
      'Led to repeat business from the same client.',
    ],
    tools: ['Adobe InDesign', 'Microsoft Word'],
    images: [
      { src: img('12-word-to-indesign/sample-1-word.jpg'), label: 'Word · before' },
      { src: img('12-word-to-indesign/sample-1-indesign.jpg'), label: 'InDesign · after' },
      { src: img('12-word-to-indesign/sample-2-word.jpg'), label: 'Word · before' },
      { src: img('12-word-to-indesign/sample-2-indesign.jpg'), label: 'InDesign · after' },
    ],
  },
  {
    id: 'persian-english',
    title: '200+ Page Scanned Book: Persian → English',
    category: 'Document Recreation & Design',
    tag: 'Persian → English · 200+ pages',
    summary: 'A black-and-white scanned book rebuilt as an editable English InDesign publication.',
    challenge: 'Scanned pages only, no colors to go by, and ornaments that could not be extracted.',
    solution: [
      'Extracted and translated the text with client-approved AI translation.',
      'Rebuilt the full page structure in InDesign.',
      'Recreated the decorative ornaments with Adobe Firefly.',
    ],
    tools: ['Adobe InDesign', 'Adobe Firefly', 'ChatGPT'],
    images: [
      { src: img('13-persian-english/persian.jpg'), label: 'Persian scan · source' },
      { src: img('13-persian-english/english.jpg'), label: 'English · rebuilt' },
    ],
  },
  {
    id: 'ppt-template',
    title: 'PowerPoint Template Adaptation',
    category: 'Document Recreation & Design',
    tag: 'Same-day delivery',
    summary: 'A medical presentation moved into a company-branded template, delivered the same day.',
    challenge: 'Crowded slides, misaligned images and inconsistent fonts, all on an urgent deadline.',
    solution: [
      'Applied brand fonts and colors throughout.',
      'Split overcrowded slides (with client approval) and fixed alignment and spacing.',
      'Delivered the same evening, and the client gave positive feedback.',
    ],
    tools: ['Microsoft PowerPoint'],
    images: [
      { src: img('14-ppt-template/before.jpg'), label: 'Before' },
      { src: img('14-ppt-template/after.jpg'), label: 'After' },
    ],
  },
  {
    id: 'flyer-brand',
    title: 'Two-Page Flyer & Brand Adaptation',
    category: 'Document Recreation & Design',
    tag: 'AI reference → brand',
    summary: 'A campaign flyer built in InDesign from an AI-generated mock-up, adapted to the client’s real brand.',
    challenge: 'Keep the reference layout while switching to the client’s exact brand colors and fonts.',
    solution: [
      'Rebuilt both pages in InDesign.',
      'Applied the brand color codes and fonts consistently.',
      'Kept the reference structure without an unnecessary redesign.',
    ],
    tools: ['Adobe InDesign'],
    images: [
      { src: img('15-flyer-brand/before-1.jpg'), label: 'Reference' },
      { src: img('15-flyer-brand/after-1.jpg'), label: 'Final' },
      { src: img('15-flyer-brand/before-2.jpg'), label: 'Reference' },
      { src: img('15-flyer-brand/after-2.jpg'), label: 'Final' },
    ],
  },
  {
    id: 'product-catalog',
    title: '400-Page Product Catalog Design',
    category: 'Document Recreation & Design',
    tag: '400 pages · cm & inches',
    summary: 'A 400-page tool-holder catalog for an industrial manufacturer, designed from Excel data.',
    challenge: 'Huge spreadsheets turned into readable tables, with every measurement in both cm and inches.',
    solution: [
      'Designed the cover, category dividers and table of contents.',
      'Built consistent product tables from the Excel data.',
      'Kept branding and typography uniform across all 400 pages.',
    ],
    tools: ['Adobe InDesign', 'Microsoft Excel', 'Adobe Illustrator'],
    images: [
      { src: img('16-product-catalog/cover.jpg'), label: 'Cover' },
      { src: img('16-product-catalog/contents.jpg'), label: 'Contents' },
      { src: img('16-product-catalog/tables-1.jpg'), label: 'Product tables' },
      { src: img('16-product-catalog/tables-2.jpg'), label: 'Product tables' },
    ],
  },
  {
    id: 'college-newspaper',
    title: '16-Page Tamil College Newspaper',
    category: 'Document Recreation & Design',
    tag: 'Where it all began',
    summary: 'A full Tamil newspaper designed for my class, my first complete InDesign publication.',
    challenge: 'Learning newspaper design from scratch while coordinating content from the whole class.',
    solution: [
      'Proposed one shared newspaper instead of separate student assignments.',
      'Designed every page with Tamil Unicode fonts on a nine-column grid.',
      'Praised by the professor and classmates. It started my DTP career.',
    ],
    tools: ['Adobe InDesign', 'Tamil Unicode fonts'],
    images: [
      { src: img('17-college-newspaper/page-01.jpg'), label: 'Front page' },
      { src: img('17-college-newspaper/page-02.jpg'), label: 'Page 2' },
      { src: img('17-college-newspaper/page-04.jpg'), label: 'Page 4' },
      { src: img('17-college-newspaper/page-11.jpg'), label: 'Page 11' },
    ],
  },
  {
    id: 'college-newsletter',
    title: 'College Department Newsletter',
    category: 'Document Recreation & Design',
    tag: 'Editorial design',
    summary: 'A 6-page department newsletter, given to me after the principal saw the newspaper project.',
    challenge: 'Stay consistent with the existing template while improving readability.',
    solution: [
      'Organized text, images and headings into a clean editorial layout.',
      'Matched the established style of earlier issues.',
      'Well received by the faculty.',
    ],
    tools: ['Adobe InDesign', 'Adobe Photoshop'],
    images: [
      { src: img('18-college-newsletter/page-1.jpg'), label: 'Cover' },
      { src: img('18-college-newsletter/page-2.jpg'), label: 'Page 2' },
      { src: img('18-college-newsletter/page-3.jpg'), label: 'Page 3' },
    ],
  },
  {
    id: 'script-word',
    title: 'Word Manuscript → 73-Page Screenplay',
    category: 'Script Formatting',
    tag: 'Word → Final Draft · 49 → 73 pages',
    summary: 'An unformatted 49-page Word manuscript turned into a professional, industry-standard screenplay.',
    challenge:
      'Scene headings, action, character names and dialogue were all mixed together as plain paragraphs.',
    solution: [
      'Identified every screenplay element and rebuilt the script in Final Draft.',
      'Applied standard screenplay formatting consistently from the first page to the last.',
      'Exported a clean 73-page PDF. The page count grows naturally with proper formatting.',
    ],
    tools: ['Final Draft', 'Microsoft Word'],
    images: [
      { src: img('19-script-formatting/word-before.jpg'), label: 'Word manuscript · before' },
      { src: img('19-script-formatting/word-after.jpg'), label: 'Final Draft · after' },
    ],
  },
  {
    id: 'script-txt',
    title: 'Plain-Text Script → 78-Page Screenplay',
    category: 'Script Formatting',
    tag: '97,000+ characters → Final Draft',
    summary: 'A raw plain-text manuscript of over 97,000 characters formatted into a 78-page screenplay.',
    challenge: 'A very long text file with no formatting at all. Every element had to be recognised by reading.',
    solution: [
      'Structured scene headings, character cues and dialogue blocks in Final Draft.',
      'Kept the original content intact while making it readable and production-ready.',
      'Delivered a consistent 78-page screenplay.',
    ],
    tools: ['Final Draft', 'Plain text editor'],
    images: [
      { src: img('19-script-formatting/txt-before.jpg'), label: 'Plain text · before' },
      { src: img('19-script-formatting/txt-after.jpg'), label: 'Final Draft · after' },
    ],
  },
  {
    id: 'script-pdf',
    title: 'Screenplay Reformatting & Scene Revisions',
    category: 'Script Formatting',
    tag: 'PDF → Final Draft · repeat client',
    summary: 'An existing PDF screenplay rebuilt to industry standards, followed by requested scene revisions.',
    challenge: 'Wrong fonts, sizes and spacing throughout, then extra rewrites beyond the original formatting brief.',
    solution: [
      'Recreated the script in Final Draft with correct screenplay fonts, sizes and spacing.',
      'Located and revised the specific scenes the client asked for.',
      'The client came back with 2–3 more assignments.',
    ],
    tools: ['Final Draft'],
    images: [
      { src: img('19-script-formatting/pdf-before.jpg'), label: 'PDF · before' },
      { src: img('19-script-formatting/pdf-after.jpg'), label: 'Final Draft · after' },
    ],
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured).sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));

// Scrolling image rows: only from the projects the user picked (redesign, PPT, Spanish→English brochure,
// script formatting, catalog recreation, social posters).
export const MARQUEE_ROW_1 = [
  img('11-redesign-16x9/page-16x9.jpg'),
  img('09-social-posters/german-1.jpg'),
  img('14-ppt-template/after.jpg'),
  img('10-catalog-recreation/before.jpg'),
  img('08-doc-spanish-english/english.jpg'),
  img('19-script-formatting/final-draft-tile.jpg'),
  img('09-social-posters/french-2.jpg'),
  img('11-redesign-16x9/after-design.jpg'),
];

export const MARQUEE_ROW_2 = [
  img('09-social-posters/italian-1.jpg'),
  img('11-redesign-16x9/page-a4.jpg'),
  img('10-catalog-recreation/after.jpg'),
  img('09-social-posters/german-2.jpg'),
  img('14-ppt-template/before.jpg'),
  img('08-doc-spanish-english/spanish.jpg'),
  img('09-social-posters/french-1.jpg'),
  img('09-social-posters/italian-2.jpg'),
];

export type ExperienceItem = { org: string; role: string; period?: string; points: string[] };

export const EXPERIENCE: { area: string; items: ExperienceItem[] }[] = [
  {
    area: 'Translation',
    items: [
      {
        org: 'KBS Tech',
        role: 'Freelance Tamil Translator',
        period: 'Jan 2026 – Present',
        points: [
          'Translation, AI post-editing and linguistic QA for global clients in software, pharmaceuticals, clinical research and e-commerce.',
          'Medical research, patient programs, software UI, websites, training videos and corporate documents.',
          'DTP quality checks on final PDFs. Works in Xliff Editor.',
        ],
      },
      {
        org: 'Devnagri',
        role: 'Freelance Tamil Translator & Localization Reviewer',
        period: 'Oct 2026 – Present',
        points: [
          'About 50,000 words of banking, finance and insurance content: regulations, loan procedures, guides.',
          'Website localization review covering text accuracy and Tamil font rendering, in Devnagri’s own TMS.',
        ],
      },
      {
        org: 'Deluxe',
        role: 'Freelance Tamil Subtitle Translator',
        points: [
          'Qualified through Deluxe’s translation test.',
          'Subtitle translation and post-editing for two confidential TV shows in the Sfera tool, synced to the English video.',
        ],
      },
      {
        org: 'Pepper Content',
        role: 'Freelance Tamil Translator',
        points: ['Three documents (about 1,800 words) of hotel rules and guest guidelines.'],
      },
      {
        org: 'Fiverr',
        role: 'Tamil Translation & Localization',
        points: [
          'About 10 projects, including a Christian wedding invitation with verified Tamil Bible verses.',
          'A 15-page short-film screenplay translated directly in Final Draft.',
          'Tamil → English video localization.',
        ],
      },
      {
        org: 'Film back-translation project',
        role: 'Tamil ↔ English',
        period: '2023',
        points: ['About 15,000 words of Tamil movie dialogue across 3,000 Excel rows. My first professional translation job.'],
      },
    ],
  },
  {
    area: 'Transcription',
    items: [
      {
        org: 'ElevenLabs',
        role: 'Tamil Transcription Specialist → Reviewer',
        period: 'Since May 2026',
        points: [
          'Verbatim and non-verbatim Tamil transcription with emotion, non-verbal and inaudible tags.',
          'Promoted to Transcription Reviewer within 15 days. Validates other transcribers’ work.',
        ],
      },
      {
        org: 'Fiverr',
        role: 'Tamil Transcription',
        points: [
          '10-minute two-speaker conversation across three separate audio tracks, with overlapping speech.',
          'Done in the client’s custom platform with annotation tags, including client revisions.',
        ],
      },
    ],
  },
  {
    area: 'Scriptwriting',
    items: [
      {
        org: 'Short films',
        role: 'Celtx',
        points: ['Four short-film scripts of about 10–15 pages each, plus an English → Tamil screenplay with cultural adaptation.'],
      },
      {
        org: 'Feature & long-form',
        role: 'Final Draft · Word',
        points: [
          'An 80-page feature film written from the client’s story and audio references (with credit).',
          'A 40-page crime thriller, and a 60-page pilot developed into a feature film.',
        ],
      },
      {
        org: 'Ghostwriting',
        role: 'Tamil · Thanglish',
        points: ['Scripts in Thanglish or Tamil Unicode, whichever the client prefers.'],
      },
    ],
  },
];
