import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import { Spinner } from './Spinner'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Amritpal Singh: Rumours swirl in hunt for fugitive Indian preacher - BBC",
      "description": "Sikh separatist Amritpal Singh has not been arrested, but there have been many rumoured sightings.",
      "url": "https://www.bbc.com/news/world-asia-india-65108291",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/571C/production/_128800322_gettyimages-1247416049-594x594.jpg",
      "publishedAt": "2023-03-29T10:09:34Z",
      "content": "Rumours are circulating about the whereabouts of a controversial self-styled Indian preacher, more than 10 days after he went on the run.\r\nA massive operation is under way to find Amritpal Singh, who… [+5649 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Nouran Salahieh",
      "title": "Heartbroken Nashville community grapples with school shooting as police uncover more details about the shooter - CNN",
      "description": "As a heartbroken Nashville community grapples with the mass shooting that claimed the lives of three 9-year-old children and three adults at a private Christian school, police are uncovering more details about the 28-year-old shooter.",
      "url": "https://www.cnn.com/2023/03/29/us/covenant-school-shooting-nashville-tennessee-wednesday/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328220028-20-nashville-school-shooting-0327.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-29T09:47:00Z",
      "content": "Editors Note: This story contains graphic descriptions of violence.\r\nAs a heartbroken Nashville community grapples with the mass shooting that claimed the lives of three 9-year-old children and three… [+7991 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Candy Woodall",
      "title": "Marjorie Taylor Greene restricted on Twitter after Nashville shooting - USA TODAY",
      "description": "Rep. Marjorie Taylor Greene has faced backlash for anti-transgender views in the past. This time, she is restricted on Twitter for seven days.",
      "url": "https://www.usatoday.com/story/news/politics/2023/03/29/marjorie-taylor-greene-restricted-twitter-nashville-shooting/11559961002/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/29/USAT/ef8de3eb-43b8-488c-ac2e-f4cddb23c391-AFP_AFP_33C32G9.jpg?crop=5999,3375,x0,y258&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2023-03-29T09:00:24Z",
      "content": "WASHINGTONAnother day, another social media restriction for Rep. Marjorie Taylor Greene. \r\nThe Georgia Republican's congressional account was restricted Tuesday after she repeatedly posted an image w… [+1986 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Tom Phillips",
      "title": "At least 40 dead in Mexico migrant centre fire as rights groups blame overcrowding - The Guardian",
      "description": "Mexico’s president says fire was caused by migrants lighting mattresses in protest at planned deportations",
      "url": "https://www.theguardian.com/world/2023/mar/29/mexico-migrant-facility-fire-deaths-ciudad-juarez",
      "urlToImage": "https://i.guim.co.uk/img/media/a50b77865b1221f21c97f1e9f30192ffc1054207/0_57_5000_3001/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b4889c728b1398f3aa04cb81c294a4b7",
      "publishedAt": "2023-03-29T08:18:00Z",
      "content": "Rights groups have blamed poor conditions and overcrowding for a fire that killed at least 40 migrants from Central and South America at a migrant detention centre in Ciudad Juárez, a Mexican city on… [+5292 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Annabelle Timsit, Rachel Pannett",
      "title": "Ukraine live briefing: Zelensky says Bakhmut loss would let Russia push for unfavorable deal - The Washington Post",
      "description": "U.S. Secretary of State Antony Blinken said cease-fire calls from some nations could be a « trap » allowing Russia to consolidate territory it has illegally seized.",
      "url": "https://www.washingtonpost.com/world/2023/03/29/russia-ukraine-war-news/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5V445L6IGN3TMYBWJOSTNY3ENA.JPG&w=1440",
      "publishedAt": "2023-03-29T08:18:00Z",
      "content": "Ukrainian President Volodymyr Zelensky said Ukrainian forces must hang onto the front-line city of Bakhmut. A loss there, he said, would provide Russias leader with greater leverage to negotiate a pe… [+6830 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Lawrence Richard",
      "title": "China threatens to take 'resolute countermeasures' over meeting between Taiwan's Tsai, House Speaker McCarthy - Fox News",
      "description": "The Chinese government has threatened to take action should the U.S. and Taiwan go through with allowing House Speaker Kevin McCarthy and Taiwanese President Tsai Ing-wen to meet.",
      "url": "https://www.foxnews.com/world/china-threatens-take-resolute-countermeasures-meeting-between-taiwans-tsai-house-speaker-mccarthy",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/GettyImages-1249835876.jpg",
      "publishedAt": "2023-03-29T08:13:00Z",
      "content": "China has threatened to retaliate against the United States and Taiwan over a planned meeting between Taiwanese President Tsai Ing-wen and House Speaker Kevin McCarthy.\r\nBeijing has repeatedly allege… [+2803 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Carma Hassan, Helen Regan",
      "title": "WHO experts revise Covid-19 vaccine advice, say healthy kids and teens low risk - CNN",
      "description": "The World Health Organization's vaccine experts have revised their global Covid-19 vaccination recommendations, and healthy kids and teenagers considered low priority may not need to get a shot.",
      "url": "https://www.cnn.com/2023/03/29/health/who-updates-covid-vaccine-recommendations-intl-hnk/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230323050028-01-covid-shot-stock.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-29T06:22:00Z",
      "content": "The World Health Organizations vaccine experts have revised their global Covid-19 vaccination recommendations, and healthy kids and teenagers considered low priority may not need to get a shot. \r\nThe… [+3009 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Jenni Reid, Holly Ellyatt",
      "title": "European markets head for a broadly higher open, but doubts linger over banking sector - CNBC",
      "description": "European markets are higher on Wednesday, but recent news will keep investors' nerves on edge.",
      "url": "https://www.cnbc.com/2023/03/29/european-markets-live-updates-stocks-news-data-and-earnings.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107111800-1661935577906-GettyImages-1241892086.jpg?v=1680064250&w=1920&h=1080",
      "publishedAt": "2023-03-29T05:26:00Z",
      "content": "European stock markets were higher on Wednesday, as investor doubts over the health of the banking sector continued to wane.\r\nThe pan-European Stoxx 600 index was up 0.9% in early afternoon trade, wi… [+1945 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Bronny James highlights from 2023 McDonald's All-American Game - ESPN",
      "description": "Watch the highlights of Bronny James’ performance in the 2023 McDonald’s All-American Game as he scored 15 PTS for Team West that fell to Team East, 109-106....",
      "url": "https://www.youtube.com/watch?v=m835CZ8wVGc",
      "urlToImage": "https://i.ytimg.com/vi/m835CZ8wVGc/maxresdefault.jpg",
      "publishedAt": "2023-03-29T03:41:45Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Amanda Cooper",
      "title": "Asian stocks rally as banking anxiety eases; Alibaba surges - Yahoo Finance",
      "description": "Global shares rose on Wednesday, as investors took heart from a greater degree of stability in the banking sector, but the sense of optimism wasn't robust...",
      "url": "https://finance.yahoo.com/news/asian-stocks-rally-banking-anxiety-023030473.html",
      "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/640791df11179b23572d19e6a776a4a4",
      "publishedAt": "2023-03-29T02:30:00Z",
      "content": "By Amanda Cooper\r\nLONDON (Reuters) - Global shares rose on Wednesday, as investors took heart from a greater degree of stability in the banking sector, but the sense of optimism wasn't robust enough … [+4296 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Katherine Donlevy",
      "title": "Carjacker dies after jumping from California police car during pursuit - New York Post ",
      "description": "Video shows the carjacker leaping from the driver’s seat while it was moving at about 70 miles per hour.",
      "url": "https://nypost.com/2023/03/28/man-dies-after-bailing-from-moving-police-car-during-pursuit/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000008919059.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2023-03-29T02:20:00Z",
      "content": "A California man who carjacked a police cruiser died after he jumped out the vehicle during a high-speed pursuit on Tuesday, cops said. \r\nThe man, whose identity has not yet been released, bailed out… [+1144 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "The Athletic Staff, Mike Jones",
      "title": "Roger Goodell defends Thursday Night Football flex proposal, NFL owners postpone vote - The Athletic",
      "description": "The NFL approved a measure that would allow every team to play on two short weeks. It previously was only one week.",
      "url": "https://theathletic.com/4359196/2023/03/28/roger-goodell-thursday-night-football/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/03/28215454/USATSI_19987764-1024x683.jpg",
      "publishedAt": "2023-03-29T02:13:01Z",
      "content": "NFL Commissioner Roger Goodell addressed a possible vote that would allow flexible scheduling for Thursday Night Football in Weeks 14 through  17. Heres what you need to know:\r\n<ul><li>The vote is in… [+3653 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Rolling Stone"
      },
      "author": "Charisma Madarang",
      "title": "Gwyneth Paltrow’s Daughter Said Actress in ‘State of Shock’ After Ski Crash - Rolling Stone",
      "description": "The actress daughter said her mother was “in a state of shock” following the 2016 incident",
      "url": "https://www.rollingstone.com/tv-movies/tv-movie-news/gwyneth-paltrow-daughter-apple-testifies-ski-crash-trial-1234705236/",
      "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/03/Gwyneth-Paltrow.jpg?w=1600&h=900&crop=1",
      "publishedAt": "2023-03-29T01:46:09Z",
      "content": "In the second week of the Gwyneth Paltrow ski saga, the court heard excerpts from statements given by the actress’ children, Apple and Moses Martin. \r\nDepositions given by Apple and Moses were read b… [+3107 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WZTV"
      },
      "author": "Kat Gerasimenko",
      "title": "'Something has to change': Reese Witherspoon to make pro-gun control legislation donations - WZTV",
      "description": "A Nashville celebrity is taking a stand against gun violence in the aftermath of The Covenant School mass shooting in Green Hills.",
      "url": "https://fox17.com/news/local/nashville-middle-tennessee-google-inews-facebook-twitter-tiktok-something-has-to-change-reese-witherspoon-makes-donations-for-gun-control-legislation",
      "urlToImage": "https://fox17.com/resources/media/b9347976-d6ef-4ea3-812b-641a09beb094-large16x9_80d7a5effd4e4539bf756452e16bd6b2large16x9_78454dcff80a4247aad317b4423bbc15AP21214560664457.jpg?1680053524062",
      "publishedAt": "2023-03-29T01:32:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Brian Costello",
      "title": "Woody Johnson 'anxious' for Aaron Rodgers trade, but optimistic in Jets' plan - New York Post ",
      "description": "Jets owner Woody Johnson said he’s anxious to get a trade done for Packers quarterback Aaron Rodgers, but trusts the plan the team has in place.",
      "url": "https://nypost.com/2023/03/28/jets-woody-johnson-anxious-for-aaron-rodgers-trade-to-happen/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/newspress-collage-26339021-1680047774701.jpg?quality=75&strip=all&1680033493&w=1024",
      "publishedAt": "2023-03-29T00:07:00Z",
      "content": "PHOENIX Jets owner Woody Johnson said hes anxious to get a trade done for Packers quarterback Aaron Rodgers, but trusts the plan the team has in place.\r\nI think were anxious, Johnson said Tuesday at … [+3727 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Times of Israel"
      },
      "author": null,
      "title": "Ben Gvir reportedly set to detail plan for billion-shekel, 1,800-man national guard - The Times of Israel",
      "description": "Minister agrees with top cop on outline for force, which will reportedly focus on combating crime, amid confusion over body's purpose and who will be in charge",
      "url": "https://www.timesofisrael.com/ben-gvir-reportedly-set-to-detail-plan-for-billion-shekel-1800-man-national-guard/",
      "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/01/000_337Z6QF-e1674853115784-1024x640.jpg",
      "publishedAt": "2023-03-28T23:41:28Z",
      "content": "National Security Minister Itamar Ben Gvir plans to detail elements of his proposal to create a new security force, which may include a billion-shekel budget and nearly 2,000 officers, a source close… [+4681 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Dominion wants Fox hosts, including Tucker Carlson and Sean Hannity, to testify - CNN",
      "description": null,
      "url": "https://www.youtube.com/watch?v=8Pjpv8XcyTw",
      "urlToImage": null,
      "publishedAt": "2023-03-28T23:29:35Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": {
        "id": null,
        "name": "WHYY"
      },
      "author": null,
      "title": "Philly tap water still safe to drink and ‘will not be impacted’ by chemical spill, city says - WHYY",
      "description": "Philadelphia officials gave the all-clear Tuesday, after analyzing over 100 samples of water they feared could be affected by a chemical spill.",
      "url": "https://whyy.org/articles/philadelphia-water-contamination-threat-over/",
      "urlToImage": "https://whyy.org/wp-content/uploads/2023/03/kenney-water-safe.jpg",
      "publishedAt": "2023-03-28T23:28:06Z",
      "content": "City officials say Philadelphia residents’ drinking water is safe and will not be impacted by the chemical spill that occurred Friday on a tributary of the Delaware River.\r\nIt’s safe, it’s contaminan… [+1861 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Five planets aligning in the sky this week - CBS News",
      "description": "Five planets will be lining up in the sky in March and experts say the last Tuesday of the month will be the best night to see it. Senior CBS News space anal...",
      "url": "https://www.youtube.com/watch?v=HLXb2Ll3PX8",
      "urlToImage": "https://i.ytimg.com/vi/HLXb2Ll3PX8/maxresdefault.jpg",
      "publishedAt": "2023-03-28T23:13:03Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Phys.Org"
      },
      "author": "Science X",
      "title": "Light-bending gravity reveals one of the biggest black holes ever found - Phys.org",
      "description": "A team of astronomers has discovered one of the biggest black holes ever found, taking advantage of a phenomenon called gravitational lensing.",
      "url": "https://phys.org/news/2023-03-light-bending-gravity-reveals-biggest-black.html",
      "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/light-bending-gravity.jpg",
      "publishedAt": "2023-03-28T23:12:14Z",
      "content": "A team of astronomers has discovered one of the biggest black holes ever found, taking advantage of a phenomenon called gravitational lensing.\r\nThe team, led by Durham University, UK, used gravitatio… [+4064 chars]"
    }]

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: PropTypes.string,
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super()
    console.log('hello i am constructor');
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1

    }
  }
  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading:false })
    this.props.setProgress(100);
  }

  handlePrevClick = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading:false
    })
    this.props.setProgress(100);
  }

  handleNextClick = async () => {
    this.props.setProgress(10);
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData);

      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading:false
      })
    
    this.props.setProgress(100);
  }
}

  render() {
    return (
      <div className='container my-3 mt-5'>
        <h1 className='text-center'>Top Headlines - City Times</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
