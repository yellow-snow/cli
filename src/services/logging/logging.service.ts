export namespace LoggingService {
    export const info = (...args: any[]): void => {
        if (process.env.NODE_ENV !== "test") {
            console.info(...args);
        }
    }
    export const log = (...args: any[]): void => {
        if (process.env.NODE_ENV !== "test") {
            console.log(...args);
        }
    }
    export const warn = (...args: any[]): void => {
        if (process.env.NODE_ENV !== "test") {
            console.warn(...args);
        }
    }
    export const error = (...args: any[]): void => {
        if (process.env.NODE_ENV !== "test") {
            console.error(...args);
        }
    }
}