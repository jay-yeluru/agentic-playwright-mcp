export type ProviderType = 'openai' | 'claude' | 'copilot';

export interface AgentResponse {
    success: boolean;
    data?: any;
    error?: string;
    metadata?: Record<string, any>;
}

export interface Skill {
    name: string;
    description: string;
    execute: (input: any) => Promise<AgentResponse>;
}
