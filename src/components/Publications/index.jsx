import React from 'react';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: 'Deep Learning for Natural Language Processing: A Comprehensive Survey',
      authors: 'Hyun Lee, John Smith, Sarah Johnson',
      conference: 'ACM Conference on Artificial Intelligence, 2023',
      link: 'https://example.com/publication1'
    },
    {
      id: 2,
      title: 'Advancing Computer Vision with Transformer Models: New Perspectives',
      authors: 'Hyun Lee, Michael Brown, Jennifer Davis',
      conference: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022',
      link: 'https://example.com/publication2'
    },
    {
      id: 3,
      title: 'Efficient Reinforcement Learning Algorithms for Autonomous Systems',
      authors: 'Robert Wilson, Hyun Lee, Emma Clark',
      conference: 'International Conference on Machine Learning (ICML), 2021',
      link: 'https://example.com/publication3'
    },
    {
      id: 4,
      title: 'A Novel Approach to Multimodal Learning: Combining Vision and Language',
      authors: 'Hyun Lee, David Thompson',
      conference: 'Neural Information Processing Systems (NeurIPS), 2020',
      link: 'https://example.com/publication4'
    }
  ];

  return (
    <section className="publications-section" id="publications">
      <div className="publications-container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-list">
          {publications.map(pub => (
            <div key={pub.id} className="publication-item">
              <h3 className="publication-title">
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </a>
              </h3>
              <p className="publication-authors">{pub.authors}</p>
              <p className="publication-conference">{pub.conference}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications; 