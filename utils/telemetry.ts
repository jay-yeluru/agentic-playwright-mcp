export const telemetry = {
    logEvent: (event: string, data: any) => {
        console.log(`[Telemetry] ${event}:`, data);
    },
    logError: (error: Error) => {
        console.error(`[Telemetry Error]`, error);
    }
};
