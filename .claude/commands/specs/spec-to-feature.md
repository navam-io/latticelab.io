Extract features from a spec document and create/update the active backlog for iterative development.

**Usage:** `/specs:spec-to-feature <spec-path>`

**Example:** `/specs:spec-to-feature backlog/update-12-14-2025.md`

## Instructions

1. **Read the Spec Document**
   - Read the spec file at: `$ARGUMENTS`
   - If no path provided, prompt user for the spec file path
   - Identify all implementation sections and phases
   - Note dependencies between features

2. **Extract Features**
   For each implementation item, extract:
   - Feature name (clear, actionable title)
   - Description (what needs to be built)
   - Spec reference (Part X, Section Y.Z)
   - Dependencies (which features must be completed first)
   - Files to create/modify (from Appendix B)
   - Acceptance criteria (how to verify completion)

3. **Sequence Features**
   Order features for iterative development:
   - Foundation/shared components first
   - Then navigation (used across all pages)
   - Then homepage (most visible)
   - Then footer (completes layout)
   - Then feature pages (builds on components)
   - Then new sections (tools, integrations)
   - Finally content and polish

4. **Create/Update `backlog/active.md`**
   Use this format:

```markdown
# Active Backlog

Generated from: `$ARGUMENTS`
Last updated: [DATE]

## Status Legend
- [ ] Planned
- [~] In Progress
- [x] Completed

---

## Phase 1: Foundation

### Feature 1.1: [Feature Name]
**Spec Reference:** Part X, Section Y.Z
**Status:** [ ] Planned

**Description:**
[What needs to be built]

**Files:**
- [ ] `path/to/file.vue` - [purpose]
- [ ] `path/to/file.css` - [purpose]

**Dependencies:** None

**Acceptance Criteria:**
- [ ] [Criteria 1]
- [ ] [Criteria 2]

---

### Feature 1.2: [Feature Name]
...
```

5. **Grouping Rules**
   - Group by implementation phase from spec
   - Each feature should be completable in one `/code:develop` session
   - Large sections should be split into smaller features
   - Keep features focused (single responsibility)

6. **Traceability Requirements**
   - Every feature MUST reference spec part and section
   - Quote key requirements from spec where helpful
   - Link to relevant file checklist items from Appendix B

7. **Output**
   - Write the complete active.md file
   - Ensure it's ready for use with `/code:develop`
   - Include a summary count of features per phase

## Phase Extraction Guidelines

- Identify natural phases/milestones from the spec structure
- Common phase patterns:
  1. **Foundation** - Shared components, design tokens, utilities
  2. **Core Infrastructure** - Navigation, layout, routing
  3. **Primary Features** - Main user-facing functionality
  4. **Secondary Features** - Supporting features and pages
  5. **Integrations** - Cross-linking, external services
  6. **Content & Polish** - Copy, assets, QA, optimization

- Adapt phases based on the spec's actual structure
- Preserve spec's own phase naming when provided

## Notes

- If `backlog/active.md` exists, preserve completed features and update planned ones
- Features should be atomic enough to develop, test, and release independently
- Include estimated complexity (S/M/L) based on file count and scope
