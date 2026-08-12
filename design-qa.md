# Product Design QA — Jed Pharma Website V2

## Evidence

- Source visual truth: `design/reference-home-v2.png`
- Source pixels: 806 × 2048
- Browser implementation: `output/qa/home-desktop-scroll-v2.png`
- Implementation pixels/CSS viewport: 1440 px wide, deviceScaleFactor 1, full-page height after a scripted real-scroll sweep
- Combined comparison: `output/qa/home-desktop-comparison-v2.png`
- Additional states:
  - `output/qa/home-mobile-zh-scroll-v2.png` at 390 × 844 CSS px
  - `output/qa/projects-tablet-scroll-v2.png` at 768 × 1024 CSS px
- Theme/state: light; English default homepage for visual comparison; Chinese homepage and English projects page for responsive evidence.
- Density normalization: both desktop source and implementation were proportionally resized to equal 1000 px comparison columns without crop; browser chrome was excluded.

## Full-view comparison

The implementation preserves the approved visual composition: warm technical paper grid, handwritten Jed identity, terracotta/cobalt palette, spacious split hero, portrait dossier window, ruled metrics ledger, four editorial capability columns, left-index/right-dossier project process, folded market map, horizontal anonymous cases, cobalt AI method band, and quiet About/Contact close.

The real page is intentionally taller than the concept board. The approved board compresses several modules into a presentation sheet; the implementation gives the sticky process, map, case rows, and responsive reading states enough vertical room. This does not change the hierarchy or section sequence.

## Focused-region comparison

- Hero: real portrait crop, browser frame, soft terracotta glow, cobalt annotations, italic `move forward.` and hand-drawn underline match the target. Round 1 found the target's stronger blue handwritten layer was missing; a restrained decorative blue `jed` monogram was added and confirmed in `output/qa/home-desktop-comparison-v2.png`.
- Process: typography, phase rail, paper panel, terracotta active state and line illustration match the intended dossier language. The final full-page capture shows phase 06 because QA scrolled through the module; interaction testing separately confirmed phase selection and a single visible enhanced panel.
- Markets/cases: generated assets match the target art direction and are sharper than the compressed concept imagery; crops and row proportions are consistent.
- Mobile: the same visual system becomes a natural single column at 390 px. The phase selector remains usable without trapping scroll, and no horizontal overflow was detected.

## Required fidelity surfaces

- Fonts and typography: passed. Self-hosted Newsreader provides the intended editorial display weight/contrast; IBM Plex Sans is used for body/UI; compact metadata uses the mono stack. Heading wrap and optical hierarchy remain coherent at 1440, 768 and 390 px.
- Spacing and layout rhythm: passed. Major section proportions, ruled dividers, column spacing, radii, shadows and paper-card elevation are consistent with the target. The added real-page vertical space is an intentional usability adaptation.
- Colors and visual tokens: passed. `#F2EDE3`, `#2B211C`, `#C95D3A` and `#1F55B5` map directly to the approved direction, with accessible foreground/background balance.
- Image quality and asset fidelity: passed. The real portrait, wordmark, contact card, folded map, three documentary case images and process illustration are actual raster assets with correct crop, size and alt text. No placeholder or CSS-drawn visual asset remains.
- Copy and content: passed. Required identity, exact English hero eyebrow/CTAs, three metrics plus end-to-end support, four capabilities, six phases, two market regions, three anonymized cases, AI framing and direct contacts are present in equivalent English/Chinese content.

## Interaction and browser checks

- `qa_capture.py`: 3 screenshots, 0 browser console/page errors, 0 horizontal-overflow failures.
- `qa_interactions.py`: process selection, single visible enhanced panel, WeChat open/Escape close/focus return, mobile menu open/Escape close, and reduced-motion hover behavior all passed.
- Without JavaScript, all six process panels remain in the document and phase controls are usable fragment links; enhancement hides only inactive panels after initialization.
- `prefers-reduced-motion: reduce` removes non-essential transitions, transforms and animations while keeping content and controls available.

## Comparison history

### Round 1

- P2: hero lacked the stronger blue handwritten identity layer visible in the target.
- Fix: added an `aria-hidden` cobalt `jed` monogram inside the portrait window, placed away from semantic text and constrained responsively.
- Post-fix evidence: `output/qa/home-desktop-comparison-v2.png`.

### Round 2

- No actionable P0/P1/P2 visual differences remain.
- P3 follow-up: final image payloads can later receive AVIF/WebP derivatives for performance while retaining PNG source masters.

## Final result

final result: passed
