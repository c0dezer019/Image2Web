# Graph Report - Image2-Web  (2026-07-06)

## Corpus Check
- 6 files · ~53,031 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 479 nodes · 786 edges · 44 communities (27 shown, 17 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 37 edges (avg confidence: 0.8)
- Token cost: 0 input · 56,242 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Main Page  Home Controls|Main Page / Home Controls]]
- [[_COMMUNITY_Controls Bar UI|Controls Bar UI]]
- [[_COMMUNITY_App Router Pages|App Router Pages]]
- [[_COMMUNITY_Root Layout & Error Boundaries|Root Layout & Error Boundaries]]
- [[_COMMUNITY_Image Conversion Core (Python)|Image Conversion Core (Python)]]
- [[_COMMUNITY_Frontend Package Dependencies|Frontend Package Dependencies]]
- [[_COMMUNITY_Feedback Form|Feedback Form]]
- [[_COMMUNITY_Server Test Suite|Server Test Suite]]
- [[_COMMUNITY_Static LegalFeedback Pages|Static Legal/Feedback Pages]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Image Compression Utility|Image Compression Utility]]
- [[_COMMUNITY_FastAPI Server Endpoints|FastAPI Server Endpoints]]
- [[_COMMUNITY_CICD Deploy Workflows|CI/CD Deploy Workflows]]
- [[_COMMUNITY_Download Page & Links|Download Page & Links]]
- [[_COMMUNITY_Legal Pages Implementation Plan|Legal Pages Implementation Plan]]
- [[_COMMUNITY_Server Deployment & CORS|Server Deployment & CORS]]
- [[_COMMUNITY_DropZone Upload Component|DropZone Upload Component]]
- [[_COMMUNITY_Image Compression Feature Plan|Image Compression Feature Plan]]
- [[_COMMUNITY_Crash Reporting Feature|Crash Reporting Feature]]
- [[_COMMUNITY_Bug Report API Route|Bug Report API Route]]
- [[_COMMUNITY_Dual-Service Architecture Notes|Dual-Service Architecture Notes]]
- [[_COMMUNITY_Graphify Project Rules|Graphify Project Rules]]
- [[_COMMUNITY_DropZone Support Modules|DropZone Support Modules]]
- [[_COMMUNITY_Session LoadUpload Endpoints|Session Load/Upload Endpoints]]
- [[_COMMUNITY_ControlsBarOutputHeader Pair|ControlsBar/OutputHeader Pair]]
- [[_COMMUNITY_Docker Publish CI|Docker Publish CI]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Server Requirements Files|Server Requirements Files]]
- [[_COMMUNITY_AGENTS.md Warning|AGENTS.md Warning]]
- [[_COMMUNITY_Project Commands|Project Commands]]
- [[_COMMUNITY_Environment Variables Reference|Environment Variables Reference]]
- [[_COMMUNITY_File Icon Asset|File Icon Asset]]
- [[_COMMUNITY_Globe Icon Asset|Globe Icon Asset]]
- [[_COMMUNITY_Next.js Wordmark Asset|Next.js Wordmark Asset]]
- [[_COMMUNITY_Vercel Logo Asset|Vercel Logo Asset]]
- [[_COMMUNITY_Window Icon Asset|Window Icon Asset]]
- [[_COMMUNITY_flake8 Linter Dep|flake8 Linter Dep]]
- [[_COMMUNITY_pytest Dep|pytest Dep]]
- [[_COMMUNITY_pillow Dep|pillow Dep]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `COLORS` - 15 edges
3. `Home()` - 13 edges
4. `convert_to_ascii_grid()` - 13 edges
5. `_sample_png_bytes()` - 11 edges
6. `Image2 ASCII Forge Design Spec` - 11 edges
7. `Output Controls — image2 CLI Parity Spec` - 11 edges
8. `reportCrash()` - 10 edges
9. `compressImageIfNeeded()` - 10 edges
10. `ConvertParams` - 9 edges

## Surprising Connections (you probably didn't know these)
- `deploy-dev job (Railway redeploy image2 service)` --references--> `image2 CLI tool (external repo c0dezer019/image2)`  [AMBIGUOUS]
  .github/workflows/deploy.yml → README.md
- `README.md — project overview` --conceptually_related_to--> `build-and-push-web-prod job (frontend prod image)`  [AMBIGUOUS]
  README.md → .github/workflows/docker-image.yml
- `Project scope/branching rules` --conceptually_related_to--> `Graph freshness gate policy`  [AMBIGUOUS]
  CLAUDE.md → .github/workflows/graphify-freshness.yml
- `Home()` --calls--> `reportCrash()`  [EXTRACTED]
  app/page.tsx → lib/crash-reporter.ts
- `Home()` --calls--> `compressImageIfNeeded()`  [EXTRACTED]
  app/page.tsx → lib/image-compress.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Graph freshness enforcement pattern** — claude_graphify, github_workflows_graphify_freshness_freshnesscheck, github_workflows_graphify_freshness_gatepolicy [INFERRED 0.85]
- **CodeQL -> Docker Image CI -> Deploy pipeline gating** — github_workflows_codeql_codeqladvanced, github_workflows_dockerimage_dockerimageci, github_workflows_deploy_deploytoflyio [EXTRACTED 1.00]
- **Server Python dependency/build setup** — server_claude, server_requirements, server_requirements_dev [EXTRACTED 1.00]
- **Release Asset / CLI Download Management** — docs_superpowers_plans_2026_06_17_cli_download_banner_detectplatform_function, docs_superpowers_plans_2026_06_17_download_page_lib_detect_platform_module, docs_superpowers_plans_2026_06_17_download_page_download_route_page [INFERRED 0.80]
- **Crash Reporting Pipeline** — docs_superpowers_plans_2026_06_19_crash_logging_globalerrorlistener_component, docs_superpowers_plans_2026_06_19_crash_logging_app_error_boundary, docs_superpowers_plans_2026_06_19_crash_logging_crash_report_route [EXTRACTED 1.00]
- **ControlsBar Conditional State Extensions** — docs_superpowers_plans_2026_06_14_image_compression_controlsbar_optimizing_state, docs_superpowers_plans_2026_06_15_aspect_ratio_lock_controlsbar_lock_checkbox, docs_superpowers_plans_2026_06_14_image_compression_app_page_handlefile [INFERRED 0.75]
- **Legal & Privacy Disclosure System** — docs_superpowers_specs_2026_06_14_legal_pages_design_spec, docs_superpowers_specs_2026_06_17_cookie_consent_design_spec, docs_superpowers_specs_2026_06_14_legal_pages_design_privacy_transient_image_handling, app_privacy_page_tsx [INFERRED 0.75]
- **CLI Download Feature Evolution (banner → dedicated page)** — docs_superpowers_specs_2026_06_17_cli_download_design_spec, docs_superpowers_specs_2026_06_17_download_page_design_spec, components_clidownload_tsx, components_downloadlinks_tsx, lib_detect_platform_ts [EXTRACTED 1.00]
- **ControlsBar Extension Pattern (CLI parity + aspect lock)** — docs_superpowers_specs_2026_06_11_output_controls_design_spec, docs_superpowers_specs_2026_06_15_aspect_ratio_lock_design_spec, components_controlsbar, app_page_tsx [INFERRED 0.85]

## Communities (44 total, 17 thin omitted)

### Community 0 - "Main Page / Home Controls"
Cohesion: 0.08
Nodes (39): FIXED_ENHANCE_DEFAULTS, Home(), ControlsBarProps, OutputHeader(), OutputHeaderProps, TABS, tabStyle(), parseNum() (+31 more)

### Community 1 - "Controls Bar UI"
Cohesion: 0.07
Nodes (32): BgInputProps, ColorInputProps, ControlsBar(), isActivePreset(), labelStyle, numberInputStyle, segButtonStyle(), SliderField() (+24 more)

### Community 2 - "App Router Pages"
Cohesion: 0.08
Nodes (35): app/api/crash-report/route.ts, app/download/page.tsx, app/error.tsx, app/eula/page.tsx, app/global-error.tsx, app/layout.tsx, app/page.tsx, app/privacy/page.tsx (+27 more)

### Community 3 - "Root Layout & Error Boundaries"
Cohesion: 0.14
Nodes (21): Error(), GlobalError(), dmMono, metadata, spaceGrotesk, CookieBanner(), CrashReportBanner(), Props (+13 more)

### Community 4 - "Image Conversion Core (Python)"
Cohesion: 0.11
Nodes (27): Image, Path, analyze_image(), convert_to_ansi_grid(), convert_to_ascii_grid(), _preprocess(), Any, Apply image2 CLI's ``--invert``/``--blur`` preprocessing.      Mirrors ``image2. (+19 more)

### Community 5 - "Frontend Package Dependencies"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, @vercel/analytics, devDependencies, eslint, eslint-config-next (+17 more)

### Community 6 - "Feedback Form"
Cohesion: 0.19
Nodes (15): FeedbackForm(), FIELD_LABEL_STYLE, TOGGLE_ACTIVE, TOGGLE_BASE, getBrowserInfo(), FeedbackKind, FeedbackOptions, readScreenshot() (+7 more)

### Community 7 - "Server Test Suite"
Cohesion: 0.14
Nodes (11): _sample_png_bytes(), test_analyze_accepts_invert_and_blur(), test_analyze_returns_auto_params(), test_convert_ansi_rejects_bad_palette(), test_convert_ansi_rejects_oversized_output(), test_convert_ansi_returns_grid_and_text(), test_convert_ascii_invert_and_blur_change_output(), test_convert_ascii_rejects_oversized_output() (+3 more)

### Community 8 - "Static Legal/Feedback Pages"
Cohesion: 0.21
Nodes (11): metadata, metadata, metadata, metadata, EFFECTIVE_DATE_STYLE, LegalPage(), LegalPageProps, P_STYLE (+3 more)

### Community 9 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 10 - "Image Compression Utility"
Cohesion: 0.17
Nodes (12): blobToFile(), canvasToBlob(), compressImageIfNeeded(), computeScaledDimensions(), loadImage(), nextQuality(), QUALITY_MIME_TYPES, withJpegExtension() (+4 more)

### Community 11 - "FastAPI Server Endpoints"
Cohesion: 0.26
Nodes (16): FileResponse, JSONResponse, RateLimitExceeded, Request, analyze(), convert_ansi(), convert_ascii(), _estimate_rows() (+8 more)

### Community 12 - "CI/CD Deploy Workflows"
Cohesion: 0.14
Nodes (17): CodeQL Advanced (workflow), deploy-dev job (Railway redeploy image2 service), deploy-prod job (Fly.io deploy of server), Deploy to Fly.io (workflow), deploy.yml gate job (checks required workflows), deploy.yml test job (pytest), build-and-push-dev job (server dev image), build-and-push-prod job (server prod image) (+9 more)

### Community 13 - "Download Page & Links"
Cohesion: 0.22
Nodes (11): DownloadPage(), FALLBACK_ASSETS, fetchRelease(), DownloadLinks(), Props, Footer(), LINK_STYLE, detectPlatform() (+3 more)

### Community 14 - "Legal Pages Implementation Plan"
Cohesion: 0.14
Nodes (16): /eula Page, Footer Component, Legal Pages (ToS, EULA, Privacy) Implementation Plan, LegalPage Shared Shell Component, /privacy Page, /terms Page, CLI Download Banner Implementation Plan, CliDownload Component (+8 more)

### Community 15 - "Server Deployment & CORS"
Cohesion: 0.14
Nodes (15): CORS Allowlist in server/main.py, FastAPI server/ Docker Service, GET /health (version reporting), Server Deployment Doc, /api/convert Proxy Route, Image2 ASCII Forge Implementation Plan, lib/canvas-render.ts Rendering Module, convert_to_ansi_grid (+7 more)

### Community 16 - "DropZone Upload Component"
Cohesion: 0.21
Nodes (7): DropZone(), DropZoneProps, createSampleImageBlob(), drawSampleScene(), ACCEPTED_TYPES, validateImageFile(), ValidationResult

### Community 17 - "Image Compression Feature Plan"
Cohesion: 0.25
Nodes (9): app/page.tsx handleFile (compression wiring), compressImageIfNeeded (scale-then-quality-reduce strategy), ControlsBar Optimizing… State, Image Compression on Upload Implementation Plan, lib/validate.ts (50MB ceiling), app/page.tsx sourceWidth/sourceHeight/targetAspectRatio State, Aspect Ratio Lock + Presets Implementation Plan, ControlsBar Lock Ratio Checkbox + Presets (+1 more)

### Community 18 - "Crash Reporting Feature"
Cohesion: 0.33
Nodes (7): app/error.tsx Error Boundary, app/global-error.tsx Root Error Boundary, Crash Logging Implementation Plan, /api/crash-report Proxy Route, CrashReportBanner Component, GlobalErrorListener Component, lib/crash-reporter.ts (build + report payloads)

### Community 19 - "Bug Report API Route"
Cohesion: 0.40
Nodes (5): BugPayload, BugReportPayload, FeedbackPayload, isValidPayload(), POST()

### Community 20 - "Dual-Service Architecture Notes"
Cohesion: 0.50
Nodes (4): Dual-service architecture (Next.js + FastAPI), Project gotchas (Tailwind v4, CORS, independent deploys), FastAPI (server web framework), image2 (GitHub-sourced conversion dependency)

### Community 21 - "Graphify Project Rules"
Cohesion: 0.50
Nodes (4): graphify usage rules for this project, Project scope/branching rules, Graphify Freshness Check workflow, Graph freshness gate policy

### Community 22 - "DropZone Support Modules"
Cohesion: 0.67
Nodes (3): DropZone Component, lib/sample-image.ts Sample Generator, lib/validate.ts Validation Module

### Community 23 - "Session Load/Upload Endpoints"
Cohesion: 0.67
Nodes (3): GET /session/{id} Endpoint, SessionLoader Component, POST /upload Endpoint

## Ambiguous Edges - Review These
- `deploy-dev job (Railway redeploy image2 service)` → `image2 CLI tool (external repo c0dezer019/image2)`  [AMBIGUOUS]
  .github/workflows/deploy.yml · relation: references
- `build-and-push-web-prod job (frontend prod image)` → `README.md — project overview`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to
- `Graph freshness gate policy` → `Project scope/branching rules`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to

## Knowledge Gaps
- **142 isolated node(s):** `FeedbackPayload`, `BugPayload`, `BugReportPayload`, `FALLBACK_ASSETS`, `metadata` (+137 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `deploy-dev job (Railway redeploy image2 service)` and `image2 CLI tool (external repo c0dezer019/image2)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `build-and-push-web-prod job (frontend prod image)` and `README.md — project overview`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Graph freshness gate policy` and `Project scope/branching rules`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `MockImage` connect `Image Compression Utility` to `Main Page / Home Controls`, `Image Conversion Core (Python)`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Why does `convert_to_ansi_grid()` connect `Image Conversion Core (Python)` to `FastAPI Server Endpoints`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `convert_to_ascii_grid()` (e.g. with `convert_ascii()` and `test_ascii_grid_blur_changes_pixels()`) actually correct?**
  _`convert_to_ascii_grid()` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `FeedbackPayload`, `BugPayload`, `BugReportPayload` to the rest of the system?**
  _147 weakly-connected nodes found - possible documentation gaps or missing edges._