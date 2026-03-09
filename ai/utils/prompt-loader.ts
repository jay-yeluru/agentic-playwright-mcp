import * as fs from 'fs';
import * as path from 'path';

/**
 * Loads a markdown system prompt from the ai/agents or ai/skills directory
 * stripping out any YAML frontmatter recursively if needed.
 */
export class PromptLoader {
    private static agentsDir = path.join(process.cwd(), 'ai', 'agents');
    private static skillsDir = path.join(process.cwd(), 'ai', 'skills');

    /**
     * Loads an agent instruction by filename (e.g. 'ui-test-designer.md').
     * Falls back to returning the provided fallback string if the file doesn't exist.
     */
    static loadAgentPrompt(filename: string, fallback: string = ''): string {
        const filePath = path.join(this.agentsDir, filename);
        return this.readFileContent(filePath, fallback);
    }

    /**
     * Loads a skill instruction by filename (e.g. 'mcp-scout.md').
     */
    static loadSkillPrompt(filename: string, fallback: string = ''): string {
        const filePath = path.join(this.skillsDir, filename);
        return this.readFileContent(filePath, fallback);
    }

    private static readFileContent(filePath: string, fallback: string = ''): string {
        try {
            if (fs.existsSync(filePath)) {
                let content = fs.readFileSync(filePath, 'utf-8');
                // Strip YAML frontmatter if present
                content = content.replace(/^---[\s\S]+?---[\r\n]*/, '');
                return content.trim();
            }
            return fallback;
        } catch (error) {
            console.warn(`[PromptLoader] Failed to read prompt from ${filePath}:`, error);
            return fallback;
        }
    }
}
