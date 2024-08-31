export const navigate = (path) => {
    window.history.pushState({}, '', path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
};

export const goBack = () => {
    window.history.back();
};
