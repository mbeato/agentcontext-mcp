#!/usr/bin/env bun
// Thin wrapper over @mbeato/agentcontext's MCP server.
// All logic lives in @mbeato/agentcontext/mcp — this package exists only so
// MCP-registry adopters can `npx @mbeato/agentcontext-mcp` without thinking
// about the parent package.
//
// To use in an MCP client config:
//
//   {
//     "mcpServers": {
//       "agentcontext": {
//         "command": "npx",
//         "args": ["-y", "@mbeato/agentcontext-mcp"]
//       }
//     }
//   }
//
// Stdio transport. JSON-RPC 2.0. Implements the minimum MCP-2024-11-05
// surface needed for tool use (initialize, tools/list, tools/call).

import { runStdioServer } from "@mbeato/agentcontext/mcp";

runStdioServer();
