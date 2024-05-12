import { writable } from 'svelte/store';
import { TRANSLATIONS } from '../pages/translations/translationData';

export const currentLanguage = writable('en');

export const translate = (lang: string, key: string)  => {
    return  TRANSLATIONS[lang][key];
}