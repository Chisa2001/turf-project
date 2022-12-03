class DTab {

    constructor(id) {
        this.id = id;
        this.tab_contents = document.getElementsByClassName('d-content')
    }

    hideAllTabs() {
        for (let tab of this.tab_contents) {
            tab.style.display = 'none';
        }
    }

    showContent() {
        this.hideAllTabs();
        for (let tab of this.tab_contents) {
            if (tab.id == this.id || tab.parentElement.id == this.id) {
                tab.style.display = 'block';
            }
        }
    }
}

class DashboardTab extends DTab {
    constructor() {
        super('dashboard-d-content');
    }
}

class TurfDTab extends DTab {
    constructor() {
        super('turf-d-content');
    }
}

class EventDTab extends DTab {
    constructor() {
        super('event-d-content');
    }
}

class AccountTab extends DTab {
    constructor() {
        super('account-d-content');
    }
}

class FeedbackTab extends DTab {
    constructor() {
        super('feedback-d-content');
    }
}

class NullDTab extends DTab {
    constructor() {
        super('null-id');
    }

    showContent() {
        this.hideAllTabs();
    }
}

class DTabStateHandler {
    constructor() {
        this.tab_btns = document.getElementsByClassName('tab-d-btns');
        this.tab_contents = [
            new DashboardTab(),
            new EventDTab(),
            new TurfDTab(),
            new AccountTab(),
            new FeedbackTab(),
        ];
        this.tab_contents[0].showContent();
    }

    getTabContent(tab_id) {
        for (let tab_content of this.tab_contents) {
            if (tab_content.id == tab_id) {
                return tab_content;
            }
        }
        return new NullTab();
    }

    unfocusAllTabs() {
        for (let tab_btn of this.tab_btns) {
            tab_btn.classList.remove('active');
        }
    }

    focusTab(tab) {
        tab.classList.add('active');
    }

    handleTabClick() {
        for (let tab of this.tab_btns) {
            tab.addEventListener('click', (e) => {
                this.unfocusAllTabs();
                this.focusTab(tab);
                this.getTabContent(e.target.id).showContent();
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    var tabHandler = new DTabStateHandler();
    tabHandler.handleTabClick();
});