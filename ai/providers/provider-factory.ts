import { OpenAIProvider } from './openai-provider';
import { ClaudeProvider } from './claude-provider';
import { CopilotProvider } from './copilot-provider';
import { ProviderType } from '../types';

export abstract class AIProvider {
    abstract generateResponse(prompt: string): Promise<string>;

    static create(type: ProviderType): AIProvider {
        switch (type) {
            case 'openai':
                return new OpenAIProvider();
            case 'claude':
                return new ClaudeProvider();
            case 'copilot':
                return new CopilotProvider();
            default:
                throw new Error(`Unsupported provider type: ${type}`);
        }
    }
}
