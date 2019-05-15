import React, { Component } from "react";
import NewsAPI from '../../utils/NewsAPI';
import Card2 from "../../components/Card2";
import Article from "../../components/Article";
import { List } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import { withTranslation } from 'react-i18next';
import i18n from "../../i18n";
import "./style.css";

class News extends Component  {
  constructor({ t, i18n }){
    super({t, i18n})
    this.t = t
  }

  state = {
    news: [''],
  };

  handleInputChange = event => {
    const { language, value } = event.target;
    this.setState({
      [language]: value
    });
  };

  valueOf = (s) => {
    if (s && s !== null) {
      return s;
    }
    return 'unknown';
  };

  componentDidMount() {
    this.getNews();

    i18n.on('languageChanged', () => {this.getNews();});
  }

  // getNews is an API call to query for news and returns the results
  getNews = () => {

    const langCode = i18n.language;
    console.log('News.getNews(): langCode = ', langCode);

    NewsAPI.getNews({
      q: 'immigration',
      sources: '',
      domains: '',
      from: '2019-04-20',
      to: '2019-05-13',
      language: langCode,
      sortBy: 'relevancy',
      page: 3
    })
      .then(res => {
        console.log('this is headline news: ', res);
        if(res && res !== null && res.articles 
          && res.articles!== null && res.articles.length > 0
        ) {
          this.setState({
            news: res.articles,
            backUpLangUsed: false
          });
        } else {
          // just try english
          NewsAPI.getNews({
            q: 'immigration',
            sources: '',
            domains: '',
            from: '2019-04-20',
            to: '2019-05-13',
            language: "en",
            sortBy: 'relevancy',
            page: 2
          })
            .then(res => {
              console.log('this is headline news2: ', res);
              if(res && res !== null && res.articles 
                && res.articles!== null && res.articles.length > 0
              ) {
                this.setState({
                  news: res.articles,
                  backUpLangUsed: true
                });
                console.log('this is headline news: ', res);
              }
            }
            )
        }
      }
      )
      // if no news are found it sets news to an empty array and sends message that no news were found
      .catch(() =>
        this.setState({
          news: [],
          message: "No new headlines"
        })
      )
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h2>{this.t('News Headlines')}</h2>
          </Col>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card2  title={this.t("Results")}>
              {this.state.news.length ? (
                <List>
                  {
                    this.state.news.map(
                      (newsItem, cnt) => {
                        return (
                          <Article
                            key={cnt}
                            author={newsItem.author}
                            title={newsItem.title}
                            description={newsItem.description}
                            url={newsItem.url}
                            source={newsItem.source}
                          />
                        );
                      }
                    )
                  }
                </List>
              ) : (
                  <h3 className="text-center">{this.state.message}</h3>
                )} </Card2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withTranslation()(News);
