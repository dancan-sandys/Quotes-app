# Your Quotes Application

####  This is an application for posting viewing and voting for quotes.

### dated on:
08/23/2020

#### By **Dancan Sandys Oruko**

## Description
This is App provifing a forum gor viewing, posting, downvoting or upvoting quotes.
## live link
Here is a live link to the site: https://dancan-sandys.github.io/Quotes-app/

## Set up instructions
The app is to show the highest voted quote which it will do by highlighting that particular vote but you have to vote for the previosely highest vote so that it loses the blue color highlight. 
## BDD

|Input | Behaviour | Output|
|------|-----------|-------|
|User opens site| The site runs the index.html| User sees previously posted quotes and a form|
|User clicks on the quote| The showQuote function is run| Details on the Quote are displayed|
|User clicks the quote once more|the showQuote function is run |Details are no longer displayed|
|User fills the form inappropriately| The form is validated|User is asked to fill the invalid filled correctly|
|user fills the form correctly and submits|the new Quote is added to the quotes property of the quotecomponent.ts|User is able to see his/her quote |
|user clicks on the delete quote button| the deleteQuote function runs| The quote is deleted|
|User cliks on the upvote button| The upVote function runs|The number of upvotes increases|
|user cliks on the downvote function|The downVOte function runs|The numbdr of downvotes increases |
|A quote garners the highest votes| the property highest is set to true| The quote is is highlighted|
|Another quote sarpases it and garners the highest votes| the property highest is set to true| Both the newly highest and previously highest are highlighted|
|User votes for previously highest quote| The highest property is changed to false| the quote is dehighlighted until it suppases the newly highest quote once again|
 
 




## Technologies Used

    Technologies used in this portfolio include HTML, Bootstrap, javascript,angular, and CSS only

## Support and contact details
Incase of any issues using the site please contact: +254701824796 or dancan.oruko96@gmail.com

### License
*The webapp is compatible with all devices and all OS's. Consistent improvements are being made*

Copyright (c) 2020 **Dancan Sandys Oruko**