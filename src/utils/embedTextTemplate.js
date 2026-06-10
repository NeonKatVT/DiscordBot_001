import { logger } from './logger.js';

function replaceAll(message, token, value) {
    if (value === undefined || value === null) {
        return message;
    }
    return message.split(token).join(String(value));
}






export function formatMessage(message) {
    
    if (typeof message !== 'string') return '';
    if (!message) return '';
    if (!data || typeof data !== 'object') return message;

    // const user = data?.user;
    // const guild = data?.guild;

    
    // if (!user || typeof user !== 'object') {
    //     logger.warn('Invalid user object passed to formatWelcomeMessage');
    // }
    // if (!guild || typeof guild !== 'object') {
    //     logger.warn('Invalid guild object passed to formatWelcomeMessage');
    // }

    const tokens = {
        '{warn.adminAbuse}': "Admin abuse can result in dangerous consenquences if not handled.",
    };

    let result = message;
    for (const [token, value] of Object.entries(tokens)) {
        if (value === undefined || value === null) continue;
        result = replaceAll(result, token, String(value));
    }

    return result;
}
