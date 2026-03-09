import { AIProvider } from '../providers/provider-factory';
import { RequirementAgent } from '../agents/requirement-agent';
import { TestGenerationAgent } from '../agents/test-generation-agent';
import { ExecutionAgent } from '../agents/execution-agent';

export class AgentOrchestrator {
    private provider: AIProvider;
    private agents: {
        requirement: RequirementAgent;
        testGeneration: TestGenerationAgent;
        execution: ExecutionAgent;
    };

    constructor(provider: AIProvider) {
        this.provider = provider;
        this.agents = {
            requirement: new RequirementAgent(),
            testGeneration: new TestGenerationAgent(),
            execution: new ExecutionAgent(),
        };
    }

    async runFullAutomationWorkflow(requirement: string) {
        console.info(`Starting Full Automation Workflow for: ${requirement}`);

        // 1. Analyze Requirements
        const _processedReq = await this.agents.requirement.process(requirement);

        // 2. Generate Tests
        const generatedSuite = await this.agents.testGeneration.generate(_processedReq);

        // 3. Execute Tests
        const results = await this.agents.execution.execute(generatedSuite);

        return results;
    }
}
