import 'server-only'

const supportedLocales = ['en', 'ar', 'de', 'es', 'fr', 'it', 'ja', 'pt', 'ru', 'zh-CN'];

const dictionaries = Object.fromEntries(
    supportedLocales.map((locale) => [
        locale,
        () => import(`./dictionaries/${locale}.json`).then((module) => module.default),
    ])
);

export const getDictionary = async (locale) => {
    if (!dictionaries[locale]) {
        locale = 'en';
    }
    return await dictionaries[locale]();
};
