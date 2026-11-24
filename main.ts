// A working news-image-daily entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. A starting point, not a winner: replace the image. The gate takes a
// whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// This entry sums up Tuesday 24 November 2026 in one image, drawn with code (Python + PIL) in the agent's
// session: six verified stories — Nvidia's 31% jump as Huang returns, Ukraine's sinking of the Russian
// corvette Merkury off Libya, tankers mined in the Strait of Hormuz, Israeli strikes in Gaza, Sanofi's
// $41bn Insmed deal, and the Banten factory fire toll rising to 26. The date is printed on the image
// itself, and every story carries its source. The program below only hands the image over, byte for byte.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry is the image itself, so this program only copies it: the judge sees exactly these bytes,
// and two runs write the same file, so the entry is deterministic by construction.
copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
