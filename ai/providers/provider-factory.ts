export abstract class AIProvider {
    abstract generateResponse(prompt: string): Promise<string>;
}
