import React from 'react';
import Header from '../components/Header';
import '../styles/BlogPage.css';

const articles = [
  {
    title: 'Exciting News in Tech',
    summary: 'Stay updated with the latest advancements in technology. From AI to blockchain, we cover it all.',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/article1'
  },
  {
    title: 'Health and Wellness Tips',
    summary: 'Discover the best tips for maintaining a healthy lifestyle. From diet to exercise, we have you covered.',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/article2'
  },
  {
    title: 'Travel Destinations for 2023',
    summary: 'Explore the top travel destinations for 2023. Find out where to go and what to see.',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://example.com/article3'
  }
];

const BlogPage: React.FC = () => {
  return (
    <>
      <section className="blog-page">
        <h2 className="section-title">Trending News on Tech Industry</h2>
        <div className="articles-container">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <img src={article.imageUrl} alt={article.title} className="article-image" />
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-summary">{article.summary}</p>
                <a href={article.link} className="article-link" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;