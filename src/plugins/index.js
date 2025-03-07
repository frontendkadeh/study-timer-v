import timerPlugin from './timerPlugin';

export default {
    install (app) {
        app.config.globalProperties.$timerPlugin = timerPlugin
    }
}