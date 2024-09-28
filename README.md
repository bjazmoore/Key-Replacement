# Key Replacement
Version 0.1.1

Key Replacement Plugin is a Publii Plugin that replaces specific keys with designated text strings in the HTML output form Publii.

**Note:** This plugin DOES NOT replace or even enable much of the functionality of the commercially (at a very fair price) Smart Replacer plugin available from the folks who make Publii possible.  I recommend their plugin for anything that involves more than a simple AAA -> BBB type replacement.  Get it here: [Smart Replacer Plugin](https://marketplace.getpublii.com/plugins/smart-replacer/)

## Download

Download the plugin in zip file format: [Key_Replacement.zip](https://github.com/bjazmoore/Key-Replacement/releases/download/0.1.0/Key.Replacement.zip)

## Installing

Install the plugin as you would any other Publii Plugin.  Instructions for installing plugins is located [**here**](https://getpublii.com/docs/plugins.html).

## Usage

1. After installing the plugin go to "Tools & Plugins" in the Publii main menu and locate the plugin.  Activate it by flipping the toggle switch as shown below.

![figure 0](https://github.com/user-attachments/assets/660adeb7-af73-48d8-9463-f7c219d54c12)

2. Click on the Plugin and create rules.  Shown in the image below are three rules.

![figure 1](https://github.com/user-attachments/assets/6fefccb9-bb9c-414d-b95d-03e09fe38efd)

Rules can be simple replacement of one short string with another you might use all the time.  Do you want to inject a `<div>` with a class - you can do that also.  Don't forget to close the `<div>` - right.  
**Warning - DO NOT USE double quotation marks in the replacement text.  The parser has trouble working with it.**

3. Use your new keys (they are like shortcodes in other CMS) in your posts and/or pages as shown in the image below.

![figure 2](https://github.com/user-attachments/assets/058543db-8bdd-4f82-8b21-207add902e6b)

4. If you are injecting a class via a `<div>` or other element - add the class to your custom CSS (presuming that is the reason for the class).  By the way - I recommend using classes and not injecting CSS directly into your page.  It is easy, it is maintainable and it i reusable.

![figure 3](https://github.com/user-attachments/assets/0571f27f-dfa3-47dc-9ab2-d1a22b128f6b)

## Results

In this image you can see the class has been applied and the replaement text has been injects into the paragraph also.

![figure 4](https://github.com/user-attachments/assets/83137528-2558-4690-b455-f155cedbfd5c)

Check out the page under the inspector.  You can see the `<div>` that was added.

![figure 5](https://github.com/user-attachments/assets/28b81d77-b05e-4776-8e50-c18d788fb239)

## Warnings

No software is perfect.  This was slapped together in a day.  I would imaging there are use cases that it cannot handle and issues that will cause it to crash.  It is probably a good idea to backup your data before rendering with this plugin.  

Also - Remember that double quotations will crash the injector.  It sounds like a car! :(  
**Use single quotes instead of double quotes.  Double quotes will muck everything up.**

If you need something contained in double quotes between the single quotation marks then use the HTML code `&quot;`!
