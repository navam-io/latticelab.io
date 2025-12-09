# Blog Post Generation from Journey Content

You are a technical content specialist for Lattice Lab. Your task is to create or update blog posts based on user journey content, processing only new or changed journeys.

## Step 1: Load Processing Manifest

Check for the manifest file at `src/content/blog/.journey-manifest.json`:

```json
{
  "lastRun": "2025-12-09T10:00:00Z",
  "processed": {
    "journey-name": {
      "sourceHash": "md5-hash-of-blog.md",
      "imageCount": 5,
      "lastProcessed": "2025-12-09T10:00:00Z"
    }
  }
}
```

If the manifest doesn't exist, create an empty one and process all journeys.

## Step 2: Scan Source Content for Changes

Read the journeys source folder at `/Users/manavsehgal/Developer/lattice/journeys/`:

1. Read `catalog.md` for the feature index and journey mapping
2. For each subfolder, check:
   - Does `blog.md` exist? If not, skip this journey
   - Count image files (*.png, *.jpg, *.jpeg, *.webp, *.gif)
   - Calculate a content hash of `blog.md` (use first 500 chars + file size as proxy)

## Step 3: Determine What Needs Processing

For each journey source found, compare against the manifest:

| Condition | Action |
|-----------|--------|
| Journey not in manifest | **Add new post** |
| Source hash differs from manifest | **Update post** |
| Image count differs from manifest | **Update post** (new screenshots) |
| Journey in manifest, hash matches, same image count | **Skip** (already processed) |
| Journey folder has no `blog.md` | **Skip** (incomplete source) |

Create a processing queue with only journeys that need work.

## Step 4: Process Only Changed Journeys

For each journey in the processing queue:

### 4a. Process Images

1. **Copy images** to `public/images/journeys/{journey-name}/`
   - Rename screenshot files to descriptive names (e.g., `{journey-name}-01.png`)
   - Use Python or shell to handle filenames with spaces
2. **Select featured image** - Choose the first image or one showing a complete state
3. **Create image manifest** - List all images with their intended placement:
   - Map each numbered image (01, 02, 03...) to a step in the journey
   - Identify which content section each image belongs to
4. **Map image references** - Update markdown image paths throughout the post

### 4b. Generate/Update Blog Post

Create/update the MDX file at `src/content/blog/{journey-name}.mdx`:

**Required Frontmatter:**

```yaml
---
title: "{Descriptive Title}"
description: "{SEO-optimized description, 150-160 chars}"
pubDate: {YYYY-MM-DD} # Keep original if updating
updatedDate: {YYYY-MM-DD} # Add/update when modifying
author: "Lattice Lab"
tags: [{relevant-tags}]
featuredImage: "/images/journeys/{journey-name}/{best-image}.png"
featured: {true/false}
journey: "{journey-folder-name}"
readingTime: "{X} min read"
---
```

**Tag Vocabulary:**
- Category: `getting-started`, `intermediate`, `advanced`
- Feature: `workspaces`, `sources`, `blueprints`, `scenarios`, `stacks`, `artifacts`, `settings`, `chat`
- Capability: `ai-research`, `rag`, `organization`, `configuration`, `knowledge-management`

**Content Structure:**

1. **User Story**: `**When I** {context}, **I want to** {action}, **so I can** {benefit}.`
2. **Introduction** - 2-3 paragraphs
3. **Step-by-Step Journey** - With screenshots and explanations
4. **What You've Accomplished** - Summary and next steps
5. **Optional**: Technical Deep Dive, Real-World Scenarios, What's Next

**Image Placement Rules:**

Place ALL images from the source folder into appropriate sections of the blog post:

1. **Step-by-step images** (numbered 01, 02, 03...): Place each at the START of its corresponding step section
   - Format: `![Step N: Description](/images/journeys/{journey-name}/{journey-name}-NN.png)`
   - Example: `![Step 1: Open the Settings Modal](/images/journeys/configure-settings/configure-settings-01.png)`

2. **Concept images**: Place within explanatory sections where they illustrate the concept

3. **Result/completion images**: Place at the end of a step or in the summary section

4. **Image descriptions**: Write descriptive alt text that explains what the screenshot shows
   - Good: `![Workspace dropdown showing existing workspaces with source and message counts]`
   - Bad: `![Screenshot 2]`

5. **Image density**: Aim for 1 image every 100-200 words in step-by-step sections

6. **Never skip images**: If a source folder has 6 images, the blog post should reference all 6 images in appropriate locations

### 4c. Update Manifest Entry

After successfully processing each journey, update its manifest entry:

```json
{
  "journey-name": {
    "sourceHash": "{new-hash}",
    "imageCount": {count},
    "lastProcessed": "{current-timestamp}"
  }
}
```

## Step 5: Ensure Only Latest Post is Featured

After processing all journeys, ensure only ONE blog post has `featured: true` - the post with the most recent `pubDate`.

1. **Scan all blog posts** in `src/content/blog/*.mdx`
2. **Find the latest pubDate** across all posts
3. **Update frontmatter**:
   - Add `featured: true` to the post with the latest pubDate (if not already set)
   - Remove `featured: true` from ALL other posts that have it
4. **Report changes** in the summary

This ensures the blog homepage always highlights the newest content.

## Step 6: Save Updated Manifest

Write the updated manifest to `src/content/blog/.journey-manifest.json` with:
- Updated `lastRun` timestamp
- All processed entries (including unchanged ones)
- New entries for newly processed journeys

## Step 7: Report Actions

Provide a summary distinguishing between processed and skipped:

```
## Blog Content Update Summary

### Processed (New)
- {journey-name}: "{title}" - New journey added

### Processed (Updated)
- {journey-name}: "{title}" - {what changed: "new screenshots", "content updated"}

### Skipped (Already Current)
- {journey-name}: No changes detected (hash: {short-hash})

### Skipped (Incomplete Source)
- {journey-name}: Missing blog.md

### Images Processed
- Copied {N} images for {M} journeys
- Featured images: {list}

### Featured Post Updated
- Featured: "{post-title}" (pubDate: {date})
- Removed featured from: {list of posts or "none"}

### Manifest Updated
- Total journeys tracked: {N}
- Last run: {timestamp}
```

## Important Guidelines

- **Never use emojis** in blog content (per project guidelines)
- **Preserve pubDate** when updating existing posts
- **Add updatedDate** when modifying existing posts
- **Use Heroicons outline style** for any inline SVG icons
- **Match existing tone**: Professional, helpful, action-oriented
- **Validate image paths** exist before referencing
- **Calculate reading time**: ~200 words per minute
- **Handle special characters** in filenames using Python when needed

## Quick Reference: Hash Calculation

To determine if content changed, use this approach:
1. Read first 500 characters of `blog.md`
2. Get file size in bytes
3. Combine as: `{first-500-chars-length}:{file-size}`
4. This serves as a lightweight change detection proxy

This avoids re-processing journeys whose source content hasn't changed since the last run.
