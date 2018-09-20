export default class Observable {
    constructor() {
        this.data = [];
        this.subscriptions = [];
    }

    push(item) {
        this.data.push(item);
        this.subscriptions.every(subscription => subscription.onNext(item));
    }

    subscribe(onNext) {
        this.subscriptions.push({ onNext });
    }
}