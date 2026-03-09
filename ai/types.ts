export type ProviderType = 'openai' | 'claude' | 'copilot';

export interface AgentResponse {
    success: boolean;
    data?: unknown;
    error?: string;
    metadata?: Record<string, unknown>;
}

export interface Skill {
    name: string;
    description: string;
    execute: (input: unknown) => Promise<AgentResponse>;
}
