import type {
  App,
  AppOptions,
  McpUiAppCapabilities,
  McpUiDisplayMode,
  McpUiHostContext,
  McpUiMessageRequest,
  McpUiMessageResult,
  McpUiResourceCsp,
  McpUiResourceMeta,
  McpUiToolCancelledNotification,
  McpUiToolInputNotification,
  McpUiToolInputPartialNotification,
  McpUiToolResultNotification,
  McpUiUpdateModelContextRequest,
} from "@modelcontextprotocol/ext-apps";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";

export type ToolResultParams = McpUiToolResultNotification["params"];
export type ToolInputParams = McpUiToolInputNotification["params"];
export type ToolInputPartialParams =
  McpUiToolInputPartialNotification["params"];
export type ToolCancelledParams = McpUiToolCancelledNotification["params"];

export type ToolResultHandler<T = Record<string, unknown>> = (
  structuredContent: T | undefined,
  params: ToolResultParams,
) => void;

export type ToolInputHandler = (
  args: Record<string, unknown> | undefined,
  params: ToolInputParams,
) => void;

export type ToolInputPartialHandler = (
  args: Record<string, unknown> | undefined,
  params: ToolInputPartialParams,
) => void;

export type ToolCancelledHandler = (params: ToolCancelledParams) => void;

export type HostContextChangedHandler = (hostContext: McpUiHostContext) => void;

export interface McpAppBridgeOptions extends AppOptions {
  name?: string;
  version?: string;
  capabilities?: McpUiAppCapabilities;
  applyHostTheme?: boolean;
  transport?: Transport;
  app?: App;
  resizeTarget?: HTMLElement | null;
  onToolResult?: ToolResultHandler;
  onToolInput?: ToolInputHandler;
  onToolInputPartial?: ToolInputPartialHandler;
  onToolCancelled?: ToolCancelledHandler;
  onHostContextChanged?: HostContextChangedHandler;
  onTeardown?: App["onteardown"];
  singleton?: boolean;
}

export interface McpAppBridge {
  app: App;
  connect: (transport?: Transport) => Promise<McpAppBridge>;
  disconnect: () => Promise<void>;
  isConnected: () => boolean;
  onToolResult: (handler: ToolResultHandler) => () => void;
  onToolInput: (handler: ToolInputHandler) => () => void;
  onToolInputPartial: (handler: ToolInputPartialHandler) => () => void;
  onToolCancelled: (handler: ToolCancelledHandler) => () => void;
  onHostContextChanged: (handler: HostContextChangedHandler) => () => void;
  sendMessage: (
    message:
      | string
      | McpUiMessageRequest["params"]
      | McpUiMessageRequest["params"]["content"],
  ) => Promise<McpUiMessageResult>;
  callServerTool: (
    nameOrParams:
      | string
      | { name: string; arguments?: Record<string, unknown> },
    args?: Record<string, unknown>,
  ) => Promise<CallToolResult>;
  updateModelContext: (
    params: string | McpUiUpdateModelContextRequest["params"],
  ) => Promise<Record<string, unknown>>;
  sendSizeChanged: (size: { width?: number; height?: number }) => Promise<void>;
  openLink: (url: string) => Promise<{ isError?: boolean }>;
  requestDisplayMode: (
    mode: McpUiDisplayMode,
  ) => Promise<{ mode: McpUiDisplayMode }>;
  getHostContext: () => McpUiHostContext | undefined;
  getLastToolResult: () => ToolResultParams | undefined;
}

export interface EoxCspMetaOptions {
  origins?: string[];
  connectDomains?: string[];
  resourceDomains?: string[];
  frameDomains?: string[];
  baseUriDomains?: string[];
  includeBasemaps?: boolean;
  prefersBorder?: boolean;
  domain?: string;
}

export interface EoxCspMeta {
  ui: McpUiResourceMeta & {
    csp: McpUiResourceCsp & {
      connectDomains: string[];
      resourceDomains: string[];
    };
  };
}

export type EoxMcpAppMode = "empty" | "a2ui" | "map" | "chart";

export interface NormalizedMapPayload {
  layers: Record<string, unknown>[];
  center?: number[];
  zoom?: number;
  bbox?: number[];
  zoomExtent?: number[];
  projection?: string;
  controls?: Record<string, unknown>;
  config?: Record<string, unknown>;
  showLayerControl: boolean;
  layerControlProps: Record<string, unknown>;
}

export interface NormalizedChartPayload {
  spec: Record<string, unknown> | string;
  dataValues?: Record<string, unknown> | string;
  opt?: Record<string, unknown>;
}
