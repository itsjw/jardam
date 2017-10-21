export function fetchHelp() {
    return {
        type: SEARCH_HELP
    }
}

export function receiveHelp(help) {
    return {
        type: RECEIVE_HELP,
        payload: help
    }
}

export function fetchHelpArticle(articleId) {
    return {
        type: FETCH_HELP_ARTICLE,
        payload: id
    }
}

export function receiveHelpArticle(article) {
    return {
        type: RECEIVE_HELP_ARTICLE,
        payload: article
    }
}