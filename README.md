# @mbeato/agentcontext-mcp

MCP server for [@mbeato/agentcontext](https://www.npmjs.com/package/@mbeato/agentcontext) — normalize agent-context files (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.cursor/rules/*.mdc`, `.windsurf/rules/*.md`, `.clinerules/*.md`, `CONVENTIONS.md`) from any MCP-aware coding agent.

Two tools exposed:

- `read_agent_context(path)` — parse all detected formats in a repo, return one unified IR.
- `convert_agent_context(ir, targets)` — render the IR to one or more target formats; returns the file map.

## Install

```jsonc
// ~/.config/claude-code/mcp.json (or your MCP client's config)
{
  "mcpServers": {
    "agentcontext": {
      "command": "npx",
      "args": ["-y", "@mbeato/agentcontext-mcp"]
    }
  }
}
```

## Status

v0.1 — early. See https://agentsmd.apimesh.xyz for the project home.

## License

MIT
