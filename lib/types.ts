export type OutputMode = "ascii" | "ansi";
export type AnsiPalette = "truecolor" | "256" | "bbs16";

export interface AsciiCell {
  ch: string;
  r: number;
  g: number;
  b: number;
}

export interface AsciiResult {
  cols: number;
  rows: number;
  cells: AsciiCell[][];
  text: string;
}

export interface AnsiCell {
  topR: number;
  topG: number;
  topB: number;
  botR: number;
  botG: number;
  botB: number;
}

export interface AnsiResult {
  cols: number;
  rows: number;
  cells: AnsiCell[][];
  ansiText: string;
}

export interface ConvertParams {
  mode: OutputMode;
  width: number;
  contrast: number;
  brightness: number;
  sharpness: number;
  saturate: number;
  minLum: number;
  fontSize: number;
  palette: AnsiPalette;
  imgWidth: number;
  imgHeight: number;
  invert: boolean;
  blur: number;
  /** Min mode (image2 CLI's `--min`): caps rendered font size to 8px. Ascii-only. */
  dense: boolean;
}

export interface HealthResponse {
  version: string;
  status: string;
  local: boolean;
}

export interface FrontendCrashPayload {
  source: "frontend";
  timestamp: string;
  error: string;
  stack: string;
  url: string;
  userAgent: string;
  params: ConvertParams | null;
}

export interface BackendCrashPayload {
  source: "backend";
  timestamp: string;
  error: string;
  endpoint: string;
  params: ConvertParams | null;
}

export type CrashPayload = FrontendCrashPayload | BackendCrashPayload;
