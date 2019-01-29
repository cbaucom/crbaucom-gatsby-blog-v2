---
title: Update your Footer
description: Change your timestamps from static to automatic
date: '2018-12-31'
section: blog
cover_image: './2018-19.jpg'
tags: ['development', 'tips']
---

Let's face it. We've all run into the issue where we are scrolling through a site and we get to the bottom and notice that the year in the footer has not been updated to the current year. If you happen to be managing that site, you rapidly rush to the computer, open up the source code, search for outdated year, add one to that year, commit and deploy. Phew ...glad we caught that before the client!

Ok, maybe we all haven't been there. Maybe you were smarter than I and you already know that there is a quick and easy solution so that you don't have to manually repeat this process year after year...

## The Solution

The fix is quite easy and I've broken it down into JavaScript and PHP, the two main languages I use for projects.

### JavaScript

Replace the static year `2018` with `new Date().getFullYear()`

For example, on this site I do something similar to the following...

```javascript
const currentYear = new Date().getFullYear()

<p className="centered">
  &copy; {currentYear} Chris Baucom. All rights reserved.
</p>
```

### PHP

Replace the static year `2018` with `<?php echo date("Y"); ?>` or if you use Laravel, `{{ date('Y') }}`

#### That's all folks! Happy New Year!!!
