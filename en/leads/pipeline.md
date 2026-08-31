# Kanban pipeline

Leads don't stop at an inbox. The **Leads** page is a kanban board: every lead has a stage, an owner, notes and an age.

<Shot src="/img/leads/kanban.webp" wide>
The leads kanban board: a "First contact" column then coloured stage columns (Contacted, Quoted, Deal), each holding lead cards with name, contact, age in days and a notes icon. Above them a source picker, new/stuck/conversion stat cards, and a Kanban/List toggle.
</Shot>

## One source, one pipeline

A pipeline belongs to **one lead source**: a website, **or** a landing page. The source picker sits above the board.

The reason is practical: the sales stages for renting villas aren't the stages for online-class signups. Forcing one board on both makes the stages so generic they stop being useful.

## Configuring stages

Click **Manage stages**.

| Field | Notes |
| --- | --- |
| **Name** | e.g. `Contacted`, `Quoted`, `Deal` |
| **Colour** | The column colour on the board |
| **Marker** | **Open** · **Won** · **Lost** |

Column order can be dragged.

### The outcome marker is data, not a guess from the name

You can name a stage `Closing`, `Won`, `Done`, or anything in any language. What gives it meaning to the system is its **marker**:

- **Won** — used to compute **conversion**.
- **Lost** — switches off stuck warnings, because a dead lead doesn't need chasing.
- **Open** — an ordinary mid-pipeline stage.

### Deleting a stage

Leads inside it **return to First contact** — nothing is lost. PageHub names how many leads are affected before you confirm.

## Lead cards

Each card shows the name, contact details, **age** (days since arrival), a notes icon if there are notes, and a **stuck** marker if it's been sitting in the same stage too long.

Drag cards between columns, or open a card and use **Move to**.

## Lead detail

| Section | Contents |
| --- | --- |
| **Form submission** | Every field and its value |
| **Stage** | The current stage, and when it last moved |
| **Owner** | Who's working it |
| **Notes** | The last follow-up result |

Notes are the single biggest factor in whether this board is still useful a month from now. Write the outcome, not just "contacted."

## The summary cards

| Number | Meaning |
| --- | --- |
| **new** | Leads still in First contact |
| **stuck** | Leads sitting too long in one stage |
| **conversion** | Leads in stages marked **Won**, against all leads from this source |

## List mode

The **Kanban / List** toggle in the top right. List mode shows a table with Name, Contact, Stage, Owner, Page, Age and Received.

Use list mode once you have a lot of leads: the kanban board only shows a recent subset (with a note like *"Showing the latest 200 of 1,340"*), while list mode plus search reaches everything.

## Searching

The search box covers names, emails and note contents.

## Conversion reporting

There's a lead conversion report under **Reports → Lead conversion**, measuring leads against page views. See [The ten reports](/en/reports/overview).
