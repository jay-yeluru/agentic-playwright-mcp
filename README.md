# Agentic Playwright MCP

This repository implements an agentic automation framework using Playwright and the Model Context Protocol (MCP).

## Project Structure

```
agentic-playwright-mcp/
├── ai/                     # AI Agent logic and orchestration
│   ├── agents/             # Specialized agents (requirements, generation, etc.)
│   ├── skills/             # Domain-specific AI skills
│   ├── instructions/       # System prompts and templates
│   ├── providers/          # LLM provider implementations
│   └── orchestration/      # Centralized agent management
├── pages/                  # Page Object Model (POM) classes
├── tests/                  # Playwright test suites
├── utils/                  # Shared utilities and helpers
├── reports/                # Test execution reports and artifacts
├── .github/                # CI/CD workflows
├── playwright.config.ts    # Playwright configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

3. Run tests:
   ```bash
   npm test
   ```

4. View reports:
   ```bash
   npm run report
   ```
 MCP Framework

This repo demonstrates **Agentic AI Test Automation** using:
- **LLM Providers (Copilot, Claude, OpenAI)** for test intent generation
- **Playwright MCP** for standardized communication
- **Page Object Model (POM)** for maintainable tests
- **Allure Reporting** for rich insights
- **GitHub Pages** for publishing reports

## 🚀 Quickstart
1. Install dependencies:
   ```bash
   npm install