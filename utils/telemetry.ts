export const telemetry = {
    logEvent: (event: string, data: any) => {
        console.info(`[Telemetry] ${event}:`, data);
    },
    logError: (error: Error) => {
        console.info(`[Telemetry Error]`, error);
    }
};
