class Config {

	constructor() {
		this.getQuickSearchData = this.getQuickSearchData.bind(this);
		this.getSearchEngines = this.getSearchEngines.bind(this);
		this.getWebSites = this.getWebSites.bind(this);
		this.getDockSites = this.getDockSites.bind(this);
	}

	getQuickSearchData = () => {
		const quickSearchData = {
			'r/': {
				urlPrefix: 'https://reddit.com/r/'
			},
			'w/': {
				urlPrefix: 'https://wikipedia.org/wiki/'
			},
			'u/': {
				urlPrefix: 'https://unsplash.com/s/photos/'
			},
			'a/': {
				urlPrefix: 'https://amazon.com/s?k='	
			},
			'e/': {
				urlPrefix: 'https://ebay.com/sch/?_nkw='
			},
			'y/': {
				urlPrefix: 'https://youtube.com/results?search_query='
			},
			'n/': {
				urlPrefix: 'https://nhentai.net/g/'	
			}
		};

		return quickSearchData;
	}
	

	getSearchEngines = () => {

		const searchEngines = {
			'google': {
				name: 'Google',
				prefix: 'https://www.google.com/search?q='
			},
			'duckduckgo': {
				name: 'Duckduckgo',
				prefix: 'https://duckduckgo.com/?q='
			},
			'ecosia': {
				name: 'Ecosia',
				prefix: 'https://www.ecosia.org/search?q='
			},
			'yahoo': {
				name: 'Yahoo',
				prefix: 'https://search.yahoo.com/search?p='
			},
			'bing': {
				name: 'Bing',
				prefix: 'https://www.bing.com/search?q='
			}
		};

		return searchEngines;
	}

	getWebSites = () => {
		// Web menu
		// A list of websites that will be generated and put on the web menu
		const webSites = [
			{
				site: 'Calendar',
				icon: 'calendar',
				url: 'https://calendar.google.com/calendar/b/1/r',
				category: 'social'
			},
			{
				site: 'Gmail Z',
				icon: 'gmail',
				url: 'https://mail.google.com/mail/u/0/#inbox',
				category: 'social'
			},
			{
				site: 'Gmail M',
				icon: 'gmail',
				url: 'https://mail.google.com/mail/u/1/#inbox',
				category: 'social'
			},
			{
				site: 'GDrive Z',
				icon: 'gdrive',
				url: 'https://drive.google.com/drive/u/0/my-drive',
				category: 'cloud'
			},
			{
				site: 'GDrive M',
				icon: 'gdrive',
				url: 'https://drive.google.com/drive/u/1/my-drive',
				category: 'cloud'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'media'
			},
			{
				site: 'Youtube Music',
				icon: 'ytm',
				url: 'https://music.youtube.com/',
				category: 'media'
			},
			{
				site: 'Google Keep',
				icon: 'keep',
				url: 'https://keep.google.com/u/1/',
				category: 'information'
			},
			{
				site: 'Facebook',
				icon: 'facebook',
				url: 'https://facebook.com/',
				category: 'social'
			},
			{
				site: 'Twitter',
				icon: 'twitter',
				url: 'https://twitter.com/',
				category: 'social'
			},
			{
				site: 'Twitch',
				icon: 'twitch',
				url: 'https://twitch.tv/',
				category: 'media'
			},
			{
				site: 'Discord',
				icon: 'discord',
				url: 'https://discord.com/',
				category: 'social'
			},
			{
				site: 'Messenger',
				icon: 'messenger',
				url: 'https://messenger.com/',
				category: 'social'
			},
			{
				site: 'Outlook',
				icon: 'outlook',
				url: 'https://outlook.live.com/mail/0/inbox',
				category: 'social'
			},
			{
				site: 'TOM',
				icon: 'tom',
				url: 'https://otakumode.com/search?mode=shop&category=&keyword=&sort=new&page=1',
				category: 'shopping'
			},
			{
				site: 'Shiny Colors',
				icon: 'shinycolors',
				url: 'https://shinycolors.enza.fun/gasha',
				category: 'games'
			},
			{
				site: 'GxB2',
				icon: 'gxb2',
				url: 'https://girlsh5.carolgames.com/play/',
				category: 'games'
			},
			{
				site: 'Floatplane',
				icon: 'floatplane',
				url: 'https://www.floatplane.com/channel/linustechtips/home',
				category: 'media'
			},
			{
				site: 'Nyaa',
				icon: 'nyaa',
				url: 'https://nyaa.si/',
				category: 'downloads'
			},
			{
				site: 'Nyaa Sukebei',
				icon: 'nyaa',
				url: 'https://sukebei.nyaa.si/',
				category: 'downloads'
			},
			{
				site: 'Anidex',
				icon: 'anidex',
				url: 'https://anidex.info/',
				category: 'downloads'
			},
			{
				site: 'Jellyfin',
				icon: 'jellyfin',
				url: 'http://192.168.1.146:8096',
				category: 'media'
			},
			{
				site: 'DSM',
				icon: 'dsm',
				url: 'https://192.168.1.214:4891/',
				category: 'information'
			},
			{
				site: 'Download Station',
				icon: 'download',
				url: 'https://192.168.1.214/download/',
				category: 'downloads'
			},
			{
				site: 'Deezloader RMX',
				icon: 'deezloader',
				url: 'http://192.168.1.146:1730',
				category: 'downloads'
			},
			{
				site: 'Jackett',
				icon: 'jackett',
				url: 'http://192.168.1.146:9117/UI/Dashboard',
				category: 'downloads'
			},
			{
				site: 'qBitTorrent',
				icon: 'qbittorrent',
				url: 'http://192.168.1.146:8080',
				category: 'downloads'
			},
			{
				site: 'LANraragi',
				icon: 'lanraragi',
				url: 'http://192.168.1.146:3000',
				category: 'downloads'
			},
			{
				site: 'Baka BT',
				icon: 'bakabt',
				url: 'https://www.bakabt.me/',
				category: 'downloads'
			},
			{
				site: 'Disney+',
				icon: 'disney',
				url: 'https://www.disneyplus.com/series/the-simpsons/3ZoBZ52QHb4x',
				category: 'media'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'development'
			}
		];

		return webSites;
	}

	getDockSites = () => {
		// Dock
		// A list of websites that will be generated and put on the dock
		const dockSites = [
			{
				site: 'OzBargain',
				icon: 'ozbargain',
				url: 'https://www.ozbargain.com.au/deals'
			},
			{
				site: 'MangaDex',
				icon: 'mangadex',
				url: 'https://mangadex.org/updates/'
			},
			{
				site: 'TOM',
				icon: 'tom',
				url: 'https://otakumode.com/search?mode=shop&category=&keyword=&sort=new&page=1',
			},
			{
				site: 'Google Keep',
				icon: 'keep',
				url: 'https://keep.google.com/u/1/',
			},
			{
				site: 'Gmail M',
				icon: 'gmail',
				url: 'https://mail.google.com/mail/u/1/#inbox'
			},
			{
				site: 'Deezloader',
				icon: 'deezloader',
				url: 'http://192.168.1.146:1730'
			},
			{
				site: 'qBitTorrent',
				icon: 'qbittorrent',
				url: 'http://192.168.1.146:8080'
			},
			{
				site: 'LANraragi',
				icon: 'lanraragi',
				url: 'http://192.168.1.146:3000'
			},
			{
				site: 'Jellyfin',
				icon: 'jellyfin',
				url: 'http://192.168.1.146:8096'
			},
			{
				site: 'Floatplane',
				icon: 'floatplane',
				url: 'https://www.floatplane.com/channel/linustechtips/home',
			}
		];

		return dockSites;
	}
}
