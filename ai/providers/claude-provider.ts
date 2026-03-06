import { AIProvider } from './provider-factory';

export class ClaudeProvider extends AIProvider {
    async generateResponse(prompt: string): Promise<string> {
        // Implementation for Claude
        return `Claude response to: ${prompt}`;
    }
}
