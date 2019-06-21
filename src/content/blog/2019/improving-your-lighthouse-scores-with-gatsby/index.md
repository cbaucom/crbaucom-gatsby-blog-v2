---
title: Good grades with Gatsby.js
description: "Gatsby.js delivers straight A's in Lighthouse audit"
date: '2019-02-01'
section: blog
cover_image: './crbaucom-lighthouse-after.png'
tags: ['gatsby']
---

### Gatsby delivers straight A's right out of the box

I recently rebuilt this website with [Gatsby.js](https://www.gatsbyjs.org/). A [React](https://www.reactjs.org/) based, [GraphQL](https://www.graphql.org/) powered, static site generator with claims of building the fastest website possible! How could you not want to use something like this? Look at some of the amazing things that Gatsby delivers right out of the box!

![Gatsby Features](https://res.cloudinary.com/crbaucom/image/upload/v1549346060/crbaucom-images/gatsby-features.png)

### Testing with Lighthouse

To test out just how well my website performs, I used a tool provided by Google called [Lighthouse](https://developers.google.com/web/tools/lighthouse/).
You can have it audit your website in the following categories:

- Performance
- Progressive Web App
- Accessibility
- Best Practices
- SEO

What's great is that if you are already a Google Chrome user, you don't even have to download anything. It's already built into the developer tools. You can visit the URL of any site you would like to test, open up the **Audits** tab in dev tools, and click **Run audit**. Here is how my site performed...

![Lighthouse GIF](https://res.cloudinary.com/crbaucom/image/upload/v1549348067/crbaucom-images/crbaucom-lighthouse.gif)

Straight A's! Mom would be so proud 😘

![Lighthouse Final score](https://res.cloudinary.com/crbaucom/image/upload/v1549342444/crbaucom-images/crbaucom-lighthouse-after.png)

It helps that I chose to host my site on [Netlify](https://www.netlify.com). Their free tier includes unlimited personal projects, HTTPS, continuous deployment, and more! Making the entire process of maintaining websites a breeze!

### Comparing my new site with my old site

Just for fun, I wanted to test my old site. I had last updated it in 2017 and it was built with Laravel (PHP), and hosted on my personal iMac. Here is the Lighthouse score for that site:

![old Lighthouse score](https://res.cloudinary.com/crbaucom/image/upload/v1549342445/crbaucom-images/crbaucom-lighthouse-before.png)

Not very good! I'm so glad I made the move to Gatsby. It really couldn't be any easier once you get your site all setup.

Go ahead, click around the site and see for yourself just how fast everything is. Pretty slick huh?

Since I write these blog posts in Markdown, I simply push my new content to Github. Netlify then builds and publishes my updates automatically. It's that easy!
