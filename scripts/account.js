class Tab {

    constructor(id) {
        this.id = id;
        this.tab_contents = document.getElementsByClassName('content')
    }

    hideAllTabs() {
        for (let tab of this.tab_contents) {
            tab.style.display = 'none';
        }
    }

    showContent() {
        this.hideAllTabs();
        for (let tab of this.tab_contents) {
            if (tab.id == this.id) {
                tab.style.display = 'block';
            }
        }
    }
}

class BookingTab extends Tab {
    constructor() {
        super('booking-content');
    }
}

class ParticipatedEventTab extends Tab {
    constructor() {
        super('participated-content');
    }
}
class TurfTab extends Tab {
    constructor() {
        super('turfs-content');
    }
}

class EventTab extends Tab {
    constructor() {
        super('events-content');
    }
}

class NullTab extends Tab {
    constructor() {
        super('null-id');
    }

    showContent() {
        this.hideAllTabs();
    }
}

class TabStateHandler {
    constructor() {
        this.tab_btns = document.getElementsByClassName('account-tab');
        this.tab_contents = [
            new BookingTab(),
            new ParticipatedEventTab(),
            new TurfTab(),
            new EventTab()
        ];
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
            tab_btn.classList.remove('selected-tab');
        }
    }

    focusTab(tab) {
        tab.classList.add('selected-tab');
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
    var tabHandler = new TabStateHandler();
    tabHandler.handleTabClick();
});