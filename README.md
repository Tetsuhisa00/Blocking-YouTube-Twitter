# Blocking-YouTube-Twitter-extension
This is a repository of the customized BlockingSite working on YouTube and Twitter. You can use this as a chrome extension.

This Chrome extension aims to improve user productivity by blocking access to distracting websites. Currently, it is pre-configured to block YouTube and Twitter, two of the most time-consuming social media platforms.


## Description

### how the extension works:

Blocking all currently open tabs: The extension starts by querying all open tabs. If any tab's URL matches an entry in the block list, that tab is immediately closed.
Preventing access to blocked sites: The extension listens for the onUpdated event, which is triggered when the URL of any tab is updated. If the updated URL matches an entry in the block list, the extension redirects the tab to a new tab page, effectively blocking access to the blocked site.


This Chrome extension allows you to block specific websites from being accessed. The program is designed to block websites such as YouTube and Twitter by default. But, if you want to customize and make it useful for you like changing the site or adding more sites to the blocked list, [This extension](https://github.com/Tetsuhisa00/SiteBlocker) will meet your needs and requirements.



## Feedback and Contribution
Any feedback or contribution to this project is welcomed and appreciated. Please feel free to create an issue or pull request for any bugs, feature requests or improvements you have in mind. I will do my best to respond to all issues in a timely manner.


