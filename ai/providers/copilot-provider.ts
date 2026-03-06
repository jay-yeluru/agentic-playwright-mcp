import { AIProvider } from './provider-factory';

export class CopilotProvider extends AIProvider {
    async generateResponse(prompt: string): Promise<string> {
        // Implementation for Copilot
        return `Copilot response to: ${prompt}`;
    }
}
