# Pixerify Labs

A quiet product studio site. Paper and rose, one typeface, short sentences. A new screen should still look like this site with the logo covered.

The person who lands here should open the products. “How we work” is the second action.

## Voice

English. Short sentences about a thing a person does, not a feature list. Status is a word: Ready, Shipped, Open. The studio is in Latvia; say Latvia when the place matters.

## Do not add

- A second visual language, a CSS framework, or a display font
- A gradient hero, a gold-on-black luxury look, or decoration that is not the product
- A full-width pill for a status. A pill that fills the row is a control, like Open on the phone. Ready is a word in the accent color
- An icon with no name. The theme control is a moon or a sun, and its accessible name says which theme it switches to

## Color

Tokens live on `:root` in `src/css/styles.css`. Dark values apply when `data-theme="dark"`, or when the system is dark and the page is not forced to light.

| Token | Light | Dark |
| --- | --- | --- |
| `--paper` | `#fbf4f6` | `#1b1418` |
| `--ink` | `#2c2428` | `#f6ecef` |
| `--muted` | `#6f5c64` | `#d0b6be` |
| `--line` | `#ead5dc` | `#46353c` |
| `--rose` | `#f0c9d6` | `#3d2832` |
| `--accent` | `#8e445c` | `#f0c9d6` |
| `--screen` | `#fffafb` | `#34262d` |
| `--bezel` | `#2c2428` | `#120d10` |

`--rose-deep` (`#8e445c`) and `--white` (`#fffafb`) stay the light values in both themes, so the primary button stays berry with white text.

The logo mark is fixed brand color: rose tile `#f0c9d6`, ink eyes `#2c2428`, berry mouth `#8e445c`. It does not follow the theme.

Product drawings use only those three colors plus `#fffafb`.

## Type

Onest, then Segoe UI, then sans-serif. Weights in use: 400, 500, 600.

Body is `1.0625rem` / `1.5`. The page title is `clamp(2.6rem, 5vw, 4.25rem)`, weight 600, tracking `-0.035em`, line-height `1.02`, and no wider than `12ch`. Section titles are `2rem`. Card titles are `1.35rem`. Eyebrows (“Today”) are `0.78rem`, uppercase, tracking `0.08em`, muted.

“enjoyable” is the only underlined word. The line is `0.07em` of `--accent` under the word, drawn by the `feel-mark` animation.

## Space

Page width is `72rem`. Side inset is `1.25rem`. Reading width is `38rem`.

Sections breathe: `5rem` vertical padding, `1.25rem` between cards. Corners that hold a screen or a card are `1.45rem`. Pills and the theme control are fully round. The phone bezel is `2rem`.

At `1080px` the product grid becomes two columns. At `800px` the hero, the rose band, the note frames, and the catalog become one column.

## Pieces

**Primary button.** Berry fill, white text, height `2.75rem`. One per view. On the homepage it goes to the products.

**Quiet button and store link.** Transparent, hairline `--line`, same height. Hover turns the label `--accent`.

**Theme.** A `2.75rem` circle, hairline, moon in light, sun in dark. It remembers the choice.

**Phone.** Bezel, screen, an uppercase day label, rows, then one rose control. It is the only device on the page.

**Rose band.** Three facts, divided by a hairline. Body copy in the band uses `--accent`.

**Note frames.** The same screen three times: an empty line, the line written, then a status word. They are not buttons.

**Product card.** Picture, title, one sentence, store links pinned to the bottom. Pictures are simple scenes in the brand colors, `16 / 10`.

## Motion

Rows, the headline, and the note frames rise `0.4rem` with `cubic-bezier(0.22, 1, 0.36, 1)`. Stagger them. If the system asks for reduced motion, show the finished state and do not move.
