## [Cloned from manilarome](https://github.com/manilarome/the-glorious-startpage)

## Keybindings

+ <kbd>alt + S</kbd> - toggles dashboard
+ <kbd>alt + E</kbd> - toggles web menu
+ <kbd>alt + X</kbd> - toggles weather screen
+ <kbd>Escape</kbd> - close panels/toggles web menu
+ <kbd>Backspace</kbd> - toggles search box

## Swipe gestures

+ <kbd>swipe right</kbd> - opens web menu
+ <kbd>swipe left</kbd> - opens dashboard
+ <kbd>swipe up</kbd> - opens weather screen
+ <kbd>swipe down</kbd> - opens search box

## Quick search

+ `r/` + `subreddit name` will open the subreddit.
+ `w/` + `search query` to search in wikipedia.
+ `u/` + `search query` to search for an image/photo in unsplash.
+ `a/` + `search query` to search a product in amazon.
+ `e/` + `search query` to search a product in ebay.
+ `y/` + `search query` to search a video in youtube.
+ `n/` + `comic id` to search a "comic" in a certain "comic" website.

## Customization and Settings

#### Changing the colors, blur strength, and animation speed on-the-fly

+ Open the dashboard by clicking the settings button on the dock.
+ Change the color and blur strength by setting it on the `Theme Engine` section.
+ Color settings supports `#RGB`, `#RRGGBB`, and `#RRGGBBAA`.
+ Blur strength settings only allows integer with `px` suffix.
+ Animation speed supports `s` and `ms`. 

#### Adding more buttons on the web menu

Add more buttons or web shortcuts in web menu by editing the `webSites` array in `js/config.js`. Make sure to put an icon with `svg` format for the shortcut in `assets/webcons/` folder. 

```js
const webSites = [
	{
		site: 'Reddit',
		icon: 'reddit',
		url: 'https://reddit.com/',
		category: 'social'
	},
	...
]
```

#### Adding more buttons on the dock

To add more web shortcuts/buttons in the dock, you have to edit the `dockSites` array in `js/config.js`. Make sure to put an icon with `svg` format for the shortcut in `assets/webcons/` folder.

```js
const dockSites = [
	{
		site: 'Reddit',
		icon: 'reddit',
		url: 'https://reddit.com/'
	},
	...
]
```

#### Adding more search engine in selection

Add more search engine in selection by editing the `searchEngines` object in `js/config.js`. Make sure to follow the format below:

```js
const searchEngines = {
	'duckduckgo': {
		name: 'Duckduckgo',
		prefix: 'https://duckduckgo.com/?q='
	},
	...
}
```

#### Adding more quick search urls

Add more quick search shortcuts by editing the `quickSearchData` object in `js/config.js`. Make sure to follow the format below:

```js
const quickSearchData = {
	'r/': {
		urlPrefix: 'https://reddit.com/r/'
	},
	...
```

#### Set your OpenWeatherMap API key

Setting up your OpenWeatherMap credential is a breeze. 

+ If you don't have an API key, follow this guide:

	How to get a credentials for the weather forecast?

	- OpenWeatherMap is the weather provider, so go to OpenWeatherMap's [website](https://home.openweathermap.org/).
	- Register, log-in, and then go [here](https://home.openweathermap.org/api_keys) to generate your very own API keys.

+ After this you can choose two locator modes - `Geolocation` and `City`.
+ In City Mode, you have to get your City ID in OpenWeatherMap website.
+ While `Geolocation` mode offers GPS tracking. You don't need to get an ID. Note that you must allow the location permission request.
+ Put your API key in the `Weather Settings`.
+ It's recommended to still put your City ID if you plan to use the `geolocation` mode.
+ Apply.

**Note:**

+ If you're using firefox and you're planning to use the `geolocation`, make sure to set the value of `geo.provider.network.url` to `https://location.services.mozilla.com/v1/geolocate?key=test` in `about:config`. *Google changed its policies, so now it requires a valid API key when accessing their geolocation service. This tells us that you need a valid API key in place of* `%GOOGLE_LOCATION_SERVICE_API_KEY%`. <sup>[Citation](https://stackoverflow.com/questions/61032115/unknown-error-acquiring-position-geolocationpositionerror-code-2-firefox-linux).</sup>

+ If you're on mobile, make sure to enable your GPS and allow the location permission if you want to use `geolocation`.

+ If you just set the startpage locally, the location permission will always pop-up even if you already accept/denied it. It's better to run it on a web server.


#### Changing the default search engine

Google is the default search engine of the search bar, if you want to change it to DuckDuckGo or something:

+ Open the dashboard by clicking the settings button on the dock.
+ Find the `Search Engine` section and select your preferred search engine.
+ Set it as default.

#### Changing the profile picture

+ Replace the `user.png` image file in `assets/`.

#### Changing the background image

The background image changes based on time.

+ Change the background images in `assets/backgrounds/`.
+ Make sure that it is in a `webp` format. 
+ A lower resolution of each images are also required.
