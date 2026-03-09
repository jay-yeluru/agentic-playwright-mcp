import { PromptLoader } from '../utils/prompt-loader';

export const UI_TEST_PROMPTS = {
    GENERAL_DESIGN: `${PromptLoader.loadAgentPrompt('ui-test-designer.md')}\n\nAct as a senior QA engineer. Design a Playwright test for the following requirement: {requirement}`,
    POM_CONVERSION: "Convert these test steps into a Page Object Model implementation.",
};
