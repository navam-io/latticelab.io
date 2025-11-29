# User Journey Documentation

Capture or update user journeys for the Lattice UI. Each journey is documented as:
1. **Screenshots** - Sequential screen captures using Playwright automation
2. **Blog post** - Narrative documentation in Jobs-To-Be-Done format

## Instructions

When this command is invoked, follow these steps:

### Step 1: Determine the Journey

Ask the user which journey to capture or update. Available predefined journeys:

### Workspace & Setup
| Journey | Description | JTBD |
|---------|-------------|------|
| `create-workspace` | Creating a new workspace | Organize AI research projects |
| `switch-workspace` | Switching between workspaces | Context switch between projects |
| `configure-settings` | Managing global settings | Customize AI behavior and appearance |
| `manage-api-keys` | Setting up API providers | Connect to LLM providers |

### Sources & Knowledge
| Journey | Description | JTBD |
|---------|-------------|------|
| `add-sources` | Adding knowledge sources | Import documents for AI grounding |
| `upload-pdf` | Uploading PDF documents | Add research papers and docs |
| `add-url-source` | Adding URL sources | Import web content for analysis |
| `semantic-search` | Using hybrid search | Find relevant content across sources |
| `view-source` | Reading source content | Deep dive into indexed documents |

### Blueprints
| Journey | Description | JTBD |
|---------|-------------|------|
| `browse-blueprints` | Exploring the blueprint gallery | Discover curated knowledge bundles |
| `apply-blueprint` | Applying a blueprint | Quick-start with proven stacks |
| `filter-blueprints` | Filtering by vendor/category | Find relevant blueprints quickly |
| `discover-blueprint` | AI-powered blueprint discovery | Generate new blueprints from topics |
| `refresh-blueprint` | Validating blueprint URLs | Ensure blueprint sources are current |
| `manage-vendors` | Managing vendor preferences | Control which vendors appear |

### Scenarios & Stacks
| Journey | Description | JTBD |
|---------|-------------|------|
| `configure-scenario` | Setting up a scenario | Define workload requirements |
| `configure-stack` | Setting up a stack | Define model and framework choices |
| `compare-stacks` | Comparing options | Evaluate trade-offs |
| `extract-scenario` | Chat-to-scenario extraction | Generate scenario from conversation |

### Chat & AI Interaction
| Journey | Description | JTBD |
|---------|-------------|------|
| `chat-with-ai` | Getting AI recommendations | Ask questions and get cited answers |
| `view-thinking` | Viewing agent reasoning | Understand AI decision process |
| `use-citations` | Interacting with citations | Trace answers back to sources |
| `use-mentions` | Using @mentions in chat | Reference specific sources |

### Artifacts & Studio
| Journey | Description | JTBD |
|---------|-------------|------|
| `generate-artifact` | Creating artifacts | Generate decision documents |
| `save-artifact` | Saving chat as artifact | Preserve valuable AI responses |
| `view-artifact` | Viewing artifact details | Review generated content |
| `export-artifact` | Exporting artifacts | Share or download as markdown |
| `manage-artifacts` | Managing Studio artifacts | Organize decision documents |

Or the user can specify a custom journey name.

### Step 2: Invoke the play-skill

Use the `play-skill` skill to capture screenshots. This skill provides:
- `scripts/capture_journey.py` - Captures sequential screenshots
- `scripts/generate_blog.py` - Generates blog post from screenshots
- `references/lattice-context.md` - ICP and writing guidelines

### Step 3: Capture Screenshots

Start the Lattice servers and run the capture script:

```bash
# Start servers and capture journey
python .claude/skills/webapp-testing/scripts/with_server.py \
  --server "cd backend && source .venv/bin/activate && uvicorn main:app --port 8000" --port 8000 \
  --server "cd frontend && npm run dev" --port 3000 \
  -- python .claude/skills/play-skill/scripts/capture_journey.py \
     --journey "{journey-name}" \
     --base-url "http://localhost:3000" \
     --output-dir "journeys"
```

For custom journeys, create a steps JSON file first:

```json
{
  "title": "Journey Title",
  "jtbd": "accomplish the user goal",
  "steps": [
    {"action": "navigate", "url": "/"},
    {"action": "wait", "ms": 500},
    {"action": "screenshot", "name": "01", "description": "Initial state"},
    {"action": "click", "selector": "button:has-text('Action')"},
    {"action": "screenshot", "name": "02", "description": "After action"}
  ]
}
```

### Step 4: Generate Blog Post

After capturing screenshots, generate the blog:

```bash
python .claude/skills/play-skill/scripts/generate_blog.py --journey "{journey-name}"
```

### Step 5: Review and Enhance

Review the generated `journeys/{journey-name}/blog.md` and enhance it:

1. **Introduction** - Make it specific to the ICP's needs
2. **Step descriptions** - Add context about what's happening and why
3. **Conclusion** - Clarify the value delivered and next steps
4. **JTBD statement** - Ensure it resonates with the target audience

### Blog Format

Each blog follows this structure:

```markdown
# [Journey Title]

**When I** [situation], **I want to** [action], **so I can** [outcome].

---

## Introduction
[1-2 paragraphs on why this matters to AI teams]

## Step 1: [Title]
![Step 1](./{journey}-01.png)
[What happens and why it matters]

## Step 2: [Title]
![Step 2](./{journey}-02.png)
[Continue for each step...]

## What You've Accomplished
[Summary and next steps]

---
*[Lattice](https://www.latticelab.io) is built by Lattice Lab...*
```

### Output Location

All journey files are saved to:
```
journeys/
└── {journey-name}/
    ├── {journey-name}-01.png
    ├── {journey-name}-02.png
    ├── ...
    ├── metadata.json
    └── blog.md
```

### Updating Existing Journeys

To update a journey:
1. Re-run the capture script (overwrites screenshots)
2. Regenerate the blog or manually update `blog.md`
3. Preserve any manual enhancements to the blog content

### Context References

For ICP context and writing guidelines, read:
- `backlog/mlp-spec-slices.md` - Product spec and JTBD details
- `releases/` - Feature evolution and capabilities
- `.claude/skills/play-skill/references/lattice-context.md` - Writing guidelines

### Company Information

- **Product:** Lattice
- **Company:** Lattice Lab
- **Website:** www.latticelab.io
