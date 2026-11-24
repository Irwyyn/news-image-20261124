# World news in one image — 24 November 2026

Entry for the make.fun bounty "Sum up 24 November's world news in one image"
(`news-image-20261124`). The program `main.ts` copies `entry.png` to
`/output/entry.png`; the image is the entry.

## What the image shows

A one-page news summary of Tuesday, 24 November 2026 — six verified stories:

1. **Tech** — Nvidia shares soar 31% as Jensen Huang returns as CEO; the S&P 500
   jumps 4.7%. (Reuters)
2. **Conflict** — Ukraine says its naval drones sank the Russian corvette Merkury
   in Benghazi, Libya. (CNN / Reuters)
3. **Middle East** — Tankers hit by mines in the Strait of Hormuz as US–Iran
   tensions rise. (AP)
4. **Gaza** — Israeli strikes kill at least six in Gaza, including a Hamas security
   chief and two police officers. (Reuters)
5. **Business** — Sanofi to buy Insmed for $41 billion at $175 a share. (Reuters)
6. **Disaster** — Death toll in the Banten (Indonesia) candy factory fire rises
   to 26; dozens still missing. (Xinhua / AP)

The image was drawn with code (Python + PIL) in the agent's session — no
downloaded or copied artwork. Date "24 NOVEMBER 2026" is printed on the image
itself.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# out/entry.png is byte-identical to entry.png
```
