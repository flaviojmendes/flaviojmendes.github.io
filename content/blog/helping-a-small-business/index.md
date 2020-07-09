---
title: Helping a Small Business
date: "2020-07-02T20:18:54.284Z"
description: "In this whole COVID-19 pandemic, of course, the most important to do is taking care of our health. Nonetheless, the financial aspect was strongly impacted, making financial health also very concerning.
              There are lots of things that can be done in this matter, but I am going to talk about a specific one in this text."
---

In this whole COVID-19 pandemic, of course, the most important to do is taking care of our health. Nonetheless, the financial aspect was strongly impacted, making financial health also very concerning.

Many businesses closing their doors, lots of people losing their jobs. It is very sad to see how many friends lost their jobs, had their working hours and salaries reduced.

I believe it is the responsibility of each one of us trying to minimize the impact on everybody lives. There are lots of things that can be done in this matter, but I am going to talk about a specific one in this text.

**Buying local.**

When you buy from small shops near your home you help your local community by making the money circulating in your region. This way your neighbours, you and your whole community keep financially healthy.

Linked to that, in the middle of the COVID-19 pandemic in Brazil I have a relative that decided to open a Hot Dog Delivery business.

He started by creating an Instagram account and receiving orders via Whatsapp. When I asked him why didn’t he put the menu on Uber Eats, iFood, and all these famous platforms he answered me:

“They charge a lot, and this is not interesting to me.”

This bothered me because I know how painful is to add a number in Whatsapp, start a conversation, ask the menu, make the order. Then I thought:

“I will create an interactive menu, that when finished sends the order to his Whatsapp”

And that’s what I did:

`youtube:jUCE2tAtqJg`


I couldn’t be happier with the response. He loved it, the customers as well. I can say the business conversion rate has increased a lot. And also they are much less busy answering Whatsapp messages, and it also reduced misunderstandings as the order is summarized in one message.

And I can say, sometimes something simple that you do will deeply impact someone’s life. So use your knowledge wisely, and do good.

### Tech bits:

For those that are interested in how it was done, I developed it using Angular + Bootstrap. Then, the whole order text is dynamically built and when the user clicks on Place Order it call the Whatsapp API, opening the user chat with the order ready to be sent.

To make this available the App is built and then deployed in an Nginx Docker container hosted in GCloud.

The good news is that as the most things I develop it is open-source and you can clone and adapt to your friends business:

[https://github.com/flaviojmendes/mmk](https://github.com/flaviojmendes/mmk)
