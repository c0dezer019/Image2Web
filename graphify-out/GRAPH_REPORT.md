# Graph Report - Image2-Web  (2026-07-06)

## Corpus Check
- 70 files · ~22,895 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 399 nodes · 679 edges · 41 communities (23 shown, 18 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8cf2f943`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Output Header & Session UI|Output Header & Session UI]]
- [[_COMMUNITY_App Shell & Error Boundaries|App Shell & Error Boundaries]]
- [[_COMMUNITY_Server Deploy Docs|Server Deploy Docs]]
- [[_COMMUNITY_Image Converters (Server)|Image Converters (Server)]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_Controls Bar UI|Controls Bar UI]]
- [[_COMMUNITY_Feedback Form|Feedback Form]]
- [[_COMMUNITY_Client Image Compression|Client Image Compression]]
- [[_COMMUNITY_Download Page & Links|Download Page & Links]]
- [[_COMMUNITY_Server Endpoint Tests|Server Endpoint Tests]]
- [[_COMMUNITY_EULA & Feedback Pages|EULA & Feedback Pages]]
- [[_COMMUNITY_TS Compiler Config|TS Compiler Config]]
- [[_COMMUNITY_FastAPI Server Routes|FastAPI Server Routes]]
- [[_COMMUNITY_DropZone & Sample Image|DropZone & Sample Image]]
- [[_COMMUNITY_Project CLAUDE|Project CLAUDE.md]]
- [[_COMMUNITY_CICD Web Build Jobs|CI/CD Web Build Jobs]]
- [[_COMMUNITY_BugFeedback Report API|Bug/Feedback Report API]]
- [[_COMMUNITY_Home Page & Enhance Defaults|Home Page & Enhance Defaults]]
- [[_COMMUNITY_CICD Server Build Jobs|CI/CD Server Build Jobs]]
- [[_COMMUNITY_AGENTS.md Warning|AGENTS.md Warning]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Server Requirements Docs|Server Requirements Docs]]
- [[_COMMUNITY_Next.js Breaking Changes Note|Next.js Breaking Changes Note]]
- [[_COMMUNITY_CORS Allowlist|CORS Allowlist]]
- [[_COMMUNITY_Direct Browser-to-Server Upload|Direct Browser-to-Server Upload]]
- [[_COMMUNITY_file.svg Icon|file.svg Icon]]
- [[_COMMUNITY_globe.svg Icon|globe.svg Icon]]
- [[_COMMUNITY_window.svg Icon|window.svg Icon]]
- [[_COMMUNITY_Per-IP Rate Limiting|Per-IP Rate Limiting]]
- [[_COMMUNITY_Server VERSION Policy|Server VERSION Policy]]
- [[_COMMUNITY_flake8 Linter|flake8 Linter]]
- [[_COMMUNITY_pytest Runner|pytest Runner]]
- [[_COMMUNITY_FastAPI Framework Dep|FastAPI Framework Dep]]
- [[_COMMUNITY_image2 CLI Dependency|image2 CLI Dependency]]
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
- `Home()` --calls--> `heightForWidth()`  [EXTRACTED]
  app/page.tsx → lib/aspect-ratio.ts
- `Home()` --calls--> `widthForHeight()`  [EXTRACTED]
  app/page.tsx → lib/aspect-ratio.ts
- `Home()` --calls--> `buildBackendPayload()`  [EXTRACTED]
  app/page.tsx → lib/crash-reporter.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **CI/CD Pipeline: CodeQL -> Docker Image -> Deploy** — github_workflows_codeql_codeql_advanced, github_workflows_docker_image_docker_image_ci, github_workflows_deploy_deploy_to_fly_io, github_workflows_deploy_gate_job [EXTRACTED 0.90]
- **Dual Docker Image Targets (Server vs Web/Local-mode)** — github_workflows_docker_image_gate_server, github_workflows_docker_image_gate_web, readme_local_mode [INFERRED 0.85]
- **Graph freshness enforcement pattern** — claude_graphify, github_workflows_graphify_freshness_freshnesscheck, github_workflows_graphify_freshness_gatepolicy [INFERRED 0.85]

## Communities (41 total, 18 thin omitted)

### Community 0 - "Output Header & Session UI"
Cohesion: 0.11
Nodes (26): Home(), parseNum(), SessionLoader(), SessionLoaderProps, VersionFooter(), charCellSize(), drawAnsiGrid(), drawAsciiGrid() (+18 more)

### Community 1 - "App Shell & Error Boundaries"
Cohesion: 0.13
Nodes (23): Error(), GlobalError(), FIXED_ENHANCE_DEFAULTS, CrashReportBanner(), Props, Footer(), LINK_STYLE, OutputCanvas (+15 more)

### Community 2 - "Server Deploy Docs"
Cohesion: 0.07
Nodes (28): Build & run, Deploying, Logging, Server deployment, Version reporting, Wiring up the Next.js app, CodeQL Advanced Workflow, Deploy Dev to Railway Job (+20 more)

### Community 3 - "Image Converters (Server)"
Cohesion: 0.10
Nodes (29): Image, Path, analyze_image(), convert_to_ansi_grid(), convert_to_ascii_grid(), _preprocess(), Any, Apply image2 CLI's ``--invert``/``--blur`` preprocessing.      Mirrors ``image2. (+21 more)

### Community 4 - "Package Dependencies"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, @vercel/analytics, devDependencies, eslint, eslint-config-next (+17 more)

### Community 5 - "Controls Bar UI"
Cohesion: 0.12
Nodes (16): BgInputProps, ColorInputProps, ControlsBar(), ControlsBarProps, isActivePreset(), labelStyle, numberInputStyle, segButtonStyle() (+8 more)

### Community 6 - "Feedback Form"
Cohesion: 0.19
Nodes (15): FeedbackForm(), FIELD_LABEL_STYLE, TOGGLE_ACTIVE, TOGGLE_BASE, getBrowserInfo(), FeedbackKind, FeedbackOptions, readScreenshot() (+7 more)

### Community 7 - "Client Image Compression"
Cohesion: 0.20
Nodes (10): blobToFile(), canvasToBlob(), compressImageIfNeeded(), computeScaledDimensions(), loadImage(), nextQuality(), QUALITY_MIME_TYPES, withJpegExtension() (+2 more)

### Community 8 - "Download Page & Links"
Cohesion: 0.28
Nodes (9): DownloadPage(), FALLBACK_ASSETS, fetchRelease(), DownloadLinks(), Props, detectPlatform(), PlatformDownload, ReleaseAssets (+1 more)

### Community 9 - "Server Endpoint Tests"
Cohesion: 0.14
Nodes (11): _sample_png_bytes(), test_analyze_accepts_invert_and_blur(), test_analyze_returns_auto_params(), test_convert_ansi_rejects_bad_palette(), test_convert_ansi_rejects_oversized_output(), test_convert_ansi_returns_grid_and_text(), test_convert_ascii_invert_and_blur_change_output(), test_convert_ascii_rejects_oversized_output() (+3 more)

### Community 10 - "EULA & Feedback Pages"
Cohesion: 0.21
Nodes (11): metadata, metadata, metadata, metadata, EFFECTIVE_DATE_STYLE, LegalPage(), LegalPageProps, P_STYLE (+3 more)

### Community 11 - "TS Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 12 - "FastAPI Server Routes"
Cohesion: 0.26
Nodes (16): FileResponse, JSONResponse, RateLimitExceeded, Request, analyze(), convert_ansi(), convert_ascii(), _estimate_rows() (+8 more)

### Community 13 - "DropZone & Sample Image"
Cohesion: 0.21
Nodes (7): DropZone(), DropZoneProps, createSampleImageBlob(), drawSampleScene(), ACCEPTED_TYPES, validateImageFile(), ValidationResult

### Community 14 - "Project CLAUDE.md"
Cohesion: 0.22
Nodes (8): Architecture, Commands, Environment, Gotchas, graphify, Rules, Graphify Freshness Check workflow, Graph freshness gate policy

### Community 15 - "CI/CD Web Build Jobs"
Cohesion: 0.25
Nodes (8): Build and Push Web Dev Job, Build and Push Web Prod Job, Gate: Changes on Frontend Job, next.svg (Next.js wordmark logo), vercel.svg (Vercel triangle logo), image2 CLI Tool, Local Mode (Docker/img2 ui), Vercel Frontend Deployment

### Community 16 - "Bug/Feedback Report API"
Cohesion: 0.40
Nodes (5): BugPayload, BugReportPayload, FeedbackPayload, isValidPayload(), POST()

### Community 17 - "Home Page & Enhance Defaults"
Cohesion: 0.23
Nodes (10): dmMono, metadata, spaceGrotesk, CookieBanner(), GlobalErrorListener(), ConsentState, getConsent(), getCrashConsent() (+2 more)

### Community 18 - "CI/CD Server Build Jobs"
Cohesion: 0.67
Nodes (3): Build and Push Dev (Server) Job, Build and Push Prod (Server) Job, Gate: Changes on Server Job

## Ambiguous Edges - Review These
- `Vercel Frontend Deployment` → `next.svg (Next.js wordmark logo)`  [AMBIGUOUS]
  public/next.svg · relation: conceptually_related_to
- `Vercel Frontend Deployment` → `vercel.svg (Vercel triangle logo)`  [AMBIGUOUS]
  public/vercel.svg · relation: conceptually_related_to

## Knowledge Gaps
- **119 isolated node(s):** `FeedbackPayload`, `BugPayload`, `BugReportPayload`, `FALLBACK_ASSETS`, `metadata` (+114 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Vercel Frontend Deployment` and `next.svg (Next.js wordmark logo)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Vercel Frontend Deployment` and `vercel.svg (Vercel triangle logo)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `MockImage` connect `Image Converters (Server)` to `App Shell & Error Boundaries`?**
  _High betweenness centrality (0.171) - this node is a cross-community bridge._
- **Why does `convert_to_ansi_grid()` connect `Image Converters (Server)` to `FastAPI Server Routes`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `convert_to_ascii_grid()` (e.g. with `convert_ascii()` and `test_ascii_grid_blur_changes_pixels()`) actually correct?**
  _`convert_to_ascii_grid()` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `FeedbackPayload`, `BugPayload`, `BugReportPayload` to the rest of the system?**
  _126 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Output Header & Session UI` be split into smaller, more focused modules?**
  _Cohesion score 0.10960960960960961 - nodes in this community are weakly interconnected._