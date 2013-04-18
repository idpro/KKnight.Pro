{{{
  "title" : "Remove Trailing Whitespace Automatically",
  "tags"  : [ "st2", "editor" ],
  "category" : "Sublime Text 2",
  "date" : "03-19-2013"
}}}

So, we want to help out with a piece of open source software, we want to write clean code, we don't want to piss off the developers we work with on a daily basis... yet when you remove a snippet you keep leaving that ugly trailing white space.

Or you remove a line and it keeps that tab at the beginning. 

We all know it's annoying to switch back and forth between tabs and spaces (you like one, but the core code you contribute to uses the other). Well, I'm here to try and help you, as long as you're using Sublime Text 2 that is.

## The Setup

The first part is super easy. Removing white space when you save. Just add this snippet to your `Preferences → Settings - User`:  

	"trim_trailing_white_space_on_save": true

Now, this is great and all, but what about when you start working with that README file that's all in markdown and those trailing spaces are actually needed to make line breaks? Again, pretty simple fix.

`Preferences → Browse Packages...`

Then just navigate to your User directory (or create one if it doesn't exist) and create a new file called `Markdown.sublime-settings` (you can do this same trick with any other language specific settings you'd like to create).

Inside of `Markdown.sublime-settings` file you will need the following:

	{
		"trim_trailing_white_space_on_save": false
	}

Now anything that isn't a Markdown file will trim all trailing white spaces and random tabs or spaces between lines of code to make everything very neat and tidy.

## Switching from Tabs to Spaces and back

This one is my favorite. It solves two problems for me. 

First, it helps if you work with other developers who may or may not notice that they're using two space soft tabs, versus 4 space hard tabs, or they just don't care. This makes cleaning up slightly messy code a breeze.

Second, it helps switch back and forth between tabs or spaces, depending on your personal preferences and those of the code owner's preferences.

`View → Indentation → Convert Indentation to Spaces`  
`View → Indentation → Convert Indentation to Tabs`

These two options will let you covert all tabs or spaces to the opposite. First set your favorite default (mine is 2 space soft tab) and choose the type of conversion you'd like to make. It will go through and clean up all the tabs and spaces for you.

I've also added in a keyboard shortcut to reindent all of the code to be properly formatted. Just open up `Preferences → Key Bindings - User` and add this line to the array:   

	{ "keys": ["super+shift+r"], "command": "reindent" , "args": {"single_line": false} }

## Conclusion

Now, if you're using ST2, there's no reason why you shouldn't be able to keep your code clean and maintainable and follow the requirements of contributing, or working on the same codeset within a team.

