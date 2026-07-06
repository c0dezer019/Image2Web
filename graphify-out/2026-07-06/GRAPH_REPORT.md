# Graph Report - .  (2026-07-06)

## Corpus Check
- 9 files · ~22,261 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 392 nodes · 607 edges · 40 communities (25 shown, 15 thin omitted)
- Extraction: 96% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.81)
- Token cost: 1,295 input · 989 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Home Page & Controls Bar|Home Page & Controls Bar]]
- [[_COMMUNITY_App Layout & Error Boundaries|App Layout & Error Boundaries]]
- [[_COMMUNITY_Deployment Docs & CI Workflows|Deployment Docs & CI Workflows]]
- [[_COMMUNITY_Frontend Package Config|Frontend Package Config]]
- [[_COMMUNITY_Image Converter (Server)|Image Converter (Server)]]
- [[_COMMUNITY_Client Image Compression|Client Image Compression]]
- [[_COMMUNITY_Feedback Form & Browser Info|Feedback Form & Browser Info]]
- [[_COMMUNITY_Static Info Pages|Static Info Pages]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Server Conversion Tests|Server Conversion Tests]]
- [[_COMMUNITY_Download Page & Release Assets|Download Page & Release Assets]]
- [[_COMMUNITY_Controls Bar Inputs|Controls Bar Inputs]]
- [[_COMMUNITY_FastAPI Server Endpoints|FastAPI Server Endpoints]]
- [[_COMMUNITY_DropZone & Sample Image Validation|DropZone & Sample Image Validation]]
- [[_COMMUNITY_Project Instructions (CLAUDE.md)|Project Instructions (CLAUDE.md)]]
- [[_COMMUNITY_CICD Build & Deploy Jobs|CI/CD Build & Deploy Jobs]]
- [[_COMMUNITY_Server Python Dependencies|Server Python Dependencies]]
- [[_COMMUNITY_BugFeedback API Route|Bug/Feedback API Route]]
- [[_COMMUNITY_Aspect Ratio Utilities|Aspect Ratio Utilities]]
- [[_COMMUNITY_Server CI Gate Jobs|Server CI Gate Jobs]]
- [[_COMMUNITY_Next.js Breaking-Changes Notice|Next.js Breaking-Changes Notice]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Next.js Breaking Changes Warning|Next.js Breaking Changes Warning]]
- [[_COMMUNITY_CORS Allowlist|CORS Allowlist]]
- [[_COMMUNITY_Direct Browser-to-Server Upload|Direct Browser-to-Server Upload]]
- [[_COMMUNITY_file.svg Icon|file.svg Icon]]
- [[_COMMUNITY_globe.svg Icon|globe.svg Icon]]
- [[_COMMUNITY_window.svg Icon|window.svg Icon]]
- [[_COMMUNITY_Per-IP Rate Limiting|Per-IP Rate Limiting]]
- [[_COMMUNITY_Server Version Policy|Server Version Policy]]
- [[_COMMUNITY_Server Dev Dependencies|Server Dev Dependencies]]
- [[_COMMUNITY_flake8 Linter|flake8 Linter]]
- [[_COMMUNITY_pytest Test Runner|pytest Test Runner]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `COLORS` - 14 edges
3. `convert_to_ascii_grid()` - 13 edges
4. `ConvertParams` - 9 edges
5. `convert_to_ansi_grid()` - 9 edges
6. `_sample_png_bytes()` - 9 edges
7. `reportCrash()` - 8 edges
8. `compressImageIfNeeded()` - 8 edges
9. `OutputMode` - 8 edges
10. `convert_ascii()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `next.svg (Next.js wordmark logo)` --conceptually_related_to--> `Vercel Frontend Deployment`  [AMBIGUOUS]
  public/next.svg → README.md
- `vercel.svg (Vercel triangle logo)` --conceptually_related_to--> `Vercel Frontend Deployment`  [AMBIGUOUS]
  public/vercel.svg → README.md
- `Props` --references--> `CrashPayload`  [EXTRACTED]
  components/CrashReportBanner.tsx → lib/types.ts
- `OutputHeaderProps` --references--> `OutputMode`  [EXTRACTED]
  components/OutputHeader.tsx → lib/types.ts
- `VersionFooter()` --calls--> `getServerHealth()`  [EXTRACTED]
  components/VersionFooter.tsx → lib/convert.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Web Server Stack** — server_fastapi, server_uvicorn, server_slowapi, server_pydantic [INFERRED 0.90]
- **Image Processing Stack** — server_image2, server_cairosvg, server_pillow [INFERRED 0.90]
- **CI/CD Pipeline: CodeQL -> Docker Image -> Deploy** — github_workflows_codeql_codeql_advanced, github_workflows_docker_image_docker_image_ci, github_workflows_deploy_deploy_to_fly_io, github_workflows_deploy_gate_job [EXTRACTED 0.90]
- **Dual Docker Image Targets (Server vs Web/Local-mode)** — github_workflows_docker_image_gate_server, github_workflows_docker_image_gate_web, readme_local_mode [INFERRED 0.85]
- **Graph freshness enforcement pattern** — claude_graphify, github_workflows_graphify_freshness_freshnesscheck, github_workflows_graphify_freshness_gatepolicy [INFERRED 0.85]

## Communities (40 total, 15 thin omitted)

### Community 0 - "Home Page & Controls Bar"
Cohesion: 0.09
Nodes (31): FIXED_ENHANCE_DEFAULTS, Home(), ControlsBarProps, OutputHeader(), OutputHeaderProps, TABS, tabStyle(), parseNum() (+23 more)

### Community 1 - "App Layout & Error Boundaries"
Cohesion: 0.13
Nodes (22): Error(), GlobalError(), dmMono, metadata, spaceGrotesk, CookieBanner(), CrashReportBanner(), Props (+14 more)

### Community 2 - "Deployment Docs & CI Workflows"
Cohesion: 0.07
Nodes (27): Build & run, Deploying, Logging, Version reporting, Wiring up the Next.js app, CodeQL Advanced Workflow, Deploy Dev to Railway Job, Deploy Prod to Fly.io Job (+19 more)

### Community 3 - "Frontend Package Config"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, @vercel/analytics, devDependencies, eslint, eslint-config-next (+17 more)

### Community 4 - "Image Converter (Server)"
Cohesion: 0.14
Nodes (23): Image, Path, convert_to_ansi_grid(), convert_to_ascii_grid(), _preprocess(), Any, Apply image2 CLI's ``--invert``/``--blur`` preprocessing.      Mirrors ``image2., ImageOps.invert errors on non-RGB modes; _preprocess must convert RGBA     (a co (+15 more)

### Community 5 - "Client Image Compression"
Cohesion: 0.13
Nodes (13): blobToFile(), canvasToBlob(), compressImageIfNeeded(), computeScaledDimensions(), loadImage(), nextQuality(), QUALITY_MIME_TYPES, withJpegExtension() (+5 more)

### Community 6 - "Feedback Form & Browser Info"
Cohesion: 0.19
Nodes (15): FeedbackForm(), FIELD_LABEL_STYLE, TOGGLE_ACTIVE, TOGGLE_BASE, getBrowserInfo(), FeedbackKind, FeedbackOptions, readScreenshot() (+7 more)

### Community 7 - "Static Info Pages"
Cohesion: 0.21
Nodes (11): metadata, metadata, metadata, metadata, EFFECTIVE_DATE_STYLE, LegalPage(), LegalPageProps, P_STYLE (+3 more)

### Community 8 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 9 - "Server Conversion Tests"
Cohesion: 0.16
Nodes (9): _sample_png_bytes(), test_convert_ansi_rejects_bad_palette(), test_convert_ansi_rejects_oversized_output(), test_convert_ansi_returns_grid_and_text(), test_convert_ascii_invert_and_blur_change_output(), test_convert_ascii_rejects_oversized_output(), test_convert_ascii_returns_grid(), test_session_returns_uploaded_file() (+1 more)

### Community 10 - "Download Page & Release Assets"
Cohesion: 0.22
Nodes (11): DownloadPage(), FALLBACK_ASSETS, fetchRelease(), DownloadLinks(), Props, Footer(), LINK_STYLE, detectPlatform() (+3 more)

### Community 11 - "Controls Bar Inputs"
Cohesion: 0.15
Nodes (11): BgInputProps, ColorInputProps, ControlsBar(), isActivePreset(), labelStyle, numberInputStyle, segButtonStyle(), SliderField() (+3 more)

### Community 12 - "FastAPI Server Endpoints"
Cohesion: 0.25
Nodes (15): FileResponse, JSONResponse, RateLimitExceeded, Request, convert_ansi(), convert_ascii(), _estimate_rows(), get_session() (+7 more)

### Community 13 - "DropZone & Sample Image Validation"
Cohesion: 0.21
Nodes (6): DropZoneProps, createSampleImageBlob(), drawSampleScene(), ACCEPTED_TYPES, validateImageFile(), ValidationResult

### Community 14 - "Project Instructions (CLAUDE.md)"
Cohesion: 0.22
Nodes (8): Architecture, Commands, Environment, Gotchas, graphify, Rules, Graphify Freshness Check workflow, Graph freshness gate policy

### Community 15 - "CI/CD Build & Deploy Jobs"
Cohesion: 0.25
Nodes (8): Build and Push Web Dev Job, Build and Push Web Prod Job, Gate: Changes on Frontend Job, next.svg (Next.js wordmark logo), vercel.svg (Vercel triangle logo), image2 CLI Tool, Local Mode (Docker/img2 ui), Vercel Frontend Deployment

### Community 16 - "Server Python Dependencies"
Cohesion: 0.25
Nodes (8): CairoSVG, fastapi, image2, pillow, pydantic, server/requirements.txt, slowapi, uvicorn

### Community 17 - "Bug/Feedback API Route"
Cohesion: 0.40
Nodes (5): BugPayload, BugReportPayload, FeedbackPayload, isValidPayload(), POST()

### Community 18 - "Aspect Ratio Utilities"
Cohesion: 0.53
Nodes (4): ASPECT_RATIO_PRESETS, AspectRatioPreset, heightForWidth(), widthForHeight()

### Community 19 - "Server CI Gate Jobs"
Cohesion: 0.67
Nodes (3): Build and Push Dev (Server) Job, Build and Push Prod (Server) Job, Gate: Changes on Server Job

## Ambiguous Edges - Review These
- `Vercel Frontend Deployment` → `next.svg (Next.js wordmark logo)`  [AMBIGUOUS]
  public/next.svg · relation: conceptually_related_to
- `Vercel Frontend Deployment` → `vercel.svg (Vercel triangle logo)`  [AMBIGUOUS]
  public/vercel.svg · relation: conceptually_related_to

## Knowledge Gaps
- **124 isolated node(s):** `FeedbackPayload`, `BugPayload`, `BugReportPayload`, `FALLBACK_ASSETS`, `metadata` (+119 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Vercel Frontend Deployment` and `next.svg (Next.js wordmark logo)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Vercel Frontend Deployment` and `vercel.svg (Vercel triangle logo)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `COLORS` connect `App Layout & Error Boundaries` to `Home Page & Controls Bar`, `Feedback Form & Browser Info`, `Static Info Pages`, `Download Page & Release Assets`, `DropZone & Sample Image Validation`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Why does `OutputMode` connect `Home Page & Controls Bar` to `Controls Bar Inputs`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `convert_to_ascii_grid()` (e.g. with `convert_ascii()` and `test_ascii_grid_blur_changes_pixels()`) actually correct?**
  _`convert_to_ascii_grid()` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `FeedbackPayload`, `BugPayload`, `BugReportPayload` to the rest of the system?**
  _130 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Home Page & Controls Bar` be split into smaller, more focused modules?**
  _Cohesion score 0.0919661733615222 - nodes in this community are weakly interconnected._