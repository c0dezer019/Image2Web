# Graph Report - .  (2026-07-06)

## Corpus Check
- Corpus is ~22,888 words - fits in a single context window. You may not need a graph.

## Summary
- 379 nodes · 673 edges · 35 communities (22 shown, 13 thin omitted)
- Extraction: 95% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 30 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Image Conversion Pipeline|Image Conversion Pipeline]]
- [[_COMMUNITY_App Shell & Crash Reporting|App Shell & Crash Reporting]]
- [[_COMMUNITY_Controls & Session UI|Controls & Session UI]]
- [[_COMMUNITY_Server Image Converters|Server Image Converters]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_CICD & Deploy Docs|CI/CD & Deploy Docs]]
- [[_COMMUNITY_Feedback & Job State|Feedback & Job State]]
- [[_COMMUNITY_Server Endpoint Tests|Server Endpoint Tests]]
- [[_COMMUNITY_Legal Pages|Legal Pages]]
- [[_COMMUNITY_TS Compiler Config|TS Compiler Config]]
- [[_COMMUNITY_Image Compression|Image Compression]]
- [[_COMMUNITY_FastAPI Server Routes|FastAPI Server Routes]]
- [[_COMMUNITY_Download Page & CLI|Download Page & CLI]]
- [[_COMMUNITY_DropZone & Validation|DropZone & Validation]]
- [[_COMMUNITY_Bug Report API|Bug Report API]]
- [[_COMMUNITY_Server Requirements Doc|Server Requirements Doc]]
- [[_COMMUNITY_Graphify Freshness Gate|Graphify Freshness Gate]]
- [[_COMMUNITY_Docker Image Workflow|Docker Image Workflow]]
- [[_COMMUNITY_AGENTS Breaking Changes|AGENTS Breaking Changes]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Server Requirements Split|Server Requirements Split]]
- [[_COMMUNITY_CLAUDE Commands|CLAUDE Commands]]
- [[_COMMUNITY_CLAUDE Environment Vars|CLAUDE Environment Vars]]
- [[_COMMUNITY_File SVG Icon|File SVG Icon]]
- [[_COMMUNITY_Globe SVG Icon|Globe SVG Icon]]
- [[_COMMUNITY_Window SVG Icon|Window SVG Icon]]
- [[_COMMUNITY_Flake8 Dev Dependency|Flake8 Dev Dependency]]
- [[_COMMUNITY_Pytest Dev Dependency|Pytest Dev Dependency]]
- [[_COMMUNITY_Pillow Dependency|Pillow Dependency]]

## God Nodes (most connected - your core abstractions)
1. `COLORS` - 16 edges
2. `compilerOptions` - 16 edges
3. `Home()` - 13 edges
4. `convert_to_ascii_grid()` - 13 edges
5. `_sample_png_bytes()` - 11 edges
6. `reportCrash()` - 10 edges
7. `compressImageIfNeeded()` - 10 edges
8. `ConvertParams` - 9 edges
9. `convert_to_ansi_grid()` - 9 edges
10. `OutputMode` - 8 edges

## Surprising Connections (you probably didn't know these)
- `next.svg (Next.js wordmark logo)` --conceptually_related_to--> `Vercel Frontend Deployment`  [AMBIGUOUS]
  public/next.svg → README.md
- `vercel.svg (Vercel triangle logo)` --conceptually_related_to--> `Vercel Frontend Deployment`  [AMBIGUOUS]
  public/vercel.svg → README.md
- `Deploy Prod to Fly.io Job` --conceptually_related_to--> `Server Deployment Doc`  [INFERRED]
  .github/workflows/deploy.yml → docs/server-deploy.md
- `Project scope/branching rules` --conceptually_related_to--> `Graph freshness gate policy`  [AMBIGUOUS]
  CLAUDE.md → .github/workflows/graphify-freshness.yml
- `Home()` --calls--> `buildBackendPayload()`  [EXTRACTED]
  app/page.tsx → lib/crash-reporter.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **CI/CD Pipeline: CodeQL -> Docker Image -> Deploy** — github_workflows_codeql_codeql_advanced, github_workflows_docker_image_docker_image_ci, github_workflows_deploy_deploy_to_fly_io, github_workflows_deploy_gate_job [EXTRACTED 0.90]
- **Dual Docker Image Targets (Server vs Web/Local-mode)** — github_workflows_docker_image_gate_server, github_workflows_docker_image_gate_web, readme_local_mode [INFERRED 0.85]
- **Graph freshness enforcement pattern** — claude_graphify, github_workflows_graphify_freshness_freshnesscheck, github_workflows_graphify_freshness_gatepolicy [INFERRED 0.85]
- **Independent Frontend/Server Versioning Pattern** — server_claude_version_semver, docs_server_deploy_version_reporting, readme_build_deploy_versions [INFERRED 0.85]

## Communities (35 total, 13 thin omitted)

### Community 0 - "Image Conversion Pipeline"
Cohesion: 0.11
Nodes (26): FIXED_ENHANCE_DEFAULTS, Home(), VersionFooter(), ASPECT_RATIO_PRESETS, heightForWidth(), widthForHeight(), charCellSize(), drawAnsiGrid() (+18 more)

### Community 1 - "App Shell & Crash Reporting"
Cohesion: 0.12
Nodes (24): Error(), GlobalError(), dmMono, metadata, spaceGrotesk, CookieBanner(), CrashReportBanner(), Props (+16 more)

### Community 2 - "Controls & Session UI"
Cohesion: 0.10
Nodes (23): BgInputProps, ColorInputProps, ControlsBar(), ControlsBarProps, isActivePreset(), labelStyle, numberInputStyle, segButtonStyle() (+15 more)

### Community 3 - "Server Image Converters"
Cohesion: 0.11
Nodes (27): Image, Path, analyze_image(), convert_to_ansi_grid(), convert_to_ascii_grid(), _preprocess(), Any, Apply image2 CLI's ``--invert``/``--blur`` preprocessing.      Mirrors ``image2. (+19 more)

### Community 4 - "Package Dependencies"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, @vercel/analytics, devDependencies, eslint, eslint-config-next (+17 more)

### Community 5 - "CI/CD & Deploy Docs"
Cohesion: 0.11
Nodes (25): Server Deployment Doc, CORS Allowlist (server/main.py), Direct Browser-to-Server Upload, Server Version Reporting (/health), CodeQL Advanced Workflow, Deploy Dev to Railway Job, Deploy Prod to Fly.io Job, Deploy to Fly.io Workflow (+17 more)

### Community 6 - "Feedback & Job State"
Cohesion: 0.19
Nodes (15): FeedbackForm(), FIELD_LABEL_STYLE, TOGGLE_ACTIVE, TOGGLE_BASE, getBrowserInfo(), FeedbackKind, FeedbackOptions, readScreenshot() (+7 more)

### Community 7 - "Server Endpoint Tests"
Cohesion: 0.14
Nodes (11): _sample_png_bytes(), test_analyze_accepts_invert_and_blur(), test_analyze_returns_auto_params(), test_convert_ansi_rejects_bad_palette(), test_convert_ansi_rejects_oversized_output(), test_convert_ansi_returns_grid_and_text(), test_convert_ascii_invert_and_blur_change_output(), test_convert_ascii_rejects_oversized_output() (+3 more)

### Community 8 - "Legal Pages"
Cohesion: 0.21
Nodes (11): metadata, metadata, metadata, metadata, EFFECTIVE_DATE_STYLE, LegalPage(), LegalPageProps, P_STYLE (+3 more)

### Community 9 - "TS Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 10 - "Image Compression"
Cohesion: 0.17
Nodes (12): blobToFile(), canvasToBlob(), compressImageIfNeeded(), computeScaledDimensions(), loadImage(), nextQuality(), QUALITY_MIME_TYPES, withJpegExtension() (+4 more)

### Community 11 - "FastAPI Server Routes"
Cohesion: 0.26
Nodes (16): FileResponse, JSONResponse, RateLimitExceeded, Request, analyze(), convert_ansi(), convert_ascii(), _estimate_rows() (+8 more)

### Community 12 - "Download Page & CLI"
Cohesion: 0.22
Nodes (11): DownloadPage(), FALLBACK_ASSETS, fetchRelease(), DownloadLinks(), Props, Footer(), LINK_STYLE, detectPlatform() (+3 more)

### Community 13 - "DropZone & Validation"
Cohesion: 0.21
Nodes (7): DropZone(), DropZoneProps, createSampleImageBlob(), drawSampleScene(), ACCEPTED_TYPES, validateImageFile(), ValidationResult

### Community 14 - "Bug Report API"
Cohesion: 0.40
Nodes (5): BugPayload, BugReportPayload, FeedbackPayload, isValidPayload(), POST()

### Community 15 - "Server Requirements Doc"
Cohesion: 0.50
Nodes (4): Dual-service architecture (Next.js + FastAPI), Project gotchas (Tailwind v4, CORS, independent deploys), FastAPI (server web framework), image2 (GitHub-sourced conversion dependency)

### Community 16 - "Graphify Freshness Gate"
Cohesion: 0.50
Nodes (4): graphify usage rules for this project, Project scope/branching rules, Graphify Freshness Check workflow, Graph freshness gate policy

### Community 17 - "Docker Image Workflow"
Cohesion: 0.67
Nodes (3): Build and Push Dev (Server) Job, Build and Push Prod (Server) Job, Gate: Changes on Server Job

## Ambiguous Edges - Review These
- `Graph freshness gate policy` → `Project scope/branching rules`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to
- `Vercel Frontend Deployment` → `next.svg (Next.js wordmark logo)`  [AMBIGUOUS]
  public/next.svg · relation: conceptually_related_to
- `Vercel Frontend Deployment` → `vercel.svg (Vercel triangle logo)`  [AMBIGUOUS]
  public/vercel.svg · relation: conceptually_related_to

## Knowledge Gaps
- **99 isolated node(s):** `FeedbackPayload`, `BugPayload`, `BugReportPayload`, `FALLBACK_ASSETS`, `metadata` (+94 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Graph freshness gate policy` and `Project scope/branching rules`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Vercel Frontend Deployment` and `next.svg (Next.js wordmark logo)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Vercel Frontend Deployment` and `vercel.svg (Vercel triangle logo)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `MockImage` connect `Image Compression` to `Image Conversion Pipeline`, `Server Image Converters`?**
  _High betweenness centrality (0.190) - this node is a cross-community bridge._
- **Why does `convert_to_ansi_grid()` connect `Server Image Converters` to `FastAPI Server Routes`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `convert_to_ascii_grid()` (e.g. with `convert_ascii()` and `test_ascii_grid_blur_changes_pixels()`) actually correct?**
  _`convert_to_ascii_grid()` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `FeedbackPayload`, `BugPayload`, `BugReportPayload` to the rest of the system?**
  _104 weakly-connected nodes found - possible documentation gaps or missing edges._