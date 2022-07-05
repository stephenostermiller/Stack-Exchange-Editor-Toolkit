// ==UserScript==
// @name Stack Exchange Auto Editor
// @author Stephen Ostermiller
// @author Cameron Bernhardt (AstroCB)
// @developer Jonathan Todd (jt0dd)
// @developer sathyabhat
// @contributor Unihedron
// @license MIT
// @version 1.0.15
// @namespace https://github.com/stephenostermiller/Stack-Exchange-Auto-Editor
// @updateURL https://github.com/stephenostermiller/Stack-Exchange-Auto-Editor/raw/master/editor.meta.js
// @downloadURL https://github.com/stephenostermiller/Stack-Exchange-Auto-Editor/raw/master/editor.user.js
// @description Fixes common grammar and usage mistakes on Stack Exchange posts with a click
// @match https://*.stackexchange.com/posts/*
// @match https://*.stackexchange.com/questions/*
// @match https://*.stackexchange.com/review/*
// @match https://*.stackoverflow.com/*posts/*
// @match https://*.stackoverflow.com/*questions/*
// @match https://*.stackoverflow.com/review/*
// @match https://*.askubuntu.com/posts/*
// @match https://*.askubuntu.com/questions/*
// @match https://*.askubuntu.com/review/*
// @match https://*.superuser.com/posts/*
// @match https://*.superuser.com/questions/*
// @match https://*.superuser.com/review/*
// @match https://*.serverfault.com/posts/*
// @match https://*.serverfault.com/questions/*
// @match https://*.serverfault.com/review/*
// @match https://*.mathoverflow.net/posts/*
// @match https://*.mathoverflow.net/questions/*
// @match https://*.mathoverflow.net/review/*
// @match https://*.stackapps.com/posts/*
// @match https://*.stackapps.com/questions/*
// @match https://*.stackapps.com/review/*
// @grant GM_addStyle
// ==/UserScript==
(()=>{
	const MISSPELLINGS = Object.assign({},...(
		"3D|alot:a lot|abcense,absance,absense,absentse:absence|acceptible:acceptable|accesable,accesible,accessable:accessible|accomodate,acommodate:accommodate|accomodation:accommodation|acheive,achive:achieve|acknowlege,aknowledge:acknowledge|acquaintence,aquaintance:acquaintance|adquire,aquire:acquire|aquit:acquit|acerage,acrage:acreage|accross:across|adress:address|adultary:adultery|advertisment:advertisement|adviseable,advizable:advisable|agression:aggression|agressive:aggressive|AJAX|alegiance,allegaince,allegience:allegiance|allmost:almost|amatuer,amature:amateur|angular js,angularjs:AngularJS|annualy,anually:annually|Ansible|Apache|API|appaling:appalling|aparent,aparrent,apparant,apparrent:apparent|apparantly:apparently|appearence:appearance|artic:arctic|arent:aren't|arguement:argument|assasination:assassination|assesment:assessment|athiest,athist:atheist|aweful,awfull:awful|AWK|akward:awkward|AWS|Axios|basicly:basically|beatiful:beautiful|becuase:because|becomeing:becoming|begining:beginning|beleive,belive:believe|bellweather:bellwether|benifit:benefit|big query,bigquery:BigQuery|biogrophay:biography|bizzare:bizarre|blue host:Bluehost|blue tooth:Bluetooth|bouy:buoy|bouyant:buoyant"+
		"|buisness:business|cake php:CakePHP|calender:calendar|camoflage,camoflague:camouflage|cant:can't|Carribean:Caribbean|Cassandra|catagory:category|caugt,cauhgt:caught|cemetary:cemetery|cent os:CentOS|changable:changeable|cheif:chief|Cisco|CLI|Clojure|CMake|CMS|code igniter,code ignitor,codeignitor:CodeIgniter|cold fusion:ColdFusion|collaegue,collegue:colleague|colum:column|comming:coming|comission,commision:commission|comitted,commited:committed|commitee:committee|comparsion:comparison|compell:compel|completly:completely|conceed:concede|congradulate:congratulate|concience:conscience|consciencious:conscientious|concious,consious:conscious|concensus:consensus|contraversy:controversy|convinient:convenient|cooly:coolly|Cordova|CORS|couldnt:couldn't|cPanel|CSS|CSV|curiousity:curiosity|dacquiri,daquiri:daiquiri|DB2|Debian|decieve:deceive|definate:definite|definately,definatly,definitly:definitely|Delphi|desparate:desperate|DHCP|didnt:didn't|diffrence:difference|digital ocean:DigitalOcean|dilema:dilemma|dissapear:disappear|dissapoint:disappoint|disasterous:disastrous|desease:disease|devide:divide|Django|DLL|DNS|Dockerfile|doesnt:doesn't|DOM|dont:don't|Dovecot|dream host:DreamHost|drunkeness:drunkenness"+
		"|Drupal|dumbell:dumbbell|dynamo db:DynamoDB|EC2|ecma script:ECMAScript|ecstacy:ecstasy|Emacs|embarass:embarrass|embarassed,embarrased:embarrassed|endevour:endeavour|English|enterpreneur:entrepreneur|enviroment:environment|equiptment:equipment|excede:exceed|Excel|exilerate:exhilarate|existance:existence|experiance:experience|extreem:extreme|face book:Facebook|familar:familiar|facinating:fascinating|firey:fiery|finaly:finally|fire base:Firebase|fire fox:Firefox|florescent,flourescent:fluorescent|foriegn:foreign|Fortran|fourty:forty|foward:forward|free bsd:FreeBSD|freind:friend|FTP|fullfil,fullfill:fulfil|futher:further|guage:gauge|GCC|GIF|Git|git hub:GitHub|git lab:GitLab|glamourous:glamorous|go daddy:GoDaddy|Google|goverment:government|Gradle|Grails|grammer:grammar|graph ql:GraphQL|gratefull,greatful:grateful|grat:great|garantee,garanty,garentee:guarantee|gaurd:guard|GUI|guidence:guidance|GWT|hadnt:hadn't|Hadoop|happend:happened|ha proxy,haproxy:HAProxy|harrass:harass|harrassment:harassment|harddisk,hdd:hard disk|Haskell|hasnt:hasn't|havent:haven't|hed:he'd|hes:he's|heighth,heigth:height|halp:help|halping:helping|halps:helps|heres:here's|Heroku|hetzneronline:Hetzner Online|heirarchy:hierarchy"+
		"|high charts:Highcharts|honourary:honorary|host gator:HostGator|HTML|HTML5|HTTP|HTTPS|humerous,humourous:humorous|higeine,hiygeine,hygeine,hygene,hygine:hygiene|hipocrit:hypocrite|I|I'd|I'll|i o,io:I/O|ignorence:ignorance|IIS|immitate:imitate|imediately,immediatly:immediately|incidently:incidentally|independant:independent|indite:indict|indispensible:indispensable|innoculate:inoculate|inteligence,intelligance:intelligence|IntelliJ|interupt:interrupt|IONOS|iOS|IP|iPhone|iPod|IPv4|IPv6|irresistable:irresistible|isnt:isn't|Jakarta|Java|java script:JavaScript|JBoss|JDBC|Jenkins|jewelery:jewelry|JMeter|Joomla|JPA|JPEG|JPG|jQuery|js fiddle:JSFiddle|JSON|JSP|judgement:judgment|JUnit|Jupyter|JWT|Kafka|Keras|kernal:kernel|Kivy|knowlege:knowledge|Kotlin|Kubernetes|KVM|Laravel|LDAP|liesure:leisure|lenght:length|liason:liaison|lib gdx,libgdx:libGDX|libary,liberry:library|lisence:license|lightening:lightning|LINQ|Linux|liquidweb:Liquid Web|Lua|Lucene|LVM|mac os:macOS|Magento|maintainance,maintnance:maintenance|maria db:MariaDB|marshmellow:marshmallow|mat lab:MATLAB|Matplotlib|Maven|medecine:medicine|medeval,medevil,mideval:medieval|momento:memento|MFC|Microsoft|mightnt:mightn't|millenia:millennia"+
		"|milennium,millenium:millennium|miniture:miniature|miniscule:minuscule|mischevious,mischevous,mischievious:mischievous|mispell,misspel:misspell|Mockito|mongo db:MongoDB|ms build:MSBuild|mustnt:mustn't|MVC|MVVM|my sql:MySQL|Nagios|name cheap:Namecheap|NAT|neccessary,necessery:necessary|nieghbor:neighbor|net beans:NetBeans|networksolutions:Network Solutions|NFS|Nginx|NHibernate|neice:niece|NLP|no sql:NoSQL|noticable:noticeable|num py:NumPy|OAuth|ocassion,occassion:occasion|occasionaly,occassionally:occasionally|occure:occur|occured:occurred|occurance,occurence,occurrance:occurrence|occuring:occurring|OK|omision,ommision:omission|OOP|open cv:OpenCV|open gl:OpenGL|open ldap:OpenLDAP|open ssl:OpenSSL|open vpn:OpenVPN|orignal:original|ORM|our's:ours|outragous:outrageous|Pandas|paralel,parralel:parallel|parliment:parliament|passtime,pasttime:pastime|pay pal:PayPal|PDF|PDO|percieve:perceive|Perl|perseverence:perseverance|persistant:persistent|personel,personell:personnel|Phillipines:Philippines|PHP|phpMyAdmin|peice:piece|plagerize:plagiarize|playright,playwrite:playwright|pls,plz,plze:please|PNG|politican:politician|POP3|posession,possesion:possession|PostgreSQL|potatos:potatoes|power shell:PowerShell"+
		"|preceed:precede|prefered:preferred|prefering:preferring|presance:presence|prime faces:PrimeFaces|privelege,priviledge:privilege|professer:professor|Prolog|promiss:promise|pronounciation:pronunciation|prufe:proof|protestor:protester|publically:publicly|persue:pursue|py charm:PyCharm|py game:Pygame|py qt:PyQt|PyQt5|py spark:PySpark|py torch:PyTorch|Qt|quarentine:quarantine|questionaire,questionnair:questionnaire|que:queue|rabbit mq:RabbitMQ|readible:readable|realy:really|reciept:receipt|recieve:receive|reccommend,recomend:recommend|referance,refrence:reference|refered:referred|refering:referring|rehersal:rehearsal|relevent,revelant:relevant|religius,religous:religious|rember,remeber:remember|repitition:repetition|resistence:resistance|responsability:responsibility|restarant,restaraunt:restaurant|rime:rhyme|rythem,rythm:rhythm|RSpec|RxJS|Samba|SAS|SciPy|SDK|secratary,secretery:secretary|sieze:seize|Selenium|sence:sense|SEO|seperate:separate|sargent:sergeant|serverfault,SF:Server Fault|shant:shan't|share point:SharePoint|shes:she's|Shopify|shouldnt:shouldn't|silver light:Silverlight|similer:similar|skilfull:skilful|SMTP|Solr|speach,speeche:speech|sprite kit:SpriteKit|SQL|sql alchemy:SQLAlchemy"+
		"|SQLite|square space:Squarespace|SSH|SSIS|SSL|SE,stackexchange:Stack Exchange|SO,stackoverflow:Stack Overflow|STL|strenght:strength|strech:stretch|succesful,successfull,sucessful:successful|succint:succinct|supercede:supersede|supress:suppress|suprise,surprize:surprise|SVG|SVN|swift ui:SwiftUI|TCP|tendancy:tendency|tensor flow:TensorFlow|ty:thank you|thx:thanks|thats:that's|theres:there's|therefor:therefore|theyd:they'd|theyll:they'll|theyre:they're|theyve:they've|threshhold:threshold|throught:through|TLS|tomatos:tomatoes|tommorow,tommorrow:tomorrow|tounge:tongue|truely:truly|Tucows|twelth:twelfth|Twitter|type script:TypeScript|tyrany:tyranny|ubant,ubanto,ubantoo,ubantu,ubantuu,ubnto,ubntoo,ubntu,ubntuu,ubuno,ubunoo,ubunt,ubunto,ubuntoo,ubuntuu,ubunu,ubunut,ubunuto,ubunutoo,ubunutu,ubunutuu,ubunuu,ubutn,ubutno,ubutnoo,ubutnu,ubutnuu,ubuto,ubutoo,ubutu,ubutuu,unbunt,unbunto,unbuntoo,unbuntu,unbuntuu:Ubuntu|UICollectionView|ui kit:UIKit|UITableView|ui view:UIView|UIViewController|underate:underrate|unforseen:unforeseen|unfortunatly:unfortunately|Unix|untill:until|upholstry:upholstery|URI|uri's,uris:URIs|URL|url's,urls:URLs|USB|usible:useable|UWP|vaccum,vaccuum,vacume:vacuum|VBA|vb script,vbscript:VBScript"+
		"|vehical:vehicle|viscious,visious:vicious|VPN|VPS|WCF|weve:we've|waether:weather|wierd:weird|welfair,wellfare:welfare|werent:weren't|whatll:what'll|whatre:what're|whats:what's|whatve:what've|wheres:where's|whereever:wherever|wether:whether|wich:which|whod:who'd|wholl:who'll|whove:who've|wi fi,wifi:WiFi|willfull:willful|win vista,windows vista:Windows Vista|win xp,windows xp:Windows XP|win forms:WinForms|withold:withhold|wont:won't|woo commerce:WooCommerce|word press:WordPress|wouldnt:wouldn't|wpengine:WP Engine|WPF|writeing,writting:writing|Xamarin|XAML|XAMPP|Xcode|XML|YAML|Yii|youd:you'd|youll:you'll|youre:you're|youve:you've|your's:yours|you tube:YouTube|Zend|ZFS"
	).split("|").map(l=>{
		var r = l.split(/:/)
		if(r.length>2) throw "Extra colons in " + l
		var toc = [], cor=r[r.length-1]
		if (!toc) throw "Empty correction: " + l
		if (r.length==2) toc = r[0].split(/,/)
		if (/[A-Z]/.test(cor)) toc.push(cor.toLowerCase())
		if (!toc.length) throw "No correction for " + cor
		return Object.assign({},...toc.map(w=>({[w]:cor})))
	}))

	const CONTENT_FREE_WORDS = "(?:\\:\\-?\\)|a|able|about|advance|advi[cs]e|accept|again|all|am|amazing|and|answers?|answered|any|anybody|anyone|appreciate[ds]?|assist|assistance|are|attention|bad|be|being|been|below|body|can|cheers?|code|concepts?|could|days?|directions?|does|doubts?|english|errors?|every|everybody|everyone|examples?|first|fix|fixe[ds]|fixing|folks?|following|for|friends?|get|gives?|good|grammar|grateful|great|greatly|guys?|guidance|have|helps?|helping|here|highly|hint|hopes?|hoping|hours|how|i|i'?[md]|i'?ve|ideas?|if|illuminate|illumination|in|is|issues?|it|just|kind|kindly|know|let|likely|little|look|looking|lucky?|many|may|me|might|" +
	"missing|months?|most|much|need|new|no|one?|or|over|obvious|offer|offered|offering|our|out|over|please|point|pointers?|post|problems?|provide[ds]?|questions?|query|queries|really|regarding|regards|resolve[ds]?|resolving|right|seek|small|so|solve|solutions?|some|someone|somebody|something|sorry|spelling|suggestions?|sure|still|stuck|takes?|thanks?|that|the|these|things?|that|that's|this|time|tiny|tips?|to|towards?|trie[ds]|try|trying|understand|up|us|vote[ds]?|useful|very|we|well|weeks?|what|will|with|works?|would|your?)"

	// Top 100 from https://dnsinstitute.com/research/popular-tld-rank/ plus "tld"
	const TLD = /(?:\\?\.com?)?\\?\.(?:tld|com|net|ru|org|info|in|ir|uk|au|de|ua|ca|tr|co|jp|vn|cn|gr|fr|tk|tw|id|br|io|xyz|it|nl|pl|za|us|eu|mx|ch|biz|me|il|es|online|by|xn--p1ai|nz|kr|cz|ro|cf|ar|club|my|tv|kz|cl|pk|pro|site|th|se|sg|cc|be|rs|top|ga|ma|hu|ae|su|dk|hk|at|ml|shop|store|ng|np|no|app|live|pe|ph|ie|lk|gq|edu|fi|ai|sa|pw|tech|bd|sk|ke|pt|az|space|mk|ge|tn|lt|dev|to|gov)/

	const SUBDOM = /(?:(?:[a-zA-Z0-9\-]+|[\*\%])\\?\.)*/
	const REST_OF_URL = /(?:[\/\$\{][^ ]*?)?/
	const PORT_OPT = /(?:\:[0-9]+)?/
	const USER_OPT = /(?:[a-zA-Z\-\.]+\@)?/
	const PRE_CODE_FORMAT = /(^|\s)([_\*\"\'\(\<]*)/
	const POST_CODE_FORMAT = /([_\*\"\'\`\;\,\.\?\:\!\)\>]*(?=\s|$))/
	const ANSWER_WORDS = /(?:answers?|assistance|advice|examples?|fix|help|hints?|guidance|ideas?|point|pointers?|tips?|suggestions?)/
	const BETWEEN_WORDS = "[, \\-\\/]+"
	const EXAMPLE_DOMAIN = new RegExp(
		'((?:^|[^A-Za-z0-9\\-\\.])' + SUBDOM.source + ')(' +
			// Made entirely of example-like words
			// Followed by an optional number or single letter
			/(?:(?:(?:1st|2nd|3rd|4th|a{3,}|an|abcd?|abcdef?|address|admin|another|any|apps?|back|bad|bah|banks?|bar|blah?|cdns?|clients?|company|companies|child|children|custom|customers?|def|default|dev|development|domains?|emails?|end|ever|evil|examples?|fake|fallback|first|foo|fourth|front|ghi|good|guys?|hacks?|hackers?|harm|harmless|hello|hi|home|hosts?|hosters?|info|information|last|list|local|mail|mailing|main|malicious|mine|more|my|names?|new|of|old|other|our|package|pages?|parents?|places?|primary|private|production|protected|proxy|public|recipients?|safe|samples?|second|secondary|servers?|services?|sites?|shops?|some|ssl|stores?|stuff|tertiary|tests?|their|things?|third|this|tls|unsafe|urls?|web|what|where|x{3,}|xyz|your|(?:(?<=[a-zA-Z\-])co)|(?:a(?=[a-zA-Z\-]{3,})))-?)+(?:-?(?:[0-9]+|[A-Za-z]))?)/.source +
		')('+TLD.source +')'+
		/((?=\.?(?:[\;\,\:\/_\"\*'\)\<\>\?\!\` \t\$]|$)))/.source
	,'gmi')
	const WORD_OR_NON = /(?:[A-Za-z0-9]+)|(?:[^A-Za-z0-9]+)/gmi
	const WORD= /[A-Za-z0-9]+/gmi

	var rules = [
		{
			expr: /\b(https?)[ \t]*:[ \t]*\/[ \t]*\/[ \t]*([a-zA-Z0-9\-]+)[ \t]*\./gi,
			replacement: "$1://$2.",
			reason: "fix URL",
			context: ["fullbody","title"]
		},{
			// Remove blank lines from beginning
			expr: /^[\n\r]+/gi,
			replacement: "",
			reason: "formatting",
			context: ["fullbody"]
		},{
			expr: EXAMPLE_DOMAIN,
			replacement: (m,pre,name,tld,post)=>{
				var escape = "";
				if (/^\\/.test(tld)){
					escape="\\"
					tld = tld.substr(1)
				}
				if (!/^example$/i.test(name)){
					if (context.exampleDomains[normalizeDomain(tld)] != 1){
						name = name.replace(/-example-/gi,'-').replace(/-?example-?/gi,'')
						tld='.example'
					} else {
						name = "example"
					}
				}
				return pre+name+escape+tld+post
			},
			reason: "use example domain",
			context: ["title","text","code","url"]
		},{
			// https://meta.stackexchange.com/questions/1777/what-html-tags-are-allowed-on-stack-exchange-sites
			expr: /.+/g,
			replacement: m=>{
				if (/^<\s*\/?\s*(?:a|b|blockquote|br|code|del|dd|dl|dt|em|h1|h2|h3|h4|h5|h6|hr|i|img|kbd|li|ol|p|pre|s|strike|strong|sub|sup|ul)(?:\s|\>|\/)/i.test(m)){
					// allowed tags
					return m
				}
				if(/^<\!\-\-\s*(?:language|language-all|begin snippet|end snippet|summary|End of automatically inserted text)/.test(m)){
					// Special comments
					return m
				}
				return "`"+m+"`"
			},
			reason: 'Code format HTML',
			context: ["html"]
		},{
			expr: /^``$/g,
			replacement: "",
			reason: "Remove empty code",
			context: ["code"]
		},{
			// Insert spaces after commas
			expr: /,([[a-z])/g,
			replacement: ", $1",
			reason: "grammar"
		},{
			// Remove spaces before punctuation
			expr: /[ ]+([,\!\?\.\:](?:\s|$))/gm,
			replacement: "$1",
			reason: "grammar"
		},{
			// Remove double spaces after periods
			expr: /([,\!\?\.\:]) {2,}/gm,
			replacement: "$1 ",
			reason: "grammar"
		},
		capitalizeWord(".htaccess","\\.?htacc?ess?"),
		capitalizeWordAndVersion("iOS", null, " "),
		capitalizeWord("Node.js","node\\.js"),
		capitalizeWordAndVersion("SQLite"),
		capitalizeWord("UTF-8"),
		capitalizeWordAndVersion("Windows", "win|windows", " "),
		{
			expr: /(^|\s)([A-Za-z][A-Za-z0-9']*)\b(\S|)(?!\S)/gm,
			replacement: (p0,p1,w,p3)=>{
				if (MISSPELLINGS.hasOwnProperty(w)){
					w = MISSPELLINGS[w] // abbreviations or all lower case
				} else {
					var lc = w.toLowerCase()
					if (MISSPELLINGS.hasOwnProperty(lc)){
						var correct = MISSPELLINGS[lc]
						if (/[A-Z]/.test(correct)) w = correct // Always use capitalization proper noun corrections
						else if (/^(?:[A-Z][a-z]+)+$/.test(w)) w = correct[0].toUpperCase() + correct.substr(1) // Match capitalizization of misspelling
						else w = correct // Use lower case correction
					}
				}
				return p1+w+p3
			},
			reason: "spelling"
		},{
			edit: s=>{
				var m, tokens=[], replacements = []
				while (m = WORD_OR_NON.exec(s)){
					tokens.push(m[0])
				}
				for (var i=0; i<tokens.length-2; i++){
					if (WORD.test(tokens[i]) && /^[ \/]+$/.test(tokens[i+1])){
						var lc = (tokens[i] + " " + tokens[i+2]).toLowerCase()
						if (MISSPELLINGS.hasOwnProperty(lc)){
							var original = tokens[i] + tokens[i+1] + tokens[i+2]
							var correct = MISSPELLINGS[lc]
							if (!/[A-Z]/.test(correct) && /^(?:[A-Z][a-z]+)+$/.test(original)) correct = correct[0].toUpperCase() + correct.substr(1) // Match capitalizization of misspelling
							if (correct != original){
								tokens[i] = correct
								tokens[i+1] = ""
								tokens[i+2] = ""
								replacements.push({i:original,o:correct})
							}
						}
					}
				}
				return [replacements.length==0?s:tokens.join(""),replacements]
			},
			reason: "spelling"
		},{
			expr: /(^|\s)c(#|\++|\s|$)/gm,
			replacement: "$1C$2",
			reason: "spelling"
		},{
			expr: /(^|\s)[Ii]'?(m|ve)\b(\S|)(?!\S)/gm,
			replacement: "$1I'$2$3",
			reason: "spelling"
		},{
			expr: new RegExp(
				"(?:[\\.\\!\\?]|\n\n|\r\r|\r\n\r\n|^)[\r\n\t ]*(?:"+ // Required start of sentence or paragraph
					"(?:" + CONTENT_FREE_WORDS + BETWEEN_WORDS + ")*(?:(?:"+[
						"thanks",
						"thank[ \\-]+you"
					].join(")|(?:")+"))"+
					"(?:" + BETWEEN_WORDS + CONTENT_FREE_WORDS + ")*"+
					" *(?:[\\.\\!\\?]|\n\n|\r\r|\r\n\r\n|$)"+ // Required end of sentence or paragraph
					"[ \r\n\t]*"+
				")+","gi"
			),
			replacement: removeLeaveSpace,
			reason: "remove niceties"
		},{
			expr: new RegExp(
				// any help?
				"(?:^| +)(?:"+
					"(?:" + CONTENT_FREE_WORDS + BETWEEN_WORDS + ")*"+
					"(?:any|some)\\s"+ANSWER_WORDS.source+
					"(?:" + BETWEEN_WORDS + CONTENT_FREE_WORDS + ")*"+
					"(?: *\\?)+"+ // Required ending question mark
					"(?: +|$)"+
				")+","gmi"
			),
			replacement: removeLeaveSpace,
			reason: "remove niceties"
		},{
			expr: new RegExp(
				"(?:^| +)(?:"+
					"(?:" + CONTENT_FREE_WORDS + BETWEEN_WORDS + ")*(?:(?:"+[
						// thanks ... answer
						"(?:thanks|(?:thank[ \\-]+you)|hoping|look|looking|someone|somebody|please|kindly|appreciate|need|seek|seeking)(" + BETWEEN_WORDS + CONTENT_FREE_WORDS + ")*" + BETWEEN_WORDS + ANSWER_WORDS.source,
						// hope ... helps
						"(?:hope|hopefully)(" + BETWEEN_WORDS + CONTENT_FREE_WORDS + ")*" + BETWEEN_WORDS + "(?:helps?|helped|fix|fixes|useful)",
						// thanks ... advance
						"(?:thanks|(?:thank[ \\-]+you))(" + BETWEEN_WORDS + CONTENT_FREE_WORDS + ")*" + BETWEEN_WORDS + "(?:advance)",
						// answer ... please
						ANSWER_WORDS.source+"(" + BETWEEN_WORDS + CONTENT_FREE_WORDS + ")*" + BETWEEN_WORDS + "(?:appreciated|good|great|please)",
					].join(")|(?:")+"))"+
					"(?:" + BETWEEN_WORDS + CONTENT_FREE_WORDS + ")*"+
					"(?: *[\\:\\.\\!\\,\\?])*"+ // Optional end of a phrase or sentence
					"(?: +|$)"+
				")+","gmi"
			),
			replacement: removeLeaveSpace,
			reason: "remove niceties"
		},{
			expr: new RegExp(
				"(?:^|(?<=[\\:\\.\\!\\?\\n] *))(?:"+ // end of previous phrase or sentence
					"(?:" + CONTENT_FREE_WORDS + BETWEEN_WORDS + ")*(?:"+
						"(?:help|please|thanks|(?:thank[ \\-]+you))" +
					")(?:" + BETWEEN_WORDS + CONTENT_FREE_WORDS + ")*"+
					"(?: *(?:[\\:\\.\\!\\?\\n]|$)) *"+ // end of a phrase or sentence
				")+","gmi"
			),
			replacement: removeLeaveSpace,
			reason: "remove niceties"
		},{
			expr: /(?:^|[ \t]+)(?:my\s+first\s+question)\s*[\.\!\,\?]?(?:[ \t]+|$)/gmi,
			replacement: removeLeaveSpace,
			reason: "remove niceties"
		},{
			expr: /(?:(?:^|[ \t]+)(?:greetings|cheers|hi|hello|regards|good\s(?:evening|morning|day|afternoon))(?:\s+(?:guys|folks|everybody|everyone|all))?\s*[\.\!\,]?)+(?:[ \t]+|$)/gmi,
			replacement: removeLeaveSpace,
			reason: "remove niceties"
		},{
			expr: /(^|[\.\!\?])[ \\t]*(?:^\**)(edit|edited|updated?):?(?:[\*\:]+)[ \t]*/gmi,
			replacement: "$1",
			reason: "remove niceties"
		},{
			// No lower case at all
			expr: /^((?=.*[A-Z])[^a-z]*)$/g,
			replacement: ($0,$1) => $1[0] + $1.substring(1).toLowerCase(),
			reason: "capitalization",
			context: ["title"]
		},{
			expr: /\[enter image description here\]/g,
			replacement: "[]",
			reason: "formatting"
		},{
			// Capitalize first letter of each line
			expr: /^[a-z]+\s/gm,
			replacement: $0 => $0[0].toUpperCase()+$0.substring(1),
			reason: "capitalization",
			context: ["title"]
		},{
			expr: new RegExp(
				PRE_CODE_FORMAT.source +
				'(' +
					'(?:' +
						'(?:' +
							'(?:' +
								'(?:https?:\\/\\/)?'+ // Optional protocol
								USER_OPT.source +
								'(?:'+
									// example.tld style domains
									'(?:'+SUBDOM.source+'example'+TLD.source +')|'+
									// some.example style domains
									'(?:'+SUBDOM.source+'[a-zA-Z0-9\\-]+\\.(?:example|localhost|invalid|test))|' +
									// IPV6 IP addresses
									/(?:(?:(?:[A-Fa-f0-9]{1,4}:){2,7}[A-Fa-f0-9]{1,4})|(?:[A-Fa-f0-9]{0,4}::[A-Fa-f0-9]{1,4}(?::[A-Fa-f0-9]{1,4}){0,6}))/.source + '|' +
									// IPV4 IP addresses
									/(?:(?:[0-9]{1,3}\.){3}[0-9]{1,3})/.source +
								')'+
							')|(?:' +
								// domains without TLD (like localhost) formatted in URL
								'(?:https?:\\/\\/)' + // Required protocol
								USER_OPT.source +
								'[a-zA-Z0-9]+' + // Host name with no dots
							')' +
						')' +
						PORT_OPT.source +
						REST_OF_URL.source +
					')|(?:' +
						// domains without TLD (like localhost) with port number
						USER_OPT.source +
						'(?:[a-zA-Z0-9\-]*[a-zA-Z]+[a-zA-Z0-9\-]*\\:[0-9]+)' +
						REST_OF_URL.source +
					')|(?:' +
						// email addresses
						'[a-zA-Z0-9\\-_]+\\@(?:[a-zA-Z0-9\\-]+\\.)*[a-zA-Z]+' +
					')' +
				')'+
				POST_CODE_FORMAT.source
			,'gmi'),
			replacement: applyCodeFormat,
			reason: "code format example URL",
			context: ["text","url"]
		},{
			expr: new RegExp(
				PRE_CODE_FORMAT.source +
				'(' +
					'(?:' +
						// File name with common file extension
						'[a-zA-Z0-9\\._\\-\\/\\~\\\\]*'+
						// Extension list from https://fileinfo.com/filetypes/common
						// and https://gist.github.com/ppisarczyk/43962d06686722d26d176fad46879d41
						'\\.(?:1in|1m|1x|3dm|3ds|3g2|3gp|3in|3m|3qt|3x|4th|6pl|6pm|7z|E|ML|_coffee|_js|_ls|a51|abap|accdb|ada|adb|ado|adoc|adp|ads|agda|ahk|ahkl|ai|aif|aj|al|als|ampl|anim|ant|apacheconf|apib|apk|apl|app|applescript|arc|arpa|as|asax|asc|asciidoc|ascx|asd|asf|ash|ashx|asm|asmx|asp|aspx|asset|au3|aug|auk|aux|avi|aw|awk|axd|axi|axml|axs|b|bak|bas|bash|bat|bats|bb|bbx|befunge|bf|bib|bin|bison|bmp|bmx|bones|boo|boot|brd|bro|brs|bsv|builder|bzl|c|c\\+\\+|c\\+\\+-objdump|c\\+\\+objdump|c-objdump|cab|cake|capnp|cats|cbl|cbr|cbx|cc|ccp|ccxml|cdf|cer|ceylon|cfc|cfg|cfm|cfml|cgi|ch|chpl|chs|cirru|cjsx|ck|cl|'
						+'cl2|class|click|clixml|clj|cljc|cljs|cljscm|cljx|clp|cls|clw|cmake|cmd|cob|cobol|coffee|com|command|conf|config|coq|cp|cpl|cpp|cpp-objdump|cppobjdump|cproject|cps|cpy|cql|cr|crdownload|creole|crx|cs|csh|cshtml|csl|cson|csproj|csr|css|csv|csx|ct|ctp|cu|cue|cuh|cur|cw|cxx|cxx-objdump|cy|d|d-objdump|darcspatch|dart|dat|dats|db|db2|dbf|dcl|dcr|ddl|dds|deb|decls|deface|dem|deskthemepack|desktop|dfm|di|diff|dist|dita|ditamap|ditaval|djs|dll|dlm|dm|dmg|dmp|do|doc|dockerfile|docx|doh|dot|dotsettings|dpatch|dpr|druby|drv|dtd|dtx|duby|dwg|dxf|dyalog|dyl|dylan|e|ebuild|ec|ecl|eclass|eclxml|edn|eex|'+
						'eh|el|eliom|eliomi|elm|em|emacs|emberscript|epj|eps|erb|erl|es|es6|escript|ex|exe|exs|f|f03|f08|f77|f90|f95|factor|fan|fancypack|fcgi|feature|filters|fish|fla|flex|flux|flv|fnt|fon|for|forth|fp|fpp|fr|frag|frg|frm|frt|frx|fs|fsh|fshader|fsi|fsproj|fsx|fth|ftl|fun|fx|fxh|fxml|fy|g|g4|gadget|gam|gap|gawk|gco|gcode|gd|ged|gemspec|geo|geojson|geom|gf|gi|gif|glade|glf|glsl|glslv|gml|gms|gnu|gnuplot|go|god|golo|gp|gpx|grace|gradle|graphql|groovy|grt|grxml|gs|gshader|gsp|gst|gsx|gtpl|gv|gvy|gyp|gz|h|h\\+\\+|haml|handlebars|hats|hb|hbs|hcl|heic|hh|hic|hl|hlean|hlsl|hlsli|hpp|hqf|hqx|hrl|hs|hsc|htaccess|htm|html|http|hx|hxsl|hxx|hy|i7x|iced|icl|icns|ico|ics|idc|'+
						'idr|iff|ihlp|ijs|ik|ily|iml|in|inc|indd|ini|inl|ino|ins|intr|io|ipf|ipp|ipynb|irbrc|irclog|iso|iss|ivy|j|jade|jake|jar|java|jbuilder|jelly|jflex|jinja|jl|jpg|jq|js|jsb|jscad|jsfl|jsm|json|json5|jsonld|jsp|jsproj|jss|jsx|key|keychain|kicad_pcb|kid|kit|kml|kmz|krl|ksh|kt|ktm|kts|l|lagda|las|lasso|lasso8|lasso9|latte|launch|lbx|ld|ldml|lds|lean|less|lex|lfe|lgt|lhs|lid|lidr|liquid|lisp|litcoffee|ll|lmi|lnk|lock|log|logtalk|lol|lookml|lpr|ls|lsl|lslp|lsp|ltx|lua|lvproj|ly|m|m3u|m4|m4a|m4v|ma|mak|mako|man|mao|markdown|mask|mat|mata|matah|mathematica|matlab|mawk|max|maxhelp|maxpat|'+
						'maxproj|mcr|md|mdb|mdf|mdpolicy|me|mediawiki|meta|metadata|metal|mid|mim|minid|mir|mirah|mk|mkd|mkdn|mkdown|mkfile|mkii|mkiv|mkvi|ml|ml4|mli|mll|mly|mm|mmk|mms|mo|mod|monkey|moo|moon|mov|mp3|mp4|mpa|mpg|ms|msg|msi|mspec|mss|mt|mtml|mu|muf|mumps|mustache|mxml|mxt|myt|n|nasm|nawk|nb|nbp|nc|ncl|nes|nginxconf|ni|nim|nimrod|ninja|nit|nix|njs|nl|nlogo|no|nproj|nqp|nse|nsh|nsi|nu|numpy|numpyw|numsc|nuspec|nut|ny|obj|objdump|odd|odt|omgrofl|ooc|opa|opal|opencl|org|osm|otf|owl|ox|oxh|oxo|oxygene|oz|p|p6|p6l|p6m|pac|pages|pan|parrot|part|pas|pasm|pat|patch|pb|pbi|pck|pct|pd|pd_lua|pdb|pde|pdf|perl|ph|php|php3|php4|php5|phps|phpt|phtml|pig|pike|pir|pkb|pkg|pkl|pks|pl|pl6|'+
						'plb|plist|plot|pls|plsql|plt|plugin|pluginspec|plx|pm|pm6|pmod|png|po|pod|podsl|podspec|pogo|pony|pot|pov|pp|ppk|ppt|pptx|prc|prefab|prefs|prf|prg|pri|pro|prolog|properties|props|proto|prw|ps|ps1|ps1xml|psc|psc1|psd|psd1|psgi|psm1|pspimage|pt|pub|purs|pwn|pxd|pxi|py|pyde|pyp|pyt|pytb|pyw|pyx|qbs|qml|r|r2|r3|rabl|rake|raml|rar|raw|rb|rbbas|rbfrm|rbmnu|rbres|rbtbar|rbuild|rbuistate|rbw|rbx|rbxs|rd|rdf|rdoc|reb|rebol|red|reds|reek|rest|rg|rhtml|rkt|rktd|rktl|rl|rm|rmd|rno|robot|roff|rom|ron|rpm|rpy|rq|rs|rsh|rss|rst|rsx|rtf|ru|ruby|rviz|s|sage|sagews|sas|sass|sats|sav|sbt|sc|scad|scala|scaml|scd|sce|sch|sci|scm|scpt|scrbl|scss|scxml|sdf|self|sexp|sh|'+
						'sh-session|shader|shen|sig|sitx|sj|sjs|sl|sld|slim|sln|sls|sma|smali|sml|smt|smt2|sp|sparql|spin|sps|sqf|sql|srdf|srt|ss|ssjs|st|stTheme|stan|sthlp|ston|storyboard|sty|styl|sublime-build|sublime-commands|sublime-completions|sublime-keymap|sublime-macro|sublime-menu|sublime-mousemap|sublime-project|sublime-settings|sublime-syntax|sublime-theme|sublime-workspace|sublime_metrics|sublime_session|sv|svg|svh|swf|swift|syntax|sys|t|tab|tac|tar|targets|targz|tcc|tcl|tcsh|tea|tex|textile|tf|tga|tgz|thm|thor|thrift|thy|tif|tiff|tm|tmCommand|tmLanguage|tmPreferences|tmSnippet|tmTheme|tml|tmp|tmux|toast|toc|toml|tool|topojson|torrent|tpl|tpp|'+
						'ts|tst|tsx|ttf|ttl|tu|twig|txl|txt|uc|udf|ui|unity|uno|upc|ur|urdf|urs|uue|ux|v|vala|vapi|vark|vb|vba|vbhtml|vbproj|vbs|vcd|vcf|vcl|vcxproj|veo|vert|vh|vhd|vhdl|vhf|vhi|vho|vhost|vhs|vht|vhw|vim|viw|vob|volt|vrx|vsh|vshader|vssettings|vue|vxml|w|watchr|wav|webidl|weechatlog|wiki|wisp|wl|wlt|wlua|wma|wmv|wpd|wps|wsdl|wsf|wsgi|wxi|wxl|wxs|x10|x3d|xacro|xaml|xc|xcodeproj|xht|xhtml|xi|xib|xlf|xliff|xlr|xls|xlsx|xm|xmi|xml|xojo_code|xojo_menu|xojo_report|xojo_script|xojo_toolbar|xojo_window|xpl|xproc|xproj|xpy|xq|xql|xqm|xquery|xqy|xrl|xs|xsd|xsjs|xsjslib|xsl|xslt|xsp-config|xtend|xul|y|yacc|yaml|yaml-tmlanguage|yang|yap|yml|yrl|yuv|yy|zcml|zep|zimpl|zip|zipx|zmpl|zone|zpl|zsh)'+
					')|(?:'+
						// Directory ending in slash (or backslash)
						'[a-zA-Z0-9\\._\\-\\~]*[\\/\\\\](?:[a-zA-Z0-9\\._\\-\\~]+[\\/\\\\])+'+
					')|(?:'+
						// Directory starting in slash
						'(?:\\/[a-zA-Z0-9\\._\\-\\~]+){2,}'+
					')|(?:'+
						// Windows file starting with drive letter
						'(?:[A-Z]\\:\\\\)[a-zA-Z0-9\\._\\-\\~\\\\]+'+
					')' +
				')' +
				POST_CODE_FORMAT.source
			,"gmi"),
			replacement: applyCodeFormat,
			reason: "code format file name",
			context: ["text"]
		},{
			// Remove trailing white space
			expr: /[ \t]+(\r\n|\n|$)/gm,
			replacement: "$1",
			reason: "formatting",
			context: ["fullbody","title"]
		},{
			// Remove multiple new lines
			expr: /(?:\r|\n|\r\n){3,}/gm,
			replacement: "\n\n",
			reason: "formatting",
			context: ["fullbody"]
		}
	]

	function applyCodeFormat (m,prefix,start,url,suffix){
		start=start||''
		suffix=suffix||''
		var code='`'
		if ((m = url.search(/[_\*\"\'\`\;\,\.\?\:\!\)\>]+$/)) != -1){
			suffix = url.substr(m) + suffix
			url = url.substr(0,m)
		}
		if (start && /[\_\*\"\']+/.test(start) && suffix.startsWith(start)){
			suffix=suffix.substr(start.length)
			start = ""
		} else if (url.length<=4 && !url.match(/::/)){
			code=""
		} else if (url.match(/^node\.js$/i)){
			code=""
		}
		return prefix+start+code+url+code+suffix
	}

	function normalizeDomain(d){
		return d.replace(/\\/g,"").toLowerCase()
	}

	function removeLeaveSpace(s){
		var start = "", end=""
		if (/^[\.\!\?]/.test(s)){
			start = s[0]
			s = s.substr(1)
		}
		if(/^(?:\r\r|\n\n|\r\n\r\n)(\s|\S)*[ \t\r\n]$/.test(s)) end="\n\n"
		else if(/^[ \t\r\n](\s|\S)*(?:\r\r|\n\n|\r\n\r\n)$/.test(s)) end="\n\n"
		else if(/^[\r\n](\s|\S)*[ \t\r\n]$/.test(s)) end="\n"
		else if(/^[ \t\r\n](\s|\S)*(?:\r|\n|\r\n)$/.test(s)) end="\n"
		else if(/^[ \t\r\n](\s|\S)*[ \t\r\n]$/.test(s)) end=" "
		return start+end
	}

	// Create a rule for converting the given word into its exact given case.
	// The regex parameter is optional, if none is given, it is auto-created from the word
	// The auto created regex inserts white space for camel case words, a custom regex
	// should be created if other white space removal desired
	function capitalizeWord(word, re){
		if (!re) re = word
		re = re.replace(/[ \-]+/g, "[\\s\\-]*")
		re = re.replace(/([A-Z][a-z]+)([A-Z])/g, "$1\\s*$2")
		return {
			expr: new RegExp("(^|\\s)(?:"+re+")\\b(\\S|)(?!\\S)","igm"),
			replacement: "$1"+word+"$2",
			reason: "spelling"
		}
	}

	// Create a rule for word capitalization same as above, but followed by
	// a numeric version. The separator can be used to Specify whether or
	// not a space in included in the output: FooBar8 vs FooBar 8
	function capitalizeWordAndVersion(word, re, separator){
		if (!separator) separator = ""
		if (!re) re = word
		re = re.replace(/ /g, "\\s*")
		re = re.replace(/([A-Z][a-z]+)([A-Z])/g, "$1\\s*$2")
		return {
			expr: new RegExp("(^|\\s)(?:"+re+")"+(separator==" "?"\\s*":"")+"([0-9]+)\\b(\\S|)(?!\\S)","igm"),
			replacement: "$1"+word+separator+"$2$3",
			reason: "spelling"
		}
	}
	function tokenizeMarkdown(str){
		var tokens=[], m,
		startRx = new RegExp("(" + [
			/^ {0,3}([\~]{3,}|[\`]{3,})/, // start of code fence (group 1 and 2)
			/\<(?:[^\>\r\n]+)[\>\r\n]/, // HTML tag (group 3)
			/^(?: {0,3}>)*(?: {4}|\t)/, // start of indented code (group 4)
			/`/, // start of single backtick code (group 5)
			/\]\([^\)\r\n]+\)/, // link (group 6)
			/^ {0,3}\[[^ \t\r\n]+\]\:\s[^\r\n]*/, // footnote link (group 7)
			/(?:_+|\*+|[\'\"\(])?https?\:\/\/[^ \t\r\n]*/ // URL (group 8)
		].map(r=>r.source).join(')|(') + ")","gim"),
		codeRx = new RegExp("((?:" + [
			/(?: {0,3}>)*(?: {4}|\t).*(?:[\r\n]+(?: {0,3}>)*(?: {4}|\t).*)*/, // indented block
			/`[^`\r\n]*`/, // single back ticks
			/<\s*pre(?:\s[^>]*)?>[\s\S]*?<\s*\/\s*pre\s*>/, // HTML pre tags
			/<\s*code(?:\s[^>]*)?>[\s\S]*?<\s*\/\s*code\s*>/, // HTML code tags
		].map(r=>r.source).join(')|(?:') + "))","gi"),
		lastEnd=0
		while(m = (startRx.exec(str))){
			var thisStart=m.index
			if (m.index-lastEnd>0){
				tokens.push({type:"text",content:str.slice(lastEnd,m.index)})
				lastEnd=m.index
			}
			if (m[1]){
				// code fence
				var fence = m[2],
				endRx = new RegExp("^ {0,3}"+fence,"gm")
				endRx.lastIndex = lastEnd+fence.length
				if (m=(endRx.exec(str))){
					var end = m.index+fence.length
					tokens.push({type:"code",content:str.slice(lastEnd,end)})
					lastEnd=end
				} else {
					tokens.push({type:"code",content:str.substr(lastEnd)})
					return tokens
				}
			} else if (m[3] || m[4] || m[5]){
				// html tag OR indented code OR single backtick code
				codeRx.lastIndex = lastEnd
				var codeM=codeRx.exec(str)
				if (codeM && codeM.index == lastEnd){
					tokens.push({type:"code",content:codeM[1]})
					lastEnd+=codeM[1].length
				} else if (m[3]) {
					// Other HTML tags
					tokens.push({type:"html",content:m[3]})
					lastEnd+=m[3].length
				} else {
					tokens.push({type:"error",content:str.substr(lastEnd)})
					return tokens
				}
			} else if (m[6] || m[7]){
				var link = m[6] || m[7]
				tokens.push({type:"link",content:link})
				lastEnd+=link.length
			} else if (m[8]){
				tokens.push({type:"url",content:m[8]})
				lastEnd+=m[8].length
			} else {
				tokens.push({type:"error",content:str.substr(lastEnd)})
				return tokens
			}
			startRx.lastIndex=lastEnd
		}
		if (lastEnd<str.length)tokens.push({type:"text",content:str.substr(lastEnd,str.length)})
		return tokens
	}

	function getDefaultData(){
		return {
			editCount:0, reasons:[], replacements:[]
		}
	}

	function applyRules(d, input, type){
		rules.forEach(rule=>{
			var context = rule.context || ["title","text"]
			if (context.includes(type)){
				var ruleEditCount = 0,
				output = input
				if (rule.edit){
					var o = rule.edit(input)
					output = o[0]
					for (var i=0; i<o[1].length; i++){
						o[1][i].r = rule.reason;
						d.replacements.push(o[1][i])
					}
				} else {
					for(let m of input.matchAll(rule.expr)){
						var a = m[0]
						var b = a.replace(rule.expr, rule.replacement)
						if (a != b){
							d.replacements.push({i:a,o:b,r:rule.reason})
							ruleEditCount++
						}
					}
					output = input.replace(rule.expr, rule.replacement)
				}
				if (output != input){
					d.editCount+=ruleEditCount
					d.reasons.push(rule.reason)
					input = output
				}
			}
		})
		return input
	}

	function recordExampleDomainsInput(d,input){
		if (!input) return;
		for(let m of input.matchAll(EXAMPLE_DOMAIN)){
			var name=normalizeDomain(m[2]), tld=normalizeDomain(m[3]),domain=name+tld
			if (!d.exampleDomains.hasOwnProperty(domain)){
				d.exampleDomains[domain] = 1
				if (!d.exampleDomains.hasOwnProperty(tld)) d.exampleDomains[tld]=0
				d.exampleDomains[tld]++
			}
		}
	}

	function recordExampleDomains(d){
		for (var i=0; i<d.bodyTokens.length; i++){
			if (/^(?:text|code|url)$/.test(d.bodyTokens[i].type)){
				recordExampleDomainsInput(d,d.bodyTokens[i].content)
			}
		}
		if (d.title) recordExampleDomainsInput(d, d.title)
	}

	var context

	function edit(d){
		context = d
		d.exampleDomains = {}
		do {
			var editsMade = d.replacements.length

			d.body = applyRules(d, d.body, "fullbody")
			d.bodyTokens = tokenizeMarkdown(d.body)
			if (!Object.keys(d.exampleDomains).length) recordExampleDomains(d)
			for (var i=0; i<d.bodyTokens.length; i++){
				d.bodyTokens[i].content = applyRules(d, d.bodyTokens[i].content, d.bodyTokens[i].type)
			}
			d.body = d.bodyTokens.map(t=>t.content).join("")

			if (d.title) d.title = applyRules(d, d.title, "title")

			editsMade = d.replacements.length - editsMade
		} while(editsMade>0)

		return d
	}

	function buildSummary(summary, reasons){
		var used={}
		summary.split(/, */).map(i=>{if(i)used[i]=1})
		for (var i=0; i<reasons.length; i++){
			// If this reason not already added, and overall summary not getting too long
			if (!used.hasOwnProperty(reasons[i]) && summary.length < 200) {
				summary += (summary.length==0?"":", ") + reasons[i]
				used[reasons[i]]=1
			}
		}
		return summary
	}

	function ui(){
		// Access to jQuery via dollar sign variable
		var $ = unsafeWindow.jQuery

		GM_addStyle(`
			.autoEditorButton{margin-left:0.5em;background:url("//i.imgur.com/79qYzkQ.png") center / contain no-repeat}
			.autoEditorButton:hover{background-image:url("//i.imgur.com/d5ZL09o.png")}
			button.autoEditorButton{width:2em;height:2em}
			.autoEditorInfo{height:100%;width:100%;left:0;top:0;position:fixed;background:#000A;z-index:99999;padding:1em}
			.autoEditorInfo .content{max-height:100%;max-width:1000px;margin:0 auto;overflow:auto;background:var(--white);padding:.5em}
			.autoEditorInfo *+h1{margin-top: 1em}
			.autoEditorInfo table{border-spacing.5em;margin-bottom:2em;}
			.autoEditorInfo th{font-weight:bold}
			.autoEditorInfo button.close{float:right}
			.autoEditorInfo th,.autoEditorInfo td{border:1px solid black;padding:0.5em}
			.autoEditorInfo td:not(:last-child){font-family:monospace;white-space:pre-wrap}
			.autoEditorInfo .diff{font-family:monospace;white-space:pre-wrap;margin-bottom:2em;max-width:600px}
			.autoEditorInfo ins{background:#cfc}
			.autoEditorInfo del{background:#fcc}
			.autoEditorInfo .editsMade{position:relative}
			.autoEditorInfo .ws::after{content:"∙";position:absolute;transform:translate(-8px, 0px);color:var(--yellow-400)}
			.autoEditorInfo .wn::before{content:"↲";position:absolute;color:var(--yellow-400)}
			.autoEditorInfo .wt::after{content:"→";position:absolute;transform:translate(-22px, 0px);color:var(--yellow-400)}
		`)

		//Preload icon alt
		new Image().src = '//i.imgur.com/79qYzkQ.png'
		new Image().src = '//i.imgur.com/d5ZL09o.png'

		$('body').keyup(e=>{
			if(e.key=="Escape"){
				var tki = $('.autoEditorInfo')
				if (tki.length){
					tki.remove()
					e.preventDefault()
					return false
				}
			}
			if(e.key=="e" && e.ctrlKey){
				var button = $(e.target).closest('.wmd-container').find('.autoEditorButton')
				if (button.length){
					e.preventDefault()
					button.trigger('click')
					return false
				}
			}
		})

		function cssColorVar(v){
			// get var then convert from hsv to rgb because passing hsv string to animate doesn't work
			return $('<div>').css("color",window.getComputedStyle(document.body).getPropertyValue(v))[0].style.color;
		}

		function addClick(button,d){
			return button.click(function(e){
				e.preventDefault()
				if (d.lastrun){
					// Second time button clicked, show a report
					if($('.autoEditorInfo').length) return // already open
					var td = runTests()
					var info = $('<div class=content>').append($("<button class=close>Close</button>").click(()=>info.parent().remove())), table
					d.info=info
					if(d.getBody() != d.lastrun.body || d.getTitle() != d.lastrun.title){
						info.append("<h1>Manual edits detected</h1>").append($("<button>Re-run auto-edits</button>").click(()=>replaceFromUi(d)))
					}
					if (!d.replacements.length){
						info.append($("<h1>No auto-edits</h1>"))
					} else {
						info.append($("<h1>Auto-edits</h1>"))
						table = $("<table class=editsMade>").append($("<tr><th>Found</th><th>Replaced</th><th>Reason</th></tr>"))
						$.each(d.replacements, (x,r)=>{
							if (r.i.search(/^[ \t]+/)!=-1 && r.o.search(/^[ \t]+/)!=-1){
								r.i=r.i.replace(/^[ \t]+/,"")
								r.o=r.o.replace(/^[ \t]+/,"")
							}
							table.append($("<tr>").append($("<td>").html(visibleSpace(r.i))).append($("<td>").html(visibleSpace(r.o))).append($("<td>").html(r.r)))
						})
						info.append(table)
					}
					d.diffsfrom=$("<select class=diffsfrom><option value=initial>Before all edits</option><option selected value=before>Before last auto-edit</option></select>").on("change",(()=>doDiffs(d)))
					d.diffsto=$("<select class=diffsto><option value=lastrun>After last auto-edit</option><option value=now>Now</option></select>").on("change",(()=>doDiffs(d)))
					info.append($("<h1>Diffs from </h1>").append(d.diffsfrom).append(" to ").append(d.diffsto))
					info.append(d.diffs = $("<div class=diff>"))
					doDiffs(d)
					if (!td.failures.length){
						info.append($("<h1>All " + td.passed + " unit tests passed!</h1>"))
					} else {
						info.append($("<h1>" + td.failures.length + " unit test failures:</h1>"))
						table = $("<table>").append($("<tr><th>Input</th><th>Output</th><th>Expected</th></tr>"))
						$.each(td.failures, (x,f)=>{
							table.append($("<tr>").append($("<td>").html(visibleSpace(f.method+"("+f.input+")"))).append($("<td>").html(visibleSpace(f.actual))).append($("<td>").html(visibleSpace(f.expected))))
						})
						info.append(table)
						info.append($("<div>" + td.passed + " of " +td.count + " unit tests passed.</div>"))
					}
					$('body').prepend($('<div class=autoEditorInfo>').append(info).click(e=>{
						if($(e.target).is('.autoEditorInfo')){
							e.preventDefault()
							$(e.target).remove()
							return false
						}
					}))
				} else {
					// First time button clicked, do all the replacements
					replaceFromUi(d)
				}
				return false
			})
		}

		function doDiffs(d){
			recordText(d, "now")
			var diffsfrom=d.diffsfrom.val(),
			diffsto=d.diffsto.val()
			try {
				var title = ""
				if(d[diffsfrom].title) title += "<h1>" + diff2html(d[diffsfrom].title, d[diffsto].title) + "</h1>"
				d.diffs.html(title + diff2html(d[diffsfrom].body, d[diffsto].body))
			} catch (x){
				d.diffs.html("")
				d.diffs.append($("<pre>").text("Diffs failed to render\n" + x.toString() + "\n\n" + x.stack))
			}
		}

		function replaceFromUi(d){
			if (d.info) d.info.parent().remove()
			recordText(d, "before")
			d.body = d.before.body
			d.title = d.before.title
			edit(d)
			// Flash red or green depending on whether edits were made
			d.flashMe.animate({backgroundColor:d.editCount==0?cssColorVar('--red-100'):cssColorVar('--green-100')},10)
			// Then back to white
			d.flashMe.animate({backgroundColor:cssColorVar('--white')})
			// Update values in UI
			d.setTitle(d.title)
			d.setBody(d.body)
			d.setSummary(buildSummary(d.getSummary(),d.reasons))
			recordText(d,"lastrun")

		}

		function needsButton(editor){
			if (!$(editor).is(':visible')) return false // not showing up
			if ($(editor).find('.autoEditorButton').length > 0) return false // Already has editor
			return true
		}

		function recordText(d,name){
			d[name]={
				title: d.getTitle(),
				body: d.getBody()
			}
		}

		// Continually monitor for newly created editing widgets
		setInterval(()=>{
			$('.wmd-button-bar').each(function(){
				if (needsButton(this)){
					var d = getDefaultData(),
					editContainer = $(this).parents('.inline-editor, .post-form, .post-editor').last(),
					bodyBox = editContainer.find('.js-post-body-field'),
					summaryBox = editContainer.find('.js-post-edit-comment-field'),
					titleBox = editContainer.find('.js-post-title-field')
					d.getTitle = function(){
						return titleBox.length?titleBox.val():''
					}
					d.setTitle = function(s){
						if (!titleBox.length) return
						titleBox.val(s)
						titleBox[0].dispatchEvent(new Event('keyup')) // Cause title display to be updated
					}
					d.getBody = function(){
						return bodyBox.val()
					}
					d.setBody = function(s){
						bodyBox.val(s)
						bodyBox[0].dispatchEvent(new Event('keypress')) // Cause markdown re-parse
					}
					d.flashMe = bodyBox
					d.getSummary = function(){
						return summaryBox.val()
					}
					d.setSummary = function(s){
						summaryBox.val(s)
					}
					editContainer.find('.wmd-spacer').last().before($('<li class=wmd-spacer>')).before(addClick($('<li class="wmd-button autoEditorButton" title="Auto edit Ctrl+E">'),d))
					recordText(d,"initial")
				}
			})
			$('.js-stacks-editor-container').each(function(){
				if (needsButton(this)){
					var d = getDefaultData(),
					editContainer = $(this).parents('.inline-editor, .post-form, .post-editor').last(),
					editArea = editContainer.find('.js-post-body-field'),
					summaryBox = editContainer.find('.js-post-edit-comment-field')
					d.getTitle = function(){
						return "" // This style editor only used for answers, so never a title
					}
					d.setTitle = function(s){} // no-op
					d.getBody = function(){
						return editArea.val()
					}
					d.setBody = function(s){
						editArea.val(s)
					}
					d.flashMe = editContainer.find('.js-editor')
					d.getSummary = function(){
						return summaryBox.val()
					}
					d.setSummary = function(s){
						summaryBox.val(s)
					}
					editContainer.find('.js-editor-btn').last().before(addClick(
						$('<button class="autoEditorButton s-editor-btn js-editor-btn" title="Auto edit Ctrl+E">'),d
					)).before(($('<div class="flex--item w16 is-disabled" data-key=spacer>')))
					recordText(d,"initial")
				}
			})
			$('.js-edit-comment-form, .comment-form').each(function(){
				if (needsButton(this)){
					var d = getDefaultData(),
					postEditor = $(this),
					editArea = postEditor.find('textarea')
					d.getTitle = function(){
						return "" // This style editor only used for comments, so never a title
					}
					d.setTitle = function(s){} // no-op
					d.getBody = function(){
						return editArea.val()
					}
					d.setBody = function(s){
						editArea.val(s)
					}
					d.flashMe = editArea
					d.getSummary = function(){
						return ""
					}
					d.setSummary = function(){} // no-op, no summary for comment edits
					$(this).find('.form-error').before(addClick(
						$('<button class="autoEditorButton s-editor-btn js-editor-btn" title="Auto edit">'),d
					))
					recordText(d,"initial")
				}
			})
		},200)

		function visibleSpace(s){
			s=escHtml(s)
			s=s.replace(/( )/g,"<span class=ws>$1</span>")
			s=s.replace(/(\r)/g,"<span class=wr>$1</span>")
			s=s.replace(/(\n)/g,"<span class=wn>$1</span>")
			s=s.replace(/(\t)/g,"<span class=wt>$1</span>")
			return s
		}
	}

	function main(){
		var results = runTests()
		console.log(results)
		process.exit(results.failures.length)
	}

	function escHtml(s) {
		return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
	}

	/*
	 * Javascript Diff Algorithm
	 *	By John Resig (http://ejohn.org/)
	 *	Modified by Chu Alan "sprite"
	 *
	 * Released under the MIT license.
	 *
	 * More Info:
	 *	http://ejohn.org/projects/javascript-diff-algorithm/
	 */
	function diff2html(o, n){
		function diff(o, n){
			var ns = {}, os = {}, i

			for (i = 0; i < n.length; i++){
				if (ns[n[i]] == null) ns[n[i]] = {rows:[], o: null}
				ns[n[i]].rows.push(i)
			}

			for (i = 0; i < o.length; i++){
				if (os[o[i]] == null) os[o[i]] = {rows:[], n: null}
				os[o[i]].rows.push(i)
			}

			for (i in ns){
				if (ns[i].rows.length == 1 && typeof(os[i]) != "undefined" && os[i].rows.length == 1){
					n[ns[i].rows[0]] = {text: n[ns[i].rows[0]], row: os[i].rows[0]}
					o[os[i].rows[0]] = {text: o[os[i].rows[0]], row: ns[i].rows[0]}
				}
			}

			for (i = 0; i < n.length - 1; i++){
				if (n[i].text != null && n[i+1].text == null && n[i].row + 1 < o.length && o[n[i].row + 1].text == null && n[i+1] == o[n[i].row + 1]){
					n[i+1] = {text: n[i+1], row: n[i].row + 1}
					o[n[i].row+1] = {text: o[n[i].row+1], row: i + 1}
				}
			}

			for (i = n.length - 1; i > 0; i--){
				if (n[i].text != null && n[i-1].text == null && n[i].row > 0 && o[n[i].row - 1].text == null &&	 n[i-1] == o[n[i].row - 1]){
					n[i-1] = {text: n[i-1], row: n[i].row - 1}
					o[n[i].row-1] = {text: o[n[i].row-1], row: i - 1}
				}
			}

			return {o: o, n: n}
		}

		o = o.replace(/\s+$/, '')
		n = n.replace(/\s+$/, '')

		var out = diff(o == "" ? [] : o.split(/\s+/), n == "" ? [] : n.split(/\s+/)),
		str = "", i,
		oSpace = o.match(/\s+/g) || [],
		nSpace = n.match(/\s+/g) || []
		oSpace.push("\n")
		nSpace.push("\n")

		if (out.n.length == 0){
			for (i = 0; i < out.o.length; i++){
				str += '<del>' + escHtml(out.o[i]) + oSpace[i] + "</del>"
			}
		} else {
			if (out.n[0].text == null){
				for (n = 0; n < out.o.length && out.o[n].text == null; n++){
					str += '<del>' + escHtml(out.o[n]) + oSpace[n] + "</del>"
				}
			}

			for (i = 0; i < out.n.length; i++){
				if (out.n[i].text == null){
					str += '<ins>' + escHtml(out.n[i]) + nSpace[i] + "</ins>"
				} else {
					var pre = ""

					for (n = out.n[i].row + 1; n < out.o.length && out.o[n].text == null; n++){
						pre += '<del>' + escHtml(out.o[n]) + oSpace[n] + "</del>"
					}
					str += " " + escHtml(out.n[i].text) + nSpace[i] + pre
				}
			}
		}
		return str
	}

	function runTests(){
		var td = {failures:[],count:0,passed:0}

		function expectEql(method, actual, expected, input, debug){
			td.count++
			if (actual != expected){
				td.failures.push({method:method,actual:actual,expected:expected,input:input,debug:JSON.stringify(debug)})
			} else {
				td.passed++
			}
		}

		function testEdit(input, output, titleOutput){
			if (!titleOutput) titleOutput = output
			var d=getDefaultData(),
			testTitle = !/[\r\n`\*\%]| {4}|~~~/.test(input) // No title tests multi-line or markdown
			if (testTitle) d.title=input
			d.body=input
			edit(d)
			expectEql("error in tokenizeMarkdown", d.bodyTokens.map(o=>o.type=='error'?'error':'').join(''), '', input, d.bodyTokens)
			if (testTitle) expectEql("editTitle", d.title, titleOutput, input, d)
			expectEql("editBody", d.body, output, input, d)
		}

		[
			{i:'    fooexample.org, barexample.org',o:'    foo.example, bar.example'},
			{i:'    server example-stuff.org;\n    more-example-stuff.org',o:'    server stuff.example;\n    more-stuff.example'},
			{i:'127.0.0.1',o:'`127.0.0.1`',t:'127.0.0.1'},
			{i:'1:2:3abc:4de:5f:6:7:8',o:'`1:2:3abc:4de:5f:6:7:8`',t:'1:2:3abc:4de:5f:6:7:8'},
			{i:'1::2',o:'`1::2`',t:'1::2'},
			{i:'::1',o:'`::1`',t:'::1'},
			{i:'**Edit:** Lorum ipsum.',o:'Lorum ipsum.'},
			{i:'Double!  Space?  After:  Any.  Punctuation.',o:"Double! Space? After: Any. Punctuation."},
			{i:'Edit: Lorum ipsum.',o:'Lorum ipsum.'},
			{i:'Lorum git://github.com/foo/bar.git ipsum.',o:'Lorum git://github.com/foo/bar.git ipsum.'},
			{i:'Lorum https : / / stackexchange.com ipsum',o:'Lorum https://stackexchange.com ipsum'},
			{i:'Missing,space,after,comma',o:"Missing, space, after, comma"},
			{i:'Multiple\n\n\nblank\n\n\n\nlines\n\n    even\n\n\n    in\n\n\n\n    code',o:"Multiple\n\nblank\n\nlines\n\n    even\n\n    in\n\n    code"},	{i:'\r\n\n\nStarts with\nnew lines.',o:"Starts with\nnew lines."},
			{i:'NO, NEED, TO+ YELL!',o:'NO, NEED, TO+ YELL!',t:'No, need, to+ yell!'},
			{i:'Trailing \nwhite\t\nspace \t',o:"Trailing\nwhite\nspace"},
			{i:'Trailing white space\t \t',o:"Trailing white space"},
			{i:'Vaccuum: beatiful, tomatos! tommorow?',o:'Vacuum: beautiful, tomatoes! tomorrow?'},
			{i:'Visit site.tld',o:'Visit `example.tld`',t:'Visit example.tld'},
			{i:'What ?',o:"What?"},
			{i:'Wierd surprize marshmellow.',o:'Weird surprise marshmallow.'},
			{i:'`foo.org$ examplesite.org`',o:'`foo.example$ site.example`'},
			{i:"`sub\\.other-web\\.app`",o:"`sub\\.example\\.app`"},
			{i:"`1sthack\\.com\\.fr`",o:"`example\\.com\\.fr`"},
			{i:'*.abc.online',o:'`*.example.online`'},
			{i:'%.xxxxx.biz',o:'`%.example.biz`'},
			{i:'`ourHome.net: ourHost.net`',o:'`ourHome.example: ourHost.example`'},
			{i:'`sub.another-example.com.au lorum sub.pages.com.au`',o:'`sub.another.example lorum sub.pages.example`'},
			{i:'`some-example-domain.edu, foo.edu`',o:'`some-domain.example, foo.example`'},
			{i:'`example.co.uk, sub.example2.co.uk`',o:'`example.co.uk, sub.2.example`'},
			{i:'`example.za - sub.someexample1.za`',o:'`example.za - sub.some1.example`'},
			{i:'`bardev.tech sub.sslhack.tech`',o:'`bardev.example sub.sslhack.example`'},
			{i:'`www.website1.net`',o:'`www.example.net`'},
			{i:'`www.webpageA.net`',o:'`www.example.net`'},
			{i:'Lorum ```code``` ipsum',o:'Lorum `code` ipsum'},
			{i:'`my-domain.com:8080`',o:'`example.com:8080`'},
			{i:'On domain-a.com, domain-b.com, and domain-c.com',o:'On `domain-a.example`, `domain-b.example`, and `domain-c.example`',t:'On domain-a.example, domain-b.example, and domain-c.example'},
			{i:'(Found on some-x.com)',o:'(Found on `example.com`)',t:'(Found on example.com)'},
			{i:'`*.site1.jp`',o:'`*.example.jp`'},
			{i:'`site99.ru$path`',o:'`example.ru$path`'},
			{i:'"http://www.testx.net"',o:'`http://www.example.net`',t:'"http://www.example.net"'},
			{i:'*some.client-of-mine.org*',o:'`some.example.org`'},
			{i:'**https://evilcompany.co.pl/path**',o:'`https://example.co.pl/path`'},
			{i:'**https://fourthproxy.kr/path**,',o:'`https://example.kr/path`,'},
			{i:'**https://good-guys.ph/path**.',o:'`https://example.ph/path`.'},
			{i:'**https://yourstuff.com.ir/path**?',o:'`https://example.com.ir/path`?'},
			{i:'user@my.tld',o:'`user@example.tld`',t:'user@example.tld'},
			{i:'testuser@gmail.com',o:'`testuser@gmail.com`',t:'testuser@gmail.com'},
			{i:'"testuser@gmail.com"',o:'`testuser@gmail.com`',t:'"testuser@gmail.com"'},
			{i:"'testuser@gmail.com'",o:'`testuser@gmail.com`',t:"'testuser@gmail.com'"},
			{i:'**testuser@gmail.com**',o:'`testuser@gmail.com`'},
			{i:'*testuser@gmail.com*',o:'`testuser@gmail.com`'},
			{i:'`http://someco.com/`',o:'`http://example.com/`'},
			{i:"http:// example.com:81/",o:'`http://example.com:81/`',t:"http://example.com:81/"},
			{i:"http://localhost:8080/foo",o:'`http://localhost:8080/foo`',t:"http://localhost:8080/foo"},
			{i:"http://a.test/",o:'`http://a.test/`',t:"http://a.test/"},
			{i:"localhost:8080/foo",o:'`localhost:8080/foo`',t:"localhost:8080/foo"},
			{i:'From admin@goodstore.xyz.',o:'From `admin@example.xyz`.',t:'From admin@example.xyz.'},
			{i:'(https://new.oldplace.tld/path?query)',o:'(`https://new.example.tld/path?query`)',t:'(https://new.example.tld/path?query)'},
			{i:'`www.test-domain-1.net`',o:'`www.example.net`'},
			{i:'first letter upper',o:'first letter upper',t:'First letter upper'},
			{i:'http://mydomain.com/',o:'`http://example.com/`',t:'http://example.com/'},
			{i:'.htaccess',o:'`.htaccess`',t:'.htaccess'},
			{i:'/path/file.txt',o:'`/path/file.txt`',t:'/path/file.txt'},
			{i:'foo.html',o:'`foo.html`',t:'foo.html'},
			{i:'new-test.js',o:'`new-test.js`',t:'new-test.js'},
			{i:'in/a/directory/',o:'`in/a/directory/`',t:'in/a/directory/'},
			{i:'/fully/qualified/directory/',o:'`/fully/qualified/directory/`',t:'/fully/qualified/directory/'},
			{i:'/from/root/directory',o:'`/from/root/directory`',t:'/from/root/directory'},
			{i:'win\\file.exe',o:'`win\\file.exe`',t:'win\\file.exe'},
			{i:'C:\\path\\file.ppk',o:'`C:\\path\\file.ppk`',t:'C:\\path\\file.ppk'},
			{i:'<tag>',o:'`<tag>`',t:'<tag>'},
			{i:'<code>email@domain.com</code>', o:'<code>email@example.com</code>'},
			{i:'Lorum:\n    email@domain.com',o:'Lorum:\n    email@example.com'}
		].forEach(io=>{
			testEdit(io.i, io.o, io.t)
		})

		;[
			// These shouldn't get auto-edited
			"IM",
			"Add",
			"It doesn't have any suggestions.",
			"so",
			'12,345',
			'1:3',
			'90% hit rate',
			'A ... b',
			'Edit',
			'I.E.',
			'i.e.',
			'special thanks to',
			'my-example.tld.sub.sub',
			'So you can for example write:',
			'test invalid localhost example',
			'https://serverfault.com/',
			'`example.com`',
			'`sub.example.com`',
			'`example.co.uk`',
			'`ac.uk`',
			'`co.uk`',
			'https://apple.com',
			'lorum-example.net',
			'this/that/other',
			'`^www\\.example\\.com$`',
			'Node.js',
			'Valid words: so, capital, principal, windows, grate, loose, then, oracle, android',
			'<p><STRONG><br/>',
			'<a>`code`'
		].forEach(r=>{
			if (/ {4}/.test(r)){
				testEdit(r, r)
			} else {
				testEdit("Lorum ipsum "+r,"Lorum ipsum "+r)
				testEdit("Lorum "+r+" Ipsum","Lorum "+r+" Ipsum")
			}
		})

		;[
			// Removals
			'Any ideas?',
			'Any suggestions?',
			'Any tips?',
			'Any halp?',
			'Any help to fix this is greatly appreciated.',
			'Any help will be appreciated, thank you in advance.',
			'Any suggestions would be highly appreciated, thank you!',
			'All suggestions below have been greatly appreciated, thanks.',
			'Any help would be much appreciated.',
			"Hope that's useful!",
			'Appreciate for any help!',
			'Assistance is appreciated!',
			'Can anybody give me any suggestions, pls?',
			'can I seek some advice on',
			'Can someone help me to solve this problem?',
			'Could anyone give me some hint towards this problem?',
			'Could you illuminate me with some suggestions/tips please?',
			'Does anybody have any suggestions?',
			'Examples are appreciated.',
			'First post over here and I hope someone will be able to give some advice.',
			'Give me some tips, please - How to solve this little problem?',
			'If anyone could point me in the right direction, that would be much appreciated.',
			'If you have any tips, please let me know.',
			'Hello guys , good afternoon.',
			'Hi all!',
			'Hope it halps!',
			'Hope it helps!',
			'Hope someone can give me some tips',
			'Hope this might help.',
			'Hopefully this helps someone!',
			'I am new to this and I hope someone can help me.',
			'I am hoping for some advice/guidance.',
			'I hope this can help you:',
			'I hope this fixes your issue.',
			'I hope this help your problem.',
			'I need some advice regarding',
			'Many thanks.',
			'May I have some tips please?',
			'Need some advice on',
			'Will you provide any suggestions for me, please?',
			'any suggestions?',
			'hope helped you',
			'please help - any ideas would be amazing - been stuck on trying to fix this thing for a week!',
			'please help me about this code! thank you very much!',
			'please help me understand these concepts.',
			'pls help me i have no idea what is the problem',
			'thank you very much for all your help',
			'thx.',
			'Thx for your help :)',
			'Thanks to everyone.',
			'Thanks works for me, good luck!',
			'ty in advance'
		].forEach(r=>{
			testEdit(r,"")
			testEdit("Lorum ipsum. "+r,"Lorum ipsum.")
			testEdit("Lorum. "+r+" Ipsum.","Lorum. Ipsum.")
			testEdit(r+" Lorum ipsum.","Lorum ipsum.")
		})

		;[
			{i:['ajax'],o:'AJAX'},
			{i:['angularjs','Angularjs','angularJs','angularJS','AngularJs','Angular js', 'Angular JS'],o:'AngularJS'},
			{i:['apache','Apache','APACHE'],o:'Apache'},
			{i:['codeigniter','code igniter','codeignitor','CodeIgnitor','Code Ignitor'],o:'CodeIgniter'},
			{i:['c#'],o:'C#'},
			{i:['c+'],o:'C+'},
			{i:['c++'],o:'C++'},
			{i:['css','Css'],o:'CSS'},
			{i:['dont'],o:'don\'t'},
			{i:['Dont'],o:'Don\'t'},
			{i:['git','GIT'],o:'Git'},
			{i:['github','GITHUB','Github','Git Hub'],o:'GitHub'},
			{i:['google','gOOgle','GOOGLE'],o:'Google'},
			{i:['hdd','HDD','harddisk','HARDDISK'],o:'hard disk'},
			{i:['Hdd','Harddisk','HardDisk'],o:'Hard disk'},
			{i:['html','Html'],o:'HTML'},
			{i:['html5','Html5'],o:'HTML5'},
			{i:['i'],o:'I'},
			{i:["i'd"],o:"I'd"},
			{i:['ios','iOs','ioS','IOS','Ios','IoS'],o:'iOS'},
			{i:['ios8','iOs8','ioS8','IOS8','Ios8','IoS8',"ios 8"],o:'iOS 8'},
			{i:['io','i/o','I/o'],o:'I/O'},
			{i:["i'm","im"],o:"I'm"},
			{i:['java'],o:'Java'},
			{i:['javascript','Java script','java script','Javascript','Java Script'],o:'JavaScript'},
			{i:['jquery','Jquery','JQuery','jQuery'],o:'jQuery'},
			{i:['jsfiddle','Jsfiddle','JsFiddle','JSfiddle','jsFiddle','JS Fiddle','js fiddle'],o:'JSFiddle'},
			{i:['json','Json'],o:'JSON'},
			{i:['linux'],o:'Linux'},
			{i:['mysql','mySql','MySql','mySQL','MYSQL'],o:'MySQL'},
			{i:['node.js','Node.JS'],o:'Node.js'},
			{i:['php','Php'],o:'PHP'},
			{i:['restarant','restaraunt'],o:'restaurant'},
			{i:['server fault','Serverfault','Server fault','ServerFault','serverfault','SF'],o:'Server Fault'},
			{i:['sql','Sql'],o:'SQL'},
			{i:['sqlite','Sqlite'],o:'SQLite'},
			{i:['sqlite3','Sqlite3'],o:'SQLite3'},
			{i:['stack exchange','Stackexchange','Stack exchange','StackExchange','stackexchange','SE'],o:'Stack Exchange'},
			{i:['stack overflow','Stackoverflow','Stack overflow','StackOverflow','stackoverflow','SO'],o:'Stack Overflow'},
			{i:['ubunto','ubunut','ubunutu','ubunu','ubntu','ubutnu','ubantoo','unbuntu','ubunt','ubutu'],o:'Ubuntu'},
			{i:['url','Url'],o:'URL'},
			{i:['urls','Urls',"url's"],o:'URLs'},
			{i:['uri','Uri'],o:'URI'},
			{i:['uris','Uris',"uri's"],o:'URIs'},
			{i:['utf8','Utf-8',"utf-8","UTF8","UTF 8","UTF - 8"],o:'UTF-8'},
			{i:['win 7','WIN 7','windows 7','WINDOWS 7'],o:'Windows 7'},
			{i:['win 95','windows 95','WIN 95','WINDOWS 95'],o:'Windows 95'},
			{i:['win vista','WIN VISTA','windows vista','windows VISTA'],o:'Windows Vista'},
			{i:['win xp','WIN XP','windows xp','windows XP'],o:'Windows XP'},
			{i:['wordpress','Wordpress','word press','Word Press'],o:'WordPress'},
			{i:["your's"],o:"yours"},
			{i:['youve'],o:"you've"}
		].forEach(io=>{
			io.i.push(io.o)
			io.i.forEach(i=>{
				testEdit('Lorum ' + i + ' ipsum.', 'Lorum ' + io.o + ' ipsum.')
				testEdit('Lorum ipsum ' + i, 'Lorum ipsum ' + io.o)
				testEdit('Lorum ipsum ' + i + '.', 'Lorum ipsum ' + io.o + '.')
			})
		})

		;[
			{i:['.htacess','.htacces','.htacess','htaccess','htacess','htacces','htaces','.HTACCESS','HTACCESS'],o:'.htaccess'},
		].forEach(io=>{
			io.i.push(io.o)
			io.i.forEach(i=>{
				testEdit('Lorum ' + i + ' ipsum.', 'Lorum `' + io.o + '` ipsum.', 'Lorum ' + io.o + ' ipsum.')
				testEdit('Lorum ipsum ' + i, 'Lorum ipsum `' + io.o + '`', 'Lorum ipsum ' + io.o)
				testEdit('Lorum ipsum ' + i + '.', 'Lorum ipsum `' + io.o + '`.', 'Lorum ipsum ' + io.o + '.')
			})
		})

		function markdownSizes(tokens){
			return tokens.map(t => t.type+t.content.length).join(",")
		}

		[
			{i:"lorum",o:"text5"},
			{i:"<p>",o:"html3"},
			{i:"lorum <p>\n",o:"text6,html3,text1"},
			{i:"    indented    ~~~\n    indented\n    indented",o:"code45"},
			{i:"\tindented",o:"code9"},
			{i:"\n    indented",o:"text1,code12"},
			{i:"<code>~~~~~~~~~~~~~</code>",o:"code26"},
			{i:"~~~\ncode\n	a\nfence\nhttps://incode.example/\n~~~",o:"code45"},
			{i:"Https://url.example/",o:"url20"},
			{i:"A **Https://url.example/** B",o:"text2,url24,text2"},
			{i:"A *Https://url.example/* B",o:"text2,url22,text2"},
			{i:"A __Https://url.example/__ B",o:"text2,url24,text2"},
			{i:"A _Https://url.example/_ B",o:"text2,url22,text2"},
			{i:"A \"Https://url.example/\" B",o:"text2,url22,text2"},
			{i:"A 'Https://url.example/' B",o:"text2,url22,text2"},
			{i:"A (Https://url.example/) B",o:"text2,url22,text2"},
			{i:"`Https://url.example/`",o:"code22"},
			{i:"[link text](https://link.example/)",o:"text10,link24"},
			{i:"```````fence\    indented\n```\n```````\ntext",o:"code36,text5"},
			{i:"~~~\ncode \n",o:"code10"},
			{i:"`one line` text",o:"code10,text5"},
			{i:"text ```code``` text",o:"text5,code2,code6,code2,text5"},
			{i:"[1]: https://link.example/",o:"link26"},
			{i:"text <tag attribute=value> text",o:"text5,html21,text5"},
			{i:'text `code`, `code` text',o:"text5,code6,text2,code6,text5"},
			{i:'<a>`code`',o:"html3,code6"},,
			{i:'\n    code\n`code`',o:'text1,code8,text1,code6'}
		].forEach(io=>{
			var tokens=tokenizeMarkdown(io.i)
			expectEql("tokenizeMarkdown", markdownSizes(tokens), io.o, io.i, tokens)
		})

		;[
			{u:'example.com',o:'`example.com`'},
			{u:'example.com.',o:'`example.com`.'},
			{s:'(',u:'example.com',e:')',o:'(`example.com`)'},
			{s:'"',u:'example.com',o:'`example.com`'},
			{s:'**',u:'example.com',o:'`example.com`'},
			{s:"'",u:"example.com",o:'`example.com`'},
			{s:"<",u:"example.com",e:'>',o:'<`example.com`>'}
		].forEach(io=>{
			var s=io.s||'',e=io.e||s
			expectEql("applyCodeFormat", applyCodeFormat('','',s,io.u,e), io.o, s+io.u+e, io)
		})

		;[
			{s:'',r:[],o:""},
			{s:'',r:["one"],o:"one"},
			{s:'',r:["one","one","one"],o:"one"},
			{s:'',r:["one", "two"],o:"one, two"},
			{s:'one',r:[],o:"one"},
			{s:'one',r:["two"],o:"one, two"},
			{s:'one, two',r:["one", "two"],o:"one, two"}

		].forEach(io=>{
			expectEql("buildSummary", buildSummary(io.s,io.r), io.o, io.s + ", " + JSON.stringify(io.r), io)
		})

		;[
			{i:" Lorum ipsum ",o:" "},
			{i:" Lorum ipsum",o:""},
			{i:"Lorum ipsum ",o:""},
			{i:"Lorum ipsum",o:""},
			{i:"\tLorum ipsum",o:""},
			{i:"Lorum ipsum\t",o:""},
			{i:"\nLorum ipsum",o:""},
			{i:"Lorum ipsum\n",o:""},
			{i:"\n\nLorum ipsum",o:""},
			{i:"Lorum ipsum\n\n",o:""},
			{i:"\tLorum ipsum\t",o:" "},
			{i:"\n\nLorum ipsum\t",o:"\n\n"},
			{i:"\nLorum ipsum\t",o:"\n"},
			{i:"\tLorum ipsum",o:""},
			{i:"Lorum ipsum\t",o:""},
			{i:" Lorum ipsum\t",o:" "},
			{i:"\tLorum ipsum ",o:" "},
			{i:"? Lorum ipsum ",o:"? "},
			{i:"! Lorum ipsum",o:"!"},
			{i:".Lorum ipsum ",o:"."},
			{i:".Lorum ipsum",o:"."},
			{i:".\tLorum ipsum",o:"."},
			{i:".Lorum ipsum\t",o:"."},
			{i:".\nLorum ipsum",o:"."},
			{i:".Lorum ipsum\n",o:"."},
			{i:".\n\nLorum ipsum",o:"."},
			{i:".Lorum ipsum\n\n",o:"."},
			{i:".\tLorum ipsum\t",o:". "},
			{i:".\n\nLorum ipsum\t",o:".\n\n"},
			{i:".\nLorum ipsum\t",o:".\n"},
			{i:".\tLorum ipsum",o:"."},
			{i:".Lorum ipsum\t",o:"."},
			{i:". Lorum ipsum\t",o:". "},
			{i:".\tLorum ipsum ",o:". "},
		].forEach(io=>{
			expectEql("removeLeaveSpace", removeLeaveSpace(io.i), io.o, io.i)
		})

		return td
	}

	if (typeof unsafeWindow !== 'undefined') ui() // Running as user script
	if (typeof process !== 'undefined') main() // Running from command line
})()
