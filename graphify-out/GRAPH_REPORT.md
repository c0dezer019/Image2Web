# Graph Report - .  (2026-07-06)

## Corpus Check
- 100 files · ~52,405 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 468 nodes · 789 edges · 35 communities (25 shown, 10 thin omitted)
- Extraction: 95% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 35 edges (avg confidence: 0.8)
- Token cost: 0 input · 575,251 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Conversion Pipeline Core|Conversion Pipeline Core]]
- [[_COMMUNITY_Crash Reporting & Consent|Crash Reporting & Consent]]
- [[_COMMUNITY_Feature Specs Bundle|Feature Specs Bundle]]
- [[_COMMUNITY_Output Controls UI|Output Controls UI]]
- [[_COMMUNITY_Server Image Converters|Server Image Converters]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_CICD & Project Docs|CI/CD & Project Docs]]
- [[_COMMUNITY_Feedback & Job State|Feedback & Job State]]
- [[_COMMUNITY_Server Main Tests|Server Main Tests]]
- [[_COMMUNITY_Legal Pages|Legal Pages]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_FastAPI Server Routes|FastAPI Server Routes]]
- [[_COMMUNITY_Image Compression|Image Compression]]
- [[_COMMUNITY_CLI Download Page|CLI Download Page]]
- [[_COMMUNITY_LegalConsentDownload Plans|Legal/Consent/Download Plans]]
- [[_COMMUNITY_ASCII Forge & Deploy Plans|ASCII Forge & Deploy Plans]]
- [[_COMMUNITY_DropZone & Validation|DropZone & Validation]]
- [[_COMMUNITY_Compression & Aspect Ratio Plans|Compression & Aspect Ratio Plans]]
- [[_COMMUNITY_Crash Logging Plan|Crash Logging Plan]]
- [[_COMMUNITY_Bug Report API Route|Bug Report API Route]]
- [[_COMMUNITY_DropZone Module Plans|DropZone Module Plans]]
- [[_COMMUNITY_Local Mode Session Plans|Local Mode Session Plans]]
- [[_COMMUNITY_ControlsBarOutputHeader Plans|ControlsBar/OutputHeader Plans]]
- [[_COMMUNITY_Docker CI Plans|Docker CI Plans]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next Config|Next Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_File Icon Asset|File Icon Asset]]
- [[_COMMUNITY_Globe Icon Asset|Globe Icon Asset]]
- [[_COMMUNITY_Next.js Logo Asset|Next.js Logo Asset]]
- [[_COMMUNITY_Vercel Logo Asset|Vercel Logo Asset]]
- [[_COMMUNITY_Window Icon Asset|Window Icon Asset]]

## God Nodes (most connected - your core abstractions)
1. `COLORS` - 16 edges
2. `compilerOptions` - 16 edges
3. `Home()` - 13 edges
4. `convert_to_ascii_grid()` - 13 edges
5. `_sample_png_bytes()` - 11 edges
6. `Image2 ASCII Forge Design Spec` - 11 edges
7. `Output Controls — image2 CLI Parity Spec` - 11 edges
8. `reportCrash()` - 10 edges
9. `compressImageIfNeeded()` - 10 edges
10. `ConvertParams` - 9 edges

## Surprising Connections (you probably didn't know these)
- `README.md — project overview` --conceptually_related_to--> `build-and-push-web-prod job (frontend prod image)`  [AMBIGUOUS]
  README.md → .github/workflows/docker-image.yml
- `deploy-dev job (Railway redeploy image2 service)` --references--> `image2 CLI tool (external repo c0dezer019/image2)`  [AMBIGUOUS]
  .github/workflows/deploy.yml → README.md
- `pnpm-workspace.yaml — build allowlist config` --conceptually_related_to--> `README.md — project overview`  [INFERRED]
  pnpm-workspace.yaml → README.md
- `Home()` --calls--> `buildBackendPayload()`  [EXTRACTED]
  app/page.tsx → lib/crash-reporter.ts
- `Home()` --calls--> `reportCrash()`  [EXTRACTED]
  app/page.tsx → lib/crash-reporter.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **CodeQL -> Docker Image CI -> Deploy pipeline gating** — github_workflows_codeql_codeqladvanced, github_workflows_dockerimage_dockerimageci, github_workflows_deploy_deploytoflyio [EXTRACTED 1.00]
- **Server Python dependency/build setup** — server_claude, server_requirements, server_requirements_dev [EXTRACTED 1.00]
- **Project agent/instruction documentation set** — claude, agents, readme, server_claude [INFERRED 0.85]
- **Release Asset / CLI Download Management** — docs_superpowers_plans_2026_06_17_cli_download_banner_detectplatform_function, docs_superpowers_plans_2026_06_17_download_page_lib_detect_platform_module, docs_superpowers_plans_2026_06_17_download_page_download_route_page [INFERRED 0.80]
- **Crash Reporting Pipeline** — docs_superpowers_plans_2026_06_19_crash_logging_globalerrorlistener_component, docs_superpowers_plans_2026_06_19_crash_logging_app_error_boundary, docs_superpowers_plans_2026_06_19_crash_logging_crash_report_route [EXTRACTED 1.00]
- **ControlsBar Conditional State Extensions** — docs_superpowers_plans_2026_06_14_image_compression_controlsbar_optimizing_state, docs_superpowers_plans_2026_06_15_aspect_ratio_lock_controlsbar_lock_checkbox, docs_superpowers_plans_2026_06_14_image_compression_app_page_handlefile [INFERRED 0.75]
- **Legal & Privacy Disclosure System** — docs_superpowers_specs_2026_06_14_legal_pages_design_spec, docs_superpowers_specs_2026_06_17_cookie_consent_design_spec, docs_superpowers_specs_2026_06_14_legal_pages_design_privacy_transient_image_handling, app_privacy_page_tsx [INFERRED 0.75]
- **CLI Download Feature Evolution (banner → dedicated page)** — docs_superpowers_specs_2026_06_17_cli_download_design_spec, docs_superpowers_specs_2026_06_17_download_page_design_spec, components_clidownload_tsx, components_downloadlinks_tsx, lib_detect_platform_ts [EXTRACTED 1.00]
- **ControlsBar Extension Pattern (CLI parity + aspect lock)** — docs_superpowers_specs_2026_06_11_output_controls_design_spec, docs_superpowers_specs_2026_06_15_aspect_ratio_lock_design_spec, components_controlsbar, app_page_tsx [INFERRED 0.85]

## Communities (35 total, 10 thin omitted)

### Community 0 - "Conversion Pipeline Core"
Cohesion: 0.08
Nodes (38): FIXED_ENHANCE_DEFAULTS, Home(), ControlsBarProps, OutputHeader(), OutputHeaderProps, TABS, tabStyle(), parseNum() (+30 more)

### Community 1 - "Crash Reporting & Consent"
Cohesion: 0.12
Nodes (24): Error(), GlobalError(), dmMono, metadata, spaceGrotesk, CookieBanner(), CrashReportBanner(), Props (+16 more)

### Community 2 - "Feature Specs Bundle"
Cohesion: 0.08
Nodes (35): app/api/crash-report/route.ts, app/download/page.tsx, app/error.tsx, app/eula/page.tsx, app/global-error.tsx, app/layout.tsx, app/page.tsx, app/privacy/page.tsx (+27 more)

### Community 3 - "Output Controls UI"
Cohesion: 0.07
Nodes (30): BgInputProps, ColorInputProps, ControlsBar(), isActivePreset(), labelStyle, numberInputStyle, segButtonStyle(), SliderField() (+22 more)

### Community 4 - "Server Image Converters"
Cohesion: 0.10
Nodes (29): Image, Path, analyze_image(), convert_to_ansi_grid(), convert_to_ascii_grid(), _preprocess(), Any, Apply image2 CLI's ``--invert``/``--blur`` preprocessing.      Mirrors ``image2. (+21 more)

### Community 5 - "Package Dependencies"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, @vercel/analytics, devDependencies, eslint, eslint-config-next (+17 more)

### Community 6 - "CI/CD & Project Docs"
Cohesion: 0.12
Nodes (22): AGENTS.md — Next.js breaking-changes warning, CLAUDE.md — project instructions/architecture, CodeQL Advanced (workflow), deploy-dev job (Railway redeploy image2 service), deploy-prod job (Fly.io deploy of server), Deploy to Fly.io (workflow), deploy.yml gate job (checks required workflows), deploy.yml test job (pytest) (+14 more)

### Community 7 - "Feedback & Job State"
Cohesion: 0.19
Nodes (15): FeedbackForm(), FIELD_LABEL_STYLE, TOGGLE_ACTIVE, TOGGLE_BASE, getBrowserInfo(), FeedbackKind, FeedbackOptions, readScreenshot() (+7 more)

### Community 8 - "Server Main Tests"
Cohesion: 0.14
Nodes (11): _sample_png_bytes(), test_analyze_accepts_invert_and_blur(), test_analyze_returns_auto_params(), test_convert_ansi_rejects_bad_palette(), test_convert_ansi_rejects_oversized_output(), test_convert_ansi_returns_grid_and_text(), test_convert_ascii_invert_and_blur_change_output(), test_convert_ascii_rejects_oversized_output() (+3 more)

### Community 9 - "Legal Pages"
Cohesion: 0.21
Nodes (11): metadata, metadata, metadata, metadata, EFFECTIVE_DATE_STYLE, LegalPage(), LegalPageProps, P_STYLE (+3 more)

### Community 10 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 11 - "FastAPI Server Routes"
Cohesion: 0.26
Nodes (16): FileResponse, JSONResponse, RateLimitExceeded, Request, analyze(), convert_ansi(), convert_ascii(), _estimate_rows() (+8 more)

### Community 12 - "Image Compression"
Cohesion: 0.20
Nodes (10): blobToFile(), canvasToBlob(), compressImageIfNeeded(), computeScaledDimensions(), loadImage(), nextQuality(), QUALITY_MIME_TYPES, withJpegExtension() (+2 more)

### Community 13 - "CLI Download Page"
Cohesion: 0.22
Nodes (11): DownloadPage(), FALLBACK_ASSETS, fetchRelease(), DownloadLinks(), Props, Footer(), LINK_STYLE, detectPlatform() (+3 more)

### Community 14 - "Legal/Consent/Download Plans"
Cohesion: 0.14
Nodes (16): /eula Page, Footer Component, Legal Pages (ToS, EULA, Privacy) Implementation Plan, LegalPage Shared Shell Component, /privacy Page, /terms Page, CLI Download Banner Implementation Plan, CliDownload Component (+8 more)

### Community 15 - "ASCII Forge & Deploy Plans"
Cohesion: 0.14
Nodes (15): CORS Allowlist in server/main.py, FastAPI server/ Docker Service, GET /health (version reporting), Server Deployment Doc, /api/convert Proxy Route, Image2 ASCII Forge Implementation Plan, lib/canvas-render.ts Rendering Module, convert_to_ansi_grid (+7 more)

### Community 16 - "DropZone & Validation"
Cohesion: 0.21
Nodes (7): DropZone(), DropZoneProps, createSampleImageBlob(), drawSampleScene(), ACCEPTED_TYPES, validateImageFile(), ValidationResult

### Community 17 - "Compression & Aspect Ratio Plans"
Cohesion: 0.25
Nodes (9): app/page.tsx handleFile (compression wiring), compressImageIfNeeded (scale-then-quality-reduce strategy), ControlsBar Optimizing… State, Image Compression on Upload Implementation Plan, lib/validate.ts (50MB ceiling), app/page.tsx sourceWidth/sourceHeight/targetAspectRatio State, Aspect Ratio Lock + Presets Implementation Plan, ControlsBar Lock Ratio Checkbox + Presets (+1 more)

### Community 18 - "Crash Logging Plan"
Cohesion: 0.33
Nodes (7): app/error.tsx Error Boundary, app/global-error.tsx Root Error Boundary, Crash Logging Implementation Plan, /api/crash-report Proxy Route, CrashReportBanner Component, GlobalErrorListener Component, lib/crash-reporter.ts (build + report payloads)

### Community 19 - "Bug Report API Route"
Cohesion: 0.40
Nodes (5): BugPayload, BugReportPayload, FeedbackPayload, isValidPayload(), POST()

### Community 20 - "DropZone Module Plans"
Cohesion: 0.67
Nodes (3): DropZone Component, lib/sample-image.ts Sample Generator, lib/validate.ts Validation Module

### Community 21 - "Local Mode Session Plans"
Cohesion: 0.67
Nodes (3): GET /session/{id} Endpoint, SessionLoader Component, POST /upload Endpoint

## Ambiguous Edges - Review These
- `deploy-dev job (Railway redeploy image2 service)` → `image2 CLI tool (external repo c0dezer019/image2)`  [AMBIGUOUS]
  .github/workflows/deploy.yml · relation: references
- `build-and-push-web-prod job (frontend prod image)` → `README.md — project overview`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to

## Knowledge Gaps
- **129 isolated node(s):** `FeedbackPayload`, `BugPayload`, `BugReportPayload`, `FALLBACK_ASSETS`, `metadata` (+124 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `deploy-dev job (Railway redeploy image2 service)` and `image2 CLI tool (external repo c0dezer019/image2)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `build-and-push-web-prod job (frontend prod image)` and `README.md — project overview`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `MockImage` connect `Server Image Converters` to `Conversion Pipeline Core`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Why does `convert_to_ansi_grid()` connect `Server Image Converters` to `FastAPI Server Routes`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `convert_to_ascii_grid()` (e.g. with `convert_ascii()` and `test_ascii_grid_blur_changes_pixels()`) actually correct?**
  _`convert_to_ascii_grid()` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `FeedbackPayload`, `BugPayload`, `BugReportPayload` to the rest of the system?**
  _134 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Conversion Pipeline Core` be split into smaller, more focused modules?**
  _Cohesion score 0.08311688311688312 - nodes in this community are weakly interconnected._