# File Manager

Home for all your organisation's images and media files. Open it from **File Manager** in the sidebar.

<Shot src="/img/media/file-manager.webp" wide>
The File Manager in grid view: a "Storage usage" bar with an Add storage link at the top, a search box, sort picker, list/grid view toggle, New folder and Upload buttons, the folder breadcrumb (Home), then folder and image cards with thumbnails.
</Shot>

## Uploading

Three ways:

- Click the upload button.
- **Drag files** straight onto the file area — a *"Drop to upload"* marker appears.
- From inside the editor, via the image properties panel or the **Pick image** panel.

The limits: images, up to **8 MB** per file. An upload in progress can be cancelled.

## Folders

**New folder** creates one in the location you're viewing. Folders can nest.

Deleting a folder:

- Files inside are **moved to Home**, not deleted.
- **Subfolders are deleted.**

PageHub always names how many items are affected before you confirm.

## File actions

| Action | Notes |
| --- | --- |
| **Copy URL** | Copy the file's address — paste it into HTML or the properties panel |
| **Rename** | Change the display name |
| **Move** | To another folder, through a folder picker |
| **Delete** | Permanent |

Multiple files can be selected (checkboxes) to move or delete together.

::: warning Deleting an image that's in use
If an image is used on pages, PageHub warns: *"used on 3 pages. Delete anyway? Images on those pages will break."* Those pages are not fixed automatically — you'll need to replace the image yourself.
:::

## Search & sorting

The search box covers file **and** folder names. Sorting: Recent, Name A–Z, or Largest. The view can be **grid** or **list**.

## Storage

The **Storage usage** bar shows how much of your plan's quota is used (`120 MB of 2 GB`), or *"Unlimited"* if your plan isn't capped.

If it's full, two options: delete files you don't use, or buy a **Storage Add-On** under **Billing → Storage Add-On**.

## Workspace scope

The File Manager follows the active [workspace](/en/team/workspaces):

- **Organisation owners/admins** see all the organisation's media, and can narrow to one workspace.
- **Members** only see media in workspaces granted to them. With no grants at all, the result is empty — not the whole organisation.

This rule is deliberately stricter than elsewhere in the app: media is the one place where a "show everything if unsure" fallback would leak other clients' files.

## Per-website media

Each website has its own **Assets** tab showing media related to that website — a shortcut so you don't have to comb through the whole File Manager.

## Media from templates

When you use a [template](/en/website/website-templates), its images are **copied** into your organisation's File Manager (into a folder named after the new website's address), and the HTML is rewritten to point at those copies. Your copy never depends on someone else's files.
