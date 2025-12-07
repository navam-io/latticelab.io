# Update Lattice Documentation

Update the Lattice documentation site by studying the app codebase and syncing docs to match current implementation.

## Pricing & Deployment

**Lattice API Access**: $90 one-time fee

Includes:
- Full access to Lattice app and API
- Run locally on customer laptop
- Host on customer's private cloud
- No recurring subscription fees
- All future updates included

**Get Access**: Visit https://www.latticelab.io to purchase and get access to the private GitHub repository.

## Source of Truth

**Lattice App Location:** `/Users/manavsehgal/Developer/lattice/`

### App Architecture

| Component | Location | Tech Stack |
|-----------|----------|------------|
| Frontend | `frontend/` | Next.js 16.x, React 19.x, Tailwind CSS 4.x |
| Backend | `backend/` | FastAPI, Python 3.11+, SQLAlchemy, LangGraph |
| API Routers | `backend/api/` | 19 endpoint modules |
| DB Models | `backend/db/models.py` | SQLAlchemy ORM with pgvector |
| Pydantic Schemas | `backend/models/schemas.py` | 2000+ lines of request/response models |
| Services | `backend/services/` | 26 business logic modules |
| Agents | `backend/agents/` | LangGraph Research Agent |
| Types | `frontend/src/types/index.ts` | TypeScript interfaces |
| Hooks | `frontend/src/hooks/` | 30 React hooks |
| Components | `frontend/src/components/ui/` | 60+ UI components |

### Key Files to Study

**Version Info:**
- `frontend/package.json` - Frontend version
- `backend/pyproject.toml` - Backend version

**API Endpoints (in `backend/api/`):**
- `workspaces.py` - Workspace CRUD
- `sources.py` - Source ingestion (PDF, URL, GitHub, YouTube, Google Docs)
- `chat.py` - Chat with RAG and streaming
- `scenarios.py` - Scenario configuration (inference, training, comparison)
- `stacks.py` - Stack configuration (model, framework, hardware)
- `artifacts.py` - Artifact management and promotion
- `blueprints.py` - Blueprint gallery (36+ templates)
- `evaluations.py` - Model evaluation framework
- `search.py` - Hybrid keyword + semantic search
- `smart_prompts.py` - Context-aware prompt suggestions
- `memory.py` - LLM memory calculator
- `parallelism.py` - Parallelism advisor
- `settings.py` - User/workspace settings
- `api_keys.py` - Encrypted API key storage

**Data Models (in `backend/db/models.py`):**
- `Workspace` - Container for all user data
- `Source` - Ingested documents (types: pdf, url, github, youtube, google_docs, markdown, text, artifact)
- `SourceChunk` - Indexed text chunks with embeddings
- `Message` - Chat conversation history
- `Artifact` - Generated outputs (table, chart, memo, diagram, memory_calculator, parallelism_advisor)
- `Scenario` - Workload configuration with SLOs, budget, compliance
- `StackConfig` - Infrastructure config (model, framework, hardware)
- `Blueprint` - Curated templates with manifest
- `Evaluation` - Model evaluation (benchmark, custom, pairwise)
- `UserSettings` / `WorkspaceSettings` - Configuration
- `ApiKey` - Encrypted provider keys

**Key Enums:**
- `SourceType`: pdf, url, github, youtube, google_docs, markdown, text, artifact
- `SourceCategory`: requirements, research, vendor, architecture, benchmarks, tutorial, general
- `WorkloadCategory`: inference, training, comparison
- `InferenceWorkloadType`: chat, code, rag, agentic, vision, embedding, batch
- `TrainingWorkloadType`: fine_tune, lora, continued_pretrain, distillation, rlhf, dpo, grpo, sft
- `ArtifactType`: table, chart, memo, diagram, memory_calculator, parallelism_advisor

## Documentation Location

**Docs Site:** `/Users/manavsehgal/Developer/latticelab.io/`

### Docs Structure

```
src/content/docs/docs/
├── getting-started/
│   ├── introduction.mdx    # Product overview, target users
│   ├── quickstart.mdx      # Getting started guide
│   └── concepts.mdx        # Core concepts (Sources, Lab, Studio)
├── features/
│   ├── workspaces.mdx      # Workspace isolation
│   ├── sources.mdx         # Source types and ingestion
│   ├── lab.mdx             # Chat interface with RAG
│   ├── studio.mdx          # Artifacts panel
│   ├── scenarios.mdx       # Workload configuration
│   ├── stacks.mdx          # Infrastructure config
│   └── blueprints.mdx      # Template gallery
├── guides/
│   ├── evaluate-models.mdx
│   ├── compare-providers.mdx
│   ├── configure-scenarios.mdx
│   └── build-stacks.mdx
├── api/
│   ├── overview.mdx        # API introduction
│   └── openapi.yaml        # OpenAPI 3.1 spec (auto-generates reference)
└── resources/
    ├── github-access.mdx   # GitHub repo access
    ├── roadmap.mdx         # Product roadmap
    └── changelog.mdx       # Version history
```

### Config Files

- `astro.config.mjs` - Starlight config with sidebar structure
- `src/content/config.ts` - Content collection schemas
- `src/styles/starlight-custom.css` - Custom styling

## Quickstart Installation Instructions

The `quickstart.mdx` file must include comprehensive installation instructions for both **App Users** and **API Developers**. When updating, ensure these sections are maintained:

### Required Sections in quickstart.mdx

1. **Get Access** - Pricing ($90 one-time) and GitHub repo access link
2. **Installation** - Full setup guide:
   - Prerequisites (Git, Docker, Python 3.11+, Node.js 18+)
   - Step 1: `git clone https://github.com/navam-io/lattice.git`
   - Step 2: `docker compose up -d` (PostgreSQL with pgvector)
   - Step 3: Backend setup with pip or uv options
   - Step 4: Environment variables (.env configuration)
   - Step 5: Database migrations (`alembic upgrade head`)
   - Step 6: Start backend (`uvicorn main:app --reload --port 8000`)
   - Step 7: Frontend setup (`npm install`)
   - Step 8: Start frontend (dev vs production tabs)
3. **Using the App** - Basic workflow (create workspace, add sources, chat, save artifacts)
4. **API Access** - For developers:
   - API endpoints table (localhost:8000, api.latticelab.io)
   - Interactive docs (Swagger UI at /docs)
   - Authentication (Bearer token)
   - Core API examples (Create Workspace, Add Source, Chat Query)
   - Health check endpoints
5. **Troubleshooting** - Common issues:
   - Database connection problems
   - Port conflicts
   - Missing dependencies

### Installation Commands Reference

**Docker (Database):**
```bash
docker compose up -d
docker compose ps
docker compose logs postgres
```

**Backend (Python):**
```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]"
# OR with uv:
uv sync
alembic upgrade head
uvicorn main:app --reload --port 8000
```

**Frontend (Node.js):**
```bash
cd frontend
npm install
npm run dev          # Development
npm run build        # Production build
npm start            # Production server
```

**Environment Variables (backend/.env):**
```bash
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
GOOGLE_API_KEY=AIza...
DATABASE_URL=postgresql+asyncpg://lattice:lattice_dev@localhost:5432/lattice
ENVIRONMENT=development
DEBUG=true
```

### Verify Installation Instructions

When updating quickstart.mdx:
1. Check `docker-compose.yml` for current database configuration
2. Check `backend/pyproject.toml` for Python version requirements
3. Check `frontend/package.json` for Node.js requirements
4. Verify API endpoints match current `backend/main.py` routes

## Tasks

### 1. Compare Versions
- Check `frontend/package.json` and `backend/pyproject.toml` for version numbers
- Compare with `docs/api/openapi.yaml` version and `docs/resources/changelog.mdx`

### 2. Analyze App Changes
- Run `git log --oneline -30` in `/Users/manavsehgal/Developer/lattice/` for recent changes
- Check for new API endpoints in `backend/api/`
- Check for new models in `backend/db/models.py`
- Check for new enums in `backend/models/schemas.py`
- Check for new frontend features in `frontend/src/components/ui/`

### 3. Generate Changelog

**Critical: Update `src/content/docs/docs/resources/changelog.mdx` with changes since last documented version.**

Steps:
1. Read current changelog to find the last documented version
2. Run `git log --oneline` in `/Users/manavsehgal/Developer/lattice/` to find commits since that version
3. Categorize changes by type:
   - **Features** - New functionality
   - **Improvements** - Enhancements to existing features
   - **Fixes** - Bug fixes
   - **API Changes** - New/modified endpoints
   - **Breaking Changes** - Changes requiring user action

4. Add new version section at the top of changelog following this format:

```mdx
## vX.Y.Z (Latest)

**Release Date: YYYY-MM-DD**

### Features
- Feature description with context

### Improvements
- Improvement description

### Fixes
- Bug fix description

### API Changes
- Endpoint changes if any
```

### 4. Update Documentation
- **Feature docs**: Update if app behavior changed
- **API docs**: Sync `openapi.yaml` with actual endpoints
- **Guides**: Update if workflows changed
- **Quickstart**: Verify installation instructions match current app setup (see "Quickstart Installation Instructions" section above)

### 5. Verify Build
- Run `npm run build` in docs directory
- Check for broken links or missing content

### 6. Summarize Changes

**Important: After completing all updates, provide a summary to the user including:**

1. **Version Update**: Previous version -> New version
2. **Changelog Entries Added**: List of new entries added to changelog
3. **Docs Updated**: Which documentation files were modified
4. **Key Changes**: Brief description of significant changes
5. **Build Status**: Whether the build succeeded

Format the summary as:

```
## Documentation Update Summary

**Version**: vX.Y.Z -> vX.Y.Z

### Changelog Additions
- [Feature] Description
- [Fix] Description
- ...

### Files Modified
- path/to/file.mdx - reason

### Build Status
✓ Build succeeded (X pages)
```

## Starlight MDX Format

```mdx
---
title: Feature Name
description: Brief description for SEO.
---

import { Aside, Tabs, TabItem, Card, CardGrid, LinkCard, Steps } from '@astrojs/starlight/components';

Introduction paragraph.

## Section Title

Content with tables, code blocks, and components.

<Aside type="tip">
  Helpful tip content.
</Aside>

<Tabs>
  <TabItem label="Option 1">Content</TabItem>
  <TabItem label="Option 2">Content</TabItem>
</Tabs>

## API Reference

### Endpoint Name

\`\`\`http
POST /api/workspaces/{workspace_id}/endpoint
Content-Type: application/json

{
  "field": "value"
}
\`\`\`
```

## OpenAPI Spec Guidelines

The `openapi.yaml` file uses:
- OpenAPI 3.1.0 format
- Tag descriptions with markdown (tables, code examples)
- Detailed schemas matching Pydantic models
- Server URLs for production and localhost

Update `info.version` to match backend version when API changes.

## Quality Checklist

- [ ] Version numbers match across app and docs
- [ ] Changelog updated with new version entries
- [ ] All API endpoints documented in openapi.yaml
- [ ] Feature docs reflect current UI/behavior
- [ ] Quickstart has complete installation instructions (git clone, docker, backend, frontend)
- [ ] Quickstart has API access section for developers
- [ ] No broken internal links
- [ ] Build succeeds without errors

Study the app code, compare with current docs, update changelog, and provide a summary of all changes made.
