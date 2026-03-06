import { AIProvider } from '../providers/provider-factory';

export class AgentOrchestrator {
    private provider: AIProvider;

    constructor(provider: AIProvider) {
        this.provider = provider;
    }

    async runWorkflow(workflowName: string, input: any) {
        console.log(`Running workflow: ${workflowName}`);
        // Orchestration logic across multiple agents
    }
}
