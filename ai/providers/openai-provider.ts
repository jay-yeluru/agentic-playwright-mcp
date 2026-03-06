import { AIProvider } from './provider-factory';

export class OpenAIProvider extends AIProvider {
    async generateResponse(prompt: string): Promise<string> {
        // Implementation for OpenAI
        return `OpenAI response to: ${prompt}`;
    }
}
