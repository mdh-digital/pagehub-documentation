# Visual mode

Visual mode works like any page editor: click something, change it, done. The difference is that what it writes is still ordinary HTML — so anything you do here remains readable and correctable in [code mode](/en/editor/code-mode).

<Shot src="/img/editor/visual-mode.webp" wide>
Visual mode with an element selected: a box outlines the element, a floating toolbar sits above it (drag handle, select parent, duplicate, delete), the Outline panel on the left highlights the same element, and the properties panel on the right shows content and style tabs.
</Shot>

## Selecting elements

Click any element on the canvas. The selected one gets an outline plus a small toolbar:

| Button | What it does |
| --- | --- |
| **Drag to move** | Drag the element elsewhere |
| **Select parent** | Go up one level — useful when you want the section, not the text inside it |
| **Duplicate** | Clone the element |
| **Delete** | Remove it |

The **Outline** panel on the left shows the page's element tree. Click a row to select it — far more accurate than clicking on the canvas when elements overlap.

## The properties panel

Appears on the right as soon as something is selected. Its contents depend on the element type.

### Content

| Element | What you can change |
| --- | --- |
| Text | The text, alignment, colour, size, font weight |
| Image | **Src** (swap the image from File Manager or upload a new one), **Alt** |
| Link | **Link (href)**, open in new tab |
| Form | The field list: add Input / Textarea, set label, type, required |

### Style

The style panel is grouped: **Layout**, **Spacing**, **Typography**, **Background**, **Border & corners**, **Effects** and **Advanced**.

Two controls that are easy to miss but matter:

**Breakpoint.** Above the style panel there's a Desktop / Tablet / Mobile picker. Values you set apply from that breakpoint down; fields you leave empty **inherit** from a wider breakpoint. There's an "Inherited from a wider breakpoint" marker so you know where a value came from.

**State.** Normal / Hover / Focus / Active. Set hover styling here rather than writing separate CSS. Empty fields follow Normal.

<Shot src="/img/editor/style-panel.webp">
The style panel: Desktop/Tablet/Mobile breakpoint picker and Normal/Hover/Focus/Active state picker at the top, then collapsible Layout, Spacing and Typography groups, and a "Custom CSS" box below.
</Shot>

### Custom CSS

At the bottom of the style panel. It takes **declarations only, no selector**:

```css
backdrop-filter: blur(6px);
mix-blend-mode: multiply;
```

It applies to the active breakpoint and state.

## Design tokens

The **Design tokens** panel holds site-wide values — brand colours, standard spacing, radius. Changing one token applies everywhere it's used, so changing an accent colour doesn't mean combing through 40 elements.

## Adding blocks

The **Blocks** panel on the left holds ready-made pieces:

- **Basic** — Heading, Text, Button, Image
- **Layout** — Container, 2/3/4 columns, Content + sidebar
- **Ready-made sections** — Hero, Features, Pricing, Testimonial, FAQ, Call to action, Form

Click a block to insert it **inside the currently selected element** (or into the body if nothing is selected), or drag it onto the canvas.

The palette can be tailored to your own page design — see [Block palette](/en/editor/blocks).

## Saving your own blocks

Any element can be saved as a reusable block: select it → **Save as block** → give it a name and icon. It appears under **Your saved blocks**.

## Copy, paste, paste style

Beyond ordinary copy/cut/paste of elements, there's **Paste style**: copy one element, select another, and paste just its styling. Handy for making buttons or cards consistent without redoing every setting.

## If something looks out of sync

Click **Refresh preview** in the toolbar. The preview is re-rendered from the stored HTML.
