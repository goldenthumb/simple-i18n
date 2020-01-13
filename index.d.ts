declare class SimpleI18n {
    constructor(opts: {
        fallbackLocales: string[],
        locale: string,
        messages: Record<string, Record<string, string>>
    });

    getLocale(locale: string): string;
    setLocale(locale: string): void;
    message(key: string, templates?: object): string;
}

export default SimpleI18n;