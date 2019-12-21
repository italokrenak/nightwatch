module.exports = {
    'Demo test ecosia.org': function (browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')
            .assert.containsText('.hnname', 'Hacker News')
            .end();
    }
};